import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Globe,
  GraduationCap,
  Landmark,
  Mail,
  Microscope,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { publications } from "@/data/publications";
import { cn } from "@/lib/utils";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

const navItems = [
  ["Home", "home"],
  ["Experience", "experience"],
  ["Teaching", "teaching"],
  ["Projects", "projects"],
  ["Research", "research"],
] as const;

const highlights = [
  { label: "Years in AI + NLP", value: "20+" },
  { label: "Peer-Reviewed Publications", value: "75+" },
  { label: "US Patents", value: "8+" },
  { label: "Government / Enterprise Programs", value: "DARPA · IARPA · SOCOM" },
];

const experience = [
  {
    org: "Language Computer Corporation",
    role: "Principal Scientist & Investigator",
    period: "2018 – 2024 (FT), 2024 – Present (PT)",
    bullets: [
      "Led high-stakes AI programs for DARPA, SOCOM, and the U.S. Navy with measurable mission impact.",
      "Designed a 1B+ node multi-modal knowledge graph platform with AI-assisted ontology development.",
      "Built deep learning systems for dossier generation, bias detection, and fine-grained information extraction.",
    ],
  },
  {
    org: "Oculus360",
    role: "Vice President of Technology",
    period: "2014 – 2017",
    bullets: [
      "Architected and scaled an enterprise AI marketing intelligence platform used by Fortune 500 clients.",
      "Built psycholinguistic and NLP engines that surfaced usage occasions, emotion, and personality signals.",
      "Established high-performance engineering and data science culture with production-grade standards.",
    ],
  },
  {
    org: "Grubhub",
    role: "Data Scientist Team Lead",
    period: "2017 – 2018",
    bullets: [
      "Led NLP + taxonomy roadmap for search and discovery over noisy, large-scale restaurant/menu data.",
      "Improved ranking precision through automated normalization and entity resolution pipelines.",
      "Directed distributed global teams and introduced early conversational AI initiatives.",
    ],
  },
  {
    org: "General Electric Global Research",
    role: "Computer Scientist",
    period: "2008 – 2011",
    bullets: [
      "Lead architect for WISDOM, a social analytics and OSINT platform later acquired by Lockheed Martin.",
      "Developed predictive and virality analytics for NBC Universal to increase engagement and retention.",
      "Bridged R&D to commercialization across large-scale enterprise and defense environments.",
    ],
  },
];

const teaching = [
  {
    school: "Dallas College",
    role: "Faculty (Computer Science)",
    period: "2024 – Present",
    text: "Founded and advise a fast-growing AI Club (70+ active members), modernized curriculum with AI-assisted workflows, and mentor students in end-to-end software and chatbot development.",
  },
  {
    school: "Colorado Technical University",
    role: "Assistant Professor (Computer Science)",
    period: "2018 – 2022",
    text: "Delivered graduate and undergraduate instruction in big data, algorithms, parallel computing, software construction, and advanced Java while aligning coursework with production expectations.",
  },
  {
    school: "Teaching Philosophy",
    role: "Builder of Future-Ready Engineers",
    period: "Always",
    text: "I treat education like an applied research lab: students build real systems, learn collaborative engineering practices, and responsibly leverage LLMs to accelerate both learning and impact.",
  },
];

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "Asterism",
    description: "A multi-agent chat system.",
    html_url: "https://github.com/dbracewell/Asterism",
    stargazers_count: 0,
    language: "TypeScript",
    updated_at: "2026-08-13T00:00:00Z",
  },
  {
    id: 2,
    name: "agentic_coding_tutorial",
    description: "Tutorial on using Agile for Agentic Coding.",
    html_url: "https://github.com/dbracewell/agentic_coding_tutorial",
    stargazers_count: 1,
    language: "Python",
    updated_at: "2026-07-29T00:00:00Z",
  },
  {
    id: 3,
    name: "hermes",
    description: "A Natural Language Processing framework for Java.",
    html_url: "https://github.com/dbracewell/hermes",
    stargazers_count: 3,
    language: "Java",
    updated_at: "2025-07-26T00:00:00Z",
  },
  {
    id: 4,
    name: "gengoai",
    description: "Mono repository for GengoAI projects.",
    html_url: "https://github.com/dbracewell/gengoai",
    stargazers_count: 3,
    language: "Java",
    updated_at: "2025-07-26T00:00:00Z",
  },
  {
    id: 5,
    name: "apollo",
    description: "Java Machine Learning Library.",
    html_url: "https://github.com/dbracewell/apollo",
    stargazers_count: 1,
    language: "Java",
    updated_at: "2025-07-26T00:00:00Z",
  },
  {
    id: 6,
    name: "twinsights",
    description: "AI/NLP analytics experimentation in Python.",
    html_url: "https://github.com/dbracewell/twinsights",
    stargazers_count: 0,
    language: "Python",
    updated_at: "2025-07-26T00:00:00Z",
  },
];

const patents = [
  {
    title: "System and Method for Intent Mining",
  },
  {
    title:
      "A Method for Creating and Visualizing a Temporal and Hierarchical Signature for Web Sites",
  },
  {
    title:
      "A Method of Visualization for Rapidly Determining the Volume and Sentiment of a Term",
  },
  {
    title:
      "Method for Extracting Content from Web Sites Through Deleting Navigation Sections",
  },
  {
    title:
      "Method and System for Identifying Patterns of Intent in Dynamic Social and Cultural Systems",
  },
  {
    title:
      "Methods and Systems for Extracting and Analyzing Online Discussions",
  },
  {
    title:
      "Systems and Methods for Facilitating the Gathering of Open Source Intelligence",
  },
  {
    title: "Occasion-Based Consumer Analytics",
  },
  {
    title: "System and Method for Intent Mining",
  },
  {
    title: "Multi-Factor Perception Analysis",
  },
];

const educationVision = [
  {
    title: "Personal AI as an Individualized TA",
    detail:
      "Each student gets AI support tuned to their learning pace and background, reducing syntax friction so faculty can emphasize systems thinking, architecture, and ethics.",
  },
  {
    title: "Agentic Agile in Every Project",
    detail:
      "Students plan first (epics, user stories, implementation outlines), then direct AI as a junior developer. This builds engineering judgment instead of prompt roulette.",
  },
  {
    title: "Digital Tradescraft Model",
    detail:
      "Move from memorization-heavy programming to build-oriented apprenticeship: design, review, deployment, and collaboration workflows that mirror modern engineering teams.",
  },
  {
    title: "Measured Learning Outcomes",
    detail:
      "Track cognitive load, prompt-to-code ratio, time-to-resolution, code quality, and retention to ensure AI-assisted education increases rigor and readiness—not shortcuts.",
  },
  {
    title: "Cross-Functional Capstone Culture",
    detail:
      "Expand AI project work with non-CS domains (policy, health, journalism, social sciences) so students learn to build for real people and communicate with stakeholders.",
  },
];

type ScholarMetrics = {
  hIndex: string;
  i10Index: string;
};

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-border/60 py-20 last:border-none"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3 text-muted-foreground">
          <span className="rounded-md bg-muted p-2">{icon}</span>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [visiblePublicationCount, setVisiblePublicationCount] = useState(10);
  const [scholarMetrics] = useState<ScholarMetrics>({
    hIndex: "17",
    i10Index: "28",
  });
  const [researchView, setResearchView] = useState<
    "all" | "publications" | "patents"
  >("publications");

  useEffect(() => {
    let mounted = true;
    fetch("https://api.github.com/users/dbracewell/repos?per_page=100")
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(new Error("Failed to fetch repos")),
      )
      .then((data: Repo[]) => {
        if (!mounted || !Array.isArray(data)) return;
        const important = data
          .filter(
            (repo) =>
              !repo.name.includes(".github") &&
              !repo.name.toLowerCase().includes("shirley"),
          )
          .sort((a, b) => {
            const scoreA =
              a.stargazers_count * 2 + new Date(a.updated_at).getTime() / 1e11;
            const scoreB =
              b.stargazers_count * 2 + new Date(b.updated_at).getTime() / 1e11;
            return scoreB - scoreA;
          })
          .slice(0, 8);
        if (important.length) setRepos(important);
      })
      .catch(() => {
        // Fallback already loaded.
      });

    return () => {
      mounted = false;
    };
  }, []);

  const visiblePublications = publications.slice(0, visiblePublicationCount);
  const hasMorePublications = visiblePublicationCount < publications.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a
            href="#home"
            className="font-semibold tracking-tight text-foreground"
          >
            David B. Bracewell, Ph.D.
          </a>
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={`#${href}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "text-xs sm:text-sm",
                )}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden border-b border-border/60 py-20 scroll-mt-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_45%)] opacity-10" />
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="size-3.5" />
                CS Educator • Principal AI Engineer &amp; Applied Scientist
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Bridging bleeding-edge AI research with the future of computer
                science education.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                I am pioneering an AI-native approach to computer science
                education that shifts the paradigm from syntax memorization to
                cognitive system architecture. By anchoring cutting-edge AI
                capabilities in timeless data structures and ethical
                foundations, I empower emerging engineers to lead and scale the
                future of technology.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "shadow-sm",
                  )}
                >
                  <ScrollText className="size-4" /> View Resume
                </a>
                <a
                  href="#projects"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Explore Projects <ArrowDown className="size-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <img
                src="/avatar.jpg"
                alt="David Bracewell"
                className="mb-5 h-72 w-full rounded-xl border border-border object-cover object-center"
              />
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Based in Richardson, TX</p>
                <a
                  href="mailto:first@firstlastname.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-4" /> first@firstlastname.com
                </a>
                <a
                  href="https://www.linkedin.com/in/davidbracewell/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Globe className="size-4" /> LinkedIn /davidbracewell
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-4 shadow-xs"
              >
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <Section
          id="experience"
          title="Experience & Leadership"
          icon={<BriefcaseBusiness className="size-5" />}
        >
          <div className="grid gap-5">
            {experience.map((item, i) => (
              <motion.article
                key={item.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <span className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-primary">
                  {item.org}
                </p>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="teaching"
          title="Teaching & Academia"
          icon={<GraduationCap className="size-5" />}
        >
          <div className="grid gap-5 md:grid-cols-3">
            {teaching.map((item) => (
              <article
                key={item.school}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="text-xs text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {item.school}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-border bg-muted/50 p-5 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">
              Courses taught include:
            </p>
            <p className="mt-2">
              Data Structures & Algorithms, Data Ethics, Python Programming,
              Parallel Computing, Advanced Java, Software Construction, Big Data
              Analytics, and Algorithms for Data Science.
            </p>
          </div>

          <article className="mt-6 rounded-xl border border-border bg-card p-5">
            <h3 className="text-lg font-semibold">Vision for CS Education</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI can either widen the gap between classroom learning and
              production engineering—or close it. My framework uses Personal AI
              + Agentic Agile to produce graduates who can think deeply,
              architect clearly, and deliver real systems.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {educationVision.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-lg border border-border bg-muted/40 p-4"
                >
                  <p className="text-sm font-medium text-foreground">
                    {pillar.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </Section>

        <Section
          id="projects"
          title="Projects & Open Source"
          icon={<Landmark className="size-5" />}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <p className="max-w-3xl text-sm text-muted-foreground">
              Selected repositories from{" "}
              <span className="font-medium text-foreground">
                github.com/dbracewell
              </span>{" "}
              highlighting NLP frameworks, multi-agent systems, educational AI
              tooling, and full-stack experimentation.
            </p>
            <a
              href="https://github.com/dbracewell"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "shrink-0",
              )}
            >
              Full GitHub <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {repos
              .filter((repo) => !!repo.description)
              .map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="font-semibold">{repo.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      ⭐ {repo.stargazers_count}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{repo.language || "Mixed"}</span>
                    <span className="inline-flex items-center gap-1 group-hover:text-primary">
                      View <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </motion.a>
              ))}
          </div>
        </Section>

        <Section
          id="research"
          title="Research & Publications"
          icon={<Microscope className="size-5" />}
        >
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-card p-5">
              <p className="mb-3 text-sm font-medium text-foreground">
                Google Scholar Metrics
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border bg-muted/50 p-3">
                  <p className="text-xs text-muted-foreground">h-index</p>
                  <p className="text-2xl font-semibold">
                    {scholarMetrics.hIndex}
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-3">
                  <p className="text-xs text-muted-foreground">i10-index</p>
                  <p className="text-2xl font-semibold">
                    {scholarMetrics.i10Index}
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-border bg-card p-5">
              <p className="mb-3 text-sm font-medium text-foreground">
                Patent Portfolio Snapshot
              </p>
              <p className="text-sm text-muted-foreground">
                Inventor on 8+ U.S. patents in NLP, intent mining, and consumer
                analytics.
              </p>
            </article>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setResearchView("all")}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                researchView === "all" &&
                  "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              All
            </button>
            <button
              onClick={() => setResearchView("publications")}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                researchView === "publications" &&
                  "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              Publications
            </button>
            <button
              onClick={() => setResearchView("patents")}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                researchView === "patents" &&
                  "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              Patents
            </button>
          </div>

          {(researchView === "all" || researchView === "publications") && (
            <>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Full publication list ({publications.length}) from the legacy
                  davidbracewell.com archive.
                </p>
                <span className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                  Showing {visiblePublications.length} of {publications.length}
                </span>
              </div>

              <div className="space-y-3">
                {visiblePublications.map((item) => (
                  <article
                    key={item.citation}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="size-3.5" /> Publication ·{" "}
                      {item.year}
                    </div>
                    <p className="text-sm">{item.citation}</p>
                  </article>
                ))}
              </div>

              {hasMorePublications ? (
                <div className="mt-5">
                  <button
                    onClick={() =>
                      setVisiblePublicationCount((count) =>
                        Math.min(count + 10, publications.length),
                      )
                    }
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Load 10 More Publications
                  </button>
                </div>
              ) : null}
            </>
          )}

          {(researchView === "all" || researchView === "patents") && (
            <div className="mt-6 space-y-3">
              {patents.map((patent) => (
                <article
                  key={patent.title}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <ScrollText className="size-3.5" /> Patent
                  </div>
                  <h3 className="text-sm font-medium">{patent.title}</h3>
                </article>
              ))}
            </div>
          )}
        </Section>
      </main>

      <footer className="border-t border-border/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              David B. Bracewell, Ph.D.
            </span>{" "}
            · Building practical AI with lasting impact.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="mailto:first@firstlastname.com"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <Mail className="size-4" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/davidbracewell/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <Users className="size-4" /> Connect
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
