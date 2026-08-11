/*
 * INK & EMBER — AI-Assisted Creative Projects: concept gallery with
 * clearly-marked placeholders (never invented results). Editorial layout,
 * typography-led, no neon/robotic imagery. Prompt-snippet styling.
 */
import { useState } from "react";
import { X } from "lucide-react";
import { SectionHeading } from "./SelectedWork";
import { AI_PROJECTS, type AiProject } from "@/lib/data";

/* ---------------- concept card ---------------- */
function AiProjectCard({
  project,
  onOpen,
  variant,
}: {
  project: AiProject;
  onOpen: (p: AiProject) => void;
  variant: "large" | "small";
}) {
  return (
    <article className="reveal group relative">
      <button
        data-cursor="magnet"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`View experiment: ${project.title}`}>
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — AI concept exploration`}
            loading="lazy"
            className={`aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              variant === "large" ? "lg:aspect-[16/10]" : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/80 via-transparent to-transparent" />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 border border-[var(--ember)]/60 bg-[#141311]/70 px-3 py-1.5 font-mono text-[10px] tracking-widest text-[var(--ember)] backdrop-blur-sm transition-colors duration-300 group-hover:border-[var(--ember)]">
            AI CONCEPT — CONCEPT WORK
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[var(--ember)] md:text-3xl">
            {project.title}
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-4 text-sm">
          <span className="micro-label text-[var(--ember)]">{project.kind}</span>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.concept}
        </p>
      </button>
    </article>
  );
}

/* ---------------- experiment dialog ---------------- */
function ExperimentDialog({
  project,
  onClose,
}: {
  project: AiProject | null;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-[#0a0909]/85 p-4 backdrop-blur-sm md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`Experiment: ${project.title}`}
      onClick={onClose}>
      <div
        className="relative w-full max-w-3xl border border-border bg-[#171614]"
        onClick={(e) => e.stopPropagation()}>
        <img src={project.image} alt={project.title} className="aspect-[16/9] w-full object-cover" />
        <button
          onClick={onClose}
          data-cursor="magnet"
          aria-label="Close experiment"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-border bg-[#141311] transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)]">
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 md:p-10">
          <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <span className="mt-3 inline-block border border-[var(--ember)]/50 px-3 py-1 font-mono text-[10px] tracking-widest text-[var(--ember)]">
            AI CONCEPT — EXPLORATION, NOT CLIENT WORK
          </span>

          <dl className="mt-8 space-y-6">
            {([
              ["Concept", project.concept],
              ["Tool / Workflow", project.tool],
              ["Result", project.result],
            ] as [string, string][]).map(([k, v]) => (
              <div key={k}>
                <dt className="micro-label mb-2 text-[var(--ember)]">{k}</dt>
                <dd className="text-sm leading-relaxed text-foreground/85 md:text-base">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            This is concept work — a creative exploration using AI-assisted
            workflows. It demonstrates direction and craft, and is available as
            a starting point for real brand or product commissions.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- section ---------------- */
export function AiProjectsSection() {
  const [open, setOpen] = useState<AiProject | null>(null);

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="09"
          kicker="AI-Assisted Creative Projects"
          title="Selected AI experiments."
          subtitle="Creative explorations produced with AI-assisted workflows — clearly marked as concept work. Every output is shaped and curated by human design judgment."
        />

        <div className="space-y-16 lg:space-y-20">
          {AI_PROJECTS.map((p, i) => (
            <div key={p.title} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:col-start-5" : "lg:col-start-1"}`}>
                <AiProjectCard project={p} variant={i % 2 === 0 ? "large" : "small"} onOpen={setOpen} />
              </div>
              <div className="hidden flex-col justify-center lg:col-span-3 lg:col-start-9 lg:flex">
                <span className="hairline mb-4" />
                <span className="micro-label mb-3 text-[var(--ember)]">Concept → Tool → Result</span>
                <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-foreground/70">Tool</p>
                  <p>{p.tool}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ExperimentDialog project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
