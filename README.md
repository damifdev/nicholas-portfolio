# Oluwadamilola Samson-Ajai Portfolio

A premium dark-editorial portfolio for **Oluwadamilola Samson-Ajai**, UI/UX Designer, Web Developer and AI-Assisted Creative.

The portfolio presents selected product design, web development, e-commerce, game design and AI-assisted creative work through a focused editorial interface and dedicated project case studies.

## Live Website

[View the live portfolio](https://nicholasux-gxz8p489.manus.space)

## Highlights

- Ink & Ember dark-editorial visual system with Fraunces and Space Grotesk typography.
- Responsive portfolio homepage with selected work, skills, experience, learning and contact sections.
- Dedicated case-study pages for Áveraẹ, Tournament Ledger, Jigsaw Game Development and the design projects.
- Featured projects arranged as Áveraẹ, Tournament Ledger, Jigsaw Game Development, followed by the design projects.
- Áveraẹ fashion marketplace case study covering e-commerce UX, product discovery, navigation, filtering, checkout and mobile experience.
- Tournament Ledger chess case study with live gameplay footage and product-design storytelling.
- Accessible, reusable Certificates archive with support for future verified image or PDF certificate files.
- Prefilled Start a Conversation email CTA and copy-email fallback.
- Responsive layouts, project navigation, reading-time badges and animated interaction details.

## Technology

The project is built with the following technologies currently defined in `package.json`:

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Wouter
- Radix UI and shadcn-style components
- Lucide React
- Express production server
- pnpm

## Project Structure

```text
client/
  src/
    components/       Shared portfolio sections and UI components
    lib/              Central project, navigation and content data
    pages/            Homepage and project case-study pages
    App.tsx           Application routes
    index.css         Global design tokens and styles
server/               Production server entry point
shared/               Shared constants
```

## Getting Started

### Requirements

- Node.js 20 or newer
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Vite will print the local development URL in the terminal.

### Type checking

```bash
pnpm check
```

### Production build

```bash
pnpm build
```

### Preview the production frontend

```bash
pnpm preview
```

### Run the bundled production server

```bash
pnpm start
```

## Updating Portfolio Content

Project metadata, project order, navigation links, social links, learning records and certificate metadata are centralized in:

```text
client/src/lib/data.ts
```

Project case-study pages live in:

```text
client/src/pages/
```

To add a verified certificate, upload its optimized preview or PDF to the project’s asset storage, add its metadata to the certificate archive data in `client/src/lib/data.ts`, and keep the file type, title, issuer, year and verification details accurate. The Certificates component is data-driven and does not require a layout redesign for additional entries.

## Contact

- Email: [damilola.samsonajai@gmail.com](mailto:damilola.samsonajai@gmail.com)
- GitHub: [github.com/damifdev](https://github.com/damifdev)
- LinkedIn: [Oluwadamilola Samson-Ajai](https://www.linkedin.com/in/oluwadamilola-samson-ajai-2a267736)
- Behance: [damilolasamson-ajai](https://www.behance.net/damilolasamson-ajai)

## License

This project is released under the MIT License as specified in `package.json`.
