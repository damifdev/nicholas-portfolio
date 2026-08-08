/*
 * INK & EMBER — Central content module.
 * All portfolio data lives here so projects/experience/skills can be added or
 * edited later without touching components. Do NOT invent achievements here;
 * every entry must reflect real, verifiable experience (per brief §30).
 */

export const ASSETS = {
  monogram: "/manus-storage/osa-monogram_85fa557c.png",
  portrait: "/manus-storage/hero-portrait_256386d0.png",
  heroTexture: "/manus-storage/hero-texture_864edf0f.png",
  divider: "/manus-storage/section-divider_12b73b02.png",
  beyondScreen: "/manus-storage/beyond-screen_d69848a5.png",
  learningDirection: "/manus-storage/learning-direction_430ee304.png",
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "work", label: "Work", href: "#work" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const SOCIALS = {
  email: "hello@nicholassamsonajai.dev",
  emailHref: "mailto:hello@nicholassamsonajai.dev",
  linkedin: "https://www.linkedin.com/in/nicholassamsonajai",
  github: "https://github.com/nicholassamsonajai",
  whatsapp: "https://wa.me/2340000000000", // TODO: replace with Nicholas's number
  // Add other profiles here as they become available
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
    image: "/manus-storage/project-sanlam-buy_206ec58d.png",
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
    image: "/manus-storage/project-bancassurance_402c3bcf.png",
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
    slug: "virtual-agent-app",
    title: "Virtual Agent App",
    category: "Insurance Digital Products",
    year: "Sanlam",
    role: "UI/UX Designer",
    description:
      "Simplifying complex agent operations into a mobile interface that makes a demanding job feel manageable — UX architecture and usability first.",
    tech: ["Figma", "UX Architecture", "Mobile UI", "Usability"],
    image: "/manus-storage/project-virtual-agent_d19ec6cf.png",
    highlight: "Simplifying complex workflows · UX architecture · usability",
    caseStudy: {
      overview:
        "A virtual agent application that supports agents in managing their work — clients, tasks and follow-ups — from a single, simplified mobile interface.",
      problem:
        "Agent tools often pile feature on feature until the software becomes the obstacle. The challenge was to compress a complex operating model into an interface that feels calm.",
      roleDesc:
        "UI/UX Designer — responsible for simplifying complex workflows, UX architecture, mobile interface design and overall product usability.",
      process: [
        "Deconstructed the agent's workflow into its essential actions.",
        "Designed a UX architecture that surfaces what matters now and tucks away what doesn't.",
        "Built mobile interfaces that prioritize glanceable information and one-tap actions.",
        "Reviewed usability continuously, removing anything that didn't earn its place.",
      ],
      design:
        "A focused dashboard-style interface with clear task states, minimal navigation depth and calm visual rhythm.",
      outcome:
        "A usable product that reduces cognitive load, letting agents work through complexity without fighting the tool.",
      reflection:
        "Simplification is subtraction with conviction — the hardest design decisions were the features we chose to leave out.",
    },
  },
  {
    slug: "pos-digital-operations",
    title: "POS & Digital Operations",
    category: "Operations Experience",
    year: "Field Experience",
    role: "Operations & UX Support",
    description:
      "Hands-on experience with POS machines and multi-location operations — where technology, operations and user experience meet the real world.",
    tech: ["POS Systems", "Operations Support", "Troubleshooting", "User Experience"],
    image: "/manus-storage/project-pos-ops_b985110a.png",
    highlight: "Technology × Operations × User Experience",
    caseStudy: {
      overview:
        "Field and operations experience working with POS machines and supporting digital operations across different locations, spanning setup, support and day-to-day reliability.",
      problem:
        "Payment and operations technology only works if it survives real-world conditions — network drops, unfamiliar users, and the pressure of live transactions.",
      roleDesc:
        "Supported POS operations across locations, troubleshooting hardware and software, and observing how real users interact with the devices.",
      process: [
        "Supported POS deployment and operation across multiple locations.",
        "Troubleshot hardware and software issues under live operational pressure.",
        "Observed how users interact with the devices and fed those insights back into support practice.",
        "Connected field realities with the digital systems running behind them.",
      ],
      design:
        "Not a designed product in the traditional sense — the 'interface' was the daily interaction between people, machines and processes, shaped by hands-on observation.",
      outcome:
        "Grounded, practical fluency in how digital products behave outside the studio — a perspective that now informs every interface I design.",
      reflection:
        "Working POS operations taught me that every design eventually meets the real world — and the best interfaces are built with that world in mind.",
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
    image: "/manus-storage/project-cgsul_97c55d4d.png",
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
    slug: "1999-ideas",
    title: "1999 Ideas",
    category: "WordPress / Web Development",
    year: "1999 Ideas",
    role: "WordPress Developer",
    description:
        "Building and maintaining WordPress websites as a professional role — Elementor implementations, responsive front-end development and ongoing site stewardship.",
    tech: ["WordPress", "Elementor", "UI Implementation", "Frontend Development", "Maintenance"],
    image: "/manus-storage/project-1999ideas_da261368.png",
    highlight: "WordPress development · responsive design · site maintenance",
    caseStudy: {
      overview:
        "Professional WordPress development work at 1999 Ideas — implementing designs, building responsive websites and maintaining live web properties.",
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
    category: "Product Design",
    index: "A",
    skills: [
      "UI Design",
      "UX Design",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Interaction Design",
    ],
  },
  {
    category: "Development",
    index: "B",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "Elementor",
      "Git",
      "GitHub",
      "Responsive Web Development",
    ],
  },
  {
    category: "Creative Tools",
    index: "C",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "After Effects",
      "Premiere Pro",
      "Canva",
      "CapCut",
    ],
  },
  {
    category: "Emerging Technology",
    index: "D",
    skills: [
      "Python",
      "Artificial Intelligence",
      "AI Automation",
      "Cybersecurity",
      "Linux",
      "Networking",
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
/* Currently Becoming — learning direction                             */
/* ------------------------------------------------------------------ */
export const LEARNING_TOPICS = [
  "Cybersecurity",
  "AI Engineering",
  "AI Automation",
  "Python",
  "Networking",
  "Linux",
  "Software Engineering",
  "Cloud Technologies",
];

/* Distinct Completed vs Currently Learning — never blur the line */
export const CERTIFICATIONS = {
  completed: [
    { name: "Google UX Design Professional Certificate", status: "completed" as const },
  ],
  inProgress: [
    { name: "CompTIA Security+", status: "learning" as const },
    { name: "CCNA", status: "learning" as const },
    { name: "CEH", status: "learning" as const },
    { name: "Python / AI learning path", status: "learning" as const },
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
  "WordPress Development",
  "Software Development",
  "AI & Automation",
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
