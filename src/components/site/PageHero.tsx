import { motion } from "motion/react";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="container-pad py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="section-label">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-semibold uppercase text-foreground sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {text ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return <span className="section-label">{children}</span>;
}
