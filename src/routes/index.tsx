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
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/PageHero";
import heroImage from "@/assets/hero-construction.jpg";
import fitoutImage from "@/assets/fitout-interior.jpg";

export const Route = createFileRoute("/")({
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

const STATS = [
  { value: "2014", label: "Established in Doha" },
  { value: "6+", label: "Service divisions" },
  { value: "Multi-sector", label: "Construction, oil & gas, industrial" },
  { value: "HSEQ", label: "Safety, quality & compliance" },
];

function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Construction site in Doha, Qatar with tower crane and steel structure"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/88 to-primary/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

        <div className="container-pad w-full py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
            >
              Founded 2014 · C.R. No. 65663
            </motion.span>

            <h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Engineering{" "}
              <span className="text-accent">Excellence.</span>
              <br />
              Built with Confidence.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Terrestrial Contracting W.L.L. delivers high-end civil
              construction, advanced MEP systems, interior fit-out and manpower
              solutions across Qatar.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg">
                <Link to="/contact">Request a Quotation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white hover:border-white/50"
              >
                <Link to="/services">
                  Our Services <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm lg:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <dt className="font-display text-2xl font-semibold text-accent">{stat.value}</dt>
                <dd className="mt-1 text-xs text-white/60">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              A trusted trading & contracting partner in Qatar
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We combine technical expertise with refined craftsmanship —
              bridging the gap between global suppliers and local project needs
              so quality materials, people and equipment reach the right place
              at the right time.
            </p>
            <ul className="mt-7 space-y-3">
              {["Single-source support across all disciplines", "Deep Qatar market expertise since 2014", "Hospitality-grade quality on every project"].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />
                  {pt}
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="mt-7 px-0 text-accent font-semibold">
              <Link to="/about">
                More about the company <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <img
                src={fitoutImage}
                alt="Luxury five-star hotel lobby interior fit-out"
                loading="lazy"
                width={1280}
                height={912}
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-elevated)]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-accent px-5 py-4 shadow-lg">
                <p className="font-display text-2xl font-bold text-accent-foreground">10+</p>
                <p className="text-xs font-semibold text-accent-foreground/80">Years in Qatar</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className="section-pad bg-secondary">
        <div className="container-pad">
          <Reveal className="max-w-2xl">
            <SectionLabel>Our Core Services</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Solutions across every phase of your project
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="mt-5 text-lg font-semibold uppercase text-foreground">
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
            <Button asChild className="mt-12">
              <Link to="/services">
                Explore all services <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="max-w-2xl">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Safety. Quality. Excellence.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We follow strict Health, Safety, Environment & Quality standards on every project.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-6 py-5 transition-all duration-200 hover:border-accent/50 hover:shadow-[var(--shadow-sm)]">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="size-5 text-accent" strokeWidth={1.8} />
                  </span>
                  <span className="font-display text-base font-semibold uppercase text-foreground">
                    {item.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-surface text-surface-foreground">
        <div className="container-pad py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-12 sm:px-12">
              {/* Decorative ring */}
              <div className="absolute -right-16 -top-16 size-64 rounded-full border border-white/10" />
              <div className="absolute -right-8 -top-8 size-40 rounded-full border border-accent/20" />

              <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-2xl font-semibold uppercase text-white sm:text-3xl">
                    Planning a project in Qatar?
                  </h2>
                  <p className="mt-3 max-w-md text-white/65">
                    Share your scope and we'll respond with a clear, competitive proposal.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg"
                >
                  <Link to="/contact">Contact our team</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
