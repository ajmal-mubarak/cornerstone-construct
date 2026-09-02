import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, FileText } from "lucide-react";

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

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionLabel>Company Details</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground">
              Terrestrial Contracting W.L.L.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {DETAILS.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-border bg-card px-6 py-6 transition-colors hover:border-accent/60"
                >
                  <d.icon className="size-5 text-accent" strokeWidth={1.6} />
                  <h3 className="mt-3 font-display text-base font-semibold uppercase text-foreground">
                    {d.title}
                  </h3>
                  {d.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9"
            >
              <h2 className="text-2xl font-semibold uppercase text-foreground">Send an enquiry</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
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
              </div>
              <Button type="submit" size="lg" className="mt-7">
                Submit enquiry
              </Button>
              {sent ? (
                <p className="mt-4 text-sm text-accent">
                  Thank you — your enquiry has been noted. Please also reach us at
                  info@terrestrialqatar.com for urgent requests.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
