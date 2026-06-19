<div align="center">

<img src="https://res.cloudinary.com/dknmebeee/image/upload/v1781864827/Screenshot_2026-06-19_162254_tpdmxk.png" alt="SpiraLink Screenshot" width="100%" />

# SpiraLink — AI Voicebot Platform for Call Centers

**Marketing & product website for a hybrid voicebot AI platform built for call centers**, featuring a multi-step lead-generation funnel, an AI voice assistant demo, and a partner program landing experience.

[![Live Site](https://img.shields.io/badge/Live-spiralink.ai-49416A?style=for-the-badge)](https://spiralink.ai/)


</div>

---

## About The Project

SpiraLink is a **hybrid voicebot AI platform** built for call centers that want to scale support operations, improve service quality, and modernize how they handle incoming calls. The platform is positioned to support up to 100 simultaneous calls with 10+ language support, automatically resolving the majority of inquiries with AI while routing the rest to human agents.

I was responsible for **building the entire frontend** for SpiraLink's marketing site — the page architecture, UI components, responsive layouts, animations, and the multi-step demo request flow. The site also includes an **AI voice assistant feature**, added by the client's team on top of the frontend foundation I built, that lets visitors have a live spoken conversation about the product directly in the browser.

### Key Sections & Features

- **Landing experience** — Hero, value-proposition stats (efficiency gains, call volume, resolution rate, escalation rate), and an industries/scale showcase covering Finance, Retail, Government, Travel, and Insurance.
- **AI Voice Assistant** — An in-browser conversational demo, with a clear consent step ("this call may be recorded, you'll be speaking with an AI voice assistant") before the interaction begins.
- **Multi-step "Free Tailored Demo" form** — A 6-stage lead-gen flow (About you → Operations → Preferences → Schedule → Source → Summary) with form state management and validation.
- **Co-branded partner program** section for agencies and resellers.
- **CEO/testimonial spotlight** and "How it works" video walkthrough section.
- **Fully responsive**, animated UI with scroll-based and entrance animations throughout.

---

## Tech Stack

**Core**
- [Next.js 15](https://nextjs.org/) (App Router) — React framework
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [Ant Design 5](https://ant.design/) (via `@ant-design/nextjs-registry`) — component library, SSR-integrated

**UI / UX**
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [react-fast-marquee](https://www.react-fast-marquee.com/) — marquee/logo strip animations
- [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) — iconography
- [Sonner](https://sonner.emilkowal.ski/) — toast notifications

**Utilities**
- [js-cookie](https://github.com/js-cookie/js-cookie) — client-side cookie handling

**AI Voice Layer**
- The conversational AI voice assistant is built around a **GPT-4o**-class model for natural-language understanding and response generation, with **[Daily.co](https://www.daily.co/)** handling real-time audio/voice transport in the browser. 

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Yead191/spiralink-frontend.git
cd spiralink-frontend

# Install dependencies
npm install
# or
yarn install
```

### Run locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Build for production

```bash
npm run build
npm run start
```

---

## Project Structure

```
spiralink-frontend/
├── public/              # Static assets (images, icons, og-image)
├── src/                 # Application source (pages/routes, components, styles)
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS / Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

---

## Live Links

| | Link |
|---|---|
| 🌐 Production Site | [spiralink.ai](https://spiralink.ai/) |
