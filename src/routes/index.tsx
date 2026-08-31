import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Users,
  Cog,
  Sofa,
  Warehouse,
  Waves,
  Building2,
  HardHat,
  ShieldCheck,
  Clock,
  FileText,
  Gem,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/PageHero";
import heroImage from "@/assets/hero-construction.jpg";
import fitoutImage from "@/assets/fitout-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terrestrial Contracting W.L.L. | Civil, MEP & Fit-Out in Qatar" },
      {
        name: "description",
        content:
          "Doha-based contractor since 2014: civil construction, MEP systems, luxury interior fit-out, manpower supply, facility management and general trading.",
      },
      {
        property: "og:title",
        content: "Terrestrial Contracting W.L.L. | Civil, MEP & Fit-Out in Qatar",
      },
      {
        property: "og:description",
        content:
          "Integrated construction, trading and project support solutions across Qatar since 2014.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: Building2,
    title: "Civil Contracting",
    text: "High-end villas, hotels, schools, structural and architectural works, renovations and site infrastructure.",
  },
  {
    icon: Cog,
    title: "MEP & Electrical",
    text: "HVAC, electrical systems and smart controls, plumbing, fire alarm and firefighting, testing and commissioning.",
  },
  {
    icon: Sofa,
    title: "Interior Fit-Out",
    text: "Turnkey five-star hotel interiors, gypsum and acoustic ceilings, premium flooring and custom joinery.",
  },
  {
    icon: Users,
    title: "Manpower Supply",
    text: "Skilled, semi-skilled and professional staff with valid Qatar ID, insurance and trade certifications.",
  },
  {
    icon: Warehouse,
    title: "General Trading",
    text: "Mechanical, electrical and instrumentation components, hardware, aggregates and project goods.",
  },
  {
    icon: Waves,
    title: "Waste & Water",
    text: "Drinking water, sewage and vacuum tankers, skip removal, dewatering, TSE water and jetting.",
  },
];

const WHY = [
  { icon: Users, title: "Experienced Project Management" },
  { icon: HardHat, title: "Skilled & Certified Workforce" },
  { icon: Gem, title: "Hospitality-Grade Quality" },
  { icon: Clock, title: "On-Time Delivery" },
  { icon: FileText, title: "Transparent Pricing" },
  { icon: ShieldCheck, title: "Strict HSEQ Compliance" },
];

function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Construction site in Doha, Qatar with tower crane and steel structure"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <SectionLabel>Founded 2014 · C.R. No. 65663</SectionLabel>
            <h1 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.05] text-primary-foreground sm:text-6xl">
              Engineering Excellence.
              <br />
              Built with Confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
              Terrestrial Contracting W.L.L. delivers high-end civil construction, advanced MEP
              systems, interior fit-out and manpower solutions across Qatar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Request a Quotation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/15 bg-primary/90">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              ["2014", "Established in Doha"],
              ["Single-Source", "Trading, contracting & logistics"],
              ["Multi-Sector", "Construction, oil & gas, industrial"],
              ["HSEQ", "Safety, quality & compliance"],
            ].map(([value, label], i) => (
              <Reveal key={label} delay={i * 0.06}>
                <div className="py-7 lg:px-6">
                  <dt className="font-display text-2xl font-semibold text-accent">{value}</dt>
                  <dd className="mt-1 text-sm text-primary-foreground/70">{label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              A trusted trading &amp; contracting partner in Qatar
            </h2>
            <p className="mt-5 text-muted-foreground">
              We combine technical expertise with refined craftsmanship — bridging the gap between
              global suppliers and local project needs so quality materials, people and equipment
              reach the right place at the right time.
            </p>
            <Button asChild variant="link" className="mt-6 px-0 text-accent">
              <Link to="/about">
                More about the company <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={fitoutImage}
              alt="Luxury five-star hotel lobby with marble flooring and decorative ceiling"
              loading="lazy"
              width={1280}
              height={912}
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-elevated)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionLabel>Our Core Services</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Solutions across every phase of your project
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="mt-5 text-xl font-semibold uppercase text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Button asChild className="mt-10">
              <Link to="/services">
                Explore all services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Safety. Quality. Excellence.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We follow strict Health, Safety, Environment &amp; Quality standards on every project.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card px-6 py-6 transition-colors hover:border-accent/60">
                  <item.icon className="size-6 shrink-0 text-accent" strokeWidth={1.6} />
                  <span className="font-display text-lg font-semibold uppercase text-foreground">
                    {item.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16 text-surface-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold uppercase sm:text-3xl">
              Planning a project in Qatar?
            </h2>
            <p className="mt-2 text-surface-foreground/70">
              Share your scope and we&apos;ll respond with a clear, competitive proposal.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">Contact our team</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
