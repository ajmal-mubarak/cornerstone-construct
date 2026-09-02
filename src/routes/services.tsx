import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Cog,
  Sofa,
  Waves,
  Warehouse,
  Users,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Wrench
} from "lucide-react";

import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import mepImage from "@/assets/mep-services.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Building2,
    title: "Civil Contracting & Construction",
    tag: "Heavy Civil & Structural",
    text: "High-end luxury villa developments, educational institutions, commercial towers, structural concrete, foundations, site leveling, paving, and boundary walls.",
    items: ["Structural Concrete & Formwork", "Luxury Residential Villas", "Commercial Renovations & Extensions", "Site Infrastructure & Paving"],
  },
  {
    icon: Cog,
    title: "MEP & Electrical Engineering",
    tag: "Electro-Mechanical",
    text: "Large-scale HVAC plant installations, smart electrical distribution boards, primary & secondary plumbing, drainage, and fire safety systems.",
    items: ["Central HVAC & Chillers", "Low Voltage (LV) & High Voltage Switchgear", "Plumbing & Drainage Engineering", "Fire Suppression & Detection (QCDD Aligned)"],
  },
  {
    icon: Sofa,
    title: "Luxury Interior Fit-Out (Turnkey)",
    tag: "Bespoke Interiors",
    text: "Turnkey five-star hotel lobbies, luxury suites, executive corporate offices, bespoke gypsum & acoustic ceilings, Italian marble flooring, and custom joinery.",
    items: ["5-Star Hospitality Fit-Outs", "Acoustic Ceilings & Partitions", "Marble, Granite & Premium Flooring", "Bespoke Joinery & Millwork"],
  },
  {
    icon: Users,
    title: "Certified Manpower Supply",
    tag: "Technical Workforce",
    text: "Skilled, certified, and fully documented workforce with valid Qatar ID, health insurance, and site safety inductions ready for short and long-term contracts.",
    items: ["Electricians & HVAC Techs", "Masons, Carpenters & Steel Fixers", "Site Engineers & QA/QC Officers", "HSE Supervisors & Foremen"],
  },
  {
    icon: Warehouse,
    title: "General Trading & Industrial Supply",
    tag: "Direct Procurement",
    text: "Direct sourcing of mechanical components, electrical hardware, pipes, fittings, industrial instrumentation, aggregates, and construction materials.",
    items: ["Mechanical Valves, Pumps & Pipes", "Electrical Cables & Containment", "Industrial Gauges & Instrumentation", "Construction Hardware & Consumables"],
  },
  {
    icon: Waves,
    title: "Environmental & Site Water Services",
    tag: "Support Fleet",
    text: "Fleet operations supplying drinking water, vacuum sewage evacuation, dewatering systems, TSE treated water, skip bins, and high-pressure jetting.",
    items: ["Potable Water Tankers", "Sewage Evacuation Fleets", "Site Dewatering Solutions", "Skip Bin Waste Logistics"],
  },
];

const CIVIL_SPECS = [
  "Turnkey hotel and commercial renovations",
  "High-end bespoke villa construction",
  "Educational and healthcare building works",
  "Structural concrete, sub-structures and super-structures",
  "Boundary wall fencing, asphalt paving and external works",
  "Labour camp construction and facility upgrades",
];

const MEP_SPECS = [
  "Industrial HVAC, ducting, VRF and chilled water systems",
  "Electrical distribution boards, DB dressing, and cabling",
  "Sanitary plumbing, drainage, booster pumps and filtration",
  "Qatar Civil Defence (QCDD) approved firefighting & alarms",
  "Comprehensive testing, commissioning and maintenance",
  "Supply of certified M&E items and safety accessories",
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Contracting & Engineering Solutions"
        text="From heavy civil construction to high-precision MEP systems, luxury interior fit-outs to environmental logistics — executed to 5-star international standards in Qatar."
        badge="Full-Scope Civil, MEP & Fit-Out Delivery"
      />

      {/* ── 1. Services Grid ────────────────────────────────────────── */}
      <section className="section-spacing bg-[#EAEFF2]">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Core Disciplines</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
              Turnkey Contracting Without Subcontractor Gaps
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05}>
                <div className="palette-card palette-card-hover group relative flex h-full flex-col justify-between rounded-2xl p-7 lg:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20 group-hover:scale-105 group-hover:bg-[#285A7E] group-hover:text-white transition-all">
                        <service.icon className="size-7" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-[#DFE5EA] px-3 py-1 text-[0.6875rem] font-bold text-[#334756] border border-[#CBD2D9]">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#202930] group-hover:text-[#285A7E] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-[#52606D]">
                      {service.text}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-[#CBD2D9] pt-5">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-[#334756]">
                          <CheckCircle2 className="size-3.5 text-[#285A7E] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#285A7E] hover:text-[#1f4764]"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="size-3.5 text-[#EAB526]" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Civil & MEP Engineering Deep-Dive ──────────────────────── */}
      <section className="section-spacing bg-[#DFE5EA] border-y border-[#CBD2D9] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal direction="right" className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-[#CBD2D9] shadow-md bg-[#F5F7F9]">
                <img
                  src={mepImage}
                  alt="MEP plant room and electrical engineering in Doha Qatar"
                  loading="lazy"
                  width={1280}
                  height={912}
                  className="size-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-6">
              <SectionLabel>Civil & MEP Specialization</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
                Technical Rigor & Authority-Compliant Engineering
              </h2>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {/* Civil */}
                <div className="palette-card rounded-2xl p-6 border border-[#CBD2D9]">
                  <div className="flex items-center gap-2.5 mb-4 text-[#285A7E] font-display font-bold text-base uppercase">
                    <Building2 className="size-5" />
                    <span>Civil Contracting</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#52606D]">
                    {CIVIL_SPECS.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#285A7E]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* MEP */}
                <div className="palette-card rounded-2xl p-6 border border-[#CBD2D9]">
                  <div className="flex items-center gap-2.5 mb-4 text-[#285A7E] font-display font-bold text-base uppercase">
                    <Cog className="size-5" />
                    <span>MEP & Electrical</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#52606D]">
                    {MEP_SPECS.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#285A7E]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Facility Management (FM) ──────────────────────────────── */}
      <section className="section-spacing bg-[#EAEFF2]">
        <div className="container-custom">
          <Reveal className="max-w-2xl">
            <SectionLabel>Integrated FM</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
              Hard & Soft Facility Management Under One Service Contract
            </h2>
            <p className="mt-3 text-sm text-[#52606D]">
              Proactive preventative maintenance, building life-cycle protection, and round-the-clock emergency response for commercial and hospitality properties.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="palette-card rounded-2xl p-8 border border-[#CBD2D9]">
                <div className="flex items-center gap-3 text-[#285A7E] font-display font-bold text-lg uppercase mb-4">
                  <Wrench className="size-5" />
                  <span>Hard FM — Physical Asset Maintenance</span>
                </div>
                <ul className="space-y-3 text-sm text-[#52606D]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-[#285A7E] shrink-0" />
                    <span>HVAC chiller plant servicing, duct cleaning & filter replacements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-[#285A7E] shrink-0" />
                    <span>Electrical load testing, thermal imaging, generator & UPS maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-[#285A7E] shrink-0" />
                    <span>Plumbing, booster pumps, sewage ejector & water purification systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-[#285A7E] shrink-0" />
                    <span>Civil structural repairs, facade upkeep, sealant & roof waterproofing</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="palette-card rounded-2xl p-8 border border-[#CBD2D9]">
                <div className="flex items-center gap-3 text-[#285A7E] font-display font-bold text-lg uppercase mb-4">
                  <ShieldCheck className="size-5" />
                  <span>Soft FM — Operational & People Services</span>
                </div>
                <ul className="space-y-3 text-sm text-[#52606D]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-[#285A7E] shrink-0" />
                    <span>Comprehensive janitorial, commercial deep cleaning & sanitization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-[#285A7E] shrink-0" />
                    <span>Daily housekeeping, pantry support, and front-of-house attendants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-[#285A7E] shrink-0" />
                    <span>Waste disposal, skip bin removal, and environmental compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-[#285A7E] shrink-0" />
                    <span>Site logistics, pest control coordination, and rapid mobilization</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-[#285A7E] text-white hover:bg-[#1f4764] font-bold">
              <Link to="/contact">
                Request Facility Management RFP <ArrowUpRight className="ml-1.5 size-4 text-[#EAB526]" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
