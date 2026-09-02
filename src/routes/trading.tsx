import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Warehouse, Cog, Zap, Gauge, Truck, Waves, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, FileText, Building2, ChevronRight } from "lucide-react";

import { SectionLabel } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

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
      {/* ── 1. Trading Hero Section with Right-Side Architectural Card ── */}
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
                <span className="text-[#285A7E] font-semibold">General Trading</span>
              </div>

              {/* Eyebrow badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#285A7E]/25 bg-[#285A7E]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#285A7E]">
                <span className="gold-dot" />
                <span>Direct Procurement & Utility Fleet Services</span>
              </div>

              <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-5xl lg:text-6xl">
                Industrial Procurement & Site Supply Chain in Qatar
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[#52606D] sm:text-lg">
                Single-source procurement bridging international manufacturers and local Qatar construction projects — delivering high-spec materials, mechanical equipment, and site logistics on schedule.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#285A7E] text-white hover:bg-[#1f4764] font-bold">
                  <Link to="/contact">
                    Submit Material Requisition <ArrowUpRight className="ml-1.5 size-4 text-[#EAB526]" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#CBD2D9] bg-[#F5F7F9] text-[#202930] hover:bg-[#DFE5EA]">
                  <a href="#supplies">View All Supplies</a>
                </Button>
              </div>
            </motion.div>

            {/* Right Architectural Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#CBD2D9] shadow-md bg-[#F5F7F9] p-2.5">
                <img
                  src={heroImage}
                  alt="Industrial procurement and supply delivery in Qatar"
                  width={700}
                  height={560}
                  className="rounded-2xl w-full aspect-[5/4] object-cover"
                />

                {/* Floating Procurement Badge */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#F5F7F9]/95 p-4 shadow-md border border-[#CBD2D9] backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#285A7E]">Procurement Desk</p>
                      <p className="text-sm font-extrabold text-[#202930] mt-0.5">Direct Sourcing & Site Delivery</p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#285A7E] text-white">
                      <Truck className="size-5 text-[#EAB526]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Supply Categories ─────────────────────────────────────── */}
      <section id="supplies" className="section-spacing bg-[#EAEFF2]">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Procurement Divisions</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
              Materials & Equipment Sourced to Exacting Technical Standards
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.05}>
                <div className="palette-card palette-card-hover group relative flex h-full flex-col justify-between rounded-2xl p-7 lg:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20 group-hover:scale-105 group-hover:bg-[#285A7E] group-hover:text-white transition-all">
                        <cat.icon className="size-7" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-[#DFE5EA] px-3 py-1 text-[0.6875rem] font-bold text-[#334756] border border-[#CBD2D9]">
                        {cat.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#202930] group-hover:text-[#285A7E] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-[#52606D]">
                      {cat.text}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-[#CBD2D9] pt-5">
                      {cat.specs.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-[#52606D]">
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
                      <span>Request BOQ Price</span>
                      <ArrowUpRight className="size-3.5 text-[#EAB526]" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Why Source With TC ───────────────────────────────────── */}
      <section className="section-spacing bg-[#DFE5EA] border-y border-[#CBD2D9]">
        <div className="container-custom">
          <Reveal className="max-w-2xl mb-12">
            <SectionLabel>Supply Chain Integrity</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
              Why Qatar Contractors Choose Terrestrial For Procurement
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.05}>
                <div className="palette-card rounded-2xl p-7 border border-[#CBD2D9] h-full">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20 mb-5">
                    <reason.icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#202930]">{reason.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#52606D]">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-[#285A7E] text-white hover:bg-[#1f4764] font-bold">
              <Link to="/contact">
                Submit Material Requisition <ArrowUpRight className="ml-1.5 size-4 text-[#EAB526]" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
