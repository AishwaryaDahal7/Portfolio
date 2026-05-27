import {
  ArrowRight,
  Bot,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import heroImage from "./assets/aishwarya-hero.jpg";

const navLinks = ["About", "Skills", "Projects", "Education", "Contact"];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Tailwind CSS",
];

const projects = [
  {
    title: "Wanderly Travels",
    subtitle: "AI Travel Dashboard",
    description:
      "A smart travel dashboard concept that helps users organize destinations, budgets, activities, and AI-powered travel insights.",
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "PeakQuest Nepal",
    subtitle: "Mountain Climbing and Trekking Information System",
    description:
      "A Nepal-focused trekking platform for routes, mountain details, safety notes, and trip planning information.",
    icon: Mountain,
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Adventure Explorer",
    subtitle: "Travel Activity Recommendation Web App",
    description:
      "A recommendation web app idea that matches travelers with activities based on interests, location, and difficulty level.",
    icon: Sparkles,
    color: "from-amber-400 to-rose-500",
  },
  {
    title: "Stray Animal Rescue Platform",
    subtitle: "Community Support System",
    description:
      "A practical rescue platform concept for reporting stray animals, coordinating volunteers, and connecting local support.",
    icon: Code2,
    color: "from-emerald-400 to-teal-600",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-900 to-violet-600 text-sm font-bold text-white shadow-lg shadow-violet-500/20">
              AD
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-slate-800">
              Portfolio
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold text-slate-600 transition hover:text-violet-700"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-violet-200 hover:text-violet-700 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl md:hidden">
            <div className="mx-auto grid max-w-7xl gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_32%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_45%,#ffffff_100%)] pt-28">
          <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="animate-fadeUp">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
                <Sparkles size={16} />
                Software Engineering Student from Nepal
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Aishwarya Dahal
              </h1>
              <p className="mt-4 text-xl font-semibold text-indigo-950 sm:text-2xl">
                Software Engineering Student
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Passionate about building web applications, learning modern
                technologies, and solving real-world problems.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-950/20 transition hover:-translate-y-1 hover:bg-violet-700"
                >
                  View Projects
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-700"
                >
                  Contact Me
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md animate-float lg:max-w-lg">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-sky-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-soft">
                <img
                  src={heroImage}
                  alt="Illustration of a software engineering student working on a laptop"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About Me" title="Curious, practical, and always learning">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl bg-indigo-950 p-8 text-white shadow-soft">
              <MapPin className="mb-6 text-violet-200" size={34} />
              <h3 className="text-2xl font-bold">Based in Nepal</h3>
              <p className="mt-4 leading-7 text-indigo-100">
                Building a strong foundation in software engineering through
                hands-on projects, consistent practice, and modern web tools.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-600">
                I am Aishwarya Dahal, a software engineering student interested
                in web development, AI-based projects, and practical software
                solutions. I enjoy turning ideas into clean, useful interfaces
                and learning how modern technologies can solve real problems for
                people and communities. My goal is to keep growing as a
                developer by building projects that are creative, reliable, and
                meaningful.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Tools and technologies I work with">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-center font-bold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:text-violet-700 hover:shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected project ideas and builds">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-soft"
                >
                  <div
                    className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-600">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-950 transition group-hover:text-violet-700">
                    Project overview
                    <ExternalLink size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic background">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-violet-100 text-violet-700">
                <GraduationCap size={34} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-950">
                  Software Engineering Student
                </h3>
                <p className="mt-2 flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  Nepal
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let us build something useful">
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="mailto:aishwaryadahal790@gmail.com"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
            >
              <Mail className="text-violet-700" size={32} />
              <h3 className="mt-5 text-xl font-black">Email</h3>
              <p className="mt-2 break-words text-slate-600 group-hover:text-violet-700">
                aishwaryadahal790@gmail.com
              </p>
            </a>
            <a
              href="https://github.com/AishwaryaDahal7"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
            >
              <Github className="text-violet-700" size={32} />
              <h3 className="mt-5 text-xl font-black">GitHub</h3>
              <p className="mt-2 text-slate-600 group-hover:text-violet-700">
                AishwaryaDahal7
              </p>
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">
        <p>Copyright 2026 Aishwarya Dahal. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Shared section heading keeps spacing consistent across the page. */}
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-violet-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default App;
