import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, FileText, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionLabel } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const DETAILS = [
  { icon: MapPin, title: "Office", lines: ["P.O. Box 35371", "Doha, State of Qatar"] },
  { icon: Phone, title: "Phone", lines: ["Tel: 4146 4546", "Mobile: 3024 5384"] },
  { icon: Mail, title: "Email", lines: ["info@terrestrialqatar.com"] },
  { icon: FileText, title: "Registration", lines: ["C.R. No. 65663", "Established 2014"] },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's discuss your project"
        text="Tell us about your scope, timeline and location — our team in Doha will get back to you with a clear, competitive proposal."
      />

      <section className="section-pad">
        <div className="container-pad grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Contact details */}
          <Reveal>
            <SectionLabel>Company Details</SectionLabel>
            <h2 className="mt-5 text-2xl font-semibold uppercase text-foreground">
              Terrestrial Contracting W.L.L.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We're based in Doha and serve clients across Qatar. Reach out using any of the
              channels below.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {DETAILS.map((d) => (
                <div
                  key={d.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-sm)] transition-all duration-200 hover:border-accent/40"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-accent/10">
                      <d.icon className="size-4 text-accent" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-sm font-semibold uppercase text-foreground">
                      {d.title}
                    </h3>
                  </div>
                  {d.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground ml-11">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
              <h2 className="text-2xl font-semibold uppercase text-foreground">Send an enquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">We'll respond within 1 business day.</p>

              {sent ? (
                <div className="mt-8 rounded-xl bg-accent/10 border border-accent/30 px-6 py-8 text-center">
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent/20">
                    <Send className="size-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">Enquiry sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you — we'll be in touch shortly. For urgent requests, email us at{" "}
                    <a href="mailto:info@terrestrialqatar.com" className="text-accent">
                      info@terrestrialqatar.com
                    </a>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="mt-6 grid gap-5 sm:grid-cols-2"
                >
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Company name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+974 ..." />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="message">Project details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Scope of work, location and expected timeline"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="mr-2 size-4" />
                      Submit enquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
