/*
 * INK & EMBER — Jigsaw Case Study.
 * Dark editorial case-study page for the Jigsaw puzzle game project.
 * Preserves the portfolio design language: Fraunces display type, Space
 * Grotesk micro-labels, ember accent (oklch(0.66 0.19 40)), ruled hairlines,
 * reveal-on-scroll animations, generous spacing. No fabricated metrics.
 */
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Clock,
  Hand,
  Layers,
  Maximize2,
  Puzzle,
  RotateCcw,
  Sparkles,
  Zap,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { Footer } from "@/components/PersonalityCvContact";
import { Link } from "wouter";

const LIVE_URL = "https://jigsawgame-jqutmfne.manus.space";
const SOURCE_URL = "https://github.com/damifdev/jigsaw-puzzle-game";

const IMG = {
  chooser: "/assets/jigsaw-puzzle_chooser_2161043e.webp",
  board: "/assets/jigsaw-gameplay_initial_207b45ce.webp",
  progress: "/assets/jigsaw-gameplay_progress_3cd51132.webp",
  complete: "/assets/jigsaw-gameplay_complete_8e332a14.webp",
  settings: "/assets/jigsaw-settings_modal_c75eb1b2.webp",
};

/* ------------------------------------------------------------------ */
/* Shared primitives (mirrors SelectedWork / Home editorial blocks)    */
/* ------------------------------------------------------------------ */

function Kicker({ n, label }: { n: string; label: string }) {
  return (
    <div className="reveal mb-10 flex items-center gap-4">
      <span className="font-mono text-xs text-[var(--ember)]">{n}</span>
      <span className="hairline h-[1px] w-14" />
      <span className="micro-label">{label}</span>
    </div>
  );
}

function CTAButtons({ primary = true }: { primary?: boolean }) {
  const btn =
    "group inline-flex items-center gap-2 border px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] transition-all duration-300";
  const base =
    "border-[var(--ember)] bg-[var(--ember)] text-[#141311] hover:bg-transparent hover:text-[var(--ember)]";
  const ghost =
    "border-foreground/40 text-foreground/80 hover:border-[var(--ember)] hover:text-[var(--ember)]";
  return (
    <div className="reveal flex flex-wrap items-center gap-4" style={{ ["--reveal-delay" as string]: "160ms" }}>
      <a
        href={LIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} ${base}`}>
        {primary ? "PLAY THE JIGSAW" : "VIEW LIVE PROJECT"}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
      <a
        href={SOURCE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} ${ghost}`}>
        VIEW SOURCE
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function JigsawCaseStudy() {
  useReveal();
  const [backScrollY, setBackScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />

      <main>
        {/* ============ 1. HERO ============ */}
        <section className="pt-28 md:pt-36">
          <div className="container">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/#work`;
              }}
              className="reveal group mb-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-foreground/60 transition-colors duration-300 hover:text-[var(--ember)]"
              style={{ ["--reveal-delay" as string]: "0ms" }}>
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              BACK TO WORK
            </Link>

            <div className="reveal reveal-clip" style={{ ["--reveal-delay" as string]: "60ms" }}>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="micro-label text-[var(--ember)]">GAME DESIGN · UI/UX · INTERACTION DESIGN · FRONTEND DEVELOPMENT</span>
                <span className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                  <Clock className="h-3 w-3 text-[var(--ember)]" />
                  4 MIN READ
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
                Jigsaw
              </h1>
              <p className="mt-6 max-w-2xl font-display text-xl italic leading-snug tracking-tight text-foreground/70 md:text-2xl">
                Redesigning the traditional jigsaw puzzle experience for the
                digital world.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                A modern, immersive jigsaw puzzle experience designed around
                intuitive interactions, visual clarity, progression, and
                seamless gameplay — designed and built as a fully playable web
                application.
              </p>
            </div>

            <div className="reveal mt-9" style={{ ["--reveal-delay" as string]: "120ms" }}>
              <CTAButtons />
            </div>

            <div
              className="reveal relative mt-14 overflow-hidden border border-border md:mt-16"
              style={{ ["--reveal-delay" as string]: "180ms" }}>
              <img
                src={IMG.board}
                alt="Jigsaw puzzle interface — empty board with piece tray, toolbar and progress panel"
                className="w-full object-contain bg-[#0a0909]"
              />
            </div>
          </div>
        </section>

        {/* ============ 2. PROJECT OVERVIEW ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="01" label="Project Overview" />
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal lg:col-span-7">
                <p className="max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  Jigsaw translates the quiet ritual of a physical puzzle —
                  spreading the pieces, hunting for edges, hearing the
                  satisfying settle of a correct placement — into a digital
                  workspace. The design pursues{" "}
                  <strong className="text-foreground">simplicity</strong> and{" "}
                  <strong className="text-foreground">intuitive interaction</strong> first:
                  pieces move the way hands expect them to, progress is always
                  visible, and the controls stay out of the way until needed.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  The experience is built around{" "}
                  <strong className="text-foreground">visual feedback</strong> and{" "}
                  <strong className="text-foreground">seamless gameplay</strong> — a snap tone
                  and gentle highlight confirm every placement, an optional
                  timer adds challenge without pressure, and{" "}
                  <strong className="text-foreground">progression</strong> (difficulty levels,
                  completion states, best times) gives each session shape. The
                  interface is fully{" "}
                  <strong className="text-foreground">responsive</strong>, adapting the board,
                  tray and controls across desktop, tablet and mobile.
                </p>
              </div>
              <div
                className="reveal lg:col-span-5"
                style={{ ["--reveal-delay" as string]: "120ms" }}>
                <dl className="divide-y divide-border border-y border-border">
                  {[
                    ["Platform", "Web (React 19 · TypeScript · Tailwind CSS)"],
                    ["Role", "Designer & Developer"],
                    ["Artworks", "3 built-in scenes + custom image upload"],
                    ["Difficulties", "24 · 48 · 96 · 192 pieces"],
                    ["Interactions", "Drag & drop · rotation · undo/redo · zoom"],
                    ["Accessibility", "Keyboard · screen reader · reduced motion"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-3 gap-4 py-3.5">
                      <dt className="micro-label text-[var(--ember)]">{k}</dt>
                      <dd className="col-span-2 text-sm leading-relaxed text-foreground/85">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 3. THE PROBLEM ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="02" label="The Problem" />
            <div className="reveal">
              <p className="max-w-3xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                Digital jigsaw interfaces can become cluttered and frustrating
                when puzzle pieces, controls, timers, progress indicators and
                game settings compete for attention.
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                The goal was to create a cleaner experience where the puzzle
                itself remains the visual focus, while supporting the player
                with useful feedback and controls that surface only when
                needed.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Layers,
                  t: "Too much noise",
                  d: "Pieces, trays, toolbars, timers and settings crowd the canvas, pulling the eye away from the image.",
                },
                {
                  icon: Hand,
                  t: "Uncertain interaction",
                  d: "Players can't always tell if a piece is selected, draggable, or correctly aligned with its neighbors.",
                },
                {
                  icon: Maximize2,
                  t: "Fragile layouts",
                  d: "Board controls and piece sizes break down on smaller screens instead of adapting gracefully.",
                },
              ].map(({ icon: Icon, t, d }, i) => (
                <div
                  key={t}
                  className="reveal border border-border bg-background/60 p-7 transition-colors duration-300 hover:border-[var(--ember)]/50"
                  style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}>
                  <Icon className="h-5 w-5 text-[var(--ember)]" />
                  <h3 className="mt-5 font-display text-xl font-medium tracking-tight">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 4. THE DESIGN APPROACH ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="03" label="The Design Approach" />
            <div className="reveal mb-12">
              <p className="max-w-2xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                A puzzle-first interface, with every control and animation
                designed to support — never interrupt — the image.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Puzzle, t: "Puzzle-first interface", d: "The image stays dominant; UI reads as quiet instruments around the canvas." },
                { icon: Sparkles, t: "Minimal distractions", d: "Controls collapse, fade and auto-hide so attention stays on the picture." },
                { icon: Layers, t: "Clear visual hierarchy", d: "Editorial typography and ruled hairlines establish a calm reading order." },
                { icon: Hand, t: "Intuitive drag & drop", d: "Pieces move the way hands expect — pick, drag, settle." },
                { icon: Zap, t: "Strong visual feedback", d: "Highlights, snap tones and settled states confirm every action." },
                { icon: Maximize2, t: "Responsive gameplay", d: "Board, tray and toolbar reflow for desktop, tablet and touch." },
                { icon: Clock, t: "Easy-to-understand controls", d: "Every tool carries a label, a hint or an icon that needs no explanation." },
                { icon: Sparkles, t: "Smooth & accessible", d: "Gentle transitions, keyboard shortcuts, reduced-motion and screen-reader support." },
              ].map(({ icon: Icon, t, d }, i) => (
                <div
                  key={t}
                  className="reveal group bg-background p-7 transition-colors duration-300 hover:bg-[#1a1816]"
                  style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}>
                  <Icon className="h-5 w-5 text-[var(--ember)] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight">{t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 5. KEY FEATURES ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="04" label="Key Features" />

            <div className="space-y-20">
              {/* Puzzle Gameplay */}
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="reveal lg:col-span-6">
                  <img
                    src={IMG.board}
                    alt="Main puzzle interface — piece tray, toolbar and progress panel around the board"
                    className="w-full border border-border object-contain bg-[#0a0909]"
                  />
                </div>
                <div className="reveal lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                  <span className="micro-label text-[var(--ember)]">PUZZLE GAMEPLAY</span>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                    The canvas is the stage
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Interactive puzzle pieces with intuitive movement and
                    placement. A side tray holds the available pieces with
                    search and edge/interior filters, while the board accepts
                    drops anywhere and lets placed pieces be repositioned
                    freely.
                  </p>
                </div>
              </div>

              {/* Smart Piece Interaction */}
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="reveal order-2 lg:order-1 lg:col-span-6">
                  <span className="micro-label text-[var(--ember)]">SMART PIECE INTERACTION</span>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                    Every action answers back
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Pieces give clear feedback when selected, moved, positioned
                    or correctly placed — a soft highlight, a snap tone from
                    Web Audio and a gentle settle animation. Hints preview the
                    finished image and spotlight the next piece.
                  </p>
                </div>
                <div className="reveal order-1 lg:order-2 lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                  <img
                    src={IMG.progress}
                    alt="Mid-progress gameplay — placed pieces snapping into the coastal scene with a live progress panel"
                    className="w-full border border-border object-contain bg-[#0a0909]"
                  />
                </div>
              </div>

              {/* Progress + Timer + Difficulty */}
              <div className="grid items-start gap-10 lg:grid-cols-12">
                <div className="reveal lg:col-span-6">
                  <img
                    src={IMG.progress}
                    alt="Active gameplay at 38% complete with elapsed timer"
                    className="w-full border border-border object-contain bg-[#0a0909]"
                  />
                </div>
                <div className="reveal space-y-9 lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                  <div>
                    <span className="micro-label text-[var(--ember)]">PUZZLE PROGRESS</span>
                    <h3 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                      Always know where you are
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      A persistent progress panel tracks placed pieces,
                      completion percentage and remaining count — visible
                      without ever leaving the puzzle.
                    </p>
                  </div>
                  <div>
                    <span className="micro-label text-[var(--ember)]">TIMER</span>
                    <h3 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                      Challenge without pressure
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      An optional elapsed timer can be toggled in settings —
                      it adds a competitive edge for players who want it and
                      stays silent for those who don't.
                    </p>
                  </div>
                  <div>
                    <span className="micro-label text-[var(--ember)]">DIFFICULTY</span>
                    <h3 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                      Four ways to play
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      From Easy (24 pieces) to Expert (192 pieces), each
                      difficulty reshapes the grid and the challenge, so the
                      same artwork can be played again and again.
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsive + Visual Feedback */}
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="reveal order-2 lg:order-1 lg:col-span-6">
                  <span className="micro-label text-[var(--ember)]">
                    RESPONSIVE EXPERIENCE · VISUAL FEEDBACK
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                    Built for every surface
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    The experience is designed for desktop, tablet and mobile —
                    the board rescales, the tray adapts, and touch gestures
                    (pan, pinch-to-zoom, tap-to-place) replace mouse controls
                    naturally. Animations and interaction states keep every
                    move feeling responsive and satisfying.
                  </p>
                </div>
                <div className="reveal order-1 lg:order-2 lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                  <img
                    src={IMG.chooser}
                    alt="Puzzle selection — artwork cards with difficulty picker and custom image upload"
                    className="w-full border border-border object-contain bg-[#0a0909]"
                  />
                </div>
              </div>

              {/* Game Completion */}
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="reveal lg:col-span-6">
                  <img
                    src={IMG.complete}
                    alt="Completion state — 'Picture, reassembled.' card over the finished puzzle with final time"
                    className="w-full border border-border object-contain bg-[#0a0909]"
                  />
                </div>
                <div className="reveal lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                  <span className="micro-label text-[var(--ember)]">GAME COMPLETION</span>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                    A moment worth celebrating
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    A polished completion state announces success with a
                    celebratory card, the final time, and a clear path to the
                    next game — play again, choose another puzzle, or share
                    the result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 6. UX FLOW ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="05" label="UX Flow" />
            <div className="reveal mb-10">
              <p className="max-w-2xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                One clean journey, from choosing a picture to starting the
                next round.
              </p>
            </div>

            {/* Flow steps */}
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Choose Puzzle", "Browse built-in artworks or upload your own image."],
                ["Select Difficulty", "Pick from 24, 48, 96 or 192 pieces."],
                ["Start Puzzle", "The board opens; pieces scatter into the tray."],
                ["Move Pieces", "Drag from the tray — or use the find-a-piece search."],
                ["Place Pieces", "Drop near the right cell and the piece snaps in."],
                ["Complete Puzzle", "The last piece settles; progress reaches 100%."],
                ["View Results", "A completion card shows the final time."],
                ["Play Again", "Share the result, replay or choose another puzzle."],
              ].map(([t, d], i) => (
                <li
                  key={t}
                  className="reveal relative border border-border bg-background p-5 transition-colors duration-300 hover:border-[var(--ember)]/50"
                  style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-[var(--ember)]">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < 7 && (
                      <ChevronRight className="h-3.5 w-3.5 text-foreground/30 sm:hidden" />
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-medium tracking-tight">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ 7. INTERACTION DESIGN ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="06" label="Interaction Design" />
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="reveal lg:col-span-5">
                <h3 className="max-w-md font-display text-3xl font-medium tracking-tight md:text-4xl">
                  Select → Drag → Move → Position → Snap
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  The key interaction is deliberately simple: select a piece,
                  drag it toward the board, position it, and let it snap.
                  Visual feedback makes each stage unmistakable — the piece
                  lifts when grabbed, glows at valid positions, settles with a
                  tone and highlight when placed, and nudges back with a clear
                  shake when it doesn't belong.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Rotation, undo/redo (30 steps), zoom, pan, grid snapping and
                  alignment guides layer on top without complicating the core
                  gesture.
                </p>
              </div>
              <div className="reveal lg:col-span-7" style={{ ["--reveal-delay" as string]: "120ms" }}>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="micro-label pb-3 pr-4 text-[var(--ember)]">STATE</th>
                        <th className="micro-label pb-3 text-[var(--ember)]">FEEDBACK</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        ["Default", "Piece sits quietly in the tray, thumbnail readable."],
                        ["Hover", "Subtle lift and border emphasis signal grabbability."],
                        ["Selected", "Persistent highlight confirms the active piece."],
                        ["Dragging", "Piece follows the pointer, original slot dims."],
                        ["Correct placement", "Snap tone, highlight pulse, piece settles into the grid."],
                        ["Incorrect placement", "Piece returns with a gentle nudge — never punished."],
                        ["Completed", "Board fills, completion card and shared-result summary."],
                      ].map(([s, f]) => (
                        <tr key={s} className="transition-colors duration-200 hover:bg-background/50">
                          <td className="py-3.5 pr-4 font-display text-base font-medium">{s}</td>
                          <td className="py-3.5 text-sm leading-relaxed text-muted-foreground">{f}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 8. DESIGN SYSTEM ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="07" label="Design System" />
            <div className="reveal mb-10">
              <p className="max-w-2xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                "Hearth & Paper" — a warm editorial system that treats the
                game board like a gallery wall.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="reveal border border-border p-7">
                <span className="micro-label text-[var(--ember)]">COLORS</span>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  Warm cream canvas, deep ink surfaces, saffron accents used
                  surgically on progress, highlights and interactive states.
                </p>
                <div className="mt-5 flex gap-2">
                  {["#f3efe7", "#1e1c18", "#d88a3a", "#8a7a68"].map((c) => (
                    <span
                      key={c}
                      className="h-10 w-10 border border-border"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
              <div className="reveal border border-border p-7" style={{ ["--reveal-delay" as string]: "100ms" }}>
                <span className="micro-label text-[var(--ember)]">TYPOGRAPHY</span>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  An editorial pairing: a serif display face for titles and
                  headlines, a geometric sans for labels, data and controls —
                  the same system as the rest of the portfolio.
                </p>
                <p className="mt-5 font-display text-3xl italic tracking-tight">
                  Picture, reassembled.
                </p>
              </div>
              <div className="reveal border border-border p-7" style={{ ["--reveal-delay" as string]: "200ms" }}>
                <span className="micro-label text-[var(--ember)]">COMPONENTS</span>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  Ruled cards, ghost and filled buttons, progress bars, a
                  live timer readout, modals for settings and sharing, toast
                  confirmations, and outlined icons with clear interaction
                  states (hover, pressed, active, disabled).
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="reveal border border-border p-7">
                <span className="micro-label text-[var(--ember)]">PUZZLE CONTROLS & PROGRESS</span>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  A compact toolbar groups view (zoom, fit, reset), board
                  aids (grid, guides, lock) and actions (hint, undo, redo,
                  shuffle) behind clear icons. Progress reads as pieces,
                  percentage and elapsed time at a glance.
                </p>
              </div>
              <div className="reveal border border-border p-7" style={{ ["--reveal-delay" as string]: "100ms" }}>
                <span className="micro-label text-[var(--ember)]">MODALS & TOASTS</span>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  Settings, sharing and help live in focused overlays with a
                  warm surface and ink typography, while toasts confirm
                  actions like a successful placement search or copied
                  result — ephemeral, never intrusive.
                </p>
                <img
                  src={IMG.settings}
                  alt="Settings modal — sound, timer, reduced motion, guides and dark mode toggles"
                  loading="lazy"
                  className="mt-5 w-full border border-border object-contain bg-[#0a0909]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ 9. RESPONSIVE DESIGN ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="08" label="Responsive Design" />
            <div className="reveal mb-12">
              <p className="max-w-3xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                The mobile experience is intentionally designed — not simply
                a scaled-down desktop interface.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  t: "Desktop",
                  d: "Full board with side tray, persistent toolbar, zoom/pan with keyboard shortcuts and multi-select grouping.",
                },
                {
                  t: "Tablet",
                  d: "Board resizes fluidly, tray compresses into a collapsible rail, and touch gestures take over navigation.",
                },
                {
                  t: "Mobile",
                  d: "Piece search and filters surface first, piece placement adapts to tap-and-drag, and progress stays anchored — controls are purpose-built for the viewport, not inherited.",
                },
              ].map(({ t, d }, i) => (
                <div
                  key={t}
                  className="reveal border border-border bg-background/60 p-7 transition-colors duration-300 hover:border-[var(--ember)]/50"
                  style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}>
                  <h3 className="font-display text-2xl font-medium tracking-tight">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 10. FINAL SCREENS ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="09" label="Final Screens" />
            <div className="space-y-10">
              {[
                [IMG.chooser, "Puzzle selection — artwork cards, difficulty picker and custom image upload"],
                [IMG.board, "Main puzzle interface — board, tray, toolbar and live progress"],
                [IMG.progress, "Active gameplay — pieces placed mid-build with elapsed timer"],
                [IMG.complete, "Completed puzzle — final time and the path to the next round"],
                [IMG.settings, "Settings — sound, timer, reduced motion, guides and dark mode"],
              ].map(([src, alt], i) => (
                <figure
                  key={src as string}
                  className="reveal overflow-hidden border border-border"
                  style={{ ["--reveal-delay" as string]: "100ms" }}>
                  <img
                    src={src as string}
                    alt={alt as string}
                    loading="lazy"
                    className="w-full object-contain bg-[#0a0909]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 11. DESIGN CHALLENGES ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="10" label="Design Challenges" />
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Keeping the puzzle visually dominant", "The board earns the largest share of the viewport; everything else retreats."],
                ["Preventing UI clutter", "Progressive disclosure — advanced tools hide until they're needed."],
                ["Making drag-and-drop intuitive", "Pieces behave like physical objects: grabbable, rotatable, repositionable."],
                ["Making placement satisfying", "Snap tones, highlights and a gentle settle reward correct placement."],
                ["Handling different screen sizes", "The board, tray and controls reflow rather than shrink uniformly."],
                ["Useful feedback without overwhelm", "Every signal is small, brief and meaningful — nothing shouts."],
                ["Balancing challenge and usability", "Hints, guides and an optional timer offer help without taking the game away."],
              ].map(([t, d], i) => (
                <div
                  key={t}
                  className="reveal bg-background p-7 transition-colors duration-300 hover:bg-[#1a1816]"
                  style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                  <h3 className="font-display text-lg font-medium tracking-tight">{t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 12. OUTCOME ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="11" label="Outcome" />
            <div className="reveal">
              <p className="max-w-3xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                The project transforms a familiar physical puzzle activity
                into a clean, interactive digital experience — with an
                emphasis on intuitive interaction, visual feedback and
                seamless gameplay.
              </p>
              <div className="mt-12">
                <CTAButtons primary />
              </div>
            </div>
          </div>
        </section>

        {/* ============ 13. LIVE PROJECT CTA ============ */}
        <section className="border-t border-border bg-[#11100e] py-24 md:py-32">
          <div className="container text-center">
            <p className="reveal micro-label text-[var(--ember)]" style={{ ["--reveal-delay" as string]: "0ms" }}>
              READY TO PUZZLE?
            </p>
            <h2
              className="reveal mt-5 font-display text-4xl font-medium tracking-tight md:text-6xl"
              style={{ ["--reveal-delay" as string]: "80ms" }}>
              Play the Jigsaw
            </h2>
            <p
              className="reveal mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
              style={{ ["--reveal-delay" as string]: "140ms" }}>
              Open the live application, choose a puzzle and start playing —
              or browse the source code behind it.
            </p>
            <div
              className="reveal mt-10 flex flex-wrap items-center justify-center gap-4"
              style={{ ["--reveal-delay" as string]: "180ms" }}>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-[var(--ember)] bg-[var(--ember)] px-9 py-4 font-mono text-[11px] tracking-[0.22em] text-[#141311] transition-all duration-300 hover:bg-transparent hover:text-[var(--ember)]">
                PLAY THE JIGSAW
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-foreground/40 px-9 py-4 font-mono text-[11px] tracking-[0.22em] text-foreground/80 transition-all duration-300 hover:border-[var(--ember)] hover:text-[var(--ember)]">
                VIEW SOURCE
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
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
              <Link
                href="/project/agent-management-app"
                className="group flex flex-col items-end border border-border px-5 py-3 transition-colors duration-300 hover:border-[var(--ember)]">
                <span className="micro-label mb-1 font-mono text-[9px] tracking-[0.22em] text-muted-foreground">
                  NEXT PROJECT →
                </span>
                <span className="font-display text-lg tracking-tight transition-colors duration-300 group-hover:text-[var(--ember)]">
                  Agent Management App
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
