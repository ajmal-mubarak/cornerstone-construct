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
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  PhoneCall,
  Flame,
  Award,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/PageHero";
import heroImage from "@/assets/hero-construction.jpg";
import fitoutImage from "@/assets/fitout-interior.jpg";
import mepImage from "@/assets/mep-services.jpg";
import manpowerImage from "@/assets/manpower.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const SERVICES = [
  {
    icon: Building2,
    title: "Civil Contracting",
    tag: "Structural & Civil",
    text: "High-end luxury villas, hotel renovations, educational campuses, structural concrete, commercial paving, and heavy civil infrastructure.",
    link: "/services",
  },
  {
    icon: Cog,
    title: "MEP & Electrical Systems",
    tag: "Engineering & HVAC",
    text: "Large-scale HVAC plant installations, smart electrical distribution, plumbing, fire suppression & alarm systems, testing & commissioning.",
    link: "/services",
  },
  {
    icon: Sofa,
    title: "Luxury Interior Fit-Out",
    tag: "Turnkey Interiors",
    text: "Turnkey five-star hotel lobbies, bespoke executive offices, custom acoustic ceilings, Italian marble flooring, and handcrafted joinery.",
    link: "/services",
  },
  {
    icon: Users,
    title: "Certified Manpower Supply",
    tag: "Trade Workforce",
    text: "QID-verified certified electricians, MEP technicians, QA/QC supervisors, HSE officers, and trained trade crews ready for immediate mobilization.",
    link: "/manpower",
  },
  {
    icon: Warehouse,
    title: "General Trading & Supply",
    tag: "Industrial Procurement",
    text: "Single-source procurement of mechanical valves, electrical switchgear, instrumentation, structural steel, aggregates, and project goods.",
    link: "/trading",
  },
  {
    icon: Waves,
    title: "Water & Environmental Services",
    tag: "Site Logistics",
    text: "Potable water supply, sewage tanker fleets, industrial dewatering, TSE water management, skip bin logistics, and high-pressure jetting.",
    link: "/trading",
  },
];

const METRICS = [
  { value: "2014", label: "Established in Doha", detail: "Over a decade of Qatar market leadership" },
  { value: "6+", label: "Integrated Divisions", detail: "Turnkey engineering & supply under one roof" },
  { value: "100%", label: "Qatar HSEQ Compliance", detail: "Zero-compromise safety & ISO standards" },
  { value: "24/7", label: "Rapid Site Mobilization", detail: "Standby logistics & certified workforce pool" },
];

const SECTORS = [
  { title: "Hospitality & 5-Star Hotels", desc: "Turnkey interior fit-out, acoustic ceilings, and comprehensive facility MEP." },
  { title: "Commercial & Office Towers", desc: "Power distribution, HVAC systems, smart controls, and architectural finishes." },
  { title: "High-End Residential Villas", desc: "Full civil construction, luxury joinery, marble installation, and MEP." },
  { title: "Industrial & Oil/Gas Facilities", desc: "Specialized mechanical supply, instrumentation, and certified technician crews." },
];

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Strict HSEQ & Qatar Law Compliance",
    desc: "Every project strictly adheres to Ministry of Labour, Qatar Civil Defence, and international HSEQ safety standards.",
  },
  {
    icon: Award,
    title: "Hospitality-Grade Execution Quality",
    desc: "Renowned for delivering five-star hotel interiors and luxury developments with immaculate precision and zero punch-list delays.",
  },
  {
    icon: Users,
    title: "Fully Sponsored Certified Workforce",
    desc: "In-house team of engineers, technicians, and trade specialists with valid QID, medical fitness, and trade certifications.",
  },
  {
    icon: Clock,
    title: "Guaranteed Milestone Delivery",
    desc: "Rigorous project controls and resource planning ensuring your handover dates are met on schedule and within budget.",
  },
  {
    icon: FileText,
    title: "Transparent Single-Source Commercials",
    desc: "One contract covering materials, equipment, manpower, and execution — eliminating costly multi-contractor friction.",
  },
  {
    icon: Flame,
    title: "24/7 Operational Responsiveness",
    desc: "Direct management accessibility, rapid emergency replacement crews, and proactive site issue resolution.",
  },
];

function HomePage() {
  return (
    <>
      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative isolate min-h-[94vh] flex items-center overflow-hidden bg-slate-950 py-20 lg:py-28">
        {/* Background hero image with high-contrast architectural overlay */}
        <img
          src={heroImage}
          alt="Modern construction and engineering project in Doha Qatar"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-30 size-full object-cover object-center brightness-75 filter"
        />

        {/* Dynamic Dark Gradient & Blueprint Grid */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-25" />

        {/* Ambient Radial Cyan Glow */}
        <div className="absolute -left-32 top-1/4 -z-10 size-[500px] rounded-full bg-sky-500/15 blur-[140px]" />
        <div className="absolute right-10 top-1/3 -z-10 size-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="container-custom relative z-10 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300 backdrop-blur-md shadow-lg shadow-sky-500/10"
              >
                <span className="glow-dot" />
                <span>Premier Contracting & Trading · Doha, Qatar</span>
              </motion.div>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl">
                Engineering Integrity.{" "}
                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Building Qatar’s
                </span>{" "}
                Future.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl font-normal">
                Established in 2014, <strong className="text-white font-semibold">Terrestrial Contracting W.L.L.</strong> is Qatar’s trusted single-source partner for Grade-A civil construction, turnkey MEP systems, five-star hotel fit-outs, and certified manpower.
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-sky-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/50 active:scale-95"
                >
                  <span>Request a Quotation</span>
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/60 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/30"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="size-4 text-sky-400" />
                </Link>
              </div>

              {/* Trust highlights under CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-400 sm:gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-sky-400" />
                  <span>C.R. No. 65663 Validated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-sky-400" />
                  <span>Licensed Civil & MEP Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-sky-400" />
                  <span>Direct Qatar ID Workforce</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Floating Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 xl:col-span-4"
            >
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-white shadow-md">
                  Active Division
                </div>

                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Building2 className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Full-Scope Delivery</h3>
                    <p className="text-xs text-slate-400">Civil · MEP · Fit-Out · Manpower</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    { label: "Turnkey MEP & HVAC Installation", tag: "Certified" },
                    { label: "Hospitality & Commercial Interiors", tag: "Turnkey" },
                    { label: "Manpower Rental & Site Crews", tag: "Site-Ready" },
                    { label: "General & Industrial Trading", tag: "Fast Sourcing" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg bg-slate-950/60 p-2.5 text-xs text-slate-300 border border-white/5"
                    >
                      <span className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-sky-400" />
                        {item.label}
                      </span>
                      <span className="rounded bg-sky-500/10 px-2 py-0.5 text-[0.625rem] font-semibold text-sky-400">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-gradient-to-r from-sky-500/15 to-blue-600/15 p-4 border border-sky-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-sky-300">Direct Hotline Support</p>
                      <p className="text-sm font-bold text-white mt-0.5">+974 4146 4546</p>
                    </div>
                    <a
                      href="tel:+97441464546"
                      className="flex size-9 items-center justify-center rounded-lg bg-sky-500 text-white shadow-md hover:bg-sky-400 transition-colors"
                    >
                      <PhoneCall className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Live Metrics Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/50 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-900/80"
              >
                <div className="absolute right-0 top-0 -mr-6 -mt-6 size-20 rounded-full bg-sky-500/5 blur-xl group-hover:bg-sky-500/15 transition-all" />
                <dt className="font-display text-3xl font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors sm:text-4xl">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-200">{metric.label}</dd>
                <p className="mt-1 text-xs text-slate-400">{metric.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. CORE CAPABILITIES (GRID) ──────────────────────────────────── */}
      <section className="section-spacing relative bg-slate-900/30">
        <div className="container-custom">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal className="max-w-2xl">
              <SectionLabel>Core Capabilities</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Comprehensive Engineering & Project Solutions
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                From initial ground-breaking to final commissioning, our integrated divisions deliver turnkey execution without third-party bottlenecks.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/10 px-5 py-3 text-sm font-bold text-sky-400 transition-all hover:bg-sky-500/20 hover:border-sky-400"
              >
                <span>View Full Service Catalog</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card glass-card-hover group relative flex h-full flex-col justify-between rounded-2xl p-7 lg:p-8"
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 via-blue-600/10 to-transparent text-sky-400 ring-1 ring-sky-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:text-sky-300">
                        <service.icon className="size-7" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[0.6875rem] font-semibold text-slate-300 border border-white/5">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400 font-normal">
                      {service.text}
                    </p>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="mt-8 pt-5 border-t border-white/[0.06]">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 transition-colors hover:text-sky-300"
                    >
                      <span>Explore Capability</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ENGINEERING DEPTH & LUXURY FIT-OUT SHOWCASE ──────────────── */}
      <section className="section-spacing relative overflow-hidden bg-slate-950">
        <div className="absolute right-0 top-1/2 -z-10 size-96 rounded-full bg-sky-600/10 blur-[130px]" />

        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* Image Showcase */}
            <Reveal direction="right" className="lg:col-span-6 xl:col-span-6">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <img
                    src={fitoutImage}
                    alt="Luxury hospitality interior fit-out by Terrestrial Contracting Qatar"
                    loading="lazy"
                    width={1280}
                    height={912}
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Floating Glass Stats Badge */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-sky-500/30 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl sm:-bottom-8 sm:-left-8">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                      <Award className="size-6" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-black text-white">5-Star</p>
                      <p className="text-xs font-medium text-slate-300">Hospitality Grade Standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Content Details */}
            <Reveal direction="left" className="lg:col-span-6 xl:col-span-6 lg:pl-6">
              <SectionLabel>Single-Source Execution</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Bridging Global Engineering With Local Qatar Needs
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300">
                Since 2014, we have eliminated the complexity of coordinating multiple subcontractors. Terrestrial Contracting brings engineering depth, certified talent, and supply-chain sovereignty under one accountable roof.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Turnkey Single-Source Accountability",
                    desc: "Eliminates scope gaps between civil, electro-mechanical, and finishing teams.",
                  },
                  {
                    title: "Strict HSEQ & Local Authority Approvals",
                    desc: "Full compliance with Qatar Civil Defence (QCDD), Kahramaa, and Ashghal guidelines.",
                  },
                  {
                    title: "In-House Procurement & Logistics",
                    desc: "Direct supplier networks providing competitive BOQ rates and guaranteed material availability.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 rounded-xl border border-white/[0.06] bg-slate-900/40 p-4"
                  >
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-white">{item.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button asChild size="lg" className="bg-sky-500 text-white hover:bg-sky-400 font-bold">
                  <Link to="/about">
                    Learn More About TC <ChevronRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Direct Inquiry →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. SECTORS SERVED ────────────────────────────────────────────── */}
      <section className="section-spacing bg-slate-900/40">
        <div className="container-custom">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel>Multi-Sector Reach</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Proven Track Record Across Key Qatar Sectors
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Trusted by leading development groups, luxury operators, institutions, and industrial clients.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/[0.08] bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-xl">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 font-display font-bold">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{sector.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY TERRESTRIAL CONTRACTING ────────────────────────────────── */}
      <section className="section-spacing relative bg-slate-950">
        <div className="container-custom">
          <Reveal className="max-w-3xl">
            <SectionLabel>Why Choose Terrestrial</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built On Integrity. Defined By Quality.
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Our core values guide every site instruction, procurement order, and client interaction in Doha.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="glass-card group h-full rounded-2xl p-7 transition-all duration-300 hover:border-sky-500/40 hover:shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DIRECT ACTION QUOTATION CTA ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-28">
        <div className="absolute left-1/2 top-1/2 -z-10 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-600/10 blur-[150px]" />

        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl sm:p-12 lg:p-16">
            {/* Background grid accent */}
            <div className="absolute inset-0 bg-grid-pattern opacity-15" />

            <div className="relative z-10 max-w-3xl">
              <span className="section-badge mb-4">
                <span className="glow-dot" />
                <span>RFP & Tender Submissions</span>
              </span>

              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Discuss Your Project Scope in Qatar?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                Submit your project drawings, BOQ, or manpower requisition. Our engineering & estimating team in Doha will revert with a competitive, compliant commercial proposal.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-sky-500/30 transition-all hover:scale-105 hover:shadow-sky-500/50"
                >
                  <span>Submit RFP / Inquiry</span>
                  <ArrowUpRight className="size-5" />
                </Link>

                <a
                  href="tel:+97441464546"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
                >
                  <PhoneCall className="size-4 text-sky-400" />
                  <span>Call +974 4146 4546</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
