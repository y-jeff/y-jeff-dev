// Todos los datos del portfolio viven aquí. Edita este archivo para actualizar la página.

export const profile = {
  name: "Yeinson Jeffrey Reyes Rissi",
  role: "Full Stack Developer",
  headline: ["Django", "React", "Next.js"],
  location: "Mejillones, Chile",
  about: [
    "Soy desarrollador Full Stack de Mejillones, Chile. Construyo aplicaciones web completas para resolver problemas de operación reales: desde el modelo de datos hasta la interfaz.",
    "Trabajo principalmente con Python y Django, y desarrollo frontends con Tailwind CSS, React y Next.js.",
    "He creado un sistema de gestión para faenas mineras y la plataforma de arriendo y socios del Club Deportivo Manuel Prado, que hoy está en producción.",
  ],
  // Coloca tu foto en /public y pon aquí su ruta. Con null se muestran tus iniciales.
  photo: "/foto.jpg" as string | null,
  contact: {
    email: "y.jeffreyes@outlook.com",
    linkedin: "https://www.linkedin.com/in/yeinson-reyes-rissi-2aa63a259/",
    github: "https://github.com/y-jeff",
  },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Mineral Manager",
    description:
      "Sistema web para la gestión operativa de una faena minera: trabajadores y certificaciones con alertas de vencimiento, maquinaria, bodega y pañol. Incluye carga masiva desde Excel, informes PDF y pruebas en GitHub Actions.",
    tags: ["Python", "Django", "Bootstrap", "Chart.js"],
    links: [{ label: "Repositorio", href: "https://github.com/y-jeff/Mineral_Manager" }],
  },
  {
    title: "Sede Manuel Prado",
    description:
      "Plataforma en producción del Club Deportivo Manuel Prado: reserva de la sede en línea con calendario de disponibilidad, gestión de socios y cuotas, y panel de administración con solicitudes y ganancias.",
    tags: ["Django", "Tailwind CSS", "Alpine.js"],
    links: [
      { label: "Ver sitio", href: "https://sedemanuelprado.cl" },
      { label: "Repositorio", href: "https://github.com/y-jeff/clubmanuelprado" },
    ],
  },
  {
    title: "Este portfolio",
    description:
      "Portfolio personal construido con Next.js, TypeScript y Tailwind CSS, desplegado en Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { label: "Repositorio", href: "https://github.com/y-jeff/portafolio-y-jeff-dev" },
    ],
  },
];

export const stack = [
  "Python",
  "Django",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Git",
];
