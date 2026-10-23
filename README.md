# Ibrahim Adeniran — Cinematic Portfolio

A cinematic, responsive portfolio built with Next.js 16 App Router, TypeScript, Framer Motion, and a custom dark editorial design system.

## Local development

Requirements: Node.js 20.9+ and pnpm (the repository uses pnpm 10).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
pnpm lint
pnpm build
pnpm start
```

## Experience

- Cinematic hero motion, orbital identity graphic, scroll progress, and responsive navigation.
- Curated project cards with expanded case-study context: challenge, approach, engineering focus, and project status.
- A separate **More on GitHub** section with cached public repository data.
- Keyboard-accessible project dialogs with Escape-to-close, focus trapping, and focus restoration.
- Generated Open Graph image, canonical metadata, responsive layouts, and reduced-motion support.
- Contact links for email, GitHub, and LinkedIn.

## Featured work

Project content lives in `lib/featuredProjects.ts`.

- **VaultMedics AI** — patient-controlled health-records product with Supabase access rules and provider permissions.
- **StableSave** — BOTChain micro-savings concept with transparent vault rules and wallet-connected flows.
- **FaucetDrops** — frontend product work, including a Gemini-powered support chatbot and Telegram handoff.
- **Web3Commerce** — decentralized commerce prototype exploring crypto payments and escrow-oriented flows.
- **ZPay-Roll** — crypto payroll exploration with ZEC, USD, and NGN value context.
- **IDRA** — developer-infrastructure project being shaped toward a protocol, library, and SDK.

Project status and links are deliberately described without fabricated usage metrics or testimonials. Confirm live URLs and implementation details before presenting a project as production-ready.

## GitHub repositories integration

The portfolio keeps the curated case studies and adds a separate live repository section. The server endpoint at `app/api/github/route.ts` combines public repositories from a personal account and the `DIFoundation` organization, deduplicates them, filters forks and archived repositories, and returns the eight most recently updated repositories. The API response is cached for approximately one hour, with a stale-while-revalidate window.

Set these environment variables in local `.env.local` and in the deployment environment:

- `GITHUB_USERNAME` — your personal GitHub username. The repository intentionally does not guess this value.
- `GITHUB_TOKEN` — optional server-only token to improve API rate limits. Use a token with public repository read access only; never expose it through a `NEXT_PUBLIC_` variable.

See `.env.example` for the template. If `GITHUB_USERNAME` is unset, the section can still show public repositories from `DIFoundation`, but the personal account is omitted.

## Before public launch

- Set `GITHUB_USERNAME` and optionally `GITHUB_TOKEN` in the deployment environment.
- Confirm whether to publish a downloadable CV. The current CV contains personal contact details, so it should not be exposed publicly without approval.
- Replace the CSS-generated project artwork with real screenshots or short product recordings where available.
- Verify the availability statement and every live/demo URL.
- Run `pnpm lint` and `pnpm build`, then review desktop and mobile layouts before merging.

## Motion accessibility

The site uses Framer Motion for the hero, reveals, and project dialogs. CSS honors `prefers-reduced-motion`; dialogs support keyboard dismissal and focus management.
