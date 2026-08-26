/*
 * INK & EMBER — Áveraẹ dedicated case study.
 * Preserve the existing portfolio case-study structure: editorial hero,
 * restrained rules, serif display type, ember accents, real project imagery,
 * and the established project navigation/footer. This page adds content depth
 * without changing the portfolio shell or design system.
 */
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock, Search, SlidersHorizontal, Heart, ShoppingBag, Smartphone } from "lucide-react";
import { Link } from "wouter";
import { PROJECTS } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { Footer } from "@/components/PersonalityCvContact";
import NotFound from "@/pages/NotFound";

const project = PROJECTS.find((item) => item.slug === "averae-ecommerce");

function Kicker({ n, label }: { n: string; label: string }) {
  return (
    <div className="reveal mb-10 flex items-center gap-4">
      <span className="font-mono text-xs text-[var(--ember)]">{n}</span>
      <span className="hairline h-px w-14" />
      <span className="micro-label">{label}</span>
    </div>
  );
}

function BackToProjects() {
  return (
    <Link
      href="/"
      onClick={(event) => {
        event.preventDefault();
        window.location.href = "/#work";
      }}
      className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-foreground/60 transition-colors duration-300 hover:text-[var(--ember)]"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
      BACK TO PROJECTS
    </Link>
  );
}

const uxAreas = [
  ["Homepage", "A discovery-led entry point that balances product merchandising with fashion stories, trends and editorial modules."],
  ["Navigation", "A mega-menu structure lets shoppers enter through audience, product category or a more editorial route."],
  ["Shop experience", "Search, filters and sorting keep a broad assortment navigable without flattening the sense of curation."],
  ["Product pages", "Gallery, zoom, color and size selection, size guidance, delivery and returns information support confident decisions."],
  ["Wishlist & bag", "Persistent utility actions keep saved products and shopping-bag progress close to the product-discovery moment."],
  ["Support ecosystem", "Delivery, returns, refunds, FAQ, contact support, order tracking and account destinations extend the experience beyond checkout."],
];

const featureCards = [
  { icon: Search, label: "DISCOVER", title: "Search & browse", text: "Find products through audience, category, trends, new arrivals and The Áveraẹ Edit." },
  { icon: SlidersHorizontal, label: "NARROW", title: "Filter & sort", text: "Shape a large marketplace assortment around the shopper's intent." },
  { icon: Heart, label: "SAVE", title: "Wishlist", text: "Keep considered pieces close while moving between discovery and decision." },
  { icon: ShoppingBag, label: "SELECT", title: "Shopping bag", text: "Move from product choice toward a clear, practical purchase flow." },
  { icon: Check, label: "DECIDE", title: "Product confidence", text: "Size, delivery, returns and product information answer the questions that block purchase." },
  { icon: Smartphone, label: "CONTINUE", title: "Responsive mobile UX", text: "Carry the same discovery and shopping logic into a smaller, touch-first experience." },
];

export default function AveraeCaseStudy() {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <NotFound />;

  const currentIndex = PROJECTS.findIndex((item) => item.slug === project.slug);
  const previous = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />

      <main>
        <section className="pt-28 md:pt-36">
          <div className="container">
            <div className="reveal mb-10">
              <BackToProjects />
            </div>

            <div className="reveal reveal-clip" style={{ ["--reveal-delay" as string]: "60ms" }}>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="micro-label text-[var(--ember)]">E-COMMERCE / UI/UX / WEB DEVELOPMENT</span>
                <span className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                  <Clock className="h-3 w-3 text-[var(--ember)]" />
                  {project.readingTime} MIN READ
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl font-display text-xl italic leading-snug tracking-tight text-foreground/70 md:text-2xl">
                A complete fashion-commerce experience — where marketplace utility, editorial discovery and contemporary African identity meet.
              </p>
            </div>

            <div className="reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-border py-5" style={{ ["--reveal-delay" as string]: "120ms" }}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                <span className="text-foreground/80">{project.role}</span>
              </div>
              <div className="ml-auto flex flex-wrap items-center gap-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 border border-[var(--ember)] bg-[var(--ember)] px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] text-[#141311] transition-all duration-300 hover:bg-transparent hover:text-[var(--ember)]">
                  VIEW LIVE PROJECT
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <figure className="reveal relative mt-14 overflow-hidden border border-border md:mt-16" style={{ ["--reveal-delay" as string]: "180ms" }}>
              <img src={project.gallery?.[0] ?? project.image} alt="Áveraẹ fashion marketplace homepage" className="w-full bg-[#0a0909] object-contain" />
              <figcaption className="absolute bottom-0 left-0 border-r border-t border-border bg-background/90 px-4 py-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground backdrop-blur-sm">LIVE STOREFRONT / HOMEPAGE</figcaption>
            </figure>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="01" label="Overview" />
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal lg:col-span-7">
                <p className="max-w-2xl font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">{project.caseStudy.overview}</p>
                <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">This was not simply a visual website exercise. The work joined information architecture, discovery, product decision-making, bag utility, checkout context and the support ecosystem into one complete e-commerce user experience.</p>
              </div>
              <div className="reveal lg:col-span-5" style={{ ["--reveal-delay" as string]: "120ms" }}>
                <dl className="divide-y divide-border border-y border-border">
                  {[["Project", "Fashion & lifestyle marketplace"], ["Role", project.role], ["Scope", "UI/UX design and frontend development"], ["Detected runtime", "React bundle · Express response header"]].map(([key, value]) => (
                    <div key={key} className="grid grid-cols-3 gap-4 py-3.5"><dt className="micro-label text-[var(--ember)]">{key}</dt><dd className="col-span-2 text-sm leading-relaxed text-foreground/85">{value}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="02" label="The Challenge" />
            <div className="reveal grid gap-10 lg:grid-cols-12 lg:gap-16">
              <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl lg:col-span-5">A marketplace, not a catalog.</h2>
              <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg lg:col-span-7">{project.caseStudy.problem} The experience had to support Women, Men, Kids and Unisex audiences alongside clothing, shoes, bags, jewelry, hair, accessories, watches, beauty and lifestyle, and thrift wear — without making the shopper feel lost in the breadth.</p>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="03" label="The Approach" />
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {["Clear information architecture", "Simplified navigation", "Editorial discovery", "Mobile-first usability", "Search, filtering & sorting", "Seamless shopping flow"].map((item, index) => (
                <div key={item} className="reveal bg-background p-7" style={{ ["--reveal-delay" as string]: `${(index % 2) * 80}ms` }}>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--ember)]">PRINCIPLE {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-2xl tracking-tight">{item}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{["Organize a wide assortment around how shoppers think and browse.", "Use audience, category and editorial routes without competing navigation layers.", "Give trends, African fashion, new arrivals and curated edits a clear role in commerce.", "Make essential actions legible and touch-friendly across smaller screens.", "Help shoppers move from a broad assortment to the right product quickly.", "Keep discovery, product confidence, bag utility and support connected."][index]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="04" label="UX Design" />
            <div className="reveal mb-14 max-w-3xl"><p className="font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">The experience is designed as a connected journey — from the first editorial impression to product consideration, purchase utility and post-purchase support.</p></div>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {uxAreas.map(([title, text], index) => <article key={title} className="reveal bg-background p-6 md:p-7" style={{ ["--reveal-delay" as string]: `${(index % 3) * 70}ms` }}><span className="micro-label text-[var(--ember)]">0{index + 1}</span><h3 className="mt-8 font-display text-2xl tracking-tight">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
            <figure className="reveal mt-10 overflow-hidden border border-border"><img src={project.gallery?.[1]} alt="Áveraẹ shop experience with products and discovery controls" loading="lazy" className="w-full bg-[#0a0909] object-contain" /></figure>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="05" label="Key Features" />
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map(({ icon: Icon, label, title, text }, index) => <article key={title} className="reveal bg-background p-7 transition-colors duration-300 hover:bg-[#11100e]" style={{ ["--reveal-delay" as string]: `${(index % 3) * 70}ms` }}><Icon className="h-5 w-5 text-[var(--ember)]" strokeWidth={1.5} /><span className="mt-8 block font-mono text-[10px] tracking-[0.2em] text-muted-foreground">{label}</span><h3 className="mt-2 font-display text-2xl tracking-tight">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
            <figure className="reveal mt-10 overflow-hidden border border-border"><img src={project.gallery?.[2]} alt="Áveraẹ product detail experience" loading="lazy" className="w-full bg-[#0a0909] object-contain" /></figure>
          </div>
        </section>

        <section className="border-y border-border bg-[#11100e] py-24 md:py-32">
          <div className="container">
            <Kicker n="06" label="Visual Direction" />
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal lg:col-span-5"><h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">Minimal luxury, with a point of view.</h2></div>
              <div className="reveal lg:col-span-7" style={{ ["--reveal-delay" as string]: "120ms" }}><p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">The live storefront combines a minimal luxury aesthetic with contemporary African influence: warm editorial imagery, quiet typography, generous ivory space, dark brown type, fine rules and restrained interactions. Subtle motion supports browsing and discovery rather than competing with the products.</p></div>
            </div>
            <div className="mt-14 grid gap-3 md:grid-cols-2"><figure className="reveal overflow-hidden border border-border"><img src={project.gallery?.[0]} alt="Áveraẹ editorial fashion homepage" loading="lazy" className="w-full bg-[#0a0909] object-contain" /></figure><figure className="reveal overflow-hidden border border-border"><img src={project.gallery?.[2]} alt="Áveraẹ product page visual direction" loading="lazy" className="w-full bg-[#0a0909] object-contain" /></figure></div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <Kicker n="07" label="Outcome" />
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16"><div className="reveal"><p className="font-display text-2xl italic leading-snug tracking-tight text-foreground/80 md:text-3xl">A scalable e-commerce experience designed to support fashion shopping, discovery and future expansion.</p></div><div className="reveal" style={{ ["--reveal-delay" as string]: "120ms" }}><p className="text-base leading-relaxed text-foreground/80 md:text-lg">{project.caseStudy.outcome}</p><p className="mt-6 text-sm leading-relaxed text-muted-foreground">The result is not only a polished storefront surface. It is a connected system for audiences, categories, trends, editorial content, products, purchase decisions and support.</p></div></div>
          </div>
        </section>

        <section className="border-y border-border bg-[#11100e] py-16 md:py-20">
          <div className="container"><div className="reveal flex flex-wrap items-center justify-between gap-6"><BackToProjects /><div className="flex flex-wrap items-center gap-3">{previous && <Link href={previous.caseStudyPath ?? "#"} className="group flex flex-col items-start border border-border px-5 py-3 transition-colors duration-300 hover:border-[var(--ember)]"><span className="micro-label mb-1 font-mono text-[9px] tracking-[0.22em] text-muted-foreground"><ArrowLeft className="mr-1 inline h-3 w-3" /> PREVIOUS PROJECT</span><span className="font-display text-lg tracking-tight transition-colors duration-300 group-hover:text-[var(--ember)]">{previous.title}</span></Link>}</div><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 border border-[var(--ember)] bg-[var(--ember)] px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] text-[#141311] transition-all duration-300 hover:bg-transparent hover:text-[var(--ember)]">VIEW LIVE PROJECT <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" /></a></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
