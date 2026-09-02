import { createFileRoute, Link } from "@tanstack/react-router";
import { HardHat, ShieldCheck, BadgeCheck, Clock, Users, Wrench } from "lucide-react";

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

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Screened, documented and site-ready
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every candidate is interviewed and trade-tested before deployment. We handle
              sponsorship, accommodation, transport and payroll so your team can focus on delivery
              instead of administration.
            </p>
            <p className="mt-4 text-muted-foreground">
              Requirements change — so we keep a standby pool that lets us scale crews up or down
              without disrupting your programme.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
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

      <section className="bg-secondary py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionLabel>Categories</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Trades we supply
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.06}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10">
                    <cat.icon className="size-6 text-accent" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold uppercase text-foreground">
                    {cat.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card px-6 py-7 transition-colors hover:border-accent/60">
                  <item.icon className="size-6 text-accent" strokeWidth={1.6} />
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Button asChild className="mt-10">
              <Link to="/contact">Request manpower</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
