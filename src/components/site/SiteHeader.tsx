import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Manpower", to: "/manpower" },
  { label: "Trading", to: "/trading" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement / Operational Bar */}
      <div className="hidden border-b border-white/[0.08] bg-[#141A1F] px-4 py-1.5 text-xs text-[#9AA6B2] md:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="gold-dot" />
              <span className="font-medium text-[#D3D6DB]">Doha Operations Hub</span>
            </span>
            <span className="text-[#334756]">|</span>
            <span className="flex items-center gap-1.5 text-[#9AA6B2]">
              <ShieldCheck className="size-3.5 text-[#EAB526]" />
              <span>Certified Grade-A Contractor · C.R. No. 65663</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[#9AA6B2]">Sun - Thu: 07:30 - 17:30</span>
            <a
              href="tel:+97441464546"
              className="flex items-center gap-1 font-semibold text-[#EAB526] transition-colors hover:text-[#f3c64c]"
            >
              <Phone className="size-3" /> +974 4146 4546
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-250 ${
          scrolled
            ? "border-b border-[#334756]/60 bg-[#182026]/95 shadow-lg backdrop-blur-md"
            : "border-b border-white/[0.08] bg-[#182026]/85 backdrop-blur-sm"
        }`}
      >
        <div className="container-custom flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-[#285A7E] border border-[#334756] text-white shadow-md transition-transform duration-200 group-hover:scale-105">
              <span className="font-display text-lg font-black tracking-wider text-[#F0F3F6]">TC</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold tracking-tight text-[#F0F3F6] transition-colors group-hover:text-[#EAB526] sm:text-xl">
                  TERRESTRIAL
                </span>
                <span className="rounded bg-[#EAB526]/15 px-1.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-[#EAB526] border border-[#EAB526]/30">
                  W.L.L.
                </span>
              </div>
              <span className="text-[0.6875rem] font-medium tracking-[0.16em] uppercase text-[#9AA6B2]">
                Contracting & Trading · Qatar
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items with Sliding Pill Indicator */}
          <nav
            className="relative hidden items-center gap-1 rounded-full border border-[#334756]/80 bg-[#1E2730] p-1.5 lg:flex"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.to === "/" ? currentPath === "/" : currentPath.startsWith(item.to);
              const isHovered = hoveredPath === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredPath(item.to)}
                  className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isActive ? "text-[#EAB526] font-semibold" : "text-[#D3D6DB] hover:text-white"
                  }`}
                >
                  {/* Sliding hover indicator */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 z-[-1] rounded-full bg-[#334756]/70"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Active Route Pill */}
                  {isActive && !isHovered && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 z-[-1] rounded-full bg-[#285A7E]/60 border border-[#EAB526]/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#EAB526] px-5 py-2.5 text-sm font-bold text-[#182026] shadow-md transition-all duration-200 hover:bg-[#f3c64c] hover:shadow-lg active:scale-95"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
            className="flex size-11 items-center justify-center rounded-xl border border-[#334756] bg-[#202A32] text-[#D3D6DB] transition-colors hover:text-white lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-6 text-[#EAB526]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="size-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Full Screen Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-b border-[#334756] bg-[#182026] shadow-2xl lg:hidden"
            >
              <div className="container-custom flex flex-col gap-2 py-6">
                {NAV_ITEMS.map((item, index) => {
                  const isActive =
                    item.to === "/" ? currentPath === "/" : currentPath.startsWith(item.to);

                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.2 }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                          isActive
                            ? "bg-[#285A7E]/40 text-[#EAB526] border border-[#EAB526]/30"
                            : "text-[#D3D6DB] hover:bg-[#202A32] hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className={`size-4 ${isActive ? "text-[#EAB526]" : "text-[#9AA6B2]"}`} />
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#EAB526] px-5 py-3.5 text-base font-bold text-[#182026]"
                  >
                    <span>Request a Quotation</span>
                    <ArrowUpRight className="size-4" />
                  </Link>

                  <div className="flex items-center justify-around rounded-xl bg-[#202A32] p-3 text-xs text-[#9AA6B2] border border-[#334756]">
                    <a href="tel:+97441464546" className="flex items-center gap-1.5 hover:text-[#EAB526]">
                      <Phone className="size-3.5 text-[#EAB526]" />
                      <span>Tel: 4146 4546</span>
                    </a>
                    <span>|</span>
                    <a href="tel:+97430245384" className="flex items-center gap-1.5 hover:text-[#EAB526]">
                      <span>Mob: 3024 5384</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
