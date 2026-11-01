# Muhammad Bello Abdussalam — Portfolio

A responsive personal portfolio for **Muhammad Bello Abdussalam**, a Web3 developer, AI-agent builder, and open-source contributor. The site combines a recruiter-friendly professional profile with an interactive browser-based to-do app built for a web development coursework submission.

## About

Muhammad builds practical systems at the intersection of blockchain, AI, developer tooling, and community-led innovation. His technical work includes EVM wallet flows, signature and claim verification, GenLayer intelligent contracts, HTTP MCP services, AI-assisted review workflows, and reproducible robotics evaluation.

- Email: [Mbelloabdussalam@gmail.com](mailto:Mbelloabdussalam@gmail.com)
- LinkedIn: [Muhammad Bello Abdussalam](https://www.linkedin.com/in/muhammad-bello-abdussalam-bb7b4b2b6)
- GitHub: [@Belloblaze-web3](https://github.com/Belloblaze-web3)

## Featured work

### ProofDrop
A contribution-powered airdrop platform combining public evidence submission, AI-assisted rubric recommendations, human review, deterministic proportional allocation, wallet ownership verification, replay protection, Merkle claims, and audit-ready claim receipts.

[View the ProofDrop repository](https://github.com/Belloblaze-web3/proofdrop)

### ProofDrop Agent Tank
An agent-facing prototype for transparent task airdrops, open-criteria grants, and investment DAO simulations. It includes an HTTP MCP service for short-lived public review artifacts and a GenLayer contract path for consensus-backed evaluation.

[View the ProofDrop Agent Tank repository](https://github.com/Belloblaze-web3/proofdrop-agent-tank)

### SO-101 Hackathon Benchmark
A self-contained MuJoCo benchmark for a two-arm SO-101-style dinner-table task, with seeded object randomisation, ten-seed robustness evaluation, optional OpenVINO export, automated evaluation output, and a captioned MP4 demo generator.

[View the SO-101 benchmark repository](https://github.com/Belloblaze-web3/proofdrop-so101-hackathon)

## Portfolio highlights

The website includes:

- Professional introduction, ambitions, contact details, LinkedIn, and GitHub links
- Education and professional development
- Midnight Scholar Certificate and Midnight Builder Certificate
- Membership in the Midnight Aliit Technical Fellowship
- Projects with roles, technologies, repository links, and outcomes
- Technical, Web3, AI, robotics, testing, and collaboration skills
- Professional experience and community technical work
- Writing and communication samples
- Achievements and editable testimonial content
- Responsive navigation and accessible focus states
- A functional to-do list with task creation, editing, completion, filtering, and deletion
- Browser `localStorage` persistence without sign-in or backend infrastructure

## Technology

- React 19 and TypeScript
- Vite
- Tailwind CSS v4 with custom responsive CSS
- Lucide React icons
- Wouter routing
- Local browser storage for the to-do app
- pnpm 10

The project was initialized with the Manus Webdev React starter. The public portfolio itself does not require a database, external credentials, or a server-side API.

## Run locally

```bash
pnpm install
pnpm dev:static
```

The development server runs on port `3000` by default. To use another port:

```bash
PORT=4173 pnpm dev:static
```

## Validate and build

```bash
pnpm check
pnpm build:static
```

The production frontend is emitted to `dist/public`.

## Project structure

```text
client/
  public/manus-routes.json   Route manifest for the managed preview
  src/pages/Home.tsx         Portfolio content and to-do app behavior
  src/index.css              Editorial visual system and responsive layout
  index.html                 Metadata and document shell
TODO.md                      Coursework outcome checklist
app.config.ts                Project branding metadata
```

## Content updates

Personal details and project information live in `client/src/pages/Home.tsx`. Visual tokens, responsive breakpoints, and component styles live in `client/src/index.css`. Replace sample testimonial copy with a verified endorsement when one is available, and keep repository links aligned with the public GitHub profile.

## License

This repository is a personal portfolio project. Contact Muhammad before reusing personal content, identity details, or portfolio case-study material.
