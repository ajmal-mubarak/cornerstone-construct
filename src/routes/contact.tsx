import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, FileText, Send, Clock, Building2, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionLabel } from "@/components/site/PageHero";

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
    badge: "1-Hour Response",
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
      <PageHero
        eyebrow="Contact & RFP"
        title="Initiate Your Project Discussion in Qatar"
        text="Submit your architectural drawings, bill of quantities (BOQ), or workforce requirements. Our Doha engineering team will provide a comprehensive, compliant technical proposal."
        badge="Official Tender Desk · Doha, Qatar"
      />

      <section className="section-spacing bg-slate-950">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* ── Left Details & Credentials ───────────────────────── */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <SectionLabel>Head Office & Contact</SectionLabel>
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Terrestrial Contracting W.L.L.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Our engineering and commercial team is based in Doha, providing rapid on-site surveys and tender responses throughout Qatar.
                </p>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {OFFICES.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 0.06}>
                    <div className="glass-card rounded-2xl p-5 border border-white/5 transition-all hover:border-sky-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                          <item.icon className="size-5" />
                        </div>
                        <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[0.625rem] font-bold text-sky-400 border border-sky-500/20">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-base font-bold text-white">
                        {item.title}
                      </h3>

                      <div className="mt-1 space-y-0.5">
                        {item.lines.map((line) => (
                          <p key={line} className="text-xs text-slate-400">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Working hours badge */}
              <Reveal delay={0.3}>
                <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
                    <Clock className="size-4" />
                    <span>Business Hours</span>
                  </div>
                  <p className="text-sm font-bold text-white">Sunday to Thursday: 07:30 – 17:30</p>
                  <p className="text-xs text-slate-400 mt-1">24/7 site operations support for active contracts.</p>
                </div>
              </Reveal>
            </div>

            {/* ── Right Interactive RFP Form ───────────────────────── */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 size-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                    <Sparkles className="size-4" />
                    <span>Project Tender Desk</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Request an Official Quotation
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400">
                    Fill in the form below and our technical estimators will respond within 1 business day.
                  </p>

                  {sent ? (
                    <div className="mt-8 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-950/40 to-slate-900/80 p-8 text-center backdrop-blur-xl">
                      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/30 mb-4">
                        <CheckCircle2 className="size-8" />
                      </div>
                      <h4 className="font-display text-2xl font-bold text-white">
                        Enquiry Successfully Received!
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300 max-w-md mx-auto">
                        Thank you for contacting Terrestrial Contracting W.L.L. Your submission has been routed to our project estimation team in Doha.
                      </p>
                      <p className="mt-4 text-xs text-sky-400 font-semibold">
                        For immediate urgent requirements, please call: +974 4146 4546
                      </p>
                      <Button
                        onClick={() => setSent(false)}
                        variant="outline"
                        size="sm"
                        className="mt-6 border-white/20 text-white hover:bg-white/10"
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
                        <Label className="text-xs font-semibold text-slate-300">
                          Select Relevant Division / Scope *
                        </Label>
                        <select
                          value={selectedDept}
                          onChange={(e) => setSelectedDept(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                        >
                          {DEPARTMENTS.map((dept) => (
                            <option key={dept} value={dept} className="bg-slate-900 text-white">
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-xs font-semibold text-slate-300">
                            Your Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="e.g. Eng. Khalid Al-Marri"
                            className="border-white/10 bg-slate-900/90 text-white placeholder:text-slate-500 rounded-xl py-3 focus-visible:ring-sky-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-xs font-semibold text-slate-300">
                            Company / Organization *
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            required
                            placeholder="e.g. Qatari Diar / Main Contractor"
                            className="border-white/10 bg-slate-900/90 text-white placeholder:text-slate-500 rounded-xl py-3 focus-visible:ring-sky-400"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-xs font-semibold text-slate-300">
                            Corporate Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="name@company.com"
                            className="border-white/10 bg-slate-900/90 text-white placeholder:text-slate-500 rounded-xl py-3 focus-visible:ring-sky-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-xs font-semibold text-slate-300">
                            Qatar Contact Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            required
                            placeholder="+974 5500 0000"
                            className="border-white/10 bg-slate-900/90 text-white placeholder:text-slate-500 rounded-xl py-3 focus-visible:ring-sky-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-xs font-semibold text-slate-300">
                          Project Details, Site Location & Scope *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Provide overview of scope of work, approximate quantities, location in Qatar (e.g. Lusail, West Bay, Ras Laffan), and expected start date..."
                          className="border-white/10 bg-slate-900/90 text-white placeholder:text-slate-500 rounded-xl focus-visible:ring-sky-400"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-600 font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01] hover:shadow-sky-500/40 py-4 text-base rounded-xl"
                      >
                        <Send className="mr-2 size-4" />
                        <span>Submit Project RFP for Review</span>
                      </Button>

                      <p className="text-center text-[0.6875rem] text-slate-500">
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
