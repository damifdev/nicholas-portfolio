/*
 * INK & EMBER — transparent overlay nav initially, becomes solid near-black
 * on scroll. Numbered micro-labels, magnetic "Let's Talk" CTA, elegant mobile
 * menu with full-height curtain.
 */
import { useEffect, useState } from "react";
import { ASSETS, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "bg-[#141311]/92 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
        role="banner">
        <div className="container flex h-16 items-center justify-between md:h-20">
          {/* Monogram / wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              goTo("#home");
            }}
            className="group flex items-center gap-3"
            aria-label="Home — Oluwadamilola Samson-Ajai">
            <img
              src={ASSETS.monogram}
              alt="OSA monogram"
              className="h-9 w-9 md:h-10 md:w-10"
              loading="eager"
            />
            <span className="hidden text-sm font-medium tracking-wide sm:block">
              Oluwadamilola <span className="text-muted-foreground">Samson-Ajai</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.slice(1).map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(l.href);
                }}
                data-cursor="magnet"
                className="micro-label text-[0.72rem] text-foreground/70 transition-colors duration-200 hover:text-[var(--ember)]">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right CTA + burger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goTo("#contact");
              }}
              data-cursor="magnet"
              className="magnetic-btn micro-label hidden items-center gap-1.5 text-[0.72rem] font-semibold text-[var(--ember)] transition-opacity duration-200 hover:opacity-80 sm:inline-flex">
              Let's Talk <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              data-cursor="magnet"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden">
              <span
                className={`h-[1.5px] w-6 bg-foreground transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-[1.5px] w-6 bg-foreground transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile curtain */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-[#141311] px-8 transition-all duration-500 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}>
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.id}
            href={l.href}
            onClick={(e) => {
              e.preventDefault();
              goTo(l.href);
            }}
            className={`group flex items-baseline gap-4 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}>
            <span className="font-mono text-xs text-[var(--ember)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-4xl font-medium">{l.label}</span>
          </a>
        ))}
      </div>
    </>
  );
}
