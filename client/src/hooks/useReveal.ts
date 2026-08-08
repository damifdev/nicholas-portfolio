/*
 * INK & EMBER — IntersectionObserver-driven scroll reveal. Adds .revealed
 * when elements enter the viewport; collapses instantly under reduced motion.
 */
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    // Reveal above-the-fold elements immediately to avoid a frozen first paint
    document.querySelectorAll(".reveal, .reveal-clip").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("revealed");
    });
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.querySelectorAll(".reveal, .reveal-clip").forEach((el) =>
        el.classList.add("revealed"),
      );
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal, .reveal-clip").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
