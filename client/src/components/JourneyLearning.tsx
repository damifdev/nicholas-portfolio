/*
 * INK & EMBER — Journey (animated vertical timeline), Currently Becoming
 * (completed vs in-progress certifications clearly separated), and
 * Experience section.
 */
import { useEffect, useRef } from "react";
import { SectionHeading } from "./SelectedWork";
import { JOURNEY_STEPS, EXPERIENCE, CERTIFICATIONS } from "@/lib/data";
import { Award, BookOpenCheck } from "lucide-react";

export function JourneySection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scaleY(1)";
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="journey" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="06"
          kicker="Journey"
          title="The path so far."
          subtitle="An interactive timeline of how a Computer Science graduate became a multidisciplinary technologist."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            ref={lineRef}
            className="absolute bottom-4 left-[7px] top-4 w-[1px] origin-top bg-[var(--ember)] transition-transform duration-[1600ms] ease-out md:left-[8px]"
            style={{ transform: "scaleY(0)", transitionTimingFunction: "cubic-bezier(0.77,0,0.175,1)" }}
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {JOURNEY_STEPS.map((step, i) => (
              <li key={step} className="reveal relative flex items-center gap-6 pl-14" style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
                <span
                  className="absolute left-0 top-1/2 flex h-[15px] w-[15px] -translate-y-1/2 items-center justify-center"
                  aria-hidden="true">
                  <span className="absolute inset-0 border border-[var(--ember)] bg-[#141311]" />
                  <span className="h-1.5 w-1.5 bg-[var(--ember)]" />
                </span>
                <span className="font-mono text-xs text-[var(--ember)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl font-medium tracking-tight md:text-3xl">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function BecomingSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="07"
          kicker="Currently Becoming"
          title="Investing in the next chapter."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Completed */}
          <div className="reveal">
            <div className="flex items-center gap-3">
              <BookOpenCheck className="h-4 w-4 text-[var(--ember)]" />
              <span className="micro-label text-[var(--ember)]">Completed</span>
            </div>
            <div className="mt-6 space-y-3">
              {CERTIFICATIONS.completed.map((c) => (
                <div key={c.name} className="border-l-2 border-[var(--ember)] bg-card px-5 py-4">
                  <p className="font-medium">{c.name}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">✓ CERTIFIED</p>
                </div>
              ))}
            </div>
          </div>
          {/* In progress */}
          <div className="reveal" style={{ ["--reveal-delay" as string]: "120ms" }}>
            <div className="flex items-center gap-3">
              <Award className="h-4 w-4 text-[var(--ember)]" />
              <span className="micro-label text-[var(--ember)]">Currently Learning</span>
            </div>
            <div className="mt-6 space-y-3">
              {CERTIFICATIONS.inProgress.map((c) => (
                <div key={c.name} className="border border-border px-5 py-4 transition-colors hover:border-[var(--ember)]/50">
                  <p className="font-medium text-foreground/85">{c.name}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">◌ IN PROGRESS</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="08"
          kicker="Experience"
          title="Where the craft was built."
        />
        <div className="divide-y divide-border border-y border-border">
          {EXPERIENCE.map((e, i) => (
            <div key={e.role} className="reveal grid gap-4 py-10 md:grid-cols-[1fr_2.2fr] md:gap-10" style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
              <div>
                <span className="font-mono text-xs text-[var(--ember)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium md:text-3xl">{e.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.company}</p>
              </div>
              <div>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {e.framing}
                </p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-[7px] h-1 w-4 shrink-0 bg-[var(--ember)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
