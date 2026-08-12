/*
 * INK & EMBER — Central content module.
 * All portfolio data lives here so projects/experience/skills can be added or
 * edited later without touching components. Do NOT invent achievements here;
 * every entry must reflect real, verifiable experience (per brief §30).
 */

export const ASSETS = {
  monogram: "/manus-storage/osa-monogram_a2054be2.webp",
  portrait: "/manus-storage/portrait-real_edfda21a.webp",
  portrait2: "/manus-storage/portrait-real-2_45f9f0c1.webp",
  heroTexture: "/manus-storage/hero-texture_9b2bfce5.webp",
  divider: "/manus-storage/section-divider_12b73b02.png",
  beyondScreen: "/manus-storage/beyond-screen_d69848a5.png",
  learningDirection: "/manus-storage/learning-direction_05f69280.webp",
  aiCreativeBanner: "/manus-storage/ai-creative-banner_5a38019b.png",
  aiExpLanding: "/manus-storage/ai-exp-landing_672885a2.png",
  aiExpLogo: "/manus-storage/ai-exp-logo_b18a01b0.png",
  aiExpFlyer: "/manus-storage/ai-exp-flyer_e1ec4f76.png",
  aiExpUi: "/manus-storage/ai-exp-ui_cc1c8506.png",
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "work", label: "Work", href: "#work" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "contact", label: "Contact", href: "#contact" },
];

/* Email href now assembles from fragments at runtime (see emailObfuscation.ts) */
import { EMAIL_ADDRESS, EMAIL_HREF } from "./emailObfuscation";

export const SOCIALS = {
  email: EMAIL_ADDRESS,
  emailHref: EMAIL_HREF,
  linkedin: "https://www.linkedin.com/in/oluwadamilola-samson-ajai-2a2677360",
  github: "https://github.com/damifdev",
  behance: "https://www.behance.net/damilolasamson-ajai",
  phone: "+234 912 293 2268",
  phoneHref: "tel:+2349122932268",
  whatsapp: "https://wa.me/2349122932268",
};

/* ------------------------------------------------------------------ */
/* Positioning                                                         */
/* ------------------------------------------------------------------ */
export const POSITIONING = {
  badge: "UI/UX DESIGN × WEB DEVELOPMENT × AI-ASSISTED CREATIVE",
  headline: "I design digital experiences, build websites, and use AI to bring ideas to life.",
  subtext:
    "I'm Oluwadamilola, a UI/UX Designer and Web Developer creating thoughtful digital experiences, responsive websites, visual identities and creative assets — using a combination of design thinking, technology and AI-assisted workflows.",
  displayTitle: "Oluwadamilola Samson-Ajai — UI/UX Designer | Web Developer | AI-Assisted Creative",
  aboutPositioning:
    "I work at the intersection of design, technology and emerging AI tools. My background spans UI/UX design, web development, technical support and digital product creation. Today, I use AI-assisted workflows alongside traditional design and development practices to explore ideas faster, build websites more efficiently, and create visual assets that help brands communicate better.",
};

/* ------------------------------------------------------------------ */
/* Projects — add/edit entries freely; order = featured order          */
/* ------------------------------------------------------------------ */
export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
  gallery?: string[];
  highlight?: string;
  caseStudy: {
    overview: string;
    problem: string;
    roleDesc: string;
    process: string[];
    design: string;
    outcome: string;
    reflection: string;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "sanlam-gi-buy-insurance",
    title: "GI Buy Insurance Website",
    category: "Insurance Digital Products",
    year: "Sanlam",
    role: "UI/UX Designer",
    description:
      "Designing the digital journey that takes a visitor from first glance to a completed insurance purchase — clarity, trust and a responsive experience at every step.",
    tech: ["Figma", "UX Research", "Responsive Design", "Prototyping"],
    image: "/manus-storage/card-sanlam_89c11e5c.png",
    gallery: [
      "/manus-storage/card-sanlam_89c11e5c.png",
    ],
    highlight: "Insurance purchase journey · product thinking · responsive experience",
    caseStudy: {
      overview:
        "A digital product for Sanlam focused on letting people research and buy insurance online. The website brings the purchase journey to the web, where users can understand products, compare options and complete applications.",
      problem:
        "Buying insurance traditionally involves long forms, jargon and uncertainty. The challenge was to make the entire purchase journey feel clear, trustworthy and achievable on any device.",
      roleDesc:
        "UI/UX Designer — responsible for the user experience design of the purchase journey, interface design, responsive layouts and product thinking.",
      process: [
        "Mapped the end-to-end insurance purchase journey and identified friction points.",
        "Defined information architecture so product details are easy to find and compare.",
        "Designed responsive interfaces and interactive prototypes in Figma.",
        "Iterated layouts around clarity, trust signals and form simplicity.",
      ],
      design:
        "A clean, content-led interface with a clear step-by-step purchase flow, product cards that compare plans at a glance, and a responsive layout that works from phone to desktop.",
      outcome:
        "A coherent digital purchase experience that connects product thinking with interface craft across the full funnel.",
      reflection:
        "Insurance UX taught me that clarity is a design feature — when complex products are explained simply, trust follows.",
    },
  },
  {
    slug: "bancassurance-mobile-app",
    title: "BancAssurance Mobile App",
    category: "Insurance Digital Products",
    year: "Sanlam",
    role: "UI/UX Designer",
    description:
      "A mobile experience for bank agents and customers, shaped around real workflows, information architecture and flows that feel effortless in the hand.",
    tech: ["Figma", "User Flows", "Information Architecture", "Mobile UX"],
    image: "/manus-storage/card-bancassurance_fe2158f1.png",
    gallery: [
      "/manus-storage/card-bancassurance_fe2158f1.png",
    ],
    highlight: "Mobile UX · agent workflows · user flows",
    caseStudy: {
      overview:
        "A mobile application supporting bancassurance — the distribution of insurance products through banking channels — designed around the daily work of agents and the needs of customers.",
      problem:
        "Agents needed a tool that fit their real workflows rather than forcing them to adapt to the software. Complexity had to be structured so daily tasks stay fast.",
      roleDesc:
        "UI/UX Designer — responsible for mobile UX, agent workflows, information architecture, user flows and interface design.",
      process: [
        "Studied how agents actually work in the field and documented their key workflows.",
        "Built the information architecture around those workflows instead of product categories.",
        "Mapped user flows for the most common tasks and designed them for speed.",
        "Prototyped and refined the interface for legibility and ease of use on small screens.",
      ],
      design:
        "A task-first mobile interface with clear navigation, workflow-driven screens and a visual language that keeps dense information scannable.",
      outcome:
        "A mobile product whose structure mirrors how agents work, reducing the distance between opening the app and completing a task.",
      reflection:
        "Good mobile UX starts with the workflow, not the screen — when information architecture follows real behaviour, the interface almost designs itself.",
    },
  },
  {
    slug: "asset-management",
    title: "Asset Management",
    category: "Product Design / UI/UX",
    year: "Sanlam",
    role: "UI/UX & Product Designer",
    description:
      "A digital product experience designed to simplify asset management workflows through a structured, intuitive and data-focused interface.",
    tech: ["Figma", "Product Design", "Dashboard Design", "Information Architecture", "Data-Heavy Interfaces"],
    image: "/manus-storage/asset-dashboard_7287d154.webp",
    gallery: [
      "/manus-storage/asset-dashboard_7287d154.webp",
      "/manus-storage/asset-list_0ba0ba37.webp",
      "/manus-storage/asset-login_1da0ea41.webp",
    ],
    highlight: "Data-heavy dashboards · asset workflows · business interfaces",
    caseStudy: {
      overview:
        "A web-based asset management product designed for Sanlam — an internal tool that helps teams track, search and monitor IT assets through a dashboard, a structured asset register and a branded login experience. My role covered product and interface design: structuring the data, designing the dashboard and building a coherent visual system.",
      problem:
        "Asset information lives in messy, disconnected places. Teams need a single, structured view of what exists, its condition and who holds it — but data-heavy tools easily become overwhelming. The challenge was to make a large, complex dataset feel organized and easy to work with every day.",
      roleDesc:
        "UI/UX & Product Designer — responsible for the information architecture, dashboard and interface design, data visualization layout and the overall product experience.",
      process: [
        "Mapped the asset data and defined how teams would search, filter and view it day-to-day.",
        "Structured the information architecture around a simple sidebar navigation: Dashboard, Assets, Reports and Support.",
        "Designed the dashboard as the central experience — key metrics at a glance, age analysis and category distribution in charts.",
        "Built the asset register with search, filtering, pagination and clear status indicators.",
        "Designed a branded login experience consistent with the product's visual language.",
      ],
      design:
        "A structured, hierarchy-led interface: KPI cards surface the numbers that matter first, charts give context, and the asset table uses search, filters, pagination and color-coded status badges (Good / End of life) to keep a large dataset scannable. A consistent sidebar and restrained palette keep the whole product coherent.",
      outcome:
        "A structured, usable asset management experience — complex inventory data organized into a clear dashboard and workflow that staff can navigate without training.",
      reflection:
        "Data-heavy products taught me that clarity is architecture, not decoration — the dashboard only works because the information behind it was organized first. Designing for real internal workflows means balancing completeness with simplicity, and letting hierarchy do the talking.",
    },
  },
  {
    slug: "cgsul-website-redesign",
    title: "CGSUL Website Redesign",
    category: "WordPress / Web Development",
    year: "Freelance",
    role: "WordPress Developer",
    description:
      "A full website redesign and rebuild — from an outdated web presence to a modern, responsive site built with WordPress, Elementor and custom front-end craft.",
    tech: ["WordPress", "Elementor", "Astra", "HappyAddons", "HTML", "CSS", "JavaScript"],
    image: "/manus-storage/project-cgsul_d614551d.webp",
    highlight: "Before/after redesign · responsive layouts · migration & hosting",
    caseStudy: {
      overview:
        "A complete redesign and development of the CGSUL website, transforming an outdated web presence into a modern, responsive WordPress site.",
      problem:
        "The existing site no longer represented the organisation — dated design, poor mobile experience and content that was difficult to maintain.",
      roleDesc:
        "WordPress Developer — led the redesign and development, from visual design decisions through build, migration and hosting.",
      process: [
        "Audited the existing site and defined redesign goals for design and usability.",
        "Designed a new visual direction and responsive layouts.",
        "Built the site with WordPress, Elementor, Astra and HappyAddons, plus custom HTML, CSS and JavaScript.",
        "Managed migration and hosting challenges to get the new site live reliably.",
      ],
      design:
        "A cleaner, editorial layout system with responsive grids, improved typography and components that the team can maintain in WordPress without touching code.",
      outcome:
        "A modern, responsive website that reflects the organisation properly and is far easier to maintain day-to-day.",
      reflection:
        "Real-world builds teach you that design decisions, development and hosting all belong to the same project — mastery is connecting them well.",
    },
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    category: "WordPress / Web Development",
    year: "1999 Ideas",
    role: "WordPress Developer",
    description:
        "Building and maintaining WordPress websites as a professional role — Elementor implementations, responsive front-end development, AI-assisted workflows and ongoing site stewardship.",
    tech: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "AI-Assisted Development"],
    image: "/manus-storage/project-1999ideas_49011381.webp",
    highlight: "WordPress development · responsive design · site maintenance",
    caseStudy: {
      overview:
        "Professional WordPress development work at 1999 Ideas — implementing designs, building responsive websites, exploring AI-assisted development workflows and maintaining live web properties.",
      problem:
        "Clients need websites that look designed, perform well on every device, and keep working reliably long after launch.",
      roleDesc:
        "WordPress Developer — responsible for WordPress development, website implementation, responsive design, Elementor work, UI implementation, frontend development and maintenance.",
      process: [
        "Translated design files into working WordPress sites using Elementor and custom code where needed.",
        "Implemented responsive layouts so every page works on phone, tablet and desktop.",
        "Built UI components and interactions that match the intended design.",
        "Maintained live sites — updates, fixes and continuous improvement.",
      ],
      design:
        "Pixel-conscious implementation of designed interfaces, with responsive behaviour treated as a first-class design requirement rather than an afterthought.",
      outcome:
        "Reliably built, responsive WordPress websites delivered for clients and maintained over time.",
      reflection:
        "Maintenance is where professionalism shows — a website is only as good as it is six months after launch.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */
export interface ExperienceEntry {
  role: string;
  company: string;
  framing: string;
  points: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "WordPress Developer",
    company: "1999 Ideas",
    framing:
      "Building and maintaining WordPress websites — implementation, responsive design, Elementor, frontend development and ongoing site stewardship.",
    points: [
      "Developed WordPress websites from design files, using Elementor and custom HTML, CSS and JavaScript.",
      "Implemented responsive layouts and UI components that work across devices.",
      "Maintained live websites: updates, fixes, performance and content support.",
      "Collaborated on translating client requirements into working web products.",
    ],
  },
  {
    role: "Managing Director",
    company: "Uptown Health Limited",
    framing:
      "Business leadership combined with digital operations — technology, process improvement, team coordination and problem solving.",
    points: [
      "Led business operations with a strong technology and digital-operations focus.",
      "Improved internal processes and coordinated teams around practical workflows.",
      "Applied problem-solving discipline to operational and technical challenges.",
      "Combined business leadership with hands-on digital execution.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Sanlam Life Insurance",
    framing:
      "Digital product design for insurance — mobile applications, web interfaces, user research, prototyping and design systems.",
    points: [
      "Designed digital products including the GI Buy Insurance website and mobile applications.",
      "Conducted user research and built user flows, wireframes and prototypes.",
      "Developed interface design and contributed to design systems.",
      "Collaborated across product, design and business teams to ship usable experiences.",
    ],
  },
  {
    role: "IT Support Trainee",
    company: "Sovereign Trust Insurance PLC",
    framing:
      "Foundational technical support — troubleshooting, hardware and software support, user support and IT operations.",
    points: [
      "Provided technical support and troubleshooting for hardware and software.",
      "Supported end users across day-to-day IT operations.",
      "Gained foundational exposure to enterprise IT environments.",
      "Learned how technology systems behave under real operational pressure.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Skills — interactive clusters, no proficiency bars                  */
/* ------------------------------------------------------------------ */
export interface SkillGroup {
  category: string;
  index: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Product & UX Design",
    index: "A",
    skills: [
      "UI Design",
      "UX Design",
      "User Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Interaction Design",
      "Strategic Design Thinking",
    ],
  },
  {
    category: "Web Development",
    index: "B",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "Elementor",
      "Responsive Web Development",
      "Git",
      "GitHub",
    ],
  },
  {
    category: "AI-Assisted Design & Development",
    index: "C",
    skills: [
      "AI-Assisted Website Development",
      "AI-Assisted UI/UX Design",
      "AI-Assisted Visual Design",
      "AI-Assisted Logo Design",
      "AI-Assisted Flyer Design",
      "Prompt Engineering",
      "AI-Assisted Content Creation",
      "AI Workflow Development",
      "Rapid Prototyping",
    ],
  },
  {
    category: "Creative Tools",
    index: "D",
    skills: [
      "Figma",
      "Canva",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "After Effects",
      "Premiere Pro",
      "CapCut",
    ],
  },
  {
    category: "IT & Technology",
    index: "E",
    skills: [
      "Technical Support",
      "Hardware & Software Troubleshooting",
      "Linux",
      "Networking",
      "Cybersecurity",
      "Python",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Design Process — "How I Think"                                      */
/* ------------------------------------------------------------------ */
export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Understand",
    text: "Understand the user, the business problem and the context before touching a pixel.",
  },
  {
    index: "02",
    title: "Explore",
    text: "Research, map user journeys and explore the space of possible solutions.",
  },
  {
    index: "03",
    title: "Design",
    text: "Turn ideas into wireframes, interfaces and prototypes that can be tested.",
  },
  {
    index: "04",
    title: "Build",
    text: "Translate designs into functional digital experiences — code is part of the craft.",
  },
  {
    index: "05",
    title: "Refine",
    text: "Test, iterate and improve. The first version is a hypothesis, not a verdict.",
  },
];

/* ------------------------------------------------------------------ */
/* AI Workflow — six-step creative workflow with AI-assisted steps     */
/* ------------------------------------------------------------------ */
export const AI_WORKFLOW_STEPS = [
  {
    index: "01",
    title: "Discover",
    text: "Understand the problem — the user, the brand and what the outcome must achieve.",
  },
  {
    index: "02",
    title: "Explore",
    text: "Use AI to rapidly explore ideas, directions and possibilities at a speed traditional research can't match.",
  },
  {
    index: "03",
    title: "Design",
    text: "Apply UX principles and visual design judgment — AI suggests, I decide.",
  },
  {
    index: "04",
    title: "Build",
    text: "Use AI-assisted development alongside traditional coding to move from concept to working product.",
  },
  {
    index: "05",
    title: "Refine",
    text: "Review, test, edit and improve — every output is checked against real design standards.",
  },
  {
    index: "06",
    title: "Ship",
    text: "Deliver the final website, interface, brand asset or creative product.",
  },
];

export const AI_WORKFLOW_QUOTE = "AI accelerates the process. Human judgment defines the result.";

/* ------------------------------------------------------------------ */
/* AI × Creative Technology — three capability pillars                 */
/* ------------------------------------------------------------------ */
export const AI_PILLARS = [
  {
    index: "01",
    title: "AI-Assisted Website Development",
    items: [
      "Website ideation",
      "Page structure & content planning",
      "UI generation & exploration",
      "Frontend development assistance",
      "Code generation & refinement",
      "Debugging & troubleshooting",
      "Rapid prototyping",
      "Website iteration",
    ],
  },
  {
    index: "02",
    title: "AI-Assisted Visual Design",
    items: [
      "Logo concepts",
      "Brand identity exploration",
      "Flyer design",
      "Promotional graphics",
      "Social media designs",
      "Visual concepts",
      "Image generation & refinement",
    ],
  },
  {
    index: "03",
    title: "AI-Assisted UI/UX",
    items: [
      "Design exploration",
      "Layout ideation",
      "User flow exploration",
      "Rapid prototyping",
      "Content structuring",
      "Interface variations",
      "Design iteration",
    ],
  },
];

export const AI_WORKFLOW_CHAIN = ["Idea", "Prompt", "Explore", "Design", "Refine", "Build", "Ship"];

export const AI_DISCLAIMER =
  "AI is a tool inside my creative process — not a replacement for design judgment. Every concept is shaped, curated and refined by human craft before it ships.";

/* ------------------------------------------------------------------ */
/* What I Can Build — capability cards                                 */
/* ------------------------------------------------------------------ */
export const CAPABILITY_CARDS = [
  {
    title: "Websites",
    text: "Responsive websites and digital experiences built to work everywhere.",
  },
  {
    title: "Interfaces",
    text: "User-centered web and mobile interfaces designed around real workflows.",
  },
  {
    title: "Brand Identity",
    text: "Logos, visual identities and brand assets that help brands communicate.",
  },
  {
    title: "Marketing Design",
    text: "Flyers, social graphics and promotional materials with editorial polish.",
  },
  {
    title: "AI-Assisted Products",
    text: "Digital concepts rapidly explored and developed with AI-assisted workflows.",
  },
  {
    title: "WordPress",
    text: "Professional responsive websites and custom WordPress implementations.",
  },
];

/* ------------------------------------------------------------------ */
/* AI-Assisted Creative Projects — clearly labeled concept work        */
/* ------------------------------------------------------------------ */
export interface AiProject {
  title: string;
  kind: string;
  concept: string;
  tool: string;
  result: string;
  image: string;
  isConcept: boolean;
}

export const AI_PROJECTS: AiProject[] = [
  {
    title: "AI-Generated Landing Page",
    kind: "AI-Assisted Website Creation",
    concept: "A landing page concept explored through AI-assisted ideation and design generation.",
    tool: "Generative AI tools + HTML/CSS",
    result: "Design exploration and layout concepts validated through rapid iteration.",
    image: ASSETS.aiExpLanding,
    isConcept: true,
  },
  {
    title: "Logo Concept Exploration",
    kind: "AI-Assisted Logo & Brand Design",
    concept: "A set of letterform brand marks generated and refined as identity starting points.",
    tool: "Generative AI tools + Illustrator",
    result: "Directional brand marks ready for client-driven refinement.",
    image: ASSETS.aiExpLogo,
    isConcept: true,
  },
  {
    title: "Flyer Design Variants",
    kind: "AI-Assisted Flyer Design",
    concept: "Editorial flyer compositions explored as creative concepts and visual starting points.",
    tool: "Generative AI tools + Photoshop",
    result: "Layout and typographic directions to build final campaign materials from.",
    image: ASSETS.aiExpFlyer,
    isConcept: true,
  },
  {
    title: "Mobile UI Explorations",
    kind: "AI-Assisted UI/UX",
    concept: "Interface variations for a mobile flow — layout, hierarchy and interaction options.",
    tool: "Generative AI tools + Figma",
    result: "A shortlist of interface directions chosen with design judgment, not left to the tool.",
    image: ASSETS.aiExpUi,
    isConcept: true,
  },
];

/* ------------------------------------------------------------------ */
/* Journey — interactive animated timeline                             */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Currently Becoming — learning direction                             */
/* ------------------------------------------------------------------ */
export const LEARNING_TOPICS = [
  "AI-Assisted Development",
  "AI Automation",
  "Cybersecurity",
  "Python",
  "Linux",
  "Networking",
  "Software Engineering",
  "Cloud Technologies",
];

/* Distinct Completed vs Currently Learning — never blur the line */
export const CERTIFICATIONS = {
  completed: [
    { name: "Google UX Design Professional Certificate", status: "completed" as const },
    { name: "Cybersecurity Training (Security+ Fundamentals) — HiiT Plc", status: "completed" as const },
    { name: "Cisco Certified Network Associate (CCNA) — HiiT Plc", status: "completed" as const },
    { name: "Certified Ethical Hacker (CEH) — HiiT Plc", status: "completed" as const },
    { name: "Python Programming with AI Tools — HiiT Plc", status: "completed" as const },
  ],
  inProgress: [
    { name: "CompTIA Security+ Professional Exam — Certification Prep", status: "learning" as const },
    { name: "French Language — Duolingo", status: "learning" as const },
    { name: "Frontend Development", status: "learning" as const },
  ],
};

/* ------------------------------------------------------------------ */
/* Journey — interactive animated timeline                             */
/* ------------------------------------------------------------------ */
export const JOURNEY_STEPS = [
  "Computer Science",
  "IT Support",
  "UI/UX Design",
  "Digital Product Design",
  "Web Development",
  "AI-Assisted Creative Technology",
  "Cybersecurity",
];

/* ------------------------------------------------------------------ */
/* Beyond the Screen — personality themes                              */
/* ------------------------------------------------------------------ */
export const PERSONAL_THEMES = [
  {
    title: "Technology",
    text: "I follow where technology is going — AI, automation and security included — because the best experiences are built with what's next, not just what's familiar.",
  },
  {
    title: "Design & Creativity",
    text: "Design is a way of thinking, not just a set of outputs. I treat every problem as a composition waiting for the right structure.",
  },
  {
    title: "Learning",
    text: "I'm deliberately building breadth: from design systems to Linux terminals, from Figma to Python. Versatility is the long-term ambition.",
  },
  {
    title: "Building",
    text: "I like things that exist in the world. Ideas become real through prototypes, code and shipped products.",
  },
  {
    title: "Travel & Growth",
    text: "New places and new perspectives sharpen the same muscle: noticing how people actually live with things — and designing for that.",
  },
];
