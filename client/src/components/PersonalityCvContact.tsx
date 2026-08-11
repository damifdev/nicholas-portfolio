/*
 * INK & EMBER — Beyond the Screen (personality), CV area (view/download),
 * Contact, and minimal footer. Warm personal section breaks the dark rhythm
 * with an amber-lit image; contact keeps type massive.
 */
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Download, FileText } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SelectedWork";
import { ASSETS, PERSONAL_THEMES, SOCIALS } from "@/lib/data";

const CV_PDF = "/manus-storage/cv-updated_84840555.pdf";

export function BeyondScreenSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="13"
          kicker="Beyond the Screen"
          title="The person behind the portfolio."
        />
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative">
            <img
              src={ASSETS.beyondScreen}
              alt="A designer's workspace at night, warm lamp glow"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <span className="absolute -right-3 -top-3 border border-[var(--ember)] bg-[#141311] px-4 py-2 font-mono text-[10px] tracking-widest text-[var(--ember)]">
              STUDIO / NIGHT
            </span>
          </div>
          <div className="space-y-8">
            {PERSONAL_THEMES.map((t, i) => (
              <div key={t.title} className="reveal flex gap-5" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <span className="font-mono text-xs text-[var(--ember)] pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium md:text-2xl">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CV ---------------- */
export function CvSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openCv = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialogRef.current?.showModal();
      return;
    }
    dialogRef.current?.showModal();
    dialogRef.current?.animate(
      [{ opacity: 0, transform: "scale(0.96) translateY(12px)" }, { opacity: 1, transform: "scale(1) translateY(0)" }],
      { duration: 320, easing: "cubic-bezier(0.23,1,0.32,1)", fill: "forwards" },
    );
  };

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = CV_PDF;
    link.download = "OLUWADAMILOLA-SAMSON-AJAI-CV.pdf";
    link.click();
    toast("CV download started", {
      description: "The PDF will save to your device's downloads folder.",
    });
  };

  return (
    <section id="cv" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden border border-border">
          <div className="grid items-center gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 md:p-14">
              <div className="flex items-center gap-4">
                <img src={ASSETS.monogram} alt="" className="h-12 w-12" loading="lazy" />
                <span className="micro-label">Curriculum Vitae</span>
              </div>
              <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-5xl">
                Oluwadamilola Samson-Ajai
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                UI/UX Designer | Web Developer | AI-Assisted Creative
              </p>

              <div className="mt-8 grid gap-x-10 gap-y-6 text-sm sm:grid-cols-2">
                {(["Experience", "Education", "Skills", "Certifications", "Projects"].map((h) => (
                  <div key={h} className="border-t border-border pt-3">
                    <span className="micro-label text-[var(--ember)]">{h}</span>
                  </div>
                )))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  onClick={downloadCv}
                  data-cursor="magnet"
                  className="magnetic-btn inline-flex items-center gap-2 bg-[var(--ember)] px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--ember)]/90">
                  <Download className="h-4 w-4" /> Download CV
                </button>
                <button
                  onClick={openCv}
                  data-cursor="magnet"
                  className="magnetic-btn inline-flex items-center gap-2 border border-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)]">
                  <FileText className="h-4 w-4" /> View Full CV
                </button>
              </div>
            </div>
            <div className="relative hidden h-full min-h-[280px] lg:block">
              <img
                src={ASSETS.portrait2}
                alt="Oluwadamilola Samson-Ajai, portrait"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141311] via-[#141311]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="max-h-[85vh] w-[min(92vw,640px)] overflow-y-auto border border-border bg-[#171614] p-8 text-foreground backdrop:bg-[#0a0909]/80 open:animate-in open:fade-in open:zoom-in-95"
        aria-label="Full CV">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-3xl font-medium">Oluwadamilola Samson-Ajai</h3>
            <p className="mt-1 text-sm text-muted-foreground">UI/UX Designer | Web Developer | AI-Assisted Creative</p>
          </div>
          <button onClick={() => dialogRef.current?.close()} aria-label="Close CV" className="text-muted-foreground hover:text-[var(--ember)]">
            ✕
          </button>
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Below is the full curriculum vitae — the exact document you can also
          download. Scroll inside the frame to read it.
        </p>
        <div className="mt-6 overflow-hidden border border-border bg-white">
          <iframe
            src={`${CV_PDF}#toolbar=0`}
            title="Full CV — Oluwadamilola Samson-Ajai"
            className="h-[60vh] w-full"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <a
            href={CV_PDF}
            download="OLUWADAMILOLA-SAMSON-AJAI-CV.pdf"
            className="magnetic-btn inline-flex items-center gap-2 border border-[var(--ember)] px-5 py-2.5 text-sm font-semibold text-[var(--ember)] transition-colors hover:bg-[var(--ember)] hover:text-primary-foreground">
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>
      </dialog>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-border py-28 md:py-40">
      <div className="container">
        <p className="reveal micro-label mb-6 flex items-center gap-3">
          <span className="inline-block h-[1px] w-10 bg-[var(--ember)]" />
          Contact
        </p>
        <h2 className="reveal font-display text-[11vw] font-medium leading-[0.95] tracking-tight md:text-6xl lg:text-7xl" style={{ ["--reveal-delay" as string]: "120ms" }}>
          Have an idea <em className="italic text-[var(--ember)]">worth building?</em>
        </h2>
        <p
          className="reveal mt-7 max-w-xl text-base text-muted-foreground md:text-lg"
          style={{ ["--reveal-delay" as string]: "240ms" }}>
          Whether you're looking for a designer, developer, collaborator, or
          someone who can bridge the gap between design and technology, let's
          talk.
        </p>

        <div className="reveal mt-10" style={{ ["--reveal-delay" as string]: "360ms" }}>
          <a
            href={SOCIALS.emailHref}
            data-cursor="magnet"
            className="group inline-flex items-center gap-3 border border-[var(--ember)] px-8 py-5 text-lg font-semibold transition-colors duration-300 hover:bg-[var(--ember)] hover:text-primary-foreground md:text-xl">
            Start a Conversation <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div
          className="reveal mt-16 flex flex-col gap-x-10 gap-y-5 border-t border-border pt-8 md:flex-row md:flex-wrap md:items-start"
          style={{ ["--reveal-delay" as string]: "480ms" }}>
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <a href={SOCIALS.phoneHref} className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]">
                +234 912 293 2268
              </a>
              <span className="text-[10px] tracking-widest text-muted-foreground/60">WHATSAPP &amp; CALLS</span>
            </div>
            <CopyButton
              value="+2349122932268"
              copiedLabel="Copied"
              label="Copy number"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <a href={SOCIALS.emailHref} className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]">
                damilola.samsonajai@gmail.com
              </a>
              <span className="text-[10px] tracking-widest text-muted-foreground/60">EMAIL</span>
            </div>
            <CopyButton
              value="damilola.samsonajai@gmail.com"
              copiedLabel="Copied"
              label="Copy email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]">
              LinkedIn
            </a>
            <span className="text-[10px] tracking-widest text-muted-foreground/60">PROFILE</span>
          </div>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]">
            GitHub
          </a>
          <a href={SOCIALS.whatsapp} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]">
            WhatsApp
          </a>
          <a href={SOCIALS.behance} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-[var(--ember)]">
            Behance
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Copy button ---------------- */
function CopyButton({ value, label, copiedLabel }: { value: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        navigator.clipboard.writeText(value).then(() => {
          setCopied(true);
          toast.success(`${copiedLabel} to clipboard`);
          setTimeout(() => setCopied(false), 1800);
        });
      }}
      className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-all duration-200 hover:border-[var(--ember)] hover:text-[var(--ember)] active:scale-[0.94]">
      {copied ? (
        <Check className="h-3.5 w-3.5 text-[var(--ember)]" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-medium">Oluwadamilola Samson-Ajai</p>
          <p className="mt-1 text-sm text-muted-foreground">UI/UX Designer · Web Developer · AI-Assisted Creative</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-[var(--ember)]">LinkedIn</a>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-[var(--ember)]">GitHub</a>
          <a href={SOCIALS.emailHref} className="text-sm text-muted-foreground hover:text-[var(--ember)]">Email</a>
          <a href={SOCIALS.behance} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-[var(--ember)]">Behance</a>
          <a href="#cv" onClick={(e) => { e.preventDefault(); document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" }); }} className="text-sm text-muted-foreground hover:text-[var(--ember)]">CV</a>
        </nav>
        <p className="font-mono text-xs text-muted-foreground">
          Designed &amp; built by Oluwadamilola Samson-Ajai · {year}
        </p>
      </div>
    </footer>
  );
}
