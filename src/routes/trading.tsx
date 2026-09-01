import { createFileRoute, Link } from "@tanstack/react-router";
import { Warehouse, Cog, Zap, Gauge, Truck, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionLabel } from "@/components/site/PageHero";

export const Route = createFileRoute("/trading")({
  head: () => ({
    meta: [
      { title: "General Trading & Supply in Qatar | Terrestrial Contracting W.L.L." },
      {
        name: "description",
        content:
          "Mechanical, electrical and instrumentation supply, hardware, aggregates, safety items and project logistics sourced for Qatar projects.",
      },
      { property: "og:title", content: "General Trading & Supply | Terrestrial Contracting" },
      {
        property: "og:description",
        content:
          "Single-source supply of MEP components, hardware, building materials and site services across Qatar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TradingPage,
});

const CATEGORIES = [
  {
    icon: Cog,
    title: "Mechanical Supply",
    text: "Pumps, valves, pipes and fittings, HVAC components, fasteners and mechanical spares.",
  },
  {
    icon: Zap,
    title: "Electrical Supply",
    text: "Cables, distribution boards, switchgear, lighting, containment and control accessories.",
  },
  {
    icon: Gauge,
    title: "Instrumentation",
    text: "Gauges, sensors, transmitters and calibration items for industrial and oil & gas sites.",
  },
  {
    icon: Warehouse,
    title: "Building Materials",
    text: "Aggregates, sand, cement, gypsum, timber, hardware and general construction consumables.",
  },
  {
    icon: Truck,
    title: "Project Logistics",
    text: "Sourcing, consolidation, delivery scheduling and site handover of project goods.",
  },
  {
    icon: Waves,
    title: "Water & Waste Services",
    text: "Drinking water and sewage tankers, skip removal, dewatering, TSE water and jetting.",
  },
];

function TradingPage() {
  return (
    <>
      <PageHero
        eyebrow="General Trading"
        title="Materials and equipment, delivered on schedule"
        text="We bridge global suppliers and local project needs — sourcing quality materials at competitive prices and getting them to site when they are needed."
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionLabel>Supply Categories</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              What we supply
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10">
                    <cat.icon className="size-6 text-accent" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold uppercase text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionLabel>Why Source With Us</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              One supplier, fewer delays
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Vetted Vendors", "Established local and international supplier network."],
              ["Competitive Pricing", "Transparent quotations with no hidden charges."],
              ["Quality Checked", "Material inspection and documentation on delivery."],
              ["Reliable Delivery", "Scheduled dispatch aligned to your site programme."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card px-6 py-6">
                  <h3 className="font-display text-lg font-semibold uppercase text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Button asChild className="mt-10">
              <Link to="/contact">Request a quotation</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
