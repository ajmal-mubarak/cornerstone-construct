import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, FileText } from "lucide-react";

const LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Manpower", to: "/manpower" },
  { label: "Trading", to: "/trading" },
  { label: "Contact", to: "/contact" },
];

const SERVICES = [
  "Civil Contracting",
  "MEP & Electrical",
  "Interior Fit-Out",
  "Manpower Supply",
  "Facility Management",
  "General Trading",
];

export function SiteFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="container-pad grid gap-12 py-16 lg:grid-cols-[2fr_1fr_1fr_1.4fr] lg:py-20">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-display text-base font-bold text-accent-foreground">
              TC
            </span>
            <span>
              <p className="font-display text-base font-semibold uppercase tracking-wide text-surface-foreground">
                Terrestrial Contracting
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-surface-foreground/50">
                W.L.L. · Doha, Qatar
              </p>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-surface-foreground/60">
            A Qatar-based contracting company delivering integrated civil
            construction, MEP, interior fit-out, and trading solutions since 2014.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Navigation
          </h3>
          <ul className="mt-5 space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-surface-foreground/65 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Services
          </h3>
          <ul className="mt-5 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s} className="text-sm text-surface-foreground/65">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </h3>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent/70" strokeWidth={1.6} />
              <span className="text-sm text-surface-foreground/65">
                P.O. Box 35371<br />Doha, State of Qatar
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-accent/70" strokeWidth={1.6} />
              <span className="text-sm">
                <a href="tel:+97441464546" className="text-surface-foreground/65 hover:text-accent transition-colors">
                  4146 4546
                </a>
                {" · "}
                <a href="tel:+97430245384" className="text-surface-foreground/65 hover:text-accent transition-colors">
                  3024 5384
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-accent/70" strokeWidth={1.6} />
              <a
                href="mailto:info@terrestrialqatar.com"
                className="text-sm text-surface-foreground/65 hover:text-accent transition-colors"
              >
                info@terrestrialqatar.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FileText className="size-4 shrink-0 text-accent/70" strokeWidth={1.6} />
              <span className="text-sm text-surface-foreground/65">C.R. No. 65663</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-foreground/10">
        <div className="container-pad flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-surface-foreground/40">
            © {new Date().getFullYear()} Terrestrial Contracting W.L.L. All rights reserved.
          </p>
          <p className="text-xs text-surface-foreground/30">Doha, Qatar · Est. 2014</p>
        </div>
      </div>
    </footer>
  );
}
