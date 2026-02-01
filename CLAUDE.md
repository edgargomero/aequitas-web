# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page para **Inversiones AEQUITAS Capital SPA**, una empresa de inversión y administración de patrimonio con sede en Santiago, Chile.

## Tech Stack

- **React 19** + **TypeScript** - Framework principal
- **Vite 7** - Build tool y dev server
- **Tailwind CSS 4** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **pnpm** - Package manager

## Development Commands

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Preview del build
pnpm run preview

# Lint
pnpm run lint
```

## Project Structure

```
src/
├── components/          # Componentes React
│   ├── Navbar.tsx       # Navegación fija
│   ├── Hero.tsx         # Sección principal con partículas
│   ├── Stats.tsx        # Estadísticas animadas
│   ├── Services.tsx     # Grid de 6 servicios
│   ├── About.tsx        # Información y valores
│   ├── CTA.tsx          # Call-to-action
│   ├── Contact.tsx      # Formulario de contacto
│   └── Footer.tsx       # Pie de página
├── App.tsx              # Componente raíz
├── main.tsx             # Entry point
└── index.css            # Tailwind + custom styles

public/
└── favicon.svg          # Icono del sitio
```

## Deployment (Cloudflare Pages)

El proyecto está configurado para CI/CD automático con Cloudflare Pages:

| Configuración | Valor |
|--------------|-------|
| Framework preset | `Vite` |
| Build command | `pnpm run build` |
| Build output directory | `dist` |
| Node version | `20` |

## Design System

### Colors
- **Primary dark**: `#1e3a8a` (blue-900)
- **Primary**: `#3b82f6` (blue-500)
- **Gradients**: `linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)`

### Typography
- **Body**: Montserrat (300-700 weights)
- **Headings**: Playfair Display (serif, 600-700 weights)

### Animations (Framer Motion)
- Scroll reveal con `useInView`
- Hover effects con `whileHover`
- Stagger animations en listas
- Partículas flotantes en Hero

## Component Patterns

- Usar `motion.div` para animaciones
- `useInView` para scroll reveal
- Props tipados con interfaces
- Componentes funcionales con hooks
