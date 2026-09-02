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
      <section className="section-spacing bg-[#182026]">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal direction="right" className="lg:col-span-6">
              <SectionLabel>Deployment & Compliance</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-4xl">
                Eliminate Workforce Shortages & Administrative Friction
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#D3D6DB]">
                At Terrestrial Contracting, every tradesperson and engineer is thoroughly interviewed, skill-tested, and verified before deployment. We assume complete administrative responsibility — including sponsorship, visa processing, payroll, accommodation, transportation, and medical coverage.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#9AA6B2]">
                With a dedicated standby talent pool in Doha, we enable main contractors and project managers to scale site strength up or down dynamically without risking project milestone penalties.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#EAB526] text-[#182026] hover:bg-[#f3c64c] font-bold">
                  <Link to="/contact">
                    Request Manpower Proposal <ArrowUpRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-[#334756] shadow-xl">
                <img
                  src={manpowerImage}
                  alt="Certified manpower workforce on project site in Qatar"
                  loading="lazy"
                  width={1280}
                  height={912}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182026]/70 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. Trade Categories ─────────────────────────────────────── */}
      <section className="section-spacing bg-[#141A1F]">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-14">
            <SectionLabel>Available Categories</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-4xl">
              Specialized Trades & Professional Categories
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.06}>
                <div className="palette-card palette-card-hover group relative flex h-full flex-col justify-between rounded-2xl p-7 lg:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-[#285A7E]/20 text-[#EAB526] border border-[#334756] group-hover:scale-105 transition-transform">
                        <cat.icon className="size-7" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-[#182026] px-3 py-1 text-[0.6875rem] font-semibold text-[#D3D6DB] border border-[#334756]">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#F0F3F6] group-hover:text-[#EAB526] transition-colors">
                      {cat.title}
                    </h3>

                    <ul className="mt-6 space-y-2.5 border-t border-[#334756] pt-5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[#D3D6DB]">
                          <CheckCircle2 className="size-3.5 text-[#EAB526] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#EAB526] hover:text-[#f3c64c]"
                    >
                      <span>Inquire Rate Card</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Our Guarantee ─────────────────────────────────────────── */}
      <section className="section-spacing bg-[#182026]">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Our Commitment</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-4xl">
              Compliance & Reliability Assurance
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="palette-card rounded-2xl p-7 border border-[#334756] h-full">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#285A7E]/20 text-[#EAB526] border border-[#334756] mb-5">
                    <item.icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F0F3F6]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#9AA6B2]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
