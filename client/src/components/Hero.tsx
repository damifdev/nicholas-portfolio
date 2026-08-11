/*
 * INK & EMBER — asymmetric hero: giant editorial type left (clip-path line
 * reveals, italic emphasis), portrait + meta right, animated OSA initials,
 * marquee strip, floating UI fragments. No centered stack.
 */
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ASSETS, SOCIALS } from "@/lib/data";

const WORDS = ["Design", "Development", "Technology", "AI & Automation"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Textured background */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroTexture}
          alt=""
          className="h-full w-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141311]" />
      </div>

      {/* Floating UI fragments */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute left-[6%] top-[28%] h-24 w-24 rounded-none border border-border/60 rotate-3 opacity-50" />
        <div className="absolute right-[22%] top-[18%] h-3 w-3 bg-[var(--ember)]/80" />
        <div className="absolute left-[38%] top-[72%] h-40 w-[1px] bg-border/50 rotate-12" />
        <div className="absolute right-[8%] bottom-[24%] font-mono text-[10px] tracking-widest text-muted-foreground/50 rotate-90 origin-right">
          UI / UX · SOFTWARE · AI
        </div>
      </div>

      <div className="container relative z-10 flex min-h-screen flex-col justify-center pt-24 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          {/* Left — headline block */}
          <div>
            <p className="reveal micro-label mb-6 flex items-center gap-3" style={{ ["--reveal-delay" as string]: "100ms" }}>
              <span className="inline-block h-[1px] w-10 bg-[var(--ember)]" />
              Oluwadamilola Samson-Ajai — UI/UX Designer &amp; Software Developer
            </p>

            <h1 className="font-display text-[16vw] font-medium leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[5.4rem]">
              <span className="reveal-clip block" style={{ ["--reveal-delay" as string]: "150ms" }}>
                I design digital
              </span>
              <span className="reveal-clip block" style={{ ["--reveal-delay" as string]: "280ms" }}>
                experiences that{" "}
                <em className="italic text-[var(--ember)]">feel</em> as good
              </span>
              <span className="reveal-clip block" style={{ ["--reveal-delay" as string]: "410ms" }}>
                as they <em className="italic">work</em>.
              </span>
            </h1>

            <p
              className="reveal mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ ["--reveal-delay" as string]: "560ms" }}>
              I'm Oluwadamilola — a UI/UX Designer and Software Developer
              focused on thoughtful interfaces, useful digital products, and
              experiences that connect{" "}
              <span className="relative inline-block min-w-[9.5rem] align-baseline whitespace-nowrap">
                <span className="absolute inset-0 flex items-center" aria-hidden="true">
                  {WORDS.map((w, i) => (
                    <span
                      key={w}
                      className={`absolute left-0 font-semibold text-foreground transition-all duration-500 ${
                        i === wordIdx
                          ? "translate-y-0 opacity-100"
                          : "translate-y-3 opacity-0"
                      }`}>
                      {w}
                    </span>
                  ))}
                </span>
                <span className="invisible">Design</span>
              </span>
              .
            </p>

            <div
              className="reveal mt-9 flex flex-wrap items-center gap-4"
              style={{ ["--reveal-delay" as string]: "680ms" }}>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="magnet"
                className="magnetic-btn inline-flex items-center gap-2 bg-[var(--ember)] px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-[var(--ember)]/90">
                View My Work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#cv"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="magnet"
                className="magnetic-btn inline-flex items-center gap-2 border border-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:border-[var(--ember)] hover:text-[var(--ember)]">
                Download CV
              </a>
            </div>

            {/* Social row */}
            <div
              className="reveal mt-10 flex items-center gap-5"
              style={{ ["--reveal-delay" as string]: "800ms" }}>
              <span className="micro-label">Elsewhere</span>
              <span className="h-[1px] w-10 bg-border" />
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="magnet"
                className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]"
                aria-label="LinkedIn">
                LinkedIn
              </a>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="magnet"
                className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]"
                aria-label="GitHub">
                GitHub
              </a>
              <a
                href={SOCIALS.emailHref}
                data-cursor="magnet"
                className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]"
                aria-label="Email">
                Email
              </a>
              <a
                href={SOCIALS.behance}
                target="_blank"
                rel="noreferrer"
                data-cursor="magnet"
                className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]"
                aria-label="Behance">
                Behance
              </a>
            </div>
          </div>

          {/* Right — portrait + animated initials */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="reveal relative"
              style={{ ["--reveal-delay" as string]: "450ms" }}>
              <img
                src={ASSETS.portrait}
                alt="Oluwadamilola Samson-Ajai, UI/UX Designer and Software Developer"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              {/* caption plate */}
              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between border border-border bg-[#141311] px-4 py-3">
                <span className="font-mono text-[11px] tracking-wider text-foreground/80">
                  OLUWADAMILOLA SAMSON-AJAI
                </span>
                <span className="font-mono text-[11px] text-[var(--ember)]">
                  DESIGN × DEV × TECH
                </span>
              </div>
            </div>

            {/* Animated OSA initials — hover reveals full name */}
            <div className="absolute right-0 top-0 z-10 translate-x-[75%] -translate-y-[60%] lg:-translate-y-[66%]">
              <div
                title="Oluwadamilola Samson-Ajai"
                data-cursor="magnet"
                className="group relative select-none font-display text-6xl font-semibold tracking-tight text-foreground transition-colors duration-300 sm:text-7xl lg:text-8xl drop-shadow-[0_4px_24px_rgba(10,9,9,0.9)]">
                <span className="inline-block origin-bottom transition-transform duration-500 group-hover:-translate-y-2">O</span>
                <span className="inline-block origin-bottom transition-transform duration-500 delay-75 group-hover:-translate-y-3">S</span>
                <span className="inline-block origin-bottom transition-transform duration-500 delay-150 group-hover:-translate-y-2">A</span>
                <span className="text-[var(--ember)]">.</span>
                <span className="absolute -top-8 left-0 whitespace-nowrap font-mono text-[10px] tracking-widest text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Oluwadamilola Samson-Ajai
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hairline relative z-10" />
      <div className="overflow-hidden border-b border-border py-5">
        <div className="marquee-track select-none" aria-hidden="true">
          {[0, 1].map((half) => (
            <span key={half} className="flex shrink-0 items-center gap-8 pr-8">
              {["Design", "Development", "Technology", "AI", "Automation", "Cybersecurity"].map(
                (w, i) => (
                  <span key={`${half}-${i}`} className="flex items-center gap-8">
                    <span className="font-display text-2xl italic tracking-tight text-foreground/50">
                      {w}
                    </span>
                    <span className="text-[var(--ember)]">✦</span>
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
