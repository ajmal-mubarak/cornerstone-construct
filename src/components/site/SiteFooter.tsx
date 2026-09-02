import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  FileText,
  ArrowUp,
  ShieldCheck,
  Building2,
  ExternalLink,
  Clock,
  Sparkles
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services & MEP", to: "/services" },
  { label: "Manpower Supply", to: "/manpower" },
  { label: "General Trading", to: "/trading" },
  { label: "Contact & RFP", to: "/contact" },
];

const SERVICES = [
  { label: "Civil Contracting & Infrastructure", to: "/services" },
  { label: "MEP & Electrical Engineering", to: "/services" },
  { label: "Luxury Interior Fit-Out", to: "/services" },
  { label: "Certified Manpower Rental", to: "/manpower" },
  { label: "M&E Equipment & Industrial Trading", to: "/trading" },
  { label: "Integrated Facility Management", to: "/services" },
];

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-slate-950 text-slate-300">
      {/* Ambient background glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      <div className="absolute left-1/4 top-10 -z-10 size-72 rounded-full bg-sky-600/5 blur-[120px]" />

      {/* Top CTA Banner */}
      <div className="border-b border-white/[0.06] bg-slate-900/40">
        <div className="container-custom py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-sky-500/20 bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 p-8 shadow-2xl backdrop-blur-md md:flex-row md:items-center lg:p-10">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                <Sparkles className="size-4" />
                <span>Ready to Execute in Qatar?</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Partner with an established single-source contractor
              </h3>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                Receive comprehensive technical proposals, bill of quantities (BOQ) review, and dedicated Qatar project mobilization.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-105 hover:shadow-sky-500/40"
            >
              <span>Get Immediate Quotation</span>
              <ExternalLink className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company identity */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 font-display text-base font-bold text-white shadow-md shadow-sky-500/20">
                TC
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold tracking-tight text-white">
                  TERRESTRIAL
                </span>
                <span className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Contracting W.L.L.
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Doha-based contracting & general trading leader delivering world-class civil, electro-mechanical, turnkey luxury interiors, and project workforce solutions across Qatar since 2014.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900 px-2.5 py-1 text-[0.6875rem] font-medium text-slate-300">
                <ShieldCheck className="size-3.5 text-sky-400" />
                <span>C.R. 65663</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900 px-2.5 py-1 text-[0.6875rem] font-medium text-slate-300">
                <Building2 className="size-3.5 text-sky-400" />
                <span>Doha, Qatar</span>
              </span>
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Core Capabilities
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Doha HQ */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Qatar Head Office
            </h4>
            <ul className="mt-5 space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-sky-400" />
                <span>
                  P.O. Box 35371<br />
                  Doha, State of Qatar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-sky-400" />
                <div className="flex flex-col">
                  <a href="tel:+97441464546" className="hover:text-white transition-colors">
                    Tel: +974 4146 4546
                  </a>
                  <a href="tel:+97430245384" className="text-xs text-slate-400 hover:text-white transition-colors">
                    Mob: +974 3024 5384
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-sky-400" />
                <a
                  href="mailto:info@terrestrialqatar.com"
                  className="hover:text-white transition-colors"
                >
                  info@terrestrialqatar.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-sky-400" />
                <span>Sun - Thu: 07:30 - 17:30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] bg-slate-950 py-6">
        <div className="container-custom flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Terrestrial Contracting W.L.L. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>HSEQ & ISO Standards Aligned</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 font-semibold text-slate-400 transition-colors hover:text-sky-400"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
