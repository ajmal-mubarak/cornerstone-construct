import { createFileRoute, Link } from "@tanstack/react-router";
import { Warehouse, Cog, Zap, Gauge, Truck, Waves, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionLabel } from "@/components/site/PageHero";

export const Route = createFileRoute("/trading")({
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

const WHY = [
  { title: "Vetted Vendors", text: "Established local and international supplier network." },
  { title: "Competitive Pricing", text: "Transparent quotations with no hidden charges." },
  { title: "Quality Checked", text: "Material inspection and documentation on delivery." },
  { title: "Reliable Delivery", text: "Scheduled dispatch aligned to your site programme." },
];

function TradingPage() {
  return (
    <>
      <PageHero
        eyebrow="General Trading"
        title="Materials and equipment, delivered on schedule"
        text="We bridge global suppliers and local project needs — sourcing quality materials at competitive prices and getting them to site when they are needed."
      />

      {/* Categories */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="max-w-2xl mb-14">
            <SectionLabel>Supply Categories</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              What we supply
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.06}>
                <article className="h-full rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-accent/40 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 cursor-default">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                    <cat.icon className="size-5 text-accent" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold uppercase text-foreground">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why source with us */}
      <section className="section-pad bg-secondary">
        <div className="container-pad">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Why Source With Us</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              One supplier, fewer delays
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-border bg-card px-6 py-7 shadow-[var(--shadow-sm)] transition-all duration-200 hover:border-accent/40">
                  <div className="mb-4 h-0.5 w-8 rounded-full bg-accent" />
                  <h3 className="font-display text-base font-semibold uppercase text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <Button asChild className="mt-12">
              <Link to="/contact">
                Request a quotation <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
