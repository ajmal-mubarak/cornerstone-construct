import { motion } from "motion/react";
import { ChevronRight, Building2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  text?: string;
  badge?: string;
}

export function PageHero({
  eyebrow,
  title,
  text,
  badge = "State of Qatar · Grade-A Contracting",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-slate-950 py-16 sm:py-24 lg:py-28">
      {/* Background glow & subtle grid pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-30" />
      <div className="absolute -left-40 top-0 -z-10 size-96 rounded-full bg-sky-500/10 blur-[100px]" />
      <div className="absolute right-0 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="container-custom">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-sky-400 transition-colors">
            <Building2 className="size-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="size-3 text-slate-600" />
          <span className="text-sky-400">{eyebrow}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-sky-400">
            <span className="glow-dot" />
            <span>{badge}</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {text && (
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl font-normal">
              {text}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-badge mb-3">
      <span className="glow-dot" />
      <span>{children}</span>
    </div>
  );
}
