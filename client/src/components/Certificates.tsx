/*
 * INK & EMBER — Certificates archive.
 * A restrained, data-driven certificate gallery that inherits the portfolio's
 * editorial borders, typography, ember accent and reveal language. Only
 * verified file-backed records from CERTIFICATE_ARCHIVE are rendered.
 */
import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { SectionHeading } from "./SelectedWork";
import { CERTIFICATE_ARCHIVE, type Certificate } from "@/lib/data";

const FILTERS = ["ALL", "DESIGN", "DEVELOPMENT", "AI", "CYBERSECURITY", "OTHER"] as const;
type Filter = (typeof FILTERS)[number];

export function CertificatesSection() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visibleCertificates = CERTIFICATE_ARCHIVE.filter((certificate) => {
    return filter === "ALL" || certificate.category === filter;
  });
  const activeIndex = visibleCertificates.findIndex((certificate) => certificate.id === activeId);
  const activeCertificate = activeIndex >= 0 ? visibleCertificates[activeIndex] : null;

  useEffect(() => {
    if (activeCertificate && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [activeCertificate]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const restoreFocus = () => {
      setActiveId(null);
      setZoom(1);
      triggerRef.current?.focus();
    };
    const handleCancel = (event: Event) => {
      event.preventDefault();
      dialog.close();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!dialog.open || visibleCertificates.length < 2) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveId(visibleCertificates[(activeIndex + 1) % visibleCertificates.length].id);
        setZoom(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveId(visibleCertificates[(activeIndex - 1 + visibleCertificates.length) % visibleCertificates.length].id);
        setZoom(1);
      }
    };

    dialog.addEventListener("close", restoreFocus);
    dialog.addEventListener("cancel", handleCancel);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      dialog.removeEventListener("close", restoreFocus);
      dialog.removeEventListener("cancel", handleCancel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, visibleCertificates]);

  const openCertificate = (certificate: Certificate, event: MouseEvent<HTMLButtonElement>) => {
    if (!certificate.file) return;
    triggerRef.current = event.currentTarget;
    setZoom(1);
    setActiveId(certificate.id);
  };

  return (
    <section id="certificates" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="13"
          kicker="Certificates"
          title="Learning, made visible."
          subtitle="A curated archive of certifications, courses and professional learning milestones that have shaped my journey."
        />

        {CERTIFICATE_ARCHIVE.length > 0 && (
          <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-border pb-6" aria-label="Filter certificates">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`border px-3 py-2 font-mono text-[10px] tracking-[0.18em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)] ${filter === item ? "border-[var(--ember)] bg-[var(--ember)] text-primary-foreground" : "border-border text-muted-foreground hover:border-[var(--ember)] hover:text-[var(--ember)]"}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {visibleCertificates.length === 0 ? (
          <div className="border border-dashed border-[var(--ember)]/45 bg-card/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div className="flex aspect-[4/3] items-center justify-center border border-border bg-[#171614]">
                <div className="text-center">
                  <FileText className="mx-auto h-10 w-10 text-[var(--ember)]" strokeWidth={1.2} />
                  <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">ARCHIVE READY</p>
                </div>
              </div>
              <div>
                <p className="micro-label text-[var(--ember)]">Awaiting verified files</p>
                <h3 className="mt-3 font-display text-3xl font-medium md:text-4xl">A considered archive, not a list.</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Certificate cards appear here only after the original certificate image or PDF is added. This keeps completion status, dates, credential IDs and verification links accurate rather than assumed.
                </p>
                <p className="mt-5 border-l-2 border-[var(--ember)] pl-4 font-mono text-[11px] leading-relaxed text-foreground/70">
                  Add a file to webdev storage, then add its metadata to <code>CERTIFICATE_ARCHIVE</code> in <code>client/src/lib/data.ts</code>.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-12">
            {visibleCertificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                onOpen={(event) => openCertificate(certificate, event)}
              />
            ))}
          </div>
        )}

        <dialog
          ref={dialogRef}
          aria-label={activeCertificate ? `${activeCertificate.title} certificate viewer` : "Certificate viewer"}
          className="max-h-[92vh] w-[min(96vw,1180px)] overflow-hidden border border-border bg-[#11100f] p-0 text-foreground backdrop:bg-[#080707]/90 open:animate-in open:fade-in open:zoom-in-95"
        >
          {activeCertificate && (
            <div className="flex max-h-[92vh] flex-col">
              <div className="flex items-start justify-between gap-6 border-b border-border px-5 py-4 md:px-7">
                <div>
                  <p className="micro-label text-[var(--ember)]">{activeCertificate.category} / {activeCertificate.status}</p>
                  <h3 className="mt-2 font-display text-2xl font-medium md:text-3xl">{activeCertificate.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{activeCertificate.issuer}{activeCertificate.date ? ` · ${activeCertificate.date}` : ""}</p>
                </div>
                <button
                  type="button"
                  onClick={() => dialogRef.current?.close()}
                  aria-label="Close certificate viewer"
                  className="border border-border p-2 text-muted-foreground transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-auto bg-[#0c0b0a] p-4 md:p-8">
                {isPdf(activeCertificate.file) ? (
                  <iframe src={`${activeCertificate.file}#toolbar=0`} title={`${activeCertificate.title} PDF`} className="h-[60vh] min-h-[420px] w-full bg-white" />
                ) : (
                  <div className="flex min-h-[420px] items-center justify-center overflow-auto">
                    <img
                      src={activeCertificate.file}
                      alt={`${activeCertificate.title} certificate issued by ${activeCertificate.issuer}`}
                      className="max-h-[70vh] max-w-full origin-center object-contain transition-transform duration-200"
                      style={{ transform: `scale(${zoom})` }}
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-4 md:px-7">
                <div className="flex items-center gap-2">
                  {!isPdf(activeCertificate.file) && (
                    <>
                      <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} aria-label="Zoom out" className="border border-border p-2 text-muted-foreground transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)]"><Minus className="h-4 w-4" /></button>
                      <span className="min-w-12 text-center font-mono text-[10px] text-muted-foreground">{Math.round(zoom * 100)}%</span>
                      <button type="button" onClick={() => setZoom((value) => Math.min(2.5, value + 0.25))} aria-label="Zoom in" className="border border-border p-2 text-muted-foreground transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)]"><Plus className="h-4 w-4" /></button>
                    </>
                  )}
                  {visibleCertificates.length > 1 && (
                    <>
                      <button type="button" onClick={() => setActiveId(visibleCertificates[(activeIndex - 1 + visibleCertificates.length) % visibleCertificates.length].id)} aria-label="Previous certificate" className="ml-2 border border-border p-2 text-muted-foreground transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)]"><ChevronLeft className="h-4 w-4" /></button>
                      <button type="button" onClick={() => setActiveId(visibleCertificates[(activeIndex + 1) % visibleCertificates.length].id)} aria-label="Next certificate" className="border border-border p-2 text-muted-foreground transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)]"><ChevronRight className="h-4 w-4" /></button>
                    </>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {activeCertificate.verificationUrl && <a href={activeCertificate.verificationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)]"><ExternalLink className="h-3.5 w-3.5" /> Verify</a>}
                  <a href={activeCertificate.file} download className="inline-flex items-center gap-2 bg-[var(--ember)] px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-[var(--ember)]/90"><Download className="h-3.5 w-3.5" /> Download Certificate</a>
                </div>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
}

function CertificateCard({ certificate, index, onOpen }: { certificate: Certificate; index: number; onOpen: (event: MouseEvent<HTMLButtonElement>) => void }) {
  const layoutClass = index % 3 === 0 ? "md:col-span-7" : "md:col-span-5";
  const preview = certificate.previewImage || certificate.file;

  return (
    <article className={`reveal group ${layoutClass}`} style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}>
      <button
        type="button"
        onClick={onOpen}
        disabled={!certificate.file}
        aria-label={certificate.file ? `View ${certificate.title} certificate` : `${certificate.title} certificate file pending`}
        className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)] disabled:cursor-not-allowed"
      >
        <div className="relative overflow-hidden border border-border bg-card transition-colors duration-300 group-hover:border-[var(--ember)]/60">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#171614]">
            {preview ? <img src={preview} alt={`${certificate.title} certificate preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" /> : <div className="flex h-full items-center justify-center"><ImageIcon className="h-8 w-8 text-muted-foreground" /></div>}
            <span className="absolute bottom-4 left-4 border border-[var(--ember)] bg-[#141311]/90 px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-[var(--ember)]">{certificate.file ? "VIEW CERTIFICATE →" : "FILE PENDING"}</span>
          </div>
          <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:p-7">
            <div>
              <p className="micro-label text-[var(--ember)]">{certificate.category}</p>
              <h3 className="mt-2 font-display text-2xl font-medium">{certificate.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ""}</p>
              {certificate.description && <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{certificate.description}</p>}
            </div>
            <div className="flex items-start gap-2 font-mono text-[10px] tracking-[0.14em] text-muted-foreground md:flex-col md:items-end">
              <span className="text-[var(--ember)]">{certificate.status}</span>
              {certificate.credentialId && <span>{certificate.credentialId}</span>}
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}

function isPdf(file?: string) {
  return Boolean(file?.toLowerCase().split("?")[0].endsWith(".pdf"));
}
