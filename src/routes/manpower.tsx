import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { HardHat, ShieldCheck, BadgeCheck, Clock, Users, Wrench, ArrowUpRight, CheckCircle2, Building2, ChevronRight } from "lucide-react";

import { SectionLabel } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
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
      {/* ── 1. Manpower Hero Section with Right-Side Architectural Card ─ */}
      <section className="relative isolate overflow-hidden bg-[#DFE5EA] py-14 sm:py-20 lg:py-24 border-b border-[#CBD2D9]">
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Header Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              {/* Breadcrumb */}
              <div className="mb-4 flex items-center gap-2 text-xs font-medium text-[#52606D]">
                <Link to="/" className="flex items-center gap-1 hover:text-[#285A7E] transition-colors">
                  <Building2 className="size-3.5" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="size-3 text-[#AAB5BF]" />
                <span className="text-[#285A7E] font-semibold">Manpower Supply</span>
              </div>

              {/* Eyebrow badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#285A7E]/25 bg-[#285A7E]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#285A7E]">
                <span className="gold-dot" />
                <span>Direct QID Workforce · Rapid Deployment</span>
              </div>

              <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-5xl lg:text-6xl">
                Certified, Documented & Site-Ready Workforce
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[#52606D] sm:text-lg">
                We supply reliable skilled trade specialists, general construction crews, and engineering supervisors for major construction, hospitality, and infrastructure projects across Doha.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#285A7E] text-white hover:bg-[#1f4764] font-bold">
                  <Link to="/contact">
                    Request Manpower Proposal <ArrowUpRight className="ml-1.5 size-4 text-[#EAB526]" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#CBD2D9] bg-[#F5F7F9] text-[#202930] hover:bg-[#DFE5EA]">
                  <a href="#trades">View Trade Categories</a>
                </Button>
              </div>
            </motion.div>

            {/* Right Architectural Square Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#CBD2D9] shadow-md bg-[#F5F7F9] p-2.5">
                <img
                  src={manpowerImage}
                  alt="Certified manpower workforce on project site in Qatar"
                  width={700}
                  height={700}
                  className="rounded-2xl w-full aspect-square object-cover"
                />

                {/* Floating Operations Badge */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#F5F7F9]/95 p-4 shadow-md border border-[#CBD2D9] backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#285A7E]">Workforce Pool</p>
                      <p className="text-sm font-extrabold text-[#202930] mt-0.5">QID-Verified · Standby Crews</p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#285A7E] text-white">
                      <Users className="size-5 text-[#EAB526]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Operational Overview ──────────────────────────────────── */}
      <section className="section-spacing bg-[#EAEFF2]">
        <div className="container-custom">
          <Reveal>
            <SectionLabel>Deployment & Compliance</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl max-w-2xl">
              Eliminate Workforce Shortages & Administrative Friction
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#52606D] max-w-3xl">
              At Terrestrial Contracting, every tradesperson and engineer is thoroughly interviewed, skill-tested, and verified before deployment. We assume complete administrative responsibility — including sponsorship, visa processing, payroll, accommodation, transportation, and medical coverage.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#52606D] max-w-3xl">
              With a dedicated standby talent pool in Doha, we enable main contractors and project managers to scale site strength up or down dynamically without risking project milestone penalties.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 3. Trade Categories ─────────────────────────────────────── */}
      <section id="trades" className="section-spacing bg-[#DFE5EA] border-y border-[#CBD2D9]">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-14">
            <SectionLabel>Available Categories</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
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
                      <span className="rounded-full bg-[#DFE5EA] px-3 py-1 text-[0.6875rem] font-bold text-[#334756] border border-[#CBD2D9]">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#202930] group-hover:text-[#285A7E] transition-colors">
                      {cat.title}
                    </h3>

                    <ul className="mt-6 space-y-2.5 border-t border-[#CBD2D9] pt-5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[#52606D]">
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

      {/* ── 4. Our Guarantee ─────────────────────────────────────────── */}
      <section className="section-spacing bg-[#EAEFF2]">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Our Commitment</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
              Compliance & Reliability Assurance
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="palette-card rounded-2xl p-7 border border-[#CBD2D9] h-full">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20 mb-5">
                    <item.icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#202930]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#52606D]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
