# Cornerstone Construct

A professional website for **Terrestrial Contracting W.L.L.** — a civil contracting, MEP, interior fit-out, manpower supply, and general trading company based in Doha, Qatar.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React, file-based routing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## Getting Started

Requires [Node.js](https://nodejs.org/) (v18+) and [Bun](https://bun.sh/) (or npm).

```sh
# Install dependencies
bun install

# Start the development server
bun run dev
```

The dev server runs at `http://localhost:3000`.

## Project Structure

```
src/
├── routes/         # File-based routes (index.tsx → /, about.tsx → /about, …)
│   └── __root.tsx  # App shell — wraps every page (header, footer, providers)
├── components/
│   ├── site/       # Layout components (SiteHeader, SiteFooter, PageHero, …)
│   └── ui/         # shadcn/ui primitive components
├── hooks/          # Custom React hooks
├── lib/            # Shared utilities
└── styles.css      # Global Tailwind CSS styles
```

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start the local dev server |
| `bun run build` | Production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |
