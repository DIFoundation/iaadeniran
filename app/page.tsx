"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import GitHubRepositories from "@/components/github-repositories";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, Code2, Github,
  Globe2, Layers3, Linkedin, Mail, Menu, MoveUpRight, ShieldCheck, Sparkles, X
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "VaultMedics AI",
    category: "HEALTH DATA · WEB3",
    type: "Privacy-first health records",
    description: "A health-records vault designed to give patients control over their documents and provider permissions.",
    stack: ["Next.js", "Supabase", "RLS", "Web3"],
    repo: "https://github.com/DIFoundation/VaultMedics",
    tone: "mint",
    symbol: "◈",
    featured: true
  },
  {
    number: "02",
    name: "StableSave",
    category: "DEFI · SMART CONTRACTS",
    type: "Micro-savings on-chain",
    description: "A stablecoin savings experience built around small, consistent deposits and transparent vault rules.",
    stack: ["Solidity", "Foundry", "wagmi", "viem"],
    repo: "https://github.com/DIFoundation",
    tone: "blue",
    symbol: "↗",
    featured: true
  },
  {
    number: "03",
    name: "FaucetDrops",
    category: "PRODUCT · FRONTEND",
    type: "Community-first Web3",
    description: "Building frontend experiences for a Web3 product, including a Gemini-powered support chatbot and Telegram handoff.",
    stack: ["Next.js", "TypeScript", "Gemini API"],
    repo: "https://github.com/DIFoundation/faucetdropnew",
    live: "https://faucetdrops.io/s",
    tone: "orange",
    symbol: "✳",
    featured: true
  },
  {
    number: "04",
    name: "Web3Commerce",
    category: "COMMERCE · ON-CHAIN",
    type: "A marketplace with escrow",
    description: "A decentralized multi-vendor commerce concept with crypto payments and an escrow-oriented transaction flow.",
    stack: ["Next.js", "Foundry", "Pinata", "Privy"],
    repo: "https://github.com/DIFoundation/web3commerce",
    live: "https://web3commerce-beta.vercel.app/",
    tone: "violet",
    symbol: "⌘"
  },
  {
    number: "05",
    name: "ZPay-Roll",
    category: "PAYMENTS · SOLANA",
    type: "Crypto payroll concept",
    description: "A payroll experience exploring Zcash-denominated payments and clear ZEC, USD, and NGN value presentation.",
    stack: ["Next.js", "Supabase", "Crypto UX"],
    repo: "https://github.com/DIFoundation",
    tone: "lime",
    symbol: "₿"
  },
  {
    number: "06",
    name: "IDRA",
    category: "DEVELOPER TOOLING",
    type: "Protocol / SDK exploration",
    description: "An evolving developer-infrastructure project being shaped toward a clearer protocol, library, and SDK architecture.",
    stack: ["TypeScript", "API design", "SDK"],
    repo: "https://github.com/DIFoundation/IDRA",
    tone: "steel",
    symbol: "{ }"
  }
];

const expertise = [
  { number: "01", title: "Frontend engineering", text: "Interfaces that feel deliberate: responsive systems, component architecture, interaction design, and accessible motion.", icon: Code2, tags: "React · Next.js · TypeScript · Tailwind" },
  { number: "02", title: "Smart contracts & dApps", text: "Connecting product interfaces to on-chain logic, wallets, contracts, and transaction states without hiding complexity.", icon: Braces, tags: "Solidity · Foundry · wagmi · viem" },
  { number: "03", title: "Product thinking", text: "From a rough idea to a usable product flow: clarify the problem, reduce friction, and ship in focused iterations.", icon: Layers3, tags: "Prototyping · UX · Collaboration" }
];

const nav = [{label:"Work",href:"#work"},{label:"Approach",href:"#approach"},{label:"About",href:"#about"}];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const active = projects.find((project) => project.name === activeProject);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => {
        const top = node.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.88) node.dataset.visible = "true";
      });
    };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("adeniranibrahim165@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:adeniranibrahim165@gmail.com";
    }
  };

  return (
    <main>
      <motion.div className="reading-progress" style={{ scaleX: progressScale }} />
      <div className="film-grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ibrahim Adeniran home"><span className="wordmark-mark">IA<span>.</span></span><span className="wordmark-caption">INDEPENDENT DEVELOPER<br />LAGOS, NIGERIA</span></a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-topline"><span><i className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</span><span className="hero-index">PORTFOLIO / 2026</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>FRONTEND ENGINEER <span>×</span> WEB3 BUILDER</motion.p>
            <h1 aria-label="I build digital things with purpose">
              <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .9, delay: .12, ease: [0.22, 1, 0.36, 1] }} className="headline-line"><span className="headline-inner">I BUILD</span></motion.span>
              <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .9, delay: .24, ease: [0.22, 1, 0.36, 1] }} className="headline-line"><span className="headline-inner outline-text">DIGITAL</span></motion.span>
              <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .9, delay: .36, ease: [0.22, 1, 0.36, 1] }} className="headline-line"><span className="headline-inner">THINGS<span className="lime-dot">.</span></span></motion.span>
            </h1>
            <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75, duration: .8 }}>
              <p>Thoughtful interfaces. On-chain systems.<br />Digital products made to move people forward.</p>
              <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={22} /></a>
            </motion.div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.25, delay: .25, ease: [0.22, 1, 0.36, 1] }}>
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
            <div className="art-core"><div className="core-shine" /><span>IA</span><small>BUILD / ITERATE / SHIP</small></div>
            <div className="art-label label-top"><span>01 / SYSTEMS</span><span>CONNECTED</span></div>
            <div className="art-label label-bottom"><span>REACT</span><span>SOLIDITY</span><span>PRODUCT</span></div>
            <span className="art-cross cross-a">+</span><span className="art-cross cross-b">+</span>
          </motion.div>
        </div>
        <div className="hero-footer"><span>SCROLL TO EXPLORE <span className="tiny-arrow">↓</span></span><span>DESIGN-LED ENGINEERING / 01—06</span><span className="hero-location">9°04&apos;N 7°29&apos;E</span></div>
      </section>

      <section className="intro-band">
        <div className="section-shell intro-inner" data-reveal><p className="eyebrow">THE SHORT VERSION</p><p className="intro-statement">I work at the intersection of <em>craft</em> and <em>systems</em> — shaping the experience people touch and the technology that makes it work.</p><a href="#about" className="text-link">A LITTLE MORE ABOUT ME <ArrowDownRight size={16} /></a></div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading" data-reveal><div><p className="eyebrow">SELECTED WORK / 2024—26</p><h2>Proof in the <em>build.</em></h2></div><p className="section-note">A selection of products, experiments, and engineering work. Each one taught me something worth carrying forward.</p></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article key={project.name} className={`project-card tone-${project.tone} ${project.featured ? "project-featured" : ""}`} data-reveal initial={reducedMotion ? false : { opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .65, delay: index % 2 ? .08 : 0 }}>
              <button className="project-visual" onClick={() => setActiveProject(project.name)} aria-label={`Open details for ${project.name}`}>
                <div className="visual-grid" /><div className="visual-glow" />
                <div className="visual-top"><span>CASE / {project.number}</span><span>{project.category}</span></div>
                <div className="visual-symbol">{project.symbol}</div>
                <div className="visual-interface">
                  <div className="interface-bar"><span /><span /><span /><b>{project.name.toUpperCase()}</b></div>
                  <div className="interface-body"><div className="interface-lines"><i /><i /><i /></div><div className="interface-orb">{project.symbol}</div></div>
                  <div className="interface-foot"><span>DESIGNED TO BUILD TRUST</span><span>LIVE SYSTEM / 01</span></div>
                </div>
                <span className="visual-open"><MoveUpRight size={18} /></span>
              </button>
              <div className="project-info"><div className="project-title-line"><div><p className="project-type">{project.type}</p><h3>{project.name}</h3></div><span className="project-number">{project.number}</span></div><p className="project-description">{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><button onClick={() => setActiveProject(project.name)}>Explore case <ArrowRight size={15} /></button>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live product <ArrowUpRight size={15} /></a>}</div></div>
            </motion.article>
          ))}
        </div>
        <div className="work-end" data-reveal><span>MORE BUILDS. MORE LESSONS.</span><a href="https://github.com/DIFoundation" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16} /></a></div>
      </section>

      <GitHubRepositories />

      <section className="approach-section" id="approach">
        <div className="section-shell approach-inner">
          <div className="approach-intro" data-reveal><p className="eyebrow">HOW I CONTRIBUTE</p><h2>Good work is<br />more than <em>good code.</em></h2><p>I care about how the product feels, how the system behaves, and whether the whole thing solves the right problem.</p></div>
          <div className="expertise-list">{expertise.map((item, index) => <motion.div className="expertise-item" key={item.number} data-reveal initial={reducedMotion ? false : { opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: index * .12 }}><div className="expertise-number">{item.number}</div><div className="expertise-icon"><item.icon size={21} strokeWidth={1.5} /></div><div className="expertise-copy"><h3>{item.title}</h3><p>{item.text}</p><span>{item.tags}</span></div><ArrowUpRight className="expertise-arrow" size={19} /></motion.div>)}</div>
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-aside" data-reveal><p className="eyebrow">THE PERSON BEHIND THE PIXELS</p><div className="about-stamp"><span>CURIOUS BY DEFAULT</span><Globe2 size={28} strokeWidth={1.2} /><span>BUILDING WITH INTENT</span></div></div>
        <div className="about-copy" data-reveal><h2>Engineer by practice.<br /><em>Builder by nature.</em></h2><p>I&apos;m Ibrahim Adewale Adeniran — a frontend and smart contract developer who enjoys turning complex ideas into products that feel clear, useful, and human.</p><p>My work spans modern web interfaces, Web3 product experiences, contract-connected applications, and early-stage developer tooling. I&apos;m comfortable moving between the UI, the integration layer, and the product question underneath it.</p><div className="experience-strip"><div><span className="status-dot" /><strong>Frontend Developer</strong><small>FaucetDrops</small></div><div><ShieldCheck size={19} /><strong>Smart contract development</strong><small>Solidity · Foundry · dApps</small></div></div><a className="text-link" href="https://www.linkedin.com/in/adeniran-ibrahim-adewale/" target="_blank" rel="noreferrer">CONNECT ON LINKEDIN <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-ambient" />
        <div className="section-shell contact-inner" data-reveal><p className="eyebrow"><span className="status-dot" /> HAVE A GOOD PROBLEM?</p><h2>Let&apos;s make<br /><em>something matter.</em></h2><p className="contact-note">A product to build, a team to join, or an idea that needs a technical partner. I&apos;m open to a conversation.</p><div className="contact-actions"><button className="primary-cta" onClick={copyEmail}>{copied ? <Check size={17} /> : <Mail size={17} />}{copied ? "EMAIL COPIED" : "GET IN TOUCH"}<ArrowUpRight size={16} /></button><a href="https://github.com/DIFoundation" target="_blank" rel="noreferrer" className="secondary-cta"><Github size={17} /> GITHUB <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/adeniran-ibrahim-adewale/" target="_blank" rel="noreferrer" className="secondary-cta"><Linkedin size={17} /> LINKEDIN <ArrowUpRight size={15} /></a></div><p className="email-line">adeniranibrahim165@gmail.com</p></div>
      </section>

      <footer className="site-footer section-shell"><a className="wordmark" href="#top"><span className="wordmark-mark">IA<span>.</span></span></a><span>DESIGNED WITH INTENT. BUILT WITH CURIOSITY.</span><span>© {new Date().getFullYear()} IBRAHIM ADENIRAN</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>

      <AnimatePresence>
        {active && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}><motion.div className={`project-modal tone-${active.tone}`} initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} transition={{ duration: .25 }} onClick={event => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button><p className="eyebrow">{active.category} / CASE {active.number}</p><div className="modal-symbol">{active.symbol}</div><h2 id="modal-title">{active.name}</h2><p className="modal-type">{active.type}</p><p className="modal-description">{active.description}</p><div className="tag-list">{active.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="modal-actions"><a href={active.repo} target="_blank" rel="noreferrer">SOURCE REPOSITORY <ArrowUpRight size={16} /></a>{active.live && <a href={active.live} target="_blank" rel="noreferrer">OPEN LIVE PROJECT <ArrowUpRight size={16} /></a>}</div><p className="modal-footnote"><Sparkles size={14} /> Selected work evolves — reach out for context on implementation and trade-offs.</p></motion.div></motion.div>}
      </AnimatePresence>
    </main>
  );
}