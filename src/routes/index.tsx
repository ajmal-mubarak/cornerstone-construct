import { createFileRoute } from "@tanstack/react-router";
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
  Gem,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Flame,
  Layers,
  Wrench,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImage from "@/assets/hero-construction.jpg";
import fitoutImage from "@/assets/fitout-interior.jpg";
import mepImage from "@/assets/mep-services.jpg";
import manpowerImage from "@/assets/manpower.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terrestrial Contracting W.L.L. | Civil, MEP & Fit-Out in Qatar" },
      {
        name: "description",
        content:
          "Doha-based contractor since 2014: civil construction, MEP systems, luxury interior fit-out, manpower supply, facility management and general trading.",
      },
      {
        property: "og:title",
        content: "Terrestrial Contracting W.L.L. | Civil, MEP & Fit-Out in Qatar",
      },
      {
        property: "og:description",
        content:
          "Integrated construction, trading and project support solutions across Qatar since 2014.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: Building2,
    title: "Civil Contracting",
    text: "High-end villa development, hotel maintenance, schools, structural and architectural works, renovations, labour camps, fencing and paving.",
  },
  {
    icon: Cog,
    title: "MEP / Electrical Systems",
    text: "HVAC for large-scale facilities, electrical systems and smart controls, plumbing and drainage, fire alarm and firefighting, testing and commissioning.",
  },
  {
    icon: Sofa,
    title: "Interior Fit-Out (Turnkey)",
    text: "Five-star hotel interiors, villa and institutional fit-outs, gypsum and acoustic ceilings, premium flooring and custom joinery.",
  },
  {
    icon: Users,
    title: "Manpower Support",
    text: "Skilled, semi-skilled and professional staff supplied with valid Qatar ID, medical insurance and relevant trade certifications.",
  },
  {
    icon: Warehouse,
    title: "General Trading & Supply",
    text: "Sourcing and supplying mechanical, electrical and instrumentation components, hardware, tools, aggregates and project goods.",
  },
  {
    icon: Waves,
    title: "Waste Management & Water",
    text: "Drinking water, sewage and vacuum tankers, skip removal, dewatering, TSE water, wastewater and jetting services.",
  },
];

const VALUES = [
  "Urgency of Work",
  "Integrity & Honesty",
  "Commitment",
  "Accountability",
  "Respect & Mutual Trust",
  "Excellence",
];

const WHY = [
  { icon: Users, title: "Experienced Project Management" },
  { icon: HardHat, title: "Skilled & Certified Workforce" },
  { icon: Gem, title: "Hospitality-Grade Quality" },
  { icon: Clock, title: "On-Time Delivery" },
  { icon: FileText, title: "Competitive & Transparent Pricing" },
  { icon: ShieldCheck, title: "Strict HSEQ Compliance" },
];

const TRADING = [
  {
    icon: Wrench,
    title: "Mechanical & Electrical",
    text: "Mechanical, electrical and instrumentation components; hardware, tools and fasteners.",
  },
  {
    icon: Flame,
    title: "Fire Safety & Industrial",
    text: "Fire safety equipment and systems; industrial gaskets and pipeline accessories.",
  },
  {
    icon: Layers,
    title: "Aggregates & Materials",
    text: "Sub-base and filling materials (Class A–D); washed sand, dune sand, limestone and gabbro aggregates.",
  },
  {
    icon: Sparkles,
    title: "Consumer Goods",
    text: "Consumer and project-specific goods sourced and supplied on request.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return <span className="section-label">{children}</span>;
}

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImage}
            alt="Construction site in Doha, Qatar with tower crane and steel structure"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-primary/85" />
          <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
            <div className="max-w-3xl">
              <SectionLabel>Founded 2014 · C.R. No. 65663</SectionLabel>
              <h1 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.05] text-primary-foreground sm:text-6xl">
                Engineering Excellence.
                <br />
                Built with Confidence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
                Terrestrial Contracting W.L.L. delivers high-end civil construction, advanced MEP
                systems, interior fit-out and manpower solutions across Qatar — for five-star
                hotels, villas, schools and commercial developments.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary">
                  <a href="#contact">Request a Quotation</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="#services">Our Services</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/15 bg-primary/90">
            <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
              {[
                ["2014", "Established in Doha"],
                ["Single-Source", "Trading, contracting & logistics"],
                ["Multi-Sector", "Construction, oil & gas, industrial"],
                ["HSEQ", "Safety, quality & compliance"],
              ].map(([value, label]) => (
                <div key={label} className="py-7 lg:px-6">
                  <dt className="font-display text-2xl font-semibold text-accent">{value}</dt>
                  <dd className="mt-1 text-sm text-primary-foreground/70">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
                A trusted trading &amp; contracting partner in Qatar
              </h2>
              <p className="mt-5 text-muted-foreground">
                Terrestrial Contracting W.L.L. is a premier contracting company specialising in
                skilled and unskilled manpower, high-end civil construction, advanced MEP systems
                and interior fit-out solutions. We combine technical expertise with refined
                craftsmanship to deliver exceptional projects.
              </p>
              <p className="mt-4 text-muted-foreground">
                We bridge the gap between global suppliers and local project needs — ensuring
                quality materials and equipment reach the right place at the right time.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  [
                    "Single-Source Support",
                    "Technical personnel, manpower rental and project delivery under one roof.",
                  ],
                  [
                    "Practical Positioning",
                    "Prompt service, flexible support and a solution-oriented approach.",
                  ],
                  [
                    "Qatar Market Expertise",
                    "Deep understanding of local regulations, procurement channels and supplier networks.",
                  ],
                  [
                    "Trading + Contracting",
                    "A combined approach that gives clients a seamless single-source experience.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="rule-accent pl-4">
                    <h3 className="font-display text-lg font-semibold uppercase text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={fitoutImage}
                alt="Luxury five-star hotel lobby with marble flooring and decorative ceiling"
                loading="lazy"
                width={1280}
                height={912}
                className="w-full rounded-sm object-cover shadow-[var(--shadow-elevated)]"
              />
            </div>
          </div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="bg-secondary py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Vision, Mission &amp; Values</SectionLabel>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="rounded-sm bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-2xl font-semibold uppercase text-foreground">Our Vision</h3>
                <p className="mt-3 text-muted-foreground">
                  To become a reliable trading and contracting organisation in the Middle East,
                  maintaining professional, ethical and quality assurance standards.
                </p>
              </div>
              <div className="rounded-sm bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-2xl font-semibold uppercase text-foreground">Our Mission</h3>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  {[
                    "Deliver world-class construction and fit-out solutions",
                    "Maintain superior quality and craftsmanship",
                    "Ensure timely and efficient project execution",
                    "Build long-term relationships with valued clients",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                U &amp; I CARE Values
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {VALUES.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-4"
                  >
                    <CheckCircle2 className="size-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel>Our Core Services</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
                Comprehensive solutions across every phase of your project
              </h2>
              <p className="mt-4 text-muted-foreground">
                From civil construction to MEP systems, interior fit-out to general trading.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <article key={service.title} className="bg-card p-8">
                  <service.icon className="size-8 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-xl font-semibold uppercase text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MEP & Civil detail */}
        <section className="bg-surface py-20 text-surface-foreground lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <img
              src={mepImage}
              alt="Engineer inspecting HVAC ducting and electrical panels in a plant room"
              loading="lazy"
              width={1280}
              height={912}
              className="w-full rounded-sm object-cover"
            />
            <div>
              <SectionLabel>Civil &amp; MEP Capability</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold uppercase sm:text-4xl">
                Engineering depth on every discipline
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase text-accent">
                    Civil Contracting
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-surface-foreground/80">
                    {[
                      "Hotel service & maintenance",
                      "High-end villa development",
                      "Schools & institutional buildings",
                      "Structural & architectural works",
                      "Renovations & extensions",
                      "Labour camps, fencing & paving",
                    ].map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase text-accent">
                    MEP Services
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-surface-foreground/80">
                    {[
                      "HVAC for large-scale facilities",
                      "Electrical systems & smart controls",
                      "Plumbing & drainage systems",
                      "Fire alarm & firefighting systems",
                      "Testing, commissioning & maintenance",
                      "Supply of M&E and fire safety items",
                    ].map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manpower */}
        <section id="manpower" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel>Manpower &amp; Support Services</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
                Certified people, ready for mobilisation
              </h2>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Professional & Technical Staff",
                    items: [
                      "Engineers (Civil, MEP, Structural)",
                      "QC personnel, IT & support staff",
                      "HSE officers, technicians",
                      "Supervisors & site managers",
                    ],
                  },
                  {
                    title: "Skilled & General Labour",
                    items: [
                      "Skilled & semi-skilled labourers",
                      "Drivers (light & heavy vehicle)",
                      "Welders (MIG, TIG, Arc), carpenters",
                      "Steel fixers, masons, painters, helpers",
                    ],
                  },
                  {
                    title: "Waste & Water Services",
                    items: [
                      "Drinking water, sewage & vacuum tankers",
                      "Skip removal & dewatering",
                      "TSE water, wastewater & jetting",
                    ],
                  },
                  {
                    title: "Construction Support",
                    items: [
                      "Sub-base & filling materials supply",
                      "General maintenance, cleaning, security",
                      "Pest control, landscaping, fire alarm & CCTV",
                    ],
                  },
                ].map((block) => (
                  <div
                    key={block.title}
                    className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                  >
                    <h3 className="font-display text-lg font-semibold uppercase text-foreground">
                      {block.title}
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {block.items.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="rule-accent bg-secondary p-4 text-sm text-muted-foreground sm:col-span-2">
                  All manpower is supplied with valid Qatar ID, medical insurance and relevant trade
                  certifications as required.
                </p>
              </div>
              <img
                src={manpowerImage}
                alt="Site engineers and construction workers in safety gear"
                loading="lazy"
                width={1280}
                height={912}
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </section>

        {/* Facility Management */}
        <section className="bg-secondary py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Facility Management</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Hard &amp; soft FM under one contract
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-sm bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold uppercase text-foreground">
                  Hard FM — Physical infrastructure
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>· Building maintenance: roofs, walls, flooring</li>
                  <li>· M&amp;E systems: HVAC, lighting, elevators</li>
                  <li>· Plumbing: water supply, drainage, effluent systems</li>
                </ul>
              </div>
              <div className="rounded-sm bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold uppercase text-foreground">
                  Soft FM — People-focused services
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>· Cleaning: janitorial, deep cleaning, waste management</li>
                  <li>· Housekeeping: daily cleaning, sanitisation, pantry upkeep</li>
                  <li>· Waste disposal that protects assets and reduces downtime</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trading */}
        <section id="trading" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel>General Trading &amp; Supply</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
                Sourcing the right products. Delivering on time.
              </h2>
              <p className="mt-4 text-muted-foreground">
                As an active general trading entity in Qatar, we ensure quality materials and
                equipment reach the right place at the right time.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TRADING.map((item) => (
                <article
                  key={item.title}
                  className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                >
                  <item.icon className="size-7 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 text-lg font-semibold uppercase text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase text-foreground sm:text-4xl">
              Safety. Quality. Excellence.
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              We follow strict Health, Safety, Environment &amp; Quality standards — ensuring every
              project is completed safely, efficiently and to the highest level of excellence.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((item) => (
                <div key={item.title} className="flex items-center gap-4 bg-card px-6 py-7">
                  <item.icon className="size-6 shrink-0 text-accent" strokeWidth={1.5} />
                  <span className="font-display text-lg font-semibold uppercase text-foreground">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h3 className="font-display text-lg font-semibold uppercase text-foreground">
                Trusted by leaders across sectors
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Hospitality Groups · Luxury Developers · Villa Owners · Educational Institutions ·
                Oil &amp; Gas Companies · Commercial Enterprises · Industrial Contractors
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-primary py-20 text-primary-foreground lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionLabel>Contact Us</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold uppercase sm:text-4xl">
                Let&apos;s build with confidence
              </h2>
              <p className="mt-4 max-w-lg text-primary-foreground/75">
                Share your project scope or manpower requirement and our team will respond with a
                clear, competitive proposal.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+97441464546"
                className="rounded-sm border border-primary-foreground/20 p-6 transition-colors hover:border-accent"
              >
                <Phone className="size-5 text-accent" />
                <p className="mt-3 text-sm text-primary-foreground/60">Telephone / Mobile</p>
                <p className="font-display text-xl font-semibold">4146 4546</p>
                <p className="font-display text-xl font-semibold">3024 5384</p>
              </a>
              <a
                href="mailto:info@terrestrialqatar.com"
                className="rounded-sm border border-primary-foreground/20 p-6 transition-colors hover:border-accent"
              >
                <Mail className="size-5 text-accent" />
                <p className="mt-3 text-sm text-primary-foreground/60">Email</p>
                <p className="text-base font-medium break-all">info@terrestrialqatar.com</p>
                <p className="text-base font-medium break-all">terrestrial2024@gmail.com</p>
              </a>
              <div className="rounded-sm border border-primary-foreground/20 p-6 sm:col-span-2">
                <MapPin className="size-5 text-accent" />
                <p className="mt-3 text-sm text-primary-foreground/60">Address</p>
                <p className="text-base font-medium">P.O. Box 35371, Doha, Qatar</p>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  Registration: C.R. No. 65663
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
