import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowUpRight, Eye, Target } from "lucide-react";

import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import fitoutImage from "@/assets/fitout-interior.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const PILLARS = [
  {
    title: "Single-Source Sovereign Delivery",
    desc: "Technical workforce, MEP engineering, heavy equipment, and commercial execution integrated under one contract.",
  },
  {
    title: "Qatar Market Precision",
    desc: "A decade of deep regulatory familiarity, municipal permits, local supply chains, and established vendor relationships.",
  },
  {
    title: "Practical & Proactive Problem Solving",
    desc: "Agile site mobilization and direct executive management oversight on every construction site.",
  },
  {
    title: "Integrated Trading & Contracting",
    desc: "Direct procurement networks ensuring high-spec material availability without third-party markup friction.",
  },
];

const VALUES = [
  { name: "Urgency of Work", desc: "Fast-track mobilization and milestone commitments without compromising safety." },
  { name: "Integrity & Transparency", desc: "Open-book commercial estimates, authentic certifications, and verified compliance." },
  { name: "Commitment to Specification", desc: "Precision alignment with architectural drawings and consulting engineer requirements." },
  { name: "Accountability", desc: "Single-point project management taking full ownership from ground-break to handover." },
  { name: "Respect & Mutual Trust", desc: "Long-term relationships with clients, sub-contractors, and our valued workforce." },
  { name: "Excellence in Craftsmanship", desc: "Hospitality-grade finishing quality delivered across every sector." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="Engineering Excellence & Craftsmanship in Qatar"
        text="Established in Doha in 2014, Terrestrial Contracting W.L.L. has grown into a multi-disciplinary contracting and trading powerhouse trusted across the State of Qatar."
        badge="CR No. 65663 · Founded 2014 in Doha"
      />

      {/* ── Story Section ────────────────────────────────────────────── */}
      <section className="section-spacing bg-[#EAEFF2]">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal direction="right" className="lg:col-span-6">
              <SectionLabel>Our Story & Journey</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
                A Decade of Dependable Construction Delivery
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#52606D]">
                Founded in 2014, <strong className="text-[#202930] font-semibold">Terrestrial Contracting W.L.L.</strong> was established with a singular objective: to provide developers, hospitality brands, and industrial clients in Qatar with a truly dependable, single-source construction and trading partner.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#52606D]">
                Over the past 10+ years, we have built a solid reputation across Doha by bridging the gap between international supply specifications and local construction demands — delivering turn-key civil, MEP, fit-out, and manpower solutions on time and on budget.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {PILLARS.map((item) => (
                  <div key={item.title} className="palette-card rounded-xl p-5 border border-[#CBD2D9]">
                    <div className="mb-2.5 h-1 w-6 rounded-full bg-[#285A7E]" />
                    <h3 className="font-display text-sm font-bold uppercase text-[#202930]">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-[#52606D] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-6">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-[#CBD2D9] shadow-md bg-[#F5F7F9]">
                  <img
                    src={fitoutImage}
                    alt="Luxury hospitality interior fit-out by Terrestrial Contracting"
                    loading="lazy"
                    width={1280}
                    height={912}
                    className="size-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 rounded-2xl border border-[#CBD2D9] bg-[#F5F7F9] p-5 shadow-md">
                  <p className="font-display text-3xl font-black text-[#285A7E]">2014</p>
                  <p className="text-xs font-bold text-[#202930]">Founded in Doha, Qatar</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ────────────────────────────────────────── */}
      <section className="section-spacing bg-[#DFE5EA] border-y border-[#CBD2D9]">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="palette-card h-full rounded-2xl p-8 lg:p-10 border border-[#CBD2D9]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20 mb-6">
                  <Eye className="size-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#202930]">Our Strategic Vision</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#52606D]">
                  To stand as Qatar’s most reliable, single-source engineering, contracting, and trading partner — recognized across the GCC for uncompromising technical precision, safety integrity, and seamless project execution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="palette-card h-full rounded-2xl p-8 lg:p-10 border border-[#CBD2D9]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20 mb-6">
                  <Target className="size-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#202930]">Our Core Mission</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#52606D]">
                  To execute every commercial, hospitality, and civil assignment safely, on schedule, and strictly to specification by deploying certified professionals, disciplined controls, and transparent commercial practices.
                </p>
              </div>
            </Reveal>
          </div>

          {/* U & I CARE Core Values */}
          <div className="mt-16">
            <Reveal className="text-center max-w-2xl mx-auto">
              <SectionLabel>Guiding Principles</SectionLabel>
              <h3 className="font-display text-3xl font-extrabold text-[#202930]">
                The "U & I CARE" Operating Code
              </h3>
              <p className="mt-3 text-sm text-[#52606D]">
                Our workforce values govern all client agreements, safety practices, and site operations.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((val, idx) => (
                <Reveal key={val.name} delay={idx * 0.05}>
                  <div className="palette-card rounded-xl p-5 border border-[#CBD2D9] transition-all hover:border-[#285A7E]">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-[#285A7E]" />
                      <h4 className="font-display text-base font-bold text-[#202930]">{val.name}</h4>
                    </div>
                    <p className="mt-2 text-xs text-[#52606D] leading-relaxed pl-6.5">
                      {val.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ready to Work CTA ────────────────────────────────────────── */}
      <section className="section-spacing bg-[#EAEFF2]">
        <div className="container-custom text-center max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-[#202930] sm:text-4xl">
              Partner With Terrestrial Contracting in Qatar
            </h2>
            <p className="mt-4 text-base text-[#52606D]">
              Let's evaluate your upcoming project requirements. Our technical estimation team is ready to assist with detailed BOQ and site analysis.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-[#285A7E] text-white hover:bg-[#1f4764] font-bold">
                <Link to="/contact">
                  Initiate RFP / Contact <ArrowUpRight className="ml-1.5 size-4 text-[#EAB526]" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
