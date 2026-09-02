import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Building2, Cog, Sofa, Waves, Warehouse, Users, ArrowRight } from "lucide-react";

import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import mepImage from "@/assets/mep-services.jpg";

export const Route = createFileRoute("/services")({
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

const CIVIL_LIST = [
  "Hotel service & maintenance",
  "High-end villa development",
  "Schools & institutional buildings",
  "Structural & architectural works",
  "Renovations & extensions",
  "Labour camps, fencing & paving",
];

const MEP_LIST = [
  "HVAC for large-scale facilities",
  "Electrical systems & smart controls",
  "Plumbing & drainage systems",
  "Fire alarm & firefighting systems",
  "Testing, commissioning & maintenance",
  "Supply of M&E and fire safety items",
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Core Services"
        title="Comprehensive solutions, one accountable partner"
        text="From civil construction to MEP systems, interior fit-out to general trading — delivered to hospitality-grade standards."
      />

      {/* Service cards */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <motion.article
                  whileHover={{ y: -5, boxShadow: "var(--shadow-elevated)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group h-full rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] cursor-default"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20 transition-colors group-hover:bg-accent/15">
                    <service.icon className="size-5 text-accent" strokeWidth={1.8} />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold uppercase text-foreground">
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

      {/* Civil & MEP deep-dive */}
      <section className="section-pad bg-surface text-surface-foreground">
        <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
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
          <Reveal delay={0.1}>
            <SectionLabel>Civil & MEP Capability</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase">
              Engineering depth on every discipline
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-base font-semibold uppercase text-accent">
                  Civil Contracting
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {CIVIL_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-foreground/75">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold uppercase text-accent">
                  MEP Services
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {MEP_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-foreground/75">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facility Management */}
      <section className="section-pad bg-secondary">
        <div className="container-pad">
          <Reveal>
            <SectionLabel>Facility Management</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground">
              Hard & soft FM under one contract
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Hard FM — Physical infrastructure",
                items: [
                  "Building maintenance: roofs, walls, flooring",
                  "M&E systems: HVAC, lighting, elevators",
                  "Plumbing: water supply, drainage, effluent systems",
                ],
              },
              {
                title: "Soft FM — People-focused services",
                items: [
                  "Cleaning: janitorial, deep cleaning, waste management",
                  "Housekeeping: daily cleaning, sanitisation, pantry upkeep",
                  "Waste disposal that protects assets and reduces downtime",
                ],
              },
            ].map((fm, i) => (
              <Reveal key={fm.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-accent" />
                  <h3 className="text-lg font-semibold uppercase text-foreground">{fm.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {fm.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Button asChild className="mt-12">
              <Link to="/contact">
                Discuss your requirements <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
