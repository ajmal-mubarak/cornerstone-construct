import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Building2, Cog, Sofa, Waves, Warehouse, Users } from "lucide-react";

import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import mepImage from "@/assets/mep-services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Civil, MEP & Interior Fit-Out in Qatar" },
      {
        name: "description",
        content:
          "Civil contracting, MEP and electrical systems, turnkey interior fit-out, facility management, waste and water services across Doha, Qatar.",
      },
      { property: "og:title", content: "Services | Terrestrial Contracting W.L.L." },
      {
        property: "og:description",
        content: "Comprehensive contracting solutions across every phase of your project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Building2,
    title: "Civil Contracting",
    text: "High-end villa development, hotel maintenance, schools, structural and architectural works, renovations, labour camps, fencing and paving.",
  },
  {
    icon: Cog,
    title: "MEP / Electrical Systems",
    text: "HVAC for large-scale facilities, electrical systems and smart controls, plumbing and drainage, fire alarm and firefighting, testing and commissioning.",
  },
  {
    icon: Sofa,
    title: "Interior Fit-Out (Turnkey)",
    text: "Five-star hotel interiors, villa and institutional fit-outs, gypsum and acoustic ceilings, premium flooring and custom joinery.",
  },
  {
    icon: Users,
    title: "Manpower Support",
    text: "Skilled, semi-skilled and professional staff supplied with valid Qatar ID, medical insurance and relevant trade certifications.",
  },
  {
    icon: Warehouse,
    title: "General Trading & Supply",
    text: "Mechanical, electrical and instrumentation components, hardware, tools, aggregates and project goods.",
  },
  {
    icon: Waves,
    title: "Waste Management & Water",
    text: "Drinking water, sewage and vacuum tankers, skip removal, dewatering, TSE water, wastewater and jetting services.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Core Services"
        title="Comprehensive solutions, one accountable partner"
        text="From civil construction to MEP systems, interior fit-out to general trading — delivered to hospitality-grade standards."
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10">
                    <service.icon className="size-6 text-accent" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold uppercase text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 text-surface-foreground lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={mepImage}
              alt="Engineer inspecting HVAC ducting and electrical panels in a plant room"
              loading="lazy"
              width={1280}
              height={912}
              className="w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel>Civil &amp; MEP Capability</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase">
              Engineering depth on every discipline
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-semibold uppercase text-accent">
                  Civil Contracting
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-surface-foreground/80">
                  {[
                    "Hotel service & maintenance",
                    "High-end villa development",
                    "Schools & institutional buildings",
                    "Structural & architectural works",
                    "Renovations & extensions",
                    "Labour camps, fencing & paving",
                  ].map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold uppercase text-accent">
                  MEP Services
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-surface-foreground/80">
                  {[
                    "HVAC for large-scale facilities",
                    "Electrical systems & smart controls",
                    "Plumbing & drainage systems",
                    "Fire alarm & firefighting systems",
                    "Testing, commissioning & maintenance",
                    "Supply of M&E and fire safety items",
                  ].map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Facility Management</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground">
              Hard &amp; soft FM under one contract
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold uppercase text-foreground">
                  Hard FM — Physical infrastructure
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>· Building maintenance: roofs, walls, flooring</li>
                  <li>· M&amp;E systems: HVAC, lighting, elevators</li>
                  <li>· Plumbing: water supply, drainage, effluent systems</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold uppercase text-foreground">
                  Soft FM — People-focused services
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>· Cleaning: janitorial, deep cleaning, waste management</li>
                  <li>· Housekeeping: daily cleaning, sanitisation, pantry upkeep</li>
                  <li>· Waste disposal that protects assets and reduces downtime</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
