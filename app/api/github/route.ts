import { NextResponse } from "next/server";

type GitHubRepository = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  website: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  fork: boolean;
  archived: boolean;
  owner: { login: string; avatar_url: string };
};

type RepositoryCard = Pick<
  GitHubRepository,
  | "id"
  | "name"
  | "full_name"
  | "description"
  | "html_url"
  | "website"
  | "language"
  | "stargazers_count"
  | "forks_count"
  | "updated_at"
  | "homepage"
> & { owner: { login: string; avatar_url: string } };

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

async function fetchRepositories(url: string): Promise<GitHubRepository[]> {
  const response = await fetch(url, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status}`);
  }

  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("Unexpected GitHub API response");
  }

  return data as GitHubRepository[];
}

export async function GET() {
  const personalUsername = process.env.GITHUB_USERNAME?.trim();
  const personalRequest = personalUsername
    ? (() => {
        const personalUrl = new URL(
          `https://api.github.com/users/${encodeURIComponent(personalUsername)}/repos`,
        );
        personalUrl.searchParams.set("type", "owner");
        personalUrl.searchParams.set("sort", "updated");
        personalUrl.searchParams.set("per_page", "100");
        return fetchRepositories(personalUrl.toString());
      })()
    : Promise.reject(new Error("Set GITHUB_USERNAME to enable personal repositories."));

  const organizationUrl = new URL(
    "https://api.github.com/orgs/DIFoundation/repos",
  );
  organizationUrl.searchParams.set("type", "public");
  organizationUrl.searchParams.set("sort", "updated");
  organizationUrl.searchParams.set("per_page", "100");

  const [personalResult, organizationResult] = await Promise.allSettled([
    personalRequest,
    fetchRepositories(organizationUrl.toString()),
  ]);

  const personalRepos =
    personalResult.status === "fulfilled" ? personalResult.value : [];
  const organizationRepos =
    organizationResult.status === "fulfilled"
      ? organizationResult.value
      : [];

  if (
    personalResult.status === "rejected" &&
    organizationResult.status === "rejected"
  ) {
    return NextResponse.json(
      { error: "GitHub repositories are temporarily unavailable." },
      { status: 502 },
    );
  }

  const uniqueRepos = new Map<string, GitHubRepository>();
  for (const repository of [...personalRepos, ...organizationRepos]) {
    if (repository.fork || repository.archived) continue;
    uniqueRepos.set(repository.full_name.toLowerCase(), repository);
  }

  const repositories: RepositoryCard[] = [...uniqueRepos.values()]
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    )
    .slice(0, 8)
    .map(
      ({
        id,
        name,
        full_name,
        description,
        html_url,
        website,
        language,
        stargazers_count,
        forks_count,
        updated_at,
        homepage,
        owner,
      }) => ({
        id,
        name,
        full_name,
        description,
        html_url,
        website,
        language,
        stargazers_count,
        forks_count,
        updated_at,
        homepage,
        owner: { login: owner.login, avatar_url: owner.avatar_url },
      }),
    );

  return NextResponse.json(
    {
      repositories,
      sources: {
        personal: personalResult.status === "fulfilled",
        organization: organizationResult.status === "fulfilled",
      },
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
}
