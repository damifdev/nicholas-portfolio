/*
 * INK & EMBER — About: multidisciplinary technologist narrative, career
 * evolution rail, "currently exploring" cluster. Skills: interactive
 * category clusters (expandable), no proficiency bars.
 */
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SelectedWork";
import {
  ASSETS,
  SKILL_GROUPS,
  LEARNING_TOPICS,
  PROCESS_STEPS,
} from "@/lib/data";

const EVOLUTION = [
  { step: "IT Support", desc: "Foundations in hardware, software and user support." },
  { step: "UI/UX Design", desc: "Interfaces, user flows and product thinking." },
  { step: "Web Development", desc: "WordPress and responsive front-end craft." },
  { step: "Software Development", desc: "Building functional digital experiences end to end." },
  { step: "AI & Cybersecurity", desc: "The current direction: AI, automation and secure systems." },
];

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border py-24 md:py-32">
      <img
        src={ASSETS.divider}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 hidden h-16 w-full object-cover opacity-40 md:block"
        loading="lazy"
      />
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              index="03"
              kicker="About"
              title="A multidisciplinary technologist."
            />
            <p className="reveal font-display text-xl leading-relaxed tracking-tight md:text-2xl" style={{ ["--reveal-delay" as string]: "100ms" }}>
              I'm a Computer Science graduate and multidisciplinary technology
              professional — spanning{" "}
              <em className="italic text-[var(--ember)]">UI/UX design</em>,
              frontend development, WordPress development and digital product
              creation.
            </p>
            <p
              className="reveal mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
              style={{ ["--reveal-delay" as string]: "200ms" }}>
              I sit at the intersection of Design × Development × Technology,
              with a growing focus on AI, automation and cybersecurity. I solve
              problems, not just make things look good — and I'm deliberately
              becoming more versatile with every project.
            </p>
          </div>

          <div className="reveal" style={{ ["--reveal-delay" as string]: "300ms" }}>
            <span className="micro-label mb-6 block text-[var(--ember)]">Career Evolution</span>
            <ol className="space-y-0">
              {EVOLUTION.map((e, i) => (
                <li key={e.step} className="group relative border-l border-border py-4 pl-6 transition-colors hover:border-[var(--ember)]">
                  <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 bg-[#141311] border border-[var(--ember)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-medium">{e.step}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="reveal mb-20 mt-16 max-w-2xl font-display text-2xl italic leading-snug tracking-tight text-foreground/70 md:text-3xl" style={{ ["--reveal-delay" as string]: "100ms" }}>
          "Design and code are the same craft to me — two languages for the same thinking."
        </p>

        {/* Currently exploring */}
        <div className="reveal mt-20 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16" style={{ ["--reveal-delay" as string]: "100ms" }}>
          <div>
            <span className="micro-label text-[var(--ember)]">Currently Exploring</span>
            <h3 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl">
              The next layer of <em className="italic">the stack</em>.
            </h3>
            <img
              src={ASSETS.learningDirection}
              alt="Abstract network constellation representing learning directions"
              className="mt-6 w-full object-cover opacity-80"
              loading="lazy"
            />
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {LEARNING_TOPICS.map((t, i) => (
              <span
                key={t}
                className="reveal border border-border px-5 py-3 font-display text-lg transition-colors duration-300 hover:border-[var(--ember)] hover:text-[var(--ember)] md:text-xl"
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
export function SkillsSection() {
  const [active, setActive] = useState("A");

  return (
    <section id="skills" className="relative border-t border-border py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="04"
          kicker="Skills"
          title="Tools of the trade."
          subtitle="Organised by discipline — hover or tap a category to explore. No proficiency bars; a tool is either in my hands or it isn't."
        />

        <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          {/* Category selectors */}
          <nav className="reveal flex gap-2 overflow-x-auto lg:flex-col lg:gap-1" aria-label="Skill categories">
            {SKILL_GROUPS.map((g) => (
              <button
                key={g.index}
                onClick={() => setActive(g.index)}
                data-cursor="magnet"
                className={`group flex shrink-0 items-baseline gap-3 border-b border-border py-4 text-left transition-colors duration-300 lg:border-b-0 lg:border-l lg:px-5 ${
                  active === g.index
                    ? "text-[var(--ember)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={active === g.index}>
                <span className="font-mono text-xs">{g.index}</span>
                <span className="font-display text-xl md:text-2xl">{g.category}</span>
                <Plus className="ml-auto h-4 w-4 transition-transform duration-300 group-hover:rotate-90 lg:hidden" />
              </button>
            ))}
          </nav>

          {/* Active cluster */}
          <div>
            {SKILL_GROUPS.map((g) => (
              <div
                key={g.index}
                role="region"
                aria-label={g.category}
                className={`grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 ${
                  active === g.index ? "block" : "hidden"
                }`}>
                {g.skills.map((s, i) => (
                  <div
                    key={s}
                    className="reveal flex h-24 flex-col justify-between border border-border p-4 transition-colors duration-300 hover:border-[var(--ember)]"
                    style={{ ["--reveal-delay" as string]: `${i * 45}ms` }}>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {g.index}.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{s}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
export function ProcessSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="05"
          kicker="Design Process"
          title="How I Think"
          subtitle="Problems first, pixels second. Every project moves through the same disciplined loop."
        />
        <ol className="grid gap-px border border-border bg-border md:grid-cols-5">
          {PROCESS_STEPS.map((s, i) => (
            <li
              key={s.index}
              className="reveal group bg-[#141311] p-6 transition-colors duration-300 hover:bg-[#1a1916] md:p-8"
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
              <span className="font-display text-3xl italic text-[var(--ember)] md:text-4xl">
                {s.index}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium md:text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
