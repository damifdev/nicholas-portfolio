/*
 * INK & EMBER — Selected Work: editorial project cards with large previews,
 * cursor-parallax image response, scale-on-hover, varied layouts (large/small
 * alternating), case-study dialog.
 */
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/lib/data";
import { PROJECTS } from "@/lib/data";

/* ---------------- reusable heading ---------------- */
export function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
}: {
  index: string;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal mb-12 lg:mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-[var(--ember)]">{index}</span>
        <span className="hairline h-[1px] w-14" />
        <span className="micro-label">{kicker}</span>
      </div>
      <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

/* ---------------- project card ---------------- */
function ProjectCard({
  project,
  variant,
  onOpen,
}: {
  project: Project;
  variant: "large" | "small";
  onOpen: (p: Project) => void;
}) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  return (
    <article
      className="reveal group relative"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
      }}
      style={{ ["--reveal-delay" as string]: variant === "large" ? "0ms" : "120ms" }}>
      <button
        data-cursor="magnet"
        data-cursor-project
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`View case study: ${project.title}`}>
        {/* Preview */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — project preview`}
            loading="lazy"
            className={`aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              variant === "large" ? "lg:aspect-[16/10]" : ""
            }`}
            style={{
              transform: `scale(${1 + (Math.abs(mouse.x - 0.5) * 0.06).toFixed(3)}) translate(${((mouse.x - 0.5) * 10).toFixed(1)}px, ${((mouse.y - 0.5) * 8).toFixed(1)}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 border border-foreground/30 bg-[#141311]/70 px-3 py-1.5 font-mono text-[10px] tracking-widest text-foreground backdrop-blur-sm transition-colors duration-300 group-hover:border-[var(--ember)] group-hover:text-[var(--ember)]">
            View Project <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>

        {/* Meta */}
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[var(--ember)] md:text-3xl">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="micro-label text-[var(--ember)]">{project.category}</span>
          <span className="text-muted-foreground">{project.role}</span>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="border border-border px-2.5 py-1 font-mono text-[11px] text-foreground/70">
              {t}
            </span>
          ))}
        </div>
      </button>
    </article>
  );
}

/* ---------------- case study dialog ---------------- */
function CaseStudyDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-[#0a0909]/85 p-4 backdrop-blur-sm md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
      onClick={onClose}>
      <div
        className="relative w-full max-w-3xl bg-[#171614] border border-border"
        onClick={(e) => e.stopPropagation()}>
        <img src={project.image} alt={project.title} className="aspect-[16/9] w-full object-cover" />
        {project.gallery && project.gallery.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-border bg-[#0a0909] p-3">
            {project.gallery.map((g, i) => (
              <img
                key={`${g}-${i}`}
                src={g}
                alt={`${project.title} screen ${i + 1}`}
                loading="lazy"
                className="h-28 w-auto shrink-0 border border-border object-contain transition-opacity duration-200 hover:opacity-80 sm:h-36"
              />
            ))}
          </div>
        )}
        <button
          onClick={onClose}
          data-cursor="magnet"
          aria-label="Close case study"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-border bg-[#141311] transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)]">
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <span className="micro-label text-[var(--ember)]">{project.category}</span>
            <span className="text-muted-foreground">{project.role}</span>
          </div>

          <dl className="mt-8 space-y-6">
            {([
              ["Overview", project.caseStudy.overview],
              ["Problem", project.caseStudy.problem],
              ["Role", project.caseStudy.roleDesc],
              ["Design", project.caseStudy.design],
              ["Outcome", project.caseStudy.outcome],
              ["Reflection", project.caseStudy.reflection],
            ] as [string, string][]).map(([k, v]) => (
              <div key={k}>
                <dt className="micro-label mb-2 text-[var(--ember)]">{k}</dt>
                <dd className="text-sm leading-relaxed text-foreground/85 md:text-base">{v}</dd>
              </div>
            ))}
            <div>
              <dt className="micro-label mb-2 text-[var(--ember)]">Process</dt>
              <dd className="space-y-2">
                {project.caseStudy.process.map((step, i) => (
                  <div key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85 md:text-base">
                    <span className="font-mono text-xs text-muted-foreground pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
            {project.tech.map((t) => (
              <span key={t} className="border border-border px-2.5 py-1 font-mono text-[11px]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- grid ---------------- */
export default function SelectedWork() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="02"
          kicker="Selected Work"
          title={"Work that solves real problems."}
          subtitle="Digital products, interfaces and experiences I've designed and built — from insurance platforms to WordPress systems."
        />

        <p className="reveal mb-14 max-w-2xl font-display text-2xl italic leading-snug tracking-tight text-foreground/70 md:text-3xl" style={{ ["--reveal-delay" as string]: "150ms" }}>
          "I don't ship screenshots. I ship products people can actually use — and I can build what I design."
        </p>

        <div className="space-y-16 lg:space-y-20">
          {PROJECTS.map((p, i) => (
            <div
              key={p.slug}
              className={`grid gap-8 lg:grid-cols-12 lg:gap-12 ${i % 2 === 1 ? "" : ""}`}>
              <div
                className={`lg:col-span-8 ${i % 2 === 1 ? "lg:col-start-5" : "lg:col-start-1"}`}>
                <ProjectCard
                  project={p}
                  variant={i % 3 === 0 ? "large" : "small"}
                  onOpen={setOpen}
                />
              </div>
              {i % 3 === 0 && p.highlight && (
                <div className="reveal hidden flex-col justify-center lg:col-span-3 lg:col-start-9 lg:flex" style={{ ["--reveal-delay" as string]: "160ms" }}>
                  <span className="hairline mb-4" />
                  <span className="micro-label mb-3 text-[var(--ember)]">Focus</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.highlight}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <CaseStudyDialog project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
