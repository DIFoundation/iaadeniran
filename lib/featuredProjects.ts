export const projects = [
  {
    number: "01",
    name: "VaultMedics AI",
    category: "HEALTH DATA · PRIVACY",
    type: "Patient-controlled health records",
    description:
      "A health-records vault focused on helping patients organize medical documents and manage provider access.",
    challenge:
      "Health documents are sensitive, scattered, and difficult to share with the right provider without losing control.",
    approach:
      "Build around patient-owned records, explicit provider permissions, and server-side access rules rather than treating uploads as public files.",
    focus:
      "Next.js app flows, Supabase data access, row-level security, and provider permission states.",
    status: "Product in active development",
    stack: ["Next.js", "Supabase", "RLS", "Web3"],
    repo: "https://github.com/DIFoundation/VaultMedics",
    live: "https://vaultmedics-ai.vercel.app/",
    tone: "mint",
    symbol: "◈",
    featured: true
  },
  {
    number: "02",
    name: "StableSave",
    category: "DEFI · SMART CONTRACTS",
    type: "Micro-savings on BOTChain",
    description:
      "A stablecoin savings experience designed around small, consistent deposits and transparent vault rules.",
    challenge:
      "Make saving in small amounts feel understandable while keeping vault rules and missed-day handling visible to users.",
    approach:
      "Pair Solidity vault logic with a wallet-connected interface, clear deposit states, and a catch-up flow. The concept avoids implying yield that the protocol does not provide.",
    focus:
      "Solidity and Foundry tests, wagmi/viem integration, deposit and withdrawal states, and a clear savings UX.",
    status: "MVP / ongoing development",
    stack: ["Solidity", "Foundry", "wagmi", "viem"],
    repo: "https://github.com/DIFoundation/StableSave",
    tone: "blue",
    symbol: "↗",
    featured: true
  },
  {
    number: "03",
    name: "FaucetDrops",
    category: "PRODUCT · FRONTEND",
    type: "Community-first Web3",
    description:
      "Frontend product work for a Web3 platform, including a Gemini-powered support chatbot and Telegram handoff.",
    challenge:
      "Help users get quick answers while preserving a clear path to human support when a question needs more context.",
    approach:
      "Connect a chatbot UI to a server-side Next.js route, add quick replies, and provide a Telegram handoff for conversations that need a person.",
    focus:
      "Frontend delivery, API integration, chat interaction states, and support escalation UX.",
    status: "Frontend Developer role / ongoing product work",
    stack: ["Next.js", "TypeScript", "Gemini API"],
    repo: "https://github.com/DIFoundation",
    repoLabel: "BROWSE DIFOUNDATION",
    live: "https://faucetdrops.io/",
    tone: "orange",
    symbol: "✳",
    featured: true
  },
  {
    number: "04",
    name: "Web3Commerce",
    category: "COMMERCE · ON-CHAIN",
    type: "Marketplace with escrow-oriented flows",
    description:
      "A decentralized multi-vendor commerce concept exploring crypto payments and escrow-oriented transactions.",
    challenge:
      "Bring familiar marketplace interactions together with wallet and transaction flows that can feel unfamiliar to new users.",
    approach:
      "Explore the product across a Next.js frontend, smart-contract tooling, decentralized media storage, and wallet onboarding.",
    focus:
      "Next.js, Foundry, Pinata, Privy, and translating transaction states into understandable interface feedback.",
    status: "Prototype",
    stack: ["Next.js", "Foundry", "Pinata", "Privy"],
    repo: "https://github.com/DIFoundation/web3commerce",
    live: "https://web3commerce-beta.vercel.app/",
    tone: "violet",
    symbol: "⌘"
  },
  {
    number: "05",
    name: "ZPay-Roll",
    category: "PAYMENTS · ZCASH",
    type: "Crypto payroll exploration",
    description:
      "A payroll experience exploring Zcash-denominated payments and clear ZEC, USD, and NGN value presentation.",
    challenge:
      "Make a crypto-denominated payroll flow easier to reason about by presenting the payment amount alongside familiar fiat references.",
    approach:
      "Explore a focused payroll interface and value presentation without overstating backend or transaction capabilities.",
    focus:
      "Next.js, Supabase, payment UX, and ZEC/USD/NGN value context.",
    status: "Exploration / prototype",
    stack: ["Next.js", "Supabase", "Crypto UX"],
    repo: "https://github.com/DIFoundation/zpay-roll",
    tone: "lime",
    symbol: "₿"
  },
  {
    number: "06",
    name: "IDRA",
    category: "DEVELOPER TOOLING",
    type: "Protocol / SDK exploration",
    description:
      "An evolving developer-infrastructure project being shaped toward a clearer protocol, library, and SDK architecture.",
    challenge:
      "Turn an implementation into a developer-facing interface with explicit boundaries, predictable APIs, and a useful path for adoption.",
    approach:
      "Evaluate the core abstractions first, then define public APIs, usage examples, and tests before expanding the surface area.",
    focus:
      "TypeScript API design, protocol boundaries, developer experience, and documentation.",
    status: "Architecture and API exploration",
    stack: ["TypeScript", "API design", "SDK"],
    repo: "https://github.com/DIFoundation/IDRA",
    tone: "steel",
    symbol: "{ }"
  }
];
