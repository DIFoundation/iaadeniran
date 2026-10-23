"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, GitFork, Github, Star } from "lucide-react";
import Image from "next/image";

type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  owner: { login: string; avatar_url: string };
};

type RepositoryResponse = {
  repositories: Repository[];
  sources: { personal: boolean; organization: boolean };
};

function formatUpdated(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function GitHubRepositories() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
  const [sources, setSources] = useState({ personal: false, organization: false });

  const sourceDescription =
    sources.personal && sources.organization
      ? "A live snapshot of public repositories across my personal account and DIFoundation. Featured case studies stay curated above."
      : sources.personal
        ? "A live snapshot of public repositories from my personal account. Featured case studies stay curated above."
        : "Public repositories from DIFoundation are shown here. Configure GITHUB_USERNAME to include my personal account. Featured case studies stay curated above.";

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      try {
        const response = await fetch("/api/github", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Repository request failed");

        const data = (await response.json()) as RepositoryResponse;
        setRepositories(data.repositories ?? []);
        setSources(data.sources ?? { personal: false, organization: false });
        setUnavailable(false);
      } catch {
        if (!controller.signal.aborted) setUnavailable(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadRepositories();
    return () => controller.abort();
  }, []);

  return (
    <section className="github-section" id="github-work">
      <div className="section-shell github-inner">
        <div className="section-heading github-heading" data-reveal>
          <div>
            <p className="eyebrow">OPEN SOURCE / LIVE FROM GITHUB</p>
            <h2>More on <em>GitHub.</em></h2>
          </div>
          <p className="section-note">{sourceDescription}</p>
        </div>

        {loading ? (
          <div className="github-grid" aria-label="Loading GitHub repositories">
            {Array.from({ length: 4 }, (_, index) => (
              <div className="github-card github-skeleton" key={index}>
                <span />
                <span />
                <span />
              </div>
            ))}
          </div>
        ) : unavailable ? (
          <div className="github-state" role="status">
            <Github size={22} />
            <div>
              <strong>Repositories are taking a breather.</strong>
              <p>The featured projects are still here. Visit GitHub to browse all public work.</p>
            </div>
            <a href="https://github.com/DIFoundation" target="_blank" rel="noreferrer">
              Open GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        ) : repositories.length === 0 ? (
          <div className="github-state" role="status">
            <Github size={22} />
            <div>
              <strong>No public repositories found.</strong>
              <p>Check the configured GitHub username or browse the organization directly.</p>
            </div>
            <a href="https://github.com/DIFoundation" target="_blank" rel="noreferrer">
              Open GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        ) : (
          <div className="github-grid">
            {repositories.map((repository, index) => (
              <article className="github-card" key={repository.id}>
                <div className="github-card-top">
                  <span className="github-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Github size={18} strokeWidth={1.5} />
                </div>
                <div className="github-owner-wrapper">
                  <Image
                    src={repository.owner.avatar_url}
                    alt={repository.owner.login}
                    width={24}
                    height={24}
                    className="github-owner-avatar"
                  />
                  <p className="github-owner">
                    {repository.owner.login} /
                  </p>
                </div>
                <h3>{repository.name}</h3>
                <p className="github-description">
                  {repository.description || "A public repository. Open it on GitHub to explore the code and project details."}
                </p>
                <div className="github-meta">
                  {repository.language && (
                    <span className="github-language">
                      <i aria-hidden="true" />
                      {repository.language}
                    </span>
                  )}
                  <span><Star size={13} /> {repository.stargazers_count}</span>
                  <span><GitFork size={13} /> {repository.forks_count}</span>
                  <span className="github-updated">{formatUpdated(repository.updated_at)}</span>
                </div>
                <a
                  className="github-card-link"
                  href={repository.html_url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${repository.full_name} on GitHub`}
                >
                  VIEW REPOSITORY <ArrowUpRight size={15} />
                </a>
                {repository.homepage && (
                  <a
                    className="github-card-link"
                    href={repository.homepage}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${repository.full_name} website`}
                  >
                    VIEW WEBSITE <ArrowUpRight size={15} />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}

        <div className="github-footer">
          <span><i className="status-dot" /> REFRESHED THROUGH CACHED GITHUB DATA</span>
          <a href="https://github.com/DIFoundation" target="_blank" rel="noreferrer">
            EXPLORE ALL REPOSITORIES <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
