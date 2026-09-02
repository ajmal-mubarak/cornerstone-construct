import { createFileRoute, Link } from "@tanstack/react-router";
import { HardHat, ShieldCheck, BadgeCheck, Clock, Users, Wrench, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import manpowerImage from "@/assets/manpower.jpg";

export const Route = createFileRoute("/manpower")({
  component: ManpowerPage,
});

const CATEGORIES = [
  {
    icon: Wrench,
    title: "Skilled Trades",
    items: ["Electricians", "Plumbers", "HVAC technicians", "Welders & fabricators", "Carpenters"],
  },
  {
    icon: Users,
    title: "Semi-Skilled & General",
    items: ["Helpers", "Masons", "Painters", "Steel fixers", "Cleaners & housekeeping"],
  },
  {
    icon: HardHat,
    title: "Professional Staff",
    items: ["Site engineers", "Supervisors & foremen", "QA/QC inspectors", "HSE officers", "Draftsmen"],
  },
];

const ASSURANCE = [
  { icon: BadgeCheck, title: "Valid Documentation", text: "Qatar ID, medical fitness and insurance in place before mobilisation." },
  { icon: ShieldCheck, title: "HSEQ Trained", text: "Site-safety inducted workforce with trade certification records." },
  { icon: Clock, title: "Flexible Contracts", text: "Daily, monthly or project-duration deployment with fast replacement." },
];

function ManpowerPage() {
  return (
    <>
      <PageHero
        eyebrow="Manpower Supply"
        title="The right people, ready for your site"
        text="We supply reliable skilled, semi-skilled and professional manpower to construction, industrial and hospitality projects across Qatar."
      />

      {/* How we work */}
      <section className="section-pad">
        <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Screened, documented and site-ready
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every candidate is interviewed and trade-tested before deployment. We handle
              sponsorship, accommodation, transport and payroll so your team can focus on delivery
              instead of administration.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Requirements change — so we keep a standby pool that lets us scale crews up or down
              without disrupting your programme.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <img
              src={manpowerImage}
              alt="Construction team of engineers and workers on a project site in Qatar"
              loading="lazy"
              width={1280}
              height={912}
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-elevated)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad bg-secondary">
        <div className="container-pad">
          <Reveal className="max-w-2xl">
            <SectionLabel>Categories</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Trades we supply
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <article className="h-full rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-accent/40 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                    <cat.icon className="size-5 text-accent" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold uppercase text-foreground">{cat.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="size-1.5 shrink-0 rounded-full bg-accent/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Our Assurance</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Quality and compliance, guaranteed
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {ASSURANCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border bg-card px-7 py-7 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-accent/40">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon className="size-5 text-accent" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold uppercase text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Button asChild className="mt-12">
              <Link to="/contact">
                Request manpower <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
