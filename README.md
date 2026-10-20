# Ibrahim Adeniran — Cinematic Portfolio

A cinematic, responsive portfolio built with Next.js App Router, TypeScript, Framer Motion, and custom CSS.

## Local development

Requirements: Node.js 18.18+ (Node.js 20 LTS recommended) and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
pnpm build
pnpm start
```

## Experience

- Cinematic headline entrance, animated orbit visual, scroll progress, and project reveal transitions.
- Responsive navigation, project case-study dialogs, live project links, and contact actions.
- Dark editorial design system with acid-lime accents, CSS-generated project mockups, and reduced-motion support.
- Semantic sections for selected work, engineering approach, background, and contact.

## Featured work

Projects are configured in `app/page.tsx`. Review each repository and live URL before public launch; links for some in-progress projects intentionally point to the DIFoundation organization until the canonical public repository is confirmed.

- VaultMedics AI — privacy-first health-records concept.
- StableSave — stablecoin micro-savings concept.
- FaucetDrops — frontend product work and support chatbot integration.
- Web3Commerce — crypto commerce and escrow-oriented product concept.
- ZPay-Roll — crypto payroll exploration.
- IDRA — developer tooling / protocol and SDK exploration.

## Notes before launch

- Confirm the preferred public URLs for StableSave and ZPay-Roll.
- Add an approved CV PDF to `public/IBRAHIM-ADENIRAN.pdf` if you want a CV download link.
- Replace CSS-generated product visuals with real screenshots when available.
- Test the production build and review each live/repository link before merging.

## Motion accessibility

The site uses Framer Motion for the hero, scroll reveals, and project dialogs, and CSS honors `prefers-reduced-motion` for visitors who request less motion.
