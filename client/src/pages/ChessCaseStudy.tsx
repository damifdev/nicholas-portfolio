/*
 * INK & EMBER — Tournament Ledger (Chess) Case Study.
 * Dark editorial case-study page for the Tournament Ledger chess game.
 * Preserves the portfolio design language: Fraunces display type, Space
 * Grotesk micro-labels, ember accent (var(--ember)), ruled hairlines,
 * reveal-on-scroll animations, generous spacing. All content grounded in
 * the real app (simplechess-c5zahat9.manus.space) and its repository —
 * no fabricated metrics. Piece styles available in production: Classic
 * and Modern.
 */
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Flag,
  BookOpen,
  CalendarClock,
  Clock,
  Crosshair,
  Layers,
  Moon,
  RotateCcw,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { Footer } from "@/components/PersonalityCvContact";
import { Link } from "wouter";

const LIVE_URL = "https://simplechess-c5zahat9.manus.space";
const SOURCE_URL = "https://github.com/damifdev/chess-game-portfolio";

const IMG = {
  gameplay: "/manus-storage/gameplay_initial_b85a3c21.webp",
  opening: "/manus-storage/gameplay_e4_0ddad981.webp",
  middlegame: "/manus-storage/gameplay_middlegame_8bc5b73b.webp",
  modernPieces: "/manus-storage/board_modern_31dd4d2a.webp",
  midnightTheme: "/manus-storage/board_midnight_theme_5e13a1b2.webp",
  pieceGallery: "/manus-storage/piece_style_gallery_b5045939.webp",
  playerDesk: "/manus-storage/player_desk_cb775a03.webp",
  quests: "/manus-storage/player_desk_quests_50ecfa80.webp",
};

/* ------------------------------------------------------------------ */
/* Shared primitives (mirrors JigsawCaseStudy / Home editorial blocks) */
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

function CTAButtons() {
  const btn =
    "group inline-flex items-center gap-2 border px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] transition-all duration-300";
  return (
    <div className="reveal flex flex-wrap items-center gap-4" style={{ ["--reveal-delay" as string]: "160ms" }}>
      <a
        href={LIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} border-[var(--ember)] bg-[var(--ember)] text-[#141311] hover:bg-transparent hover:text-[var(--ember)]`}>
        VIEW LIVE PROJECT
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
      <a
        href={SOURCE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} border-foreground/40 text-foreground/80 hover:border-[var(--ember)] hover:text-[var(--ember)]`}>
        VIEW SOURCE
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function ChessCaseStudy() {
  useReveal();

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
                <span className="micro-label text-[var(--ember)]">GAME DESIGN · UX STRATEGY · UI/UX · FRONTEND DEVELOPMENT</span>
                <span className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                  <Clock className="h-3 w-3 text-[var(--ember)]" />
                  6 MIN READ
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
                Tournament Ledger
              </h1>
              <p className="mt-6 max-w-2xl font-display text-xl italic leading-snug tracking-tight text-foreground/70 md:text-2xl">
                A chess experience designed as a quiet tournament table —
                editorial, playable, and built for the browser.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Tournament Ledger is a fully playable browser chess game — a
                pure React &amp; TypeScript product that combines a complete
                chess engine, an explorable AI opponent, deep board
                customization and a player progression system, all wrapped in
                a calm, ink-and-paper editorial interface.
              </p>
            </div>

            <div className="reveal mt-9" style={{ ["--reveal-delay" as string]: "120ms" }}>
              <CTAButtons />
            </div>

            <div
              className="reveal relative mt-14 overflow-hidden border border-border md:mt-16"
              style={{ ["--reveal-delay" as string]: "180ms" }}>
              <img
                src={IMG.gameplay}
                alt="Tournament Ledger — the chessboard with scorecard, engine evaluation and tactical report beside it"
                className="w-full object-contain bg-[#0a0909]"
              />
            </div>
          </div>
        </section>

        {/* ============ 2. THE PROBLEM ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="01" label="The Problem" />
            <div className="reveal">
              <p className="max-w-3xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                Most browser chess interfaces feel like chess software — dense
                menus, jargon-heavy controls and a cold, utilitarian tone that
                never lets the player feel like they are sitting down at a
                real board.
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                The goal was to design a chess experience that keeps the full
                depth of the game — rules, engine analysis, notes, PGN — while
                giving it the calm, tactile feel of a tournament hall: a
                place to sit, think and make the next move count.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Layers,
                  t: "Dense, jargon-heavy UIs",
                  d: "Engine menus, analysis drawers and control panels crowd the board, pulling attention away from the game itself.",
                },
                {
                  icon: Brain,
                  t: "Analysis that doesn't teach",
                  d: "Raw evaluations tell you the number but not the story — why a move is good and what it sets up.",
                },
                {
                  icon: Moon,
                  t: "Interfaces with no character",
                  d: "Generic tables and flat colors make every chess site feel the same, with no sense of occasion for each match.",
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

        {/* ============ 3. THE CONCEPT ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="02" label="The Concept" />
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal lg:col-span-7">
                <p className="max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  <strong className="text-foreground">Tournament Ledger</strong> treats every
                  match like an entry in a tournament record. The board is the
                  table; the scorecard, engine evaluation and tactical report
                  sit beside it like quiet officials. Every move is written
                  into a ledger the player can annotate, and every match is a
                  named entry that can be saved, revisited and replayed.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  The product pairs this editorial shell with a genuine chess
                  engine written in pure TypeScript — legal move generation,
                  check and checkmate detection, promotion, castling — so the
                  design ambition is backed by{" "}
                  <strong className="text-foreground">real playable depth</strong>: an
                  adjustable AI opponent, candidate-move hints with plain-language
                  reasoning, a daily puzzle and a full PGN pipeline.
                </p>
              </div>
              <div
                className="reveal lg:col-span-5"
                style={{ ["--reveal-delay" as string]: "120ms" }}>
                <dl className="divide-y divide-border border-y border-border">
                  {[
                    ["Platform", "Web (React 19 · TypeScript · Vite)"],
                    ["Engine", "Pure TypeScript chess domain layer"],
                    ["Modes", "Two-player · vs AI (Easy / Medium / Hard)"],
                    ["Customization", "8 board themes · 2 piece sets"],
                    ["Extras", "PGN import/export · daily puzzle · match library"],
                    ["Accessibility", "Keyboard nav · screen reader · reduced motion"],
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

        {/* ============ 4. UX STRATEGY ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="03" label="UX Strategy" />
            <div className="reveal mb-12">
              <p className="max-w-2xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                Keep the board dominant, translate analysis into plain
                language, and make every state of the game readable at a
                glance.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Crosshair, t: "Board-first layout", d: "The 8×8 board claims the stage; scorecard, evaluation and controls frame it as instruments, never competitors." },
                { icon: Brain, t: "Analysis as coaching", d: "The tactical report names threats, ideas and king safety in one line — e.g. 'Top idea: c4 → f7 · wins material'." },
                { icon: Flag, t: "Hints with reasoning", d: "Candidate moves carry plain-language rationale, so hints teach rather than just point." },
                { icon: BookOpen, t: "Moves as a ledger", d: "Every move writes itself into a numbered ledger with annotations and per-move notes the player controls." },
                { icon: Shield, t: "Accessible by default", d: "Keyboard navigation, screen-reader announcements and reduced-motion support are built in, not bolted on." },
                { icon: RotateCcw, t: "Forgiving by design", d: "Undo, redo and candidate previews mean experimentation is free — a mistake is a lesson, not a loss of state." },
              ].map(({ icon: Icon, t, d }, i) => (
                <div
                  key={t}
                  className="reveal group bg-background p-7 transition-colors duration-300 hover:bg-[#1a1816]"
                  style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                  <Icon className="h-5 w-5 text-[var(--ember)] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight">{t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 5. THE CHESSBOARD INTERFACE ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="04" label="The Chessboard Interface" />

            <div className="space-y-20">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="reveal lg:col-span-6">
                  <img
                    src={IMG.opening}
                    alt="Opening position after 1. e4 — engine evaluation, hints and the move ledger"
                    className="w-full border border-border object-contain bg-[#0a0909]"
                  />
                </div>
                <div className="reveal lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                  <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                    A table, not a tool
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                    The board is a fully styled 8×8 grid with coordinates and
                    rich square labels, rendered as live HTML rather than a
                    raster image — so text stays crisp at any size and every
                    square carries an accessible name for screen readers.
                    Selecting a piece lights its legal destinations; captured
                    pieces, checks and candidate lines all communicate
                    through the board itself.
                  </p>
                </div>
              </div>

              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="reveal lg:col-span-6 lg:col-start-7">
                  <img
                    src={IMG.middlegame}
                    alt="Middlegame in the Italian Game — annotations, tactical report and engine evaluation"
                    className="w-full border border-border object-contain bg-[#0a0909]"
                  />
                </div>
                <div className="reveal lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                  <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                    The match beside the board
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                    A live scorecard tracks captures for both players, an
                    engine evaluation bar swings with each move, and a
                    tactical report distills the position into checks,
                    captures, activity and king safety. Named matches save to
                    a personal library, with PGN export and import for taking
                    games in and out of the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 6. PIECE STYLES & BOARD CUSTOMIZATION ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="05" label="Piece Styles & Board Customization" />
            <div className="reveal mb-12">
              <p className="max-w-2xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                Two chess sets, eight board themes — the table dressed to
                match the mood of the match.
              </p>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="reveal lg:col-span-6">
                <img
                  src={IMG.pieceGallery}
                  alt="Piece style customization — choosing between the Classic and Modern chess sets with a live preview"
                  className="w-full border border-border object-contain bg-[#0a0909]"
                />
              </div>
              <div className="reveal lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  Choose your set
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                  The customization screen presents the two available piece
                  sets side by side —{" "}
                  <strong className="text-foreground">Classic</strong> ("the tournament hall:
                  ivory &amp; satin ebony") and{" "}
                  <strong className="text-foreground">Modern</strong> ("the future board:
                  matte porcelain &amp; graphite") — with the same board
                  language rendered in each so players compare before they
                  commit. The selection applies to the live board instantly.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <figure className="reveal overflow-hidden border border-border">
                <img
                  src={IMG.modernPieces}
                  alt="The board dressed in the Modern piece set"
                  loading="lazy"
                  className="w-full object-contain bg-[#0a0909]"
                />
                <figcaption className="border-t border-border px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                  MODERN SET · CLASSIC BOARD
                </figcaption>
              </figure>
              <figure className="reveal overflow-hidden border border-border" style={{ ["--reveal-delay" as string]: "100ms" }}>
                <img
                  src={IMG.midnightTheme}
                  alt="The board in the midnight theme"
                  loading="lazy"
                  className="w-full object-contain bg-[#0a0909]"
                />
                <figcaption className="border-t border-border px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                  MIDNIGHT THEME · MODERN SET
                </figcaption>
              </figure>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Layers, t: "Classic", d: "Ivory & satin ebony — the timeless tournament set." },
                { icon: Sparkles, t: "Modern", d: "Matte porcelain & graphite — sleek and contemporary." },
                { icon: Moon, t: "8 board themes", d: "Classic, midnight, forest, sunset, royal, cyber, paper and ludo presets." },
                { icon: RotateCcw, t: "Instant apply", d: "Style and theme changes reflect on the live board immediately." },
              ].map(({ icon: Icon, t, d }, i) => (
                <div
                  key={t}
                  className="reveal bg-background p-7 transition-colors duration-300 hover:bg-[#1a1816]"
                  style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}>
                  <Icon className="h-5 w-5 text-[var(--ember)]" />
                  <h3 className="mt-4 font-display text-lg font-medium tracking-tight">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 7. PLAYER PROFILE — THE PLAYER DESK ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="06" label="Player Profile — The Player Desk" />
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="reveal lg:col-span-6">
                <img
                  src={IMG.playerDesk}
                  alt="The Player Desk — profile, rating, XP progression and daily quests"
                  className="w-full border border-border object-contain bg-[#0a0909]"
                />
              </div>
              <div className="reveal lg:col-span-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
                <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  Every move leaves a mark
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                  The Player Desk turns sessions into a personal record. A
                  profile card carries the player's name, rating and level;
                  an XP bar translates every recorded game into progression
                  toward the next level; and daily and weekly quests give
                  each day a purpose — like "make three purposeful moves,"
                  which rewards a day streak with bonus XP.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Seven achievements — First Blood, Castled, Tactician,
                  Endgame Artist, Unstoppable, Night Rider, Checkmate — give
                  the journey landmarks, while recorded games feed a deeper
                  play-style profile: the player's Chess DNA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 8. CHESS DNA ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="07" label="Chess DNA" />
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal lg:col-span-7">
                <p className="max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  Chess DNA is the app's play-style signal. As recorded games
                  accumulate, the system reads how a player actually plays —
                  how they win material, defend their king, convert endgames
                  — and assembles a character reading of their game. With
                  enough data, the ledger stops describing moves and starts
                  describing <strong className="text-foreground">the player</strong>: a
                  tactical aggressor, a defensive technician, a patient
                  endgame artist.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Before that threshold is reached, the DNA section is honest
                  about it — "not enough games yet" — instead of fabricating
                  a signal it hasn't earned.
                </p>
              </div>
              <div
                className="reveal lg:col-span-5"
                style={{ ["--reveal-delay" as string]: "120ms" }}>
                <img
                  src={IMG.quests}
                  alt="Chess DNA, quests and game story sections of the Player Desk"
                  loading="lazy"
                  className="w-full border border-border object-contain bg-[#0a0909]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ 9. XP, QUESTS & GAME STORIES ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="08" label="XP · Quests · Game Stories" />

            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {[
                {
                  icon: Zap,
                  t: "XP & progression",
                  d: "Recorded games earn experience toward the next level, so every match — win or lose — adds to the ledger. Streaks multiply the reward.",
                },
                {
                  icon: CalendarClock,
                  t: "Daily & weekly quests",
                  d: "Small, deliberate objectives — like completing purposeful games — keep the habit of playing alive between sessions, with XP as the payoff.",
                },
                {
                  icon: BookOpen,
                  t: "Game stories & moments",
                  d: "Each recorded game writes a narrative: the opening chapter, the turning point, critical captures and the best move — so results read like stories, not scores.",
                },
              ].map(({ icon: Icon, t, d }, i) => (
                <div
                  key={t}
                  className="reveal group bg-background p-7 transition-colors duration-300 hover:bg-[#1a1816]"
                  style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                  <Icon className="h-5 w-5 text-[var(--ember)] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight">{t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Opening chapter", "How the game began — first moves set the tone."],
                ["Turning point", "The move where the balance shifted."],
                ["Critical capture", "The highest-value material taken."],
                ["Best move", "The single most accurate move of the game."],
              ].map(([t, d], i) => (
                <div
                  key={t}
                  className="reveal bg-background p-7 transition-colors duration-300 hover:bg-[#1a1816]"
                  style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}>
                  <h3 className="font-display text-base font-medium tracking-tight">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 10. RESPONSIVE DESIGN ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="09" label="Responsive Design" />
            <div className="reveal mb-12">
              <p className="max-w-3xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                The same table, resized for any surface — from a wide desk to
                a phone in one hand.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  t: "Desktop",
                  d: "The full tournament layout — board stage left, scorecard, evaluation and match controls filling the right column.",
                },
                {
                  t: "Tablet",
                  d: "The board stays dominant while the scorecard and controls compress into scrollable instrument panels beneath it.",
                },
                {
                  t: "Mobile",
                  d: "Board orientation flips to fit the viewport, touch interaction takes over piece movement, and the essential controls — undo, hints, theme — remain one tap away.",
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

        {/* ============ 11. FINAL UI — SCREEN GALLERY ============ */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="10" label="Final UI" />
            <div className="space-y-10">
              {[
                [IMG.gameplay, "The match table — board, scorecard, engine evaluation and tactical report"],
                [IMG.opening, "Opening ledger — first move written, hints suggesting Black's reply"],
                [IMG.middlegame, "The middlegame — Italian Game, move annotations and the top idea"],
                [IMG.pieceGallery, "Piece style selection — Classic versus Modern with live preview"],
                [IMG.midnightTheme, "Midnight board theme applied to the live game"],
                [IMG.playerDesk, "The Player Desk — profile, XP, quests and game story"],
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
                  <figcaption className="border-t border-border px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                    {alt as string}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 12. OUTCOME ============ */}
        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="11" label="Outcome" />
            <div className="reveal">
              <p className="max-w-3xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">
                Tournament Ledger proves that a browser chess game can feel
                like a designed product — a quiet tournament hall in the
                browser, with a real engine, an explorable AI, a personal
                progression system and a design voice of its own.
              </p>
              <div className="mt-12">
                <CTAButtons />
              </div>
            </div>
          </div>
        </section>

        {/* ============ 13. LIVE PROJECT CTA ============ */}
        <section className="border-b border-border bg-[#11100e] py-24 md:py-32">
          <div className="container text-center">
            <p className="reveal micro-label text-[var(--ember)]" style={{ ["--reveal-delay" as string]: "0ms" }}>
              READY TO SIT DOWN?
            </p>
            <h2
              className="reveal mt-5 font-display text-4xl font-medium tracking-tight md:text-6xl"
              style={{ ["--reveal-delay" as string]: "80ms" }}>
              View the live project
            </h2>
            <p
              className="reveal mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
              style={{ ["--reveal-delay" as string]: "140ms" }}>
              Open Tournament Ledger, choose your side and make the next move
              count — or explore the source code behind it.
            </p>
            <div
              className="reveal mt-10 flex flex-wrap items-center justify-center gap-4"
              style={{ ["--reveal-delay" as string]: "180ms" }}>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-[var(--ember)] bg-[var(--ember)] px-9 py-4 font-mono text-[11px] tracking-[0.22em] text-[#141311] transition-all duration-300 hover:bg-transparent hover:text-[var(--ember)]">
                VIEW LIVE PROJECT
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
                href="/project/bancassurance-mobile-app"
                className="group flex flex-col items-end border border-border px-5 py-3 transition-colors duration-300 hover:border-[var(--ember)]">
                <span className="micro-label mb-1 font-mono text-[9px] tracking-[0.22em] text-muted-foreground">
                  NEXT PROJECT →
                </span>
                <span className="font-display text-lg tracking-tight transition-colors duration-300 group-hover:text-[var(--ember)]">
                  BancAssurance Mobile App
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
