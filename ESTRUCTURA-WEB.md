# Estructura de Landing Page - Template

Este documento describe la estructura completa de esta landing page para replicarla en otros proyectos.

## Tech Stack

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.2 | Framework UI |
| TypeScript | 5.9 | Tipado estático |
| Vite | 7.x | Build tool y dev server |
| Tailwind CSS | 4.x | Estilos utility-first |
| Framer Motion | 12.x | Animaciones |
| pnpm | - | Package manager |

## Estructura de Archivos

```
proyecto/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navegación fija con scroll effect
│   │   ├── Hero.tsx        # Sección principal con partículas
│   │   ├── Stats.tsx       # Estadísticas con contadores animados
│   │   ├── Services.tsx    # Grid de servicios (6 cards)
│   │   ├── About.tsx       # Información + tarjeta de valores
│   │   ├── CTA.tsx         # Call-to-action con parallax
│   │   ├── Contact.tsx     # Formulario + info de contacto
│   │   └── Footer.tsx      # Pie de página
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globales + Tailwind
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

## Componentes

### 1. Navbar (`Navbar.tsx`)
- Navegación fija en la parte superior
- Efecto de cambio al hacer scroll (más opaco, sombra)
- Menú hamburguesa para móvil con AnimatePresence
- Links con animación de subrayado

```tsx
// Características clave:
- useState para menú móvil y estado de scroll
- useEffect para detectar scroll
- motion.nav con animación de entrada
- AnimatePresence para menú móvil
```

### 2. Hero (`Hero.tsx`)
- Sección de altura completa (min-h-screen)
- Partículas flotantes animadas con CSS
- Título principal + subtítulo + descripción
- 2 botones CTA (primario y secundario)
- Flecha animada indicando scroll

```tsx
// Características clave:
- Partículas creadas dinámicamente con useEffect
- containerVariants + itemVariants para stagger
- whileHover en botones
- Keyframe CSS para animación float
```

### 3. Stats (`Stats.tsx`)
- Grid de 3 columnas en desktop
- Números animados que cuentan desde 0
- useSpring + useTransform para contador

```tsx
// Estructura de datos:
const stats = [
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 100, suffix: '%', label: 'Confidencialidad' },
  { value: 24, suffix: '/7', label: 'Atención Personalizada' },
]
```

### 4. Services (`Services.tsx`)
- Grid de 6 servicios (3 columnas en desktop)
- Cards con hover effect (elevación + sombra)
- Iconos que rotan y cambian color en hover

```tsx
// Estructura de datos:
const services = [
  {
    icon: <path.../>,  // SVG path
    title: 'Nombre del Servicio',
    description: 'Descripción...',
  },
  // ...más servicios
]
```

### 5. About (`About.tsx`)
- Layout de 2 columnas
- Columna izquierda: texto + badges de features
- Columna derecha: tarjeta con valores (gradient)
- Animaciones de entrada desde los lados

```tsx
// Estructura de datos:
const values = [
  { title: 'Confianza', description: '...' },
  { title: 'Excelencia', description: '...' },
  { title: 'Seguridad', description: '...' },
]

const features = ['Feature 1', 'Feature 2', 'Feature 3']
```

### 6. CTA (`CTA.tsx`)
- Fondo con gradiente
- Patrón de grid SVG con parallax
- Orbes flotantes animados
- Título + texto + botón

```tsx
// Características clave:
- useScroll + useTransform para parallax
- Orbes con animate={{ y: [0, -20, 0] }}
```

### 7. Contact (`Contact.tsx`)
- Layout de 2 columnas
- Columna izquierda: info de contacto + tarjeta destacada
- Columna derecha: formulario completo
- Estado para mensaje de confirmación

```tsx
// Estructura de datos:
const contactInfo = [
  {
    icon: <path.../>,
    title: 'Dirección',
    content: ['Línea 1', 'Línea 2'],
    isLink?: boolean,
  },
]

const serviceOptions = ['Opción 1', 'Opción 2', ...]
```

### 8. Footer (`Footer.tsx`)
- Grid de 3 columnas
- Logo + descripción
- Links rápidos
- Información legal
- Copyright dinámico con año actual

## Sistema de Diseño

### Colores (definidos en index.css)
```css
--color-primary-dark: #1e3a8a;  /* blue-900 */
--color-primary: #3b82f6;       /* blue-500 */
--color-primary-light: #60a5fa; /* blue-400 */
```

### Tipografía
- **Body**: Montserrat (sans-serif)
- **Headings**: Playfair Display (serif)

```html
<!-- Agregar en index.html -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
```

### Clases Utilitarias Personalizadas
```css
.gradient-primary {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Patrones de Animación con Framer Motion

### Animación de Entrada (Scroll Reveal)
```tsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-100px' })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
```

### Stagger Children
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item} variants={itemVariants} />
  ))}
</motion.div>
```

### Hover Effects
```tsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 400 }}
>
```

### Parallax
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start'],
})
const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

<motion.div style={{ y }} />
```

## Deployment (Cloudflare Pages)

### GitHub Actions Workflow
```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile
      - run: pnpm run build

      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=nombre-proyecto --branch=main
```

### Secrets Requeridos
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Checklist para Nueva Web

1. [ ] Clonar/crear proyecto con Vite + React + TypeScript
2. [ ] Instalar dependencias: `pnpm add framer-motion`
3. [ ] Configurar Tailwind CSS 4
4. [ ] Agregar fuentes de Google Fonts en index.html
5. [ ] Copiar index.css con variables y utilidades
6. [ ] Crear componentes en orden:
   - [ ] Navbar
   - [ ] Hero
   - [ ] Stats (opcional)
   - [ ] Services
   - [ ] About
   - [ ] CTA
   - [ ] Contact
   - [ ] Footer
7. [ ] Personalizar colores en index.css
8. [ ] Actualizar contenido (textos, datos)
9. [ ] Configurar GitHub Actions para deploy
10. [ ] Crear proyecto en Cloudflare Pages

## Comandos

```bash
# Desarrollo
pnpm run dev

# Build
pnpm run build

# Preview
pnpm run preview

# Lint
pnpm run lint
```
