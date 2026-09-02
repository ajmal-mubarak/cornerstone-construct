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
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#141A1F] py-14 sm:py-20 lg:py-24">
      {/* Subtle architectural ambient tone */}
      <div className="absolute right-0 top-0 -z-10 size-96 rounded-full bg-[#285A7E]/10 blur-[100px]" />

      <div className="container-custom">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-5 flex items-center gap-2 text-xs font-medium text-[#9AA6B2]"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-[#EAB526] transition-colors">
            <Building2 className="size-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="size-3 text-[#334756]" />
          <span className="text-[#EAB526]">{eyebrow}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#EAB526]/30 bg-[#EAB526]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#EAB526]">
            <span className="gold-dot" />
            <span>{badge}</span>
          </div>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {text && (
            <p className="mt-5 text-base leading-relaxed text-[#D3D6DB] sm:text-lg font-normal">
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
      <span className="gold-dot" />
      <span>{children}</span>
    </div>
  );
}
