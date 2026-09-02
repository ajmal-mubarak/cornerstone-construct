# Cornerstone Construct

A professional website for **Terrestrial Contracting W.L.L.** — a civil contracting, MEP, interior fit-out, manpower supply, and general trading company based in Doha, Qatar.

## Tech Stack

- **Routing**: [TanStack Router](https://tanstack.com/router) (file-based, client-side SPA)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (static SPA)

## Getting Started

Requires [Node.js](https://nodejs.org/) v18+.

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Project Structure

```
src/
├── routes/         # File-based routes (index.tsx → /, about.tsx → /about, …)
│   └── __root.tsx  # App shell — wraps every page (header, footer)
├── components/
│   ├── site/       # Layout components (SiteHeader, SiteFooter, PageHero, …)
│   └── ui/         # shadcn/ui primitive components
├── hooks/          # Custom React hooks
├── lib/            # Shared utilities
├── main.tsx        # App entry point
└── styles.css      # Global Tailwind CSS styles
public/
└── favicon.svg     # Site favicon
vercel.json         # SPA rewrite rules for Vercel
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
