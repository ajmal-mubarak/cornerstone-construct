import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
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
      {/* Top micro announcement bar */}
      <div className="hidden border-b border-white/[0.06] bg-slate-950/80 px-4 py-1.5 text-xs text-slate-400 backdrop-blur-md md:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="glow-dot" />
              <span className="font-medium text-slate-300">Doha Operations Hub</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="size-3.5 text-sky-400" />
              <span>Certified Grade-A Contractor · C.R. No. 65663</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-slate-400">Sun - Thu: 07:30 - 17:30 (GMT+3)</span>
            <a
              href="tel:+97441464546"
              className="flex items-center gap-1 font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              <Phone className="size-3" /> +974 4146 4546
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-sky-500/15 bg-slate-950/85 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.9)] backdrop-blur-xl"
            : "border-b border-white/[0.06] bg-slate-950/50 backdrop-blur-md"
        }`}
      >
        <div className="container-custom flex h-20 items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="relative flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 shadow-md shadow-sky-500/20 ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-sky-500/40">
              <span className="font-display text-lg font-black tracking-wider text-white">TC</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-sky-400 sm:text-xl">
                  TERRESTRIAL
                </span>
                <span className="rounded bg-sky-500/10 px-1.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-sky-400 border border-sky-500/20">
                  W.L.L.
                </span>
              </div>
              <span className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-slate-400">
                Contracting & Trading · Qatar
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items with Sliding Pill Indicator */}
          <nav
            className="relative hidden items-center gap-1 rounded-full border border-white/[0.08] bg-slate-900/60 p-1.5 backdrop-blur-lg lg:flex"
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
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {/* Sliding hover pill indicator */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 z-[-1] rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Active Route Pill */}
                  {isActive && !isHovered && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-sky-600/30 to-blue-600/30 border border-sky-400/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-sky-500/40 hover:brightness-110 active:scale-95"
            >
              <Sparkles className="size-4 text-sky-200 transition-transform duration-300 group-hover:rotate-12" />
              <span>Request Quotation</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
            className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-200 transition-colors hover:bg-slate-800 hover:text-white lg:hidden"
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
                  <X className="size-6 text-sky-400" />
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
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-b border-sky-500/20 bg-slate-950/95 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="container-custom flex flex-col gap-2 py-6">
                {NAV_ITEMS.map((item, index) => {
                  const isActive =
                    item.to === "/" ? currentPath === "/" : currentPath.startsWith(item.to);

                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.25 }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                          isActive
                            ? "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                            : "text-slate-300 hover:bg-slate-900 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className={`size-4 ${isActive ? "text-sky-400" : "text-slate-500"}`} />
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-500/25"
                  >
                    <span>Request a Proposal</span>
                    <ArrowUpRight className="size-4" />
                  </Link>

                  <div className="flex items-center justify-around rounded-xl bg-slate-900/60 p-3 text-xs text-slate-400 border border-white/5">
                    <a href="tel:+97441464546" className="flex items-center gap-1.5 hover:text-sky-400">
                      <Phone className="size-3.5 text-sky-400" />
                      <span>Tel: 4146 4546</span>
                    </a>
                    <span>|</span>
                    <a href="tel:+97430245384" className="flex items-center gap-1.5 hover:text-sky-400">
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
