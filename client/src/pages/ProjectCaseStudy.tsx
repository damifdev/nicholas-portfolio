/*
 * INK & EMBER — Generic Project Case Study page.
 * Renders any project's existing case-study content (from data.ts) as a full
 * editorial page: hero, gallery strip, meta details, behance/live/source
 * links, overview, design challenge, role, process, design, outcome,
 * reflection and tech stack. Content is reused as-is; no text changes.
 * Route: /project/:slug
 */
import { useEffect, useMemo } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "wouter";
import { PROJECTS, type Project } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { Footer } from "@/components/PersonalityCvContact";
import NotFound from "@/pages/NotFound";

function Kicker({ n, label }: { n: string; label: string }) {
  return (
    <div className="reveal mb-10 flex items-center gap-4">
      <span className="font-mono text-xs text-[var(--ember)]">{n}</span>
      <span className="hairline h-[1px] w-14" />
      <span className="micro-label">{label}</span>
    </div>
  );
}

export default function ProjectCaseStudy() {
  useReveal();
  const params = useParams<{ slug: string }>();
  const project: Project | undefined = useMemo(
    () => PROJECTS.find((p) => p.slug === params.slug),
    [params.slug]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project?.slug]);

  if (!project) return <NotFound />;

  const heroImage = project.gallery && project.gallery.length > 0 ? project.gallery[0] : project.image;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />

      <main>
        {/* ============ HERO ============ */}
        <section className="pt-28 md:pt-36">
          <div className="container">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/#work`;
              }}
              className="reveal group mb-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-foreground/60 transition-colors duration-300 hover:text-[var(--ember)]">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              BACK TO WORK
            </Link>

            <div className="reveal reveal-clip" style={{ ["--reveal-delay" as string]: "60ms" }}>
              <p className="micro-label mb-5 text-[var(--ember)]">
                {project.category.toUpperCase()}
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl font-display text-xl italic leading-snug tracking-tight text-foreground/70 md:text-2xl">
                {project.description}
              </p>
            </div>

            {/* Meta + links row */}
            <div
              className="reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-border py-5"
              style={{ ["--reveal-delay" as string]: "120ms" }}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                <span className="text-foreground/80">{project.role}</span>
                {project.published && (
                  <span className="text-muted-foreground">Published {project.published}</span>
                )}
              </div>
              <div className="ml-auto flex flex-wrap items-center gap-4">
                {project.behance && (
                  <a
                    href={project.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-foreground/70 transition-colors hover:text-[var(--ember)]">
                    VIEW ON BEHANCE
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 border border-[var(--ember)] bg-[var(--ember)] px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] text-[#141311] transition-all duration-300 hover:bg-transparent hover:text-[var(--ember)]">
                    VIEW LIVE PROJECT
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 border border-foreground/40 px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] text-foreground/80 transition-all duration-300 hover:border-[var(--ember)] hover:text-[var(--ember)]">
                    VIEW SOURCE
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Hero image */}
            <div
              className="reveal relative mt-14 overflow-hidden border border-border md:mt-16"
              style={{ ["--reveal-delay" as string]: "180ms" }}>
              <img
                src={heroImage}
                alt={`${project.title} — project preview`}
                className="w-full object-contain bg-[#0a0909]"
              />
            </div>

            {/* Gallery strip */}
            {project.gallery && project.gallery.length > 1 && (
              <div
                className="mt-6 flex gap-3 overflow-x-auto pb-2"
                style={{ ["--reveal-delay" as string]: "220ms" }}>
                {project.gallery.map((g, i) => (
                  <img
                    key={`${g}-${i}`}
                    src={g}
                    alt={`${project.title} screen ${i + 1}`}
                    loading="lazy"
                    className="h-32 w-auto shrink-0 border border-border object-contain transition-opacity duration-200 hover:opacity-80 sm:h-44"
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============ OVERVIEW ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="01" label="Project Overview" />
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal lg:col-span-7">
                <p className="max-w-xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                  {project.caseStudy.overview}
                </p>
                {project.highlight && (
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    <span className="micro-label mb-2 block text-[var(--ember)]">Focus</span>
                    {project.highlight}
                  </p>
                )}
              </div>
              <div
                className="reveal lg:col-span-5"
                style={{ ["--reveal-delay" as string]: "120ms" }}>
                <dl className="divide-y divide-border border-y border-border">
                  {[
                    ["Client / Context", project.year],
                    ["Role", project.role],
                    ...(project.published ? [["Published", project.published]] : []),
                    ["Tools & Tech", project.tech.join(" · ")],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-3 gap-4 py-3.5">
                      <dt className="micro-label text-[var(--ember)]">{k}</dt>
                      <dd className="col-span-2 text-sm leading-relaxed text-foreground/85">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DESIGN CHALLENGE ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="02" label="Design Challenge" />
            <div className="reveal">
              <p className="max-w-3xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                {project.caseStudy.problem}
              </p>
            </div>
          </div>
        </section>

        {/* ============ ROLE ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="03" label="My Role" />
            <div className="reveal">
              <p className="max-w-2xl text-sm leading-relaxed text-foreground/85 md:text-base">
                {project.caseStudy.roleDesc}
              </p>
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="04" label="Process" />
            <ol className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {project.caseStudy.process.map((step, i) => (
                <li
                  key={i}
                  className="reveal bg-background p-7"
                  style={{ ["--reveal-delay" as string]: `${(i % 2) * 90}ms` }}>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--ember)]">
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85 md:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ DESIGN ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="05" label="Design" />
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="reveal lg:col-span-5">
                <h3 className="max-w-md font-display text-3xl font-medium tracking-tight md:text-4xl">
                  {project.title}
                </h3>
              </div>
              <div className="reveal lg:col-span-7" style={{ ["--reveal-delay" as string]: "120ms" }}>
                <p className="max-w-2xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  {project.caseStudy.design}
                </p>
              </div>
            </div>

            {/* Gallery */}
            {(project.gallery ?? []).length > 0 && (
              <div className="mt-14 space-y-8">
                {(project.gallery ?? []).map((g, i) => (
                  <figure
                    key={`${g}-${i}`}
                    className="reveal overflow-hidden border border-border"
                    style={{ ["--reveal-delay" as string]: "100ms" }}>
                    <img
                      src={g}
                      alt={`${project.title} — screen ${i + 1}`}
                      loading="lazy"
                      className="w-full object-contain bg-[#0a0909]"
                    />
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============ OUTCOME & REFLECTION ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="06" label="Outcome & Reflection" />
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="reveal">
                <span className="micro-label mb-3 block text-[var(--ember)]">OUTCOME</span>
                <p className="font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                  {project.caseStudy.outcome}
                </p>
              </div>
              <div className="reveal" style={{ ["--reveal-delay" as string]: "120ms" }}>
                <span className="micro-label mb-3 block text-[var(--ember)]">REFLECTION</span>
                <p className="text-sm leading-relaxed text-foreground/85 md:text-base">
                  {project.caseStudy.reflection}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TECH STACK ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="07" label="Tools & Tech" />
            <div className="reveal flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="border border-border px-4 py-2 font-mono text-xs text-foreground/80 transition-colors duration-300 hover:border-[var(--ember)] hover:text-[var(--ember)]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ NEXT PROJECT NAV ============ */}
        <section className="border-t border-border bg-[#11100e] py-16 md:py-20">
          <div className="container">
            <div className="reveal flex flex-wrap items-center justify-between gap-6">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/#work`;
                }}
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-foreground/60 transition-colors duration-300 hover:text-[var(--ember)]">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                VIEW ALL WORK
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-[var(--ember)] bg-[var(--ember)] px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] text-[#141311] transition-all duration-300 hover:bg-transparent hover:text-[var(--ember)]">
                  VIEW LIVE PROJECT
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
