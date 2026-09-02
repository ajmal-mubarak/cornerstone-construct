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
  ArrowUpRight,
  CheckCircle2,
  PhoneCall,
  Flame,
  Award,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/PageHero";
import heroImage from "@/assets/hero-construction.jpg";
import fitoutImage from "@/assets/fitout-interior.jpg";

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
      <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden bg-[#182026] py-20 lg:py-28">
        {/* Background hero image */}
        <img
          src={heroImage}
          alt="Modern construction and engineering project in Doha Qatar"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-30 size-full object-cover object-center brightness-[0.55] filter"
        />

        {/* Palette Gradient Overlay */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#182026] via-[#182026]/90 to-[#182026]/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#182026] via-transparent to-transparent" />

        <div className="container-custom relative z-10 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-8"
            >
              {/* Status Badge */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#EAB526]/35 bg-[#EAB526]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#EAB526]">
                <span className="gold-dot" />
                <span>Premier Contracting & Trading · Doha, Qatar</span>
              </div>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-6xl xl:text-7xl">
                Engineering Integrity.{" "}
                <span className="text-[#EAB526]">
                  Building Qatar’s
                </span>{" "}
                Future.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#D3D6DB] sm:text-lg lg:text-xl font-normal">
                Established in 2014, <strong className="text-white font-semibold">Terrestrial Contracting W.L.L.</strong> is Qatar’s trusted single-source partner for Grade-A civil construction, turnkey MEP systems, five-star hotel fit-outs, and certified manpower.
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-[#EAB526] px-7 py-4 text-base font-bold text-[#182026] shadow-md transition-all duration-200 hover:bg-[#f3c64c] hover:scale-[1.02] active:scale-95"
                >
                  <span>Request a Quotation</span>
                  <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#334756] bg-[#202A32]/90 px-6 py-4 text-base font-semibold text-[#D3D6DB] transition-all duration-200 hover:bg-[#285A7E] hover:text-white"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="size-4 text-[#EAB526]" />
                </Link>
              </div>

              {/* Trust highlights under CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-[#9AA6B2] sm:gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#EAB526]" />
                  <span>C.R. No. 65663 Validated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#EAB526]" />
                  <span>Licensed Civil & MEP Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#EAB526]" />
                  <span>Direct Qatar ID Workforce</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 xl:col-span-4"
            >
              <div className="relative rounded-2xl border border-[#334756] bg-[#202A32] p-6 shadow-xl">
                <div className="absolute -top-3 right-6 rounded-full bg-[#EAB526] px-3 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-[#182026]">
                  Active Division
                </div>

                <div className="flex items-center gap-3 border-b border-[#334756] pb-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#285A7E]/30 text-[#EAB526] border border-[#334756]">
                    <Building2 className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Full-Scope Delivery</h3>
                    <p className="text-xs text-[#9AA6B2]">Civil · MEP · Fit-Out · Manpower</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2.5">
                  {[
                    { label: "Turnkey MEP & HVAC Installation", tag: "Certified" },
                    { label: "Hospitality & Commercial Interiors", tag: "Turnkey" },
                    { label: "Manpower Rental & Site Crews", tag: "Site-Ready" },
                    { label: "General & Industrial Trading", tag: "Fast Sourcing" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg bg-[#182026] p-2.5 text-xs text-[#D3D6DB] border border-[#334756]/50"
                    >
                      <span className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[#EAB526]" />
                        {item.label}
                      </span>
                      <span className="rounded bg-[#EAB526]/12 px-2 py-0.5 text-[0.625rem] font-semibold text-[#EAB526]">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-[#182026] p-4 border border-[#334756]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#EAB526]">Direct Hotline Support</p>
                      <p className="text-sm font-bold text-white mt-0.5">+974 4146 4546</p>
                    </div>
                    <a
                      href="tel:+97441464546"
                      className="flex size-9 items-center justify-center rounded-lg bg-[#285A7E] text-white hover:bg-[#334756] transition-colors"
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="palette-card group rounded-2xl p-5 transition-all duration-200 hover:border-[#EAB526]/40"
              >
                <dt className="font-display text-3xl font-extrabold tracking-tight text-[#EAB526] sm:text-4xl">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#F0F3F6]">{metric.label}</dd>
                <p className="mt-1 text-xs text-[#9AA6B2]">{metric.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. CORE CAPABILITIES (GRID) ──────────────────────────────────── */}
      <section className="section-spacing bg-[#141A1F]">
        <div className="container-custom">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal className="max-w-2xl">
              <SectionLabel>Core Capabilities</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-4xl lg:text-5xl">
                Comprehensive Engineering & Project Solutions
              </h2>
              <p className="mt-4 text-base text-[#9AA6B2] leading-relaxed">
                From initial ground-breaking to final commissioning, our integrated divisions deliver turnkey execution without third-party bottlenecks.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#334756] bg-[#202A32] px-5 py-3 text-sm font-bold text-[#EAB526] transition-all hover:bg-[#285A7E] hover:text-white"
              >
                <span>View Full Service Catalog</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="palette-card palette-card-hover group relative flex h-full flex-col justify-between rounded-2xl p-7 lg:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-13 items-center justify-center rounded-2xl bg-[#285A7E]/20 text-[#EAB526] border border-[#334756] transition-transform duration-200 group-hover:scale-105">
                        <service.icon className="size-6" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-[#182026] px-3 py-1 text-[0.6875rem] font-semibold text-[#D3D6DB] border border-[#334756]">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#F0F3F6] group-hover:text-[#EAB526] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#9AA6B2]">
                      {service.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#334756]">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EAB526] transition-colors hover:text-[#f3c64c]"
                    >
                      <span>Explore Capability</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SHOWCASE SECTION ─────────────────────────────────────────── */}
      <section className="section-spacing bg-[#182026]">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal direction="right" className="lg:col-span-6">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-[#334756] shadow-xl">
                  <img
                    src={fitoutImage}
                    alt="Luxury hospitality interior fit-out by Terrestrial Contracting Qatar"
                    loading="lazy"
                    width={1280}
                    height={912}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182026]/80 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-[#334756] bg-[#202A32] p-5 shadow-xl sm:-bottom-8 sm:-left-8">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#285A7E]/30 text-[#EAB526] border border-[#334756]">
                      <Award className="size-6" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-black text-[#F0F3F6]">5-Star</p>
                      <p className="text-xs font-medium text-[#D3D6DB]">Hospitality Grade Standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-6 lg:pl-6">
              <SectionLabel>Single-Source Execution</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-4xl lg:text-5xl">
                Bridging Global Engineering With Local Qatar Needs
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#D3D6DB]">
                Since 2014, we have eliminated the complexity of coordinating multiple subcontractors. Terrestrial Contracting brings engineering depth, certified talent, and supply-chain sovereignty under one accountable roof.
              </p>

              <div className="mt-8 space-y-3.5">
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
                    className="flex items-start gap-3.5 rounded-xl border border-[#334756] bg-[#202A32] p-4"
                  >
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EAB526]/15 text-[#EAB526]">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-[#F0F3F6]">{item.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-[#9AA6B2]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button asChild size="lg" className="bg-[#EAB526] text-[#182026] hover:bg-[#f3c64c] font-bold">
                  <Link to="/about">
                    Learn More About TC <ChevronRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-[#EAB526] hover:text-[#f3c64c] transition-colors"
                >
                  Direct Inquiry →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. SECTORS SERVED ────────────────────────────────────────────── */}
      <section className="section-spacing bg-[#141A1F]">
        <div className="container-custom">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel>Multi-Sector Reach</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-4xl">
              Proven Track Record Across Key Qatar Sectors
            </h2>
            <p className="mt-4 text-base text-[#9AA6B2]">
              Trusted by leading development groups, luxury operators, institutions, and industrial clients.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.title} delay={i * 0.06}>
                <div className="palette-card group h-full rounded-2xl p-6 transition-all duration-200 hover:border-[#EAB526]/40 hover:shadow-lg">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[#285A7E]/25 text-[#EAB526] font-display font-bold border border-[#334756]">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F0F3F6] group-hover:text-[#EAB526] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#9AA6B2]">{sector.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY TERRESTRIAL CONTRACTING ────────────────────────────────── */}
      <section className="section-spacing bg-[#182026]">
        <div className="container-custom">
          <Reveal className="max-w-3xl">
            <SectionLabel>Why Choose Terrestrial</SectionLabel>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-4xl lg:text-5xl">
              Built On Integrity. Defined By Quality.
            </h2>
            <p className="mt-4 text-base text-[#9AA6B2]">
              Our core values guide every site instruction, procurement order, and client interaction in Doha.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="palette-card group h-full rounded-2xl p-7 transition-all duration-200 hover:border-[#EAB526]/40">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#285A7E]/20 text-[#EAB526] border border-[#334756]">
                    <item.icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#F0F3F6] group-hover:text-[#EAB526] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#9AA6B2]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DIRECT ACTION QUOTATION CTA ──────────────────────────────── */}
      <section className="bg-[#141A1F] py-20">
        <div className="container-custom">
          <div className="rounded-3xl border border-[#334756] bg-[#202A32] p-8 shadow-xl sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="section-badge mb-4">
                <span className="gold-dot" />
                <span>RFP & Tender Submissions</span>
              </span>

              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#F0F3F6] sm:text-4xl lg:text-5xl">
                Ready to Discuss Your Project Scope in Qatar?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#D3D6DB] sm:text-lg">
                Submit your project drawings, BOQ, or manpower requisition. Our engineering & estimating team in Doha will revert with a competitive, compliant commercial proposal.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#EAB526] px-8 py-4 text-base font-bold text-[#182026] shadow-md transition-all hover:bg-[#f3c64c] hover:scale-105"
                >
                  <span>Submit RFP / Inquiry</span>
                  <ArrowUpRight className="size-5" />
                </Link>

                <a
                  href="tel:+97441464546"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#334756] bg-[#182026] px-6 py-4 text-base font-semibold text-[#D3D6DB] transition-all hover:bg-[#285A7E] hover:text-white"
                >
                  <PhoneCall className="size-4 text-[#EAB526]" />
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
