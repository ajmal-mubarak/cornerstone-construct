import { createFileRoute, Link } from "@tanstack/react-router";
import { Warehouse, Cog, Zap, Gauge, Truck, Waves, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionLabel } from "@/components/site/PageHero";

export const Route = createFileRoute("/trading")({
  component: TradingPage,
});

const CATEGORIES = [
  {
    icon: Cog,
    title: "Mechanical & HVAC Sourcing",
    tag: "Heavy Mechanical",
    text: "Pumps, gate & butterfly valves, chillers, HVAC ducting components, copper pipes, pressure reducers, dampers, and certified mechanical spares.",
    specs: ["Ductile & Cast Iron Valves", "Centrifugal & Booster Pumps", "HVAC Diffusers & Grilles", "Flanges, Fasteners & Gaskets"],
  },
  {
    icon: Zap,
    title: "Electrical & Power Distribution",
    tag: "Low & Med Voltage",
    text: "Armored XLPE cables, main & sub-distribution boards, cable trays & ladders, busbar systems, industrial LED luminaires, and smart automation accessories.",
    specs: ["XLPE / PVC Copper Cables", "Distribution Boards & Isolators", "Cable Trays, Ladders & Trunking", "Hazardous Area Lighting"],
  },
  {
    icon: Gauge,
    title: "Industrial Instrumentation",
    tag: "Process & Controls",
    text: "Pressure gauges, flow transmitters, temperature sensors, calibration manifolds, and automated control equipment for industrial and energy installations.",
    specs: ["Digital & Analog Pressure Gauges", "Flow Meters & Transmitters", "Thermowells & RTD Sensors", "Control Valves & Actuators"],
  },
  {
    icon: Warehouse,
    title: "Civil Materials & Building Supplies",
    tag: "Core Construction",
    text: "Structural steel, washed sand, aggregates, ordinary & sulfate-resistant cement, gypsum boards, marine plywood, and industrial adhesives.",
    specs: ["Deformed Rebar & Structural Steel", "OPC / SRC Cement & Aggregates", "Moisture-Resistant Gypsum Boards", "Commercial Timber & Plywood"],
  },
  {
    icon: Truck,
    title: "Project Consolidation & Logistics",
    tag: "Supply Chain",
    text: "Direct manufacturer sourcing, customs clearance, warehouse consolidation, and scheduled crane offloading directly to Qatar site locations.",
    specs: ["International Sourcing Networks", "Port & Customs Clearance", "Scheduled Site Delivery Runs", "Material Inspection on Delivery"],
  },
  {
    icon: Waves,
    title: "Environmental Tanker Logistics",
    tag: "Site Utility Fleet",
    text: "Comprehensive fleet providing potable drinking water delivery, vacuum sewage tankers, high-capacity dewatering pumps, and skip bin logistics.",
    specs: ["Potable Drinking Water Fleets", "Vacuum Sewage Tanker Units", "Site Dewatering & Jetting Fleet", "Daily / Weekly Skip Bin Removal"],
  },
];

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Vetted & Certified Manufacturers",
    text: "All supplied items carry mill test certificates, third-party inspection reports, and Kahramaa/Ashghal approvals where required.",
  },
  {
    icon: FileText,
    title: "Competitive Direct-From-Source Rates",
    text: "By bypassing multiple wholesale middlemen, we deliver volume BOQ pricing directly to main contractors.",
  },
  {
    icon: Clock,
    title: "Zero Site-Downtime Delivery",
    text: "Synchronized dispatch schedules matching your project milestone Gantt charts to prevent costly site idle-time.",
  },
];

function TradingPage() {
  return (
    <>
      <PageHero
        eyebrow="General Trading & Supply"
        title="Industrial Procurement & Site Supply Chain in Qatar"
        text="Single-source procurement bridging international manufacturers and local Qatar construction projects — delivering high-spec materials, mechanical equipment, and site logistics on schedule."
        badge="Direct Procurement & Utility Fleet Services"
      />

      {/* ── 1. Supply Categories ─────────────────────────────────────── */}
      <section className="section-spacing bg-slate-950">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Procurement Divisions</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Materials & Equipment Sourced to Exacting Technical Standards
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.06}>
                <div className="glass-card glass-card-hover group relative flex h-full flex-col justify-between rounded-2xl p-7 lg:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20 group-hover:scale-110 transition-transform">
                        <cat.icon className="size-7" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[0.6875rem] font-semibold text-slate-300 border border-white/5">
                        {cat.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                      {cat.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-slate-400">
                      {cat.text}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                      {cat.specs.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="size-3.5 text-sky-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300"
                    >
                      <span>Request BOQ Price</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Why Source With TC ───────────────────────────────────── */}
      <section className="section-spacing bg-slate-900/40">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Supply Chain Integrity</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Why Qatar Contractors Choose Terrestrial For Procurement
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-7 border border-white/5 h-full">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 mb-5">
                    <reason.icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{reason.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-sky-500 text-white hover:bg-sky-400 font-bold">
              <Link to="/contact">
                Submit Material Requisition <ArrowUpRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
