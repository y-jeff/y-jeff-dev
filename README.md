# Portfolio — Yeinson Jeffrey Reyes Rissi

Portfolio personal de **Yeinson Reyes**, Full Stack Developer de Mejillones, Chile.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

## Secciones

- **Inicio:** nombre, rol y accesos a proyectos y contacto
- **Sobre mí:** presentación y foto
- **Proyectos:**
  - [Mineral Manager](https://github.com/y-jeff/Mineral_Manager): gestión operativa de una faena minera (Django)
  - [Sede Manuel Prado](https://sedemanuelprado.cl): arriendo de sede y gestión de socios, en producción (Django)
  - Este portfolio (Next.js + TypeScript)
- **Stack técnico**
- **Contacto:** email, LinkedIn y GitHub

## Stack

- [Next.js](https://nextjs.org) (App Router), página generada de forma estática
- TypeScript
- Tailwind CSS 4, con modo claro y oscuro según el sistema
- Deploy en [Vercel](https://vercel.com)

## Ejecutar en local

Requiere Node.js 20 o superior.

```bash
git clone https://github.com/y-jeff/y-jeff-dev.git
cd y-jeff-dev
npm install
npm run dev
```

Abre http://localhost:3000.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en vivo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Revisa el código con ESLint |

## Estructura

```
src/
├── app/
│   ├── layout.tsx      # Layout, fuentes y metadatos
│   ├── page.tsx        # Página única con todas las secciones
│   └── globals.css     # Colores (claro/oscuro) y estilos base
├── components/
│   └── icons.tsx       # Íconos SVG de contacto
└── data/
    └── profile.ts      # Todo el contenido editable
public/
└── foto.jpg            # Foto de perfil
```

## Editar contenido

Todo el contenido (nombre, descripción, proyectos, stack y contacto) está en [`src/data/profile.ts`](src/data/profile.ts). Para agregar un proyecto, añade un objeto al arreglo `projects`.

## Contacto

- Email: [y.jeffreyes@outlook.com](mailto:y.jeffreyes@outlook.com)
- LinkedIn: [yeinson-reyes-rissi](https://www.linkedin.com/in/yeinson-reyes-rissi-2aa63a259/)
- GitHub: [y-jeff](https://github.com/y-jeff)
