import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import fitoutImage from "@/assets/fitout-interior.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const PILLARS = [
  ["Single-Source Support", "Technical personnel, manpower rental and project delivery under one roof."],
  ["Practical Positioning", "Prompt service, flexible support and a solution-oriented approach."],
  ["Qatar Market Expertise", "Deep understanding of local regulations, procurement channels and supplier networks."],
  ["Trading + Contracting", "A combined approach that gives clients a seamless single-source experience."],
];

const VALUES = [
  "Urgency of Work",
  "Integrity & Honesty",
  "Commitment",
  "Accountability",
  "Respect & Mutual Trust",
  "Excellence",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A trusted trading & contracting partner"
        text="Terrestrial Contracting W.L.L. is a premier Doha-based contracting company specialising in manpower, high-end civil construction, advanced MEP systems and interior fit-out solutions."
      />

      {/* Story */}
      <section className="section-pad">
        <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground">
              Built on craftsmanship and reliability
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Since 2014 we have combined technical expertise with refined craftsmanship to deliver
              exceptional projects for hospitality groups, luxury developers, educational
              institutions and industrial clients across Qatar.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We bridge the gap between global suppliers and local project needs — ensuring quality
              materials and equipment reach the right place at the right time.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PILLARS.map(([title, text]) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-sm)]">
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-accent" />
                  <h3 className="font-display text-base font-semibold uppercase text-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <img
              src={fitoutImage}
              alt="Luxury hotel interior fit-out delivered by Terrestrial Contracting"
              loading="lazy"
              width={1280}
              height={912}
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-elevated)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-pad bg-secondary">
        <div className="container-pad">
          <Reveal>
            <SectionLabel>Vision, Mission & Values</SectionLabel>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent/10">
                  <div className="size-3 rounded-full bg-accent" />
                </div>
                <h3 className="text-xl font-semibold uppercase text-foreground">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To be Qatar's most dependable single-source partner for contracting, trading
                  and project support — recognised for engineering quality, safety and integrity.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <div className="size-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-xl font-semibold uppercase text-foreground">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To deliver every project safely, on time and to specification through skilled
                  people, disciplined management and transparent commercial practice.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <h3 className="mt-14 font-display text-lg font-semibold uppercase tracking-wide text-foreground">
              U & I CARE Values
            </h3>
          </Reveal>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-accent/40 hover:shadow-[var(--shadow-sm)]">
                  <CheckCircle2 className="size-4 shrink-0 text-accent" strokeWidth={2} />
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-pad text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold uppercase text-foreground sm:text-3xl">
              Ready to work with us?
            </h2>
            <p className="mt-3 text-muted-foreground">Share your project scope and we'll get back to you.</p>
            <Button asChild size="lg" className="mt-7">
              <Link to="/contact">
                Get in touch <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
