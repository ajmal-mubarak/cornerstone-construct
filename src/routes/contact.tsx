import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, FileText, Send, Clock, CheckCircle2, Sparkles, Building2, ChevronRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/PageHero";
import heroImage from "@/assets/hero-construction.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const OFFICES = [
  {
    icon: MapPin,
    title: "Doha Head Office",
    lines: ["P.O. Box 35371", "Doha, State of Qatar"],
    badge: "HQ",
  },
  {
    icon: Phone,
    title: "Telephone & Hotline",
    lines: ["Direct: +974 4146 4546", "Mobile / WhatsApp: +974 3024 5384"],
    badge: "24/7 Available",
  },
  {
    icon: Mail,
    title: "Official Communications",
    lines: ["info@terrestrialqatar.com", "Commercial & Tenders Desk"],
    badge: "Fast Response",
  },
  {
    icon: FileText,
    title: "Corporate Registration",
    lines: ["Commercial Reg: C.R. No. 65663", "Established in Doha 2014"],
    badge: "Grade-A Validated",
  },
];

const DEPARTMENTS = [
  "Civil Contracting & Construction",
  "MEP & Electrical Engineering",
  "Luxury Interior Fit-Out",
  "Manpower Supply Requisition",
  "General Trading & Material Procurement",
  "Water & Waste Fleet Services",
  "Facility Management & Maintenance",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [selectedDept, setSelectedDept] = useState(DEPARTMENTS[0]);

  return (
    <>
      {/* ── 1. Contact Hero Section with Right-Side Architectural Card ── */}
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
                <span className="text-[#285A7E] font-semibold">Contact & RFP</span>
              </div>

              {/* Eyebrow badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#285A7E]/25 bg-[#285A7E]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#285A7E]">
                <span className="gold-dot" />
                <span>Official Tender Desk · Doha, Qatar</span>
              </div>

              <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-5xl lg:text-6xl">
                Initiate Your Project Discussion in Qatar
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[#52606D] sm:text-lg">
                Submit your architectural drawings, bill of quantities (BOQ), or workforce requirements. Our Doha engineering team will provide a comprehensive, compliant technical proposal.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+97441464546"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#285A7E] px-7 py-4 text-base font-bold text-white shadow-sm transition-all hover:bg-[#1f4764]"
                >
                  <PhoneCall className="size-4 text-[#EAB526]" />
                  <span>Call Direct: 4146 4546</span>
                </a>
                <a
                  href="#rfp-form"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#CBD2D9] bg-[#F5F7F9] px-6 py-4 text-base font-semibold text-[#202930] hover:bg-[#DFE5EA]"
                >
                  <span>Fill RFP Form</span>
                </a>
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
                  src={heroImage}
                  alt="Terrestrial Contracting Qatar Head Office"
                  width={700}
                  height={525}
                  className="rounded-2xl w-full aspect-[4/3] object-cover"
                />

                {/* Floating Contact Badge */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#F5F7F9]/95 p-4 shadow-md border border-[#CBD2D9] backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#285A7E]">Tender & Commercial Desk</p>
                      <p className="text-sm font-extrabold text-[#202930] mt-0.5">Doha, Qatar · 1-Day Response</p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#285A7E] text-white">
                      <Mail className="size-5 text-[#EAB526]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Contact Details & Interactive Form ────────────────────── */}
      <section id="rfp-form" className="section-spacing bg-[#EAEFF2]">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* ── Left Details & Credentials ───────────────────────── */}
            <div className="lg:col-span-5 space-y-5">
              <Reveal>
                <SectionLabel>Head Office & Contact</SectionLabel>
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#202930] sm:text-4xl">
                  Terrestrial Contracting W.L.L.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#52606D]">
                  Our engineering and commercial team is based in Doha, providing rapid on-site surveys and tender responses throughout Qatar.
                </p>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {OFFICES.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 0.05}>
                    <div className="palette-card rounded-2xl p-5 border border-[#CBD2D9] transition-all hover:border-[#285A7E]">
                      <div className="flex items-center justify-between">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-[#285A7E]/10 text-[#285A7E] border border-[#285A7E]/20">
                          <item.icon className="size-5" />
                        </div>
                        <span className="rounded-full bg-[#DFE5EA] px-2.5 py-0.5 text-[0.625rem] font-bold text-[#285A7E] border border-[#CBD2D9]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-base font-bold text-[#202930]">
                        {item.title}
                      </h3>

                      <div className="mt-1 space-y-0.5">
                        {item.lines.map((line) => (
                          <p key={line} className="text-xs text-[#52606D]">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Working hours badge */}
              <Reveal delay={0.25}>
                <div className="rounded-2xl border border-[#CBD2D9] bg-[#F5F7F9] p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#285A7E] mb-1">
                    <Clock className="size-4 text-[#EAB526]" />
                    <span>Business Hours</span>
                  </div>
                  <p className="text-sm font-bold text-[#202930]">Sunday to Thursday: 07:30 – 17:30</p>
                  <p className="text-xs text-[#52606D] mt-1">24/7 site operations support for active contracts.</p>
                </div>
              </Reveal>
            </div>

            {/* ── Right Interactive RFP Form ───────────────────────── */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="palette-card rounded-3xl p-8 sm:p-10 border border-[#CBD2D9] shadow-sm relative overflow-hidden bg-[#F5F7F9]">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#285A7E] mb-2">
                    <Sparkles className="size-4 text-[#EAB526]" />
                    <span>Project Tender Desk</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#202930] sm:text-3xl">
                    Request an Official Quotation
                  </h3>
                  <p className="mt-1.5 text-xs text-[#52606D]">
                    Fill in the form below and our technical estimators will respond within 1 business day.
                  </p>

                  {sent ? (
                    <div className="mt-8 rounded-2xl border border-[#285A7E]/30 bg-[#DFE5EA] p-8 text-center">
                      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#285A7E] text-white shadow-md mb-4">
                        <CheckCircle2 className="size-8 text-[#EAB526]" />
                      </div>
                      <h4 className="font-display text-2xl font-bold text-[#202930]">
                        Enquiry Successfully Received!
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#52606D] max-w-md mx-auto">
                        Thank you for contacting Terrestrial Contracting W.L.L. Your submission has been routed to our project estimation team in Doha.
                      </p>
                      <p className="mt-4 text-xs text-[#285A7E] font-bold">
                        For immediate urgent requirements, please call: +974 4146 4546
                      </p>
                      <Button
                        onClick={() => setSent(false)}
                        variant="outline"
                        size="sm"
                        className="mt-6 border-[#CBD2D9] text-[#202930] hover:bg-[#F5F7F9]"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSent(true);
                      }}
                      className="mt-8 space-y-5"
                    >
                      {/* Division selection */}
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-[#202930]">
                          Select Relevant Division / Scope *
                        </Label>
                        <select
                          value={selectedDept}
                          onChange={(e) => setSelectedDept(e.target.value)}
                          className="w-full rounded-xl border border-[#CBD2D9] bg-[#EAEFF2] px-4 py-3 text-sm text-[#202930] focus:border-[#285A7E] focus:outline-none focus:ring-1 focus:ring-[#285A7E]"
                        >
                          {DEPARTMENTS.map((dept) => (
                            <option key={dept} value={dept} className="bg-[#EAEFF2] text-[#202930]">
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-xs font-semibold text-[#202930]">
                            Your Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="e.g. Eng. Khalid Al-Marri"
                            className="border-[#CBD2D9] bg-[#EAEFF2] text-[#202930] placeholder:text-[#8D9CA8] rounded-xl py-3 focus-visible:ring-[#285A7E]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-xs font-semibold text-[#202930]">
                            Company / Organization *
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            required
                            placeholder="e.g. Qatari Diar / Main Contractor"
                            className="border-[#CBD2D9] bg-[#EAEFF2] text-[#202930] placeholder:text-[#8D9CA8] rounded-xl py-3 focus-visible:ring-[#285A7E]"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-xs font-semibold text-[#202930]">
                            Corporate Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="name@company.com"
                            className="border-[#CBD2D9] bg-[#EAEFF2] text-[#202930] placeholder:text-[#8D9CA8] rounded-xl py-3 focus-visible:ring-[#285A7E]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-xs font-semibold text-[#202930]">
                            Qatar Contact Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            required
                            placeholder="+974 5500 0000"
                            className="border-[#CBD2D9] bg-[#EAEFF2] text-[#202930] placeholder:text-[#8D9CA8] rounded-xl py-3 focus-visible:ring-[#285A7E]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-xs font-semibold text-[#202930]">
                          Project Details, Site Location & Scope *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Provide overview of scope of work, approximate quantities, location in Qatar (e.g. Lusail, West Bay, Ras Laffan), and expected start date..."
                          className="border-[#CBD2D9] bg-[#EAEFF2] text-[#202930] placeholder:text-[#8D9CA8] rounded-xl focus-visible:ring-[#285A7E]"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#285A7E] font-bold text-white shadow-sm transition-all hover:bg-[#1f4764] hover:scale-[1.01] py-4 text-base rounded-xl"
                      >
                        <Send className="mr-2 size-4 text-[#EAB526]" />
                        <span>Submit Project RFP for Review</span>
                      </Button>

                      <p className="text-center text-[0.6875rem] text-[#52606D]">
                        Information submitted is treated with strict commercial confidentiality under Qatar law.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
