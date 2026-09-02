import { createFileRoute, Link } from "@tanstack/react-router";
import { HardHat, ShieldCheck, BadgeCheck, Clock, Users, Wrench, ArrowUpRight, CheckCircle2 } from "lucide-react";

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
    title: "Skilled Technical Trades",
    badge: "Certified & Trade-Tested",
    items: [
      "Industrial & Building Electricians",
      "HVAC & Chiller Plant Technicians",
      "Certified Plumbers & Pipe Fitters",
      "6G / TIG / ARC Welders & Fabricators",
      "Finishing & Shuttering Carpenters",
      "Gypsum & Ceiling Installers",
    ],
  },
  {
    icon: Users,
    title: "Semi-Skilled & General Workforce",
    badge: "Site-Ready",
    items: [
      "Civil Masons (Block, Plaster & Tile)",
      "Steel Fixers & Rebar Specialists",
      "Commercial & Industrial Painters",
      "Heavy Equipment & Crane Riggers",
      "General Construction Helpers",
      "Facility Cleaners & Waste Handlers",
    ],
  },
  {
    icon: HardHat,
    title: "Engineering & Supervisory Staff",
    badge: "Professional Grade",
    items: [
      "Civil & MEP Site Engineers",
      "General Foremen & Site Supervisors",
      "Certified QA/QC Inspectors",
      "NEBOSH / IOSH Certified HSE Officers",
      "AutoCAD / BIM Draftsmen",
      "Material & Quantity Surveyors",
    ],
  },
];

const ASSURANCE = [
  {
    icon: BadgeCheck,
    title: "100% Legal & Documented",
    text: "Valid Qatar ID (QID), medical fitness clearance, health insurance, and full Qatar Labour Law compliance prior to mobilization.",
  },
  {
    icon: ShieldCheck,
    title: "HSEQ & Safety Inducted",
    text: "Every worker undergoes rigorous trade evaluation, site PPE compliance, tool safety checks, and emergency response training.",
  },
  {
    icon: Clock,
    title: "Flexible Deployment Terms",
    text: "Daily, monthly, or project-duration contracts with rapid mobilization and free, immediate standby replacements.",
  },
];

function ManpowerPage() {
  return (
    <>
      <PageHero
        eyebrow="Manpower Supply"
        title="Certified, Documented & Site-Ready Workforce in Qatar"
        text="We supply reliable skilled trade specialists, general construction crews, and engineering supervisors for major construction, hospitality, and infrastructure projects across Doha."
        badge="Direct QID Workforce · Rapid Deployment"
      />

      {/* ── 1. Operational Overview ──────────────────────────────────── */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal direction="right" className="lg:col-span-6">
              <SectionLabel>Deployment & Compliance</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1E2730] sm:text-4xl">
                Eliminate Workforce Shortages & Administrative Friction
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                At Terrestrial Contracting, every tradesperson and engineer is thoroughly interviewed, skill-tested, and verified before deployment. We assume complete administrative responsibility — including sponsorship, visa processing, payroll, accommodation, transportation, and medical coverage.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                With a dedicated standby talent pool in Doha, we enable main contractors and project managers to scale site strength up or down dynamically without risking project milestone penalties.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#285A7E] text-white hover:bg-[#1f4764] font-bold">
                  <Link to="/contact">
                    Request Manpower Proposal <ArrowUpRight className="ml-1.5 size-4 text-[#EAB526]" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-xl bg-white">
                <img
                  src={manpowerImage}
                  alt="Certified manpower workforce on project site in Qatar"
                  loading="lazy"
                  width={1280}
                  height={912}
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. Trade Categories ─────────────────────────────────────── */}
      <section className="section-spacing bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-14">
            <SectionLabel>Available Categories</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1E2730] sm:text-4xl">
              Specialized Trades & Professional Categories
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.05}>
                <div className="palette-card palette-card-hover group relative flex h-full flex-col justify-between rounded-2xl p-7 lg:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20 group-hover:scale-105 group-hover:bg-[#285A7E] group-hover:text-white transition-all">
                        <cat.icon className="size-7" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[0.6875rem] font-bold text-[#334756] border border-[#E2E8F0]">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#1E2730] group-hover:text-[#285A7E] transition-colors">
                      {cat.title}
                    </h3>

                    <ul className="mt-6 space-y-2.5 border-t border-[#E2E8F0] pt-5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[#475569]">
                          <CheckCircle2 className="size-3.5 text-[#285A7E] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#285A7E] hover:text-[#1f4764]"
                    >
                      <span>Inquire Rate Card</span>
                      <ArrowUpRight className="size-3.5 text-[#EAB526]" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Our Guarantee ─────────────────────────────────────────── */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Our Commitment</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1E2730] sm:text-4xl">
              Compliance & Reliability Assurance
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="palette-card rounded-2xl p-7 border border-[#E2E8F0] h-full">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20 mb-5">
                    <item.icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1E2730]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
