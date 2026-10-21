import Image from "next/image";
import { profile, projects, stack } from "@/data/profile";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

const nav = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-2xl font-semibold tracking-tight">{children}</h2>;
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="font-mono text-sm font-semibold">
            {initials(profile.name)}
            <span className="text-accent">.dev</span>
          </a>
          <ul className="flex gap-4 text-sm text-muted sm:gap-6">
            {nav.map((item) => (
              <li key={item.href} className={item.href === "#stack" ? "hidden sm:block" : ""}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 sm:px-6">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <p className="mb-4 font-mono text-sm text-accent">Hola, soy</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-lg text-muted sm:text-xl">
            {profile.role} · {profile.headline.join(" · ")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-card"
            >
              Contacto
            </a>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="sobre-mi" className="scroll-mt-20 py-16">
          <SectionTitle>Sobre mí</SectionTitle>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                width={160}
                height={160}
                className="h-40 w-40 shrink-0 rounded-full border border-border object-cover"
              />
            ) : (
              <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-border bg-card font-mono text-4xl text-accent">
                {initials(profile.name)}
              </div>
            )}
            <div className="space-y-3 leading-relaxed text-muted">
              {profile.about.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="text-sm">📍 {profile.location}</p>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="scroll-mt-20 py-16">
          <SectionTitle>Proyectos</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="scroll-mt-20 py-16">
          <SectionTitle>Stack técnico</SectionTitle>
          <ul className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-20 py-16">
          <SectionTitle>Contacto</SectionTitle>
          <p className="mb-8 max-w-xl text-muted">
            ¿Tienes una oportunidad o un proyecto en mente? Escríbeme, respondo rápido.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-accent"
            >
              <EmailIcon /> {profile.contact.email}
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-accent"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-accent"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {profile.name} · Hecho con Next.js y Tailwind CSS
      </footer>
    </>
  );
}
