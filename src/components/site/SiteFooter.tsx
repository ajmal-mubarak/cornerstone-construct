import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
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
    <footer className="relative border-t border-[#CBD2D9] bg-[#202930] text-[#EAEFF2]">
      {/* Top CTA Banner */}
      <div className="border-b border-white/[0.08] bg-[#1A2228]">
        <div className="container-custom py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#334756] bg-[#242F37] p-8 shadow-md md:flex-row md:items-center lg:p-10">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EAB526]">
                <Sparkles className="size-4" />
                <span>Ready to Execute in Qatar?</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F5F7F9] sm:text-3xl">
                Partner with an established single-source contractor
              </h3>
              <p className="mt-2 max-w-xl text-sm text-[#AAB5BF]">
                Receive comprehensive technical proposals, bill of quantities (BOQ) review, and dedicated Qatar project mobilization.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#285A7E] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#1f4764] hover:scale-105"
            >
              <span>Get Immediate Quotation</span>
              <ExternalLink className="size-4 text-[#EAB526]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Identity */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#285A7E] border border-[#334756] font-display text-base font-bold text-white shadow-sm">
                TC
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold tracking-tight text-[#F5F7F9]">
                  TERRESTRIAL
                </span>
                <span className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-[#AAB5BF]">
                  Contracting W.L.L.
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#AAB5BF]">
              Doha-based contracting & general trading leader delivering world-class civil, electro-mechanical, turnkey luxury interiors, and project workforce solutions across Qatar since 2014.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#334756] bg-[#28353E] px-2.5 py-1 text-[0.6875rem] font-medium text-[#EAEFF2]">
                <ShieldCheck className="size-3.5 text-[#EAB526]" />
                <span>C.R. 65663</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#334756] bg-[#28353E] px-2.5 py-1 text-[0.6875rem] font-medium text-[#EAEFF2]">
                <Building2 className="size-3.5 text-[#EAB526]" />
                <span>Doha, Qatar</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F5F7F9]">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-[#AAB5BF] transition-colors hover:text-[#EAB526]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F5F7F9]">
              Core Capabilities
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-[#AAB5BF] transition-colors hover:text-[#EAB526]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Doha HQ */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F5F7F9]">
              Qatar Head Office
            </h4>
            <ul className="mt-5 space-y-3.5 text-sm text-[#AAB5BF]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-[#EAB526]" />
                <span>
                  P.O. Box 35371<br />
                  Doha, State of Qatar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-[#EAB526]" />
                <div className="flex flex-col">
                  <a href="tel:+97441464546" className="hover:text-white transition-colors">
                    Tel: +974 4146 4546
                  </a>
                  <a href="tel:+97430245384" className="text-xs text-[#AAB5BF] hover:text-white transition-colors">
                    Mob: +974 3024 5384
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-[#EAB526]" />
                <a
                  href="mailto:info@terrestrialqatar.com"
                  className="hover:text-white transition-colors"
                >
                  info@terrestrialqatar.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-[#EAB526]" />
                <span>Sun - Thu: 07:30 - 17:30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08] bg-[#171E24] py-6">
        <div className="container-custom flex flex-col items-center justify-between gap-4 text-xs text-[#8D9CA8] sm:flex-row">
          <p>© {new Date().getFullYear()} Terrestrial Contracting W.L.L. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>HSEQ & ISO Standards Aligned</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 font-semibold text-[#CBD5E1] transition-colors hover:text-[#EAB526]"
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
