# Agent Instructions: davidbracewell.com Rebuild

## 🎯 Primary Objective

Design, build, and deploy a static personal and professional website for David B. Bracewell, Ph.D. The site must replace the legacy `davidbracewell.com` and serve as a modern portfolio that highlights his dual expertise:

1. A **leading AI researcher** with a history of directing high-stakes NLP and machine learning initiatives.
2. A **visionary CS educator** dedicated to bringing computer science education into the future through artificial intelligence.

## 🗂️ Source Materials & Context

Before generating code or copy, you must analyze the following resources:

- **Resume & Legacy Content:** Review all files located in the local `./resources/` directory (includes `resume.pdf` and assets/text from the old site).
- **Open Source Contributions:** Fetch and analyze public repositories from `https://github.com/dbracewell`. Highlight relevant projects that showcase AI integration, NLP, multi-agent systems, and educational tools.
- **Existing Styling:** The design system (colors, typography, spacing) is already defined. You must inspect the existing `tailwind.config` (or equivalent Tailwind 4 configuration) and `components.json`/shadcn setups in the repository and strictly adhere to them. Do not invent new color palettes or font stacks.

## 🛠️ Technology Stack

- **Framework:** React (initialized via Vite).
- **Styling:** Tailwind CSS 4.
- **UI Components:** shadcn/ui.
- **Icons:** Lucide React (standard with shadcn).
- **Animations:** `framer-motion` (Authorized to install and implement if it improves the visual quality and user experience).
- **Deployment Target:** Strictly Static Site Generation (SSG) / Single Page Application (SPA). **Zero Node.js backend.** The final output must be compilable to static assets (HTML/CSS/JS) via `vite build`.

## 🏗️ Architecture: Single-Page Scroll

The website must be a single-page application utilizing a smooth-scroll navigational structure. The top navigation bar should remain sticky and link to the following distinct sections:

### 1. Home / Hero Section

- A clean, high-impact introduction.
- _Suggested Tagline:_ "Bridging the gap between bleeding-edge AI research and the future of computer science education."
- Include a strong call-to-action (CTA) to view the resume or scroll to specific sections.

### 2. Experience & Leadership (Industry)

- Highlight roles as a Principal Investigator for complex government AI programs (IARPA, DARPA, NGA).
- Feature leadership tenures, such as Senior Researcher/PI at Language Computer Corporation and VP of Research at Oculus 360.
- Mention entrepreneurial ventures like Lang3s.

### 3. Teaching & Academia

- Detail instructional experience and faculty roles.
- Focus on the philosophy of modernizing CS curricula, utilizing open-source collaborative platforms, and integrating large language models into practical student workflows.

### 4. Projects & Open Source

- Create a dynamic grid pulling in key repositories from GitHub.
- Highlight multi-modal AI applications, Python backend ecosystems, and modern frontend engineering.

### 5. Research & Publications

- A clean, filterable list or timeline of key academic publications, patents, and technical reports focusing on natural language processing and information extraction.

## 🎨 Design & UX Guidelines

- **Strict Theme Adherence:** Utilize _only_ the CSS variables, color tokens, and typography already configured in the project's Tailwind and shadcn setups.
- **Vibe:** Professional, academic, yet forward-looking and tech-forward.
- **Interactivity & Animation:** Implement smooth scrolling for internal anchor links. You may install and utilize `framer-motion` for scroll animations (e.g., subtle fade-ins, stagger effects on project grids, smooth section transitions). Keep animations tasteful, professional, and performant.

## 🚀 Execution Steps for the Agent

1.  **Ingest & Inspect:** Read the `./resources/` directory for content and parse the existing Tailwind/shadcn configuration files to load the design system into context.
2.  **Scrape:** Query the GitHub API for `dbracewell` to extract pinned/popular repositories.
3.  **Dependencies:** Install `framer-motion` if required for the animation strategy.
4.  **Componentize:** Scaffold the necessary UI sections using the existing shadcn components, ensuring all styling maps perfectly to the pre-defined variables.
5.  **Build:** Construct the single-page layout with sticky navigation, smooth scrolling, and subtle `framer-motion` entries, generating professional copy based _strictly_ on the ingested resume and GitHub data.
6.  **Verify:** Ensure no server-side rendering (SSR) or backend API routes are used. Test the `vite build` command to ensure it outputs a clean `/dist` folder for static hosting.
