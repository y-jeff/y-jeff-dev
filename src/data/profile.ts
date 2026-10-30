// Todos los datos del portfolio viven aquí. Edita este archivo para actualizar la página.

export const profile = {
  name: "Yeinson Jeffrey Reyes Rissi",
  role: "Full Stack Developer",
  headline: ["Django", "React", "Next.js"],
  location: "Mejillones, Chile",
  about: [
    "Soy desarrollador Full Stack de Mejillones, Chile. Construyo software para problemas de operación reales y lo llevo a producción: dos de mis proyectos están hoy en uso.",
    "Trabajo con Python y Django en el backend y con Next.js, React y TypeScript en el frontend, cuidando lo que no se ve en una demo: seguridad de sesiones, integridad de datos, contratos tipados entre capas, tests y CI.",
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
  status: "Open Source" | "En producción";
  // Qué problema resuelve y para quién.
  problem: string;
  // Decisiones de ingeniería que lo respaldan.
  highlights: string[];
  note?: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Cuentas Claras",
    status: "En producción",
    problem:
      "Control de gastos del hogar construido como un sistema real: frontend y API independientes, en producción con costo $0.",
    highlights: [
      "Arquitectura desacoplada: Next.js consume una API REST en Django Ninja a través de un proxy, así la cookie de sesión es first-party y no hace falta CORS.",
      "Sesión en cookie HttpOnly con CSRF rotado en cada login; ningún token en localStorage.",
      "Contrato OpenAPI tipado de punta a punta: los tipos TypeScript se generan desde Django y el CI falla si quedan desactualizados.",
      "Paginación, filtros y búsqueda en el servidor; errores de Django mapeados bajo cada input y eliminación optimista con rollback.",
      "API en Docker detrás de un túnel de Cloudflare, sin puertos abiertos, que se actualiza sola cuando el CI pasa.",
    ],
    tags: ["Next.js", "TypeScript", "Django Ninja", "TanStack Query", "Docker"],
    links: [
      { label: "Probar demo", href: "https://cuentasclaras.3rlabs.cl" },
      { label: "API docs", href: "https://api-cuentasclaras.3rlabs.cl/api/docs" },
      { label: "Repositorio", href: "https://github.com/y-jeff/Cuentas-Claras" },
    ],
  },
  {
    title: "Mineral Manager",
    status: "Open Source",
    problem:
      "Reúne en un solo lugar la operación de una faena minera: trabajadores y sus certificaciones, maquinaria, bodega y pañol.",
    highlights: [
      "Carga masiva transaccional desde Excel o CSV: cada hoja se procesa en transaction.atomic() y, si una fila falla, no se guarda nada.",
      "Integridad del inventario: traspasos y retiros actualizan el stock con expresiones F() en la base de datos y quedan en un historial.",
      "Alertas de certificaciones a 30 y 90 días y de stock bajo, con informes PDF y gráficos del estado de la operación.",
      "20 pruebas automáticas en GitHub Actions sobre Python 3.10, 3.12 y 3.14.",
    ],
    tags: ["Python", "Django", "ReportLab", "Chart.js", "GitHub Actions"],
    links: [
      { label: "Probar demo", href: "https://jeff017.pythonanywhere.com" },
      { label: "Repositorio", href: "https://github.com/y-jeff/Mineral_Manager" },
    ],
  },
  {
    title: "Sede Manuel Prado",
    status: "En producción",
    problem:
      "Sistema en uso por un club deportivo de Mejillones: arriendo de la sede en línea, gestión de socios y cuotas, y un panel para la directiva.",
    highlights: [
      "Consistencia de reservas: el servidor revalida la disponibilidad al recibir la solicitud, aunque se manipule el frontend.",
      "Seguridad en capas: middleware propio con CSP y cabeceras de seguridad, rate limiting en login y formularios, y bloqueo de escáneres.",
      "Comprobantes de pago en un bucket S3 privado con URLs firmadas que expiran; las credenciales vienen del rol IAM, no del código.",
      "Nginx + Gunicorn + PostgreSQL, configuración 12-factor y cuatro niveles de roles.",
    ],
    note: "El repositorio público es una versión demo con datos ficticios.",
    tags: ["Django", "PostgreSQL", "AWS S3", "Nginx", "Tailwind CSS"],
    links: [
      { label: "Ver sitio", href: "https://sedemanuelprado.cl" },
      { label: "Código demo", href: "https://github.com/y-jeff/clubmanuelprado" },
    ],
  },
  {
    title: "EmiteBoleta",
    status: "Open Source",
    problem:
      "Permite a trabajadores independientes en Chile (gasfíteres, profesores, técnicos) entregar un comprobante de cobro profesional desde el celular en 30 segundos.",
    highlights: [
      "Numeración correlativa por usuario sin números repetidos, incluso con requests concurrentes.",
      "Los datos del emisor se copian a cada boleta: los documentos ya emitidos no cambian si el usuario edita su perfil.",
      "Validación de RUT (módulo 11) y aislamiento entre usuarios cubierto por tests: nadie ve ni borra boletas ajenas.",
      "Mobile-first con Web Share API: el PDF se comparte directo a WhatsApp o email.",
    ],
    tags: ["Django", "PostgreSQL", "ReportLab", "Tailwind CSS"],
    links: [{ label: "Repositorio", href: "https://github.com/y-jeff/emiteboleta" }],
  },
  {
    title: "Este portfolio",
    status: "Open Source",
    problem: "Página estática con Next.js y TypeScript, desplegada en Vercel.",
    highlights: [
      "Todo el contenido vive en un solo archivo tipado: agregar un proyecto no requiere tocar la interfaz.",
      "Flujo main/develop con previews automáticos en Vercel antes de cada publicación.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Ver sitio", href: "https://y-jeff-dev.vercel.app" },
      { label: "Repositorio", href: "https://github.com/y-jeff/y-jeff-dev" },
    ],
  },
];

export const stack = [
  "Python",
  "Django",
  "Django Ninja",
  "PostgreSQL",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Docker",
  "GitHub Actions",
  "Git",
];
