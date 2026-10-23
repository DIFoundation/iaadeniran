"use client";

import Link from "next/link";
import { ArrowLeft, Download, Github, Linkedin, Printer } from "lucide-react";

const skills = [
  { label: "Frontend", value: "React, Next.js, JavaScript, TypeScript, HTML5, CSS, Tailwind CSS" },
  { label: "Web3", value: "Solidity, Foundry, smart contract integration, wallet connectivity, dApps" },
  { label: "APIs & data", value: "REST APIs, asynchronous data handling, Supabase, PostgreSQL fundamentals" },
  { label: "UI/UX", value: "Figma, responsive design, wireframing, prototyping, component systems, accessibility" },
  { label: "Tools", value: "Git, GitHub, pnpm, debugging, performance optimization, testing" },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "FaucetDrops",
    period: "Nov 2025 – Feb 2026 · Internship",
    bullets: [
      "Built responsive web interfaces using React-based technologies and reusable UI components.",
      "Integrated APIs and blockchain functionality, and improved interface feedback across product workflows.",
      "Worked with product, design, backend, and smart-contract contributors to ship and refine features.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Gtech Store",
    period: "Dec 2025 · Contract",
    bullets: [
      "Developed a responsive e-commerce interface with consistent typography, navigation, and mobile layouts.",
      "Integrated APIs for product and customer workflows and supported browser testing and debugging.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "StakeAndBake",
    period: "Jun 2025 – Aug 2025 · Hackathon",
    bullets: [
      "Built staking, withdrawal, balance, transaction, and reward interfaces for a Web3 application.",
      "Integrated wallet and smart-contract flows with loading, transaction feedback, and error states.",
    ],
  },
];

const projects = [
  {
    name: "VaultMedics AI",
    detail: "Health-records vault concept focused on patient control, Supabase data access, row-level security, and provider permissions.",
    stack: "Next.js · Supabase · RLS",
  },
  {
    name: "StableSave",
    detail: "BOTChain micro-savings concept with Solidity vault logic, wallet-connected deposits, catch-up flows, and transparent rules.",
    stack: "Solidity · Foundry · wagmi · viem",
  },
  {
    name: "Web3Commerce",
    detail: "Decentralized commerce prototype exploring crypto payments, wallet onboarding, and escrow-oriented flows.",
    stack: "Next.js · Foundry · Pinata · Privy",
  },
  {
    name: "ZPay-Roll",
    detail: "Crypto payroll exploration with ZEC, USD, and NGN value context and responsive payment-focused UX.",
    stack: "Next.js · Supabase",
  },
  {
    name: "IDRA",
    detail: "Developer-infrastructure project being shaped toward clear protocol, library, and SDK boundaries.",
    stack: "TypeScript · API design",
  },
];

export default function CVPage() {
  return (
    <main className="cv-page">
      <div className="cv-toolbar no-print">
        <Link href="/" className="cv-back"><ArrowLeft size={16} /> Back to portfolio</Link>
        <div className="cv-toolbar-actions">
          <a href="https://github.com/DIFoundation" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/adeniran-ibrahim-adewale/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <button onClick={() => window.print()}><Download size={16} /> Download CV / Print</button>
        </div>
      </div>

      <article className="cv-sheet">
        <header className="cv-header">
          <p className="cv-kicker">CURRICULUM VITAE / 2026</p>
          <h1>Ibrahim Adewale<br /><span>Adeniran.</span></h1>
          <p className="cv-role">Frontend Engineer · Web3 & Smart Contract Developer</p>
          <div className="cv-contact">
            <a href="mailto:adeniranibrahim165@gmail.com">adeniranibrahim165@gmail.com</a>
            <span>Lagos, Nigeria</span>
            <a href="https://www.linkedin.com/in/adeniran-ibrahim-adewale/">LinkedIn</a>
            <a href="https://github.com/DIFoundation">GitHub</a>
          </div>
        </header>

        <section className="cv-section">
          <h2>Profile</h2>
          <p>
            Frontend Engineer with experience building responsive, user-centred web applications and Web3 product interfaces. Combines product thinking, UI/UX principles, API integration, and smart-contract integration to turn complex workflows into clear, usable experiences. Interested in reliable frontend architecture, wallet-connected applications, developer tooling, and thoughtful product delivery.
          </p>
        </section>

        <section className="cv-section">
          <h2>Technical skills</h2>
          <div className="cv-skills">
            {skills.map((skill) => (
              <p key={skill.label}><strong>{skill.label}</strong><span>{skill.value}</span></p>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>Experience</h2>
          <div className="cv-experience-list">
            {experience.map((item) => (
              <section className="cv-entry" key={item.company}>
                <div className="cv-entry-heading">
                  <div><h3>{item.role}</h3><p>{item.company}</p></div>
                  <span>{item.period}</span>
                </div>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </section>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>Selected projects</h2>
          <div className="cv-projects">
            {projects.map((project) => (
              <section className="cv-project" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
                <span>{project.stack}</span>
              </section>
            ))}
          </div>
        </section>

        <section className="cv-section cv-education">
          <h2>Education & training</h2>
          <div className="cv-entry-heading">
            <div><h3>B.Tech. Anatomy</h3><p>Ladoke Akintola University of Technology (LAUTECH), Oyo, Nigeria</p></div>
            <span>Nov 2024</span>
          </div>
          <div className="cv-entry-heading cv-training">
            <div><h3>Blockchain Development</h3><p>Web3Bridge, Lagos, Nigeria</p></div>
            <span>Oct 2025</span>
          </div>
        </section>

        <footer className="cv-footer">
          <span>IBRAHIM ADEWALE ADENIRAN</span>
          <span>Frontend Engineering · Web3 · Product Development</span>
        </footer>
      </article>

      <p className="cv-print-note no-print">Choose “Save as PDF” in your browser’s print dialog to download a PDF copy.</p>
    </main>
  );
}
