"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    umami?: {
      track: (
        eventName: string,
        eventData?: Record<string, string | number | boolean | undefined>,
      ) => void;
    };
  }
}

function getClickEvent(target: HTMLElement) {
  const projectCard = target.closest<HTMLElement>(".project-card");
  const projectName =
    projectCard?.querySelector("h3")?.textContent?.trim() ?? "unknown";

  if (
    target.closest(".project-visual") ||
    target.closest(".project-links button")
  ) {
    return {
      name: "project_open",
      data: { project: projectName },
    };
  }

  const anchor = target.closest<HTMLAnchorElement>("a[href]");
  if (!anchor) return null;

  const href = anchor.getAttribute("href") ?? "";

  if (href === "/cv" || href.startsWith("/cv?")) {
    return { name: "cv_click", data: { source: window.location.pathname } };
  }

  if (href.startsWith("mailto:")) {
    return { name: "contact_email", data: { source: window.location.pathname } };
  }

  if (href.includes("github.com")) {
    return {
      name: "github_click",
      data: {
        source: window.location.pathname,
        area: anchor.closest(".github-card")
          ? "repository_card"
          : "portfolio",
      },
    };
  }

  if (href.includes("linkedin.com")) {
    return { name: "linkedin_click", data: { source: window.location.pathname } };
  }

  if (href === "#contact") {
    return { name: "contact_section", data: { source: window.location.pathname } };
  }

  if (anchor.closest(".project-links") && href.startsWith("http")) {
    return { name: "project_live_link", data: { project: projectName } };
  }

  return null;
}

export default function PortfolioAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/cv") window.umami?.track("cv_view");
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const tracked = getClickEvent(target);
      if (tracked) window.umami?.track(tracked.name, tracked.data);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId) return null;

  return (
    <Script
      src={
        process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ||
        "https://cloud.umami.is/script.js"
      }
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
