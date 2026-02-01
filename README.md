# AEQUITAS Capital - Landing Page

Landing page profesional para Inversiones AEQUITAS Capital SPA.

## 🚀 Características

- ✨ **Diseño moderno y elegante** con gradientes y animaciones suaves
- 📱 **Totalmente responsive** (mobile, tablet, desktop)
- 🎨 **Animaciones y transiciones** profesionales
- ⚡ **Performance optimizado** para carga rápida
- 🎯 **SEO-friendly** con meta tags apropiados
- 🌊 **Efectos visuales**: partículas flotantes, parallax, scroll reveals
- 💼 **Profesional**: colores corporativos azul oscuro/azul

## 🛠️ Stack Tecnológico

- HTML5
- Tailwind CSS (vía CDN)
- JavaScript Vanilla
- Google Fonts (Montserrat + Playfair Display)

## 📦 Deployment en Cloudflare Pages

### Opción 1: Desde GitHub (Recomendado)

1. **Crear repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AEQUITAS Capital landing page"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/aequitas-capital.git
   git push -u origin main
   ```

2. **Configurar Cloudflare Pages**
   - Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Selecciona "Pages" en el menú lateral
   - Click en "Create a project"
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio
   - Configuración:
     - **Build command**: (vacío - no es necesario)
     - **Build output directory**: `/`
     - Click en "Save and Deploy"

3. **Dominio personalizado** (opcional)
   - En la configuración del proyecto, ve a "Custom domains"
   - Agrega tu dominio (ej: aequitascapital.cl)
   - Sigue las instrucciones para configurar DNS

### Opción 2: Direct Upload (Más rápido)

1. **Preparar archivos**
   - Asegúrate de tener solo el archivo `index.html`

2. **Upload directo**
   - Ve a Cloudflare Pages
   - Click en "Create a project"
   - Selecciona "Direct Upload"
   - Arrastra el archivo `index.html`
   - Click en "Deploy"

## 🎨 Personalización

### Colores principales
Los colores están basados en el tema corporativo:
- **Azul oscuro**: `#1e3a8a` (blue-900)
- **Azul medio**: `#3b82f6` (blue-500)
- **Gradientes**: Combinaciones de azules

Para cambiar colores, busca en el código:
- `.gradient-primary` - Fondo del hero
- `.gradient-text` - Texto con gradiente
- Clases de Tailwind como `bg-blue-900`, `text-blue-900`

### Contenido a actualizar

Antes de publicar, actualiza:

1. **Información de contacto**:
   - Email (línea ~582)
   - Teléfono si lo tienen
   - RUT cuando esté disponible (línea ~649)

2. **Redes sociales** (agregar si tienen):
   ```html
   <div class="flex space-x-4">
     <a href="https://linkedin.com/..." target="_blank">LinkedIn</a>
     <!-- etc -->
   </div>
   ```

3. **Google Analytics** (opcional):
   ```html
   <!-- Agregar antes de </head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

## 📊 Secciones de la página

1. **Hero**: Presentación principal con efecto de partículas
2. **Stats**: Estadísticas destacadas (años experiencia, etc)
3. **Servicios**: 6 servicios principales con iconos
4. **Nosotros**: Información de la empresa y valores
5. **CTA**: Call-to-action para agendar consulta
6. **Contacto**: Formulario y datos de contacto
7. **Footer**: Información legal y enlaces

## ⚡ Performance

- Uso de CDN para Tailwind y Google Fonts
- Lazy loading de animaciones con Intersection Observer
- Sin dependencias pesadas
- Optimizado para Core Web Vitals

## 🔧 Desarrollo local

Para probar localmente:

```bash
# Opción 1: Servidor Python
python -m http.server 8000

# Opción 2: Servidor Node
npx serve

# Luego abrir http://localhost:8000
```

## 📝 Notas importantes

- **Email del formulario**: Actualmente muestra un alert. Para funcionalidad real, necesitarás:
  - Cloudflare Workers + Email service
  - FormSpree / Netlify Forms
  - Backend propio

- **SEO**: El archivo incluye meta tags básicos. Considera agregar:
  - Open Graph tags
  - Twitter Card tags
  - Schema.org markup

- **Analytics**: Considera agregar Google Analytics o Cloudflare Web Analytics

## 🐛 Troubleshooting

**Problema**: Las fuentes no cargan
- Solución: Verifica la conexión a internet (CDN de Google Fonts)

**Problema**: Animaciones no funcionan
- Solución: Verifica que JavaScript esté habilitado en el navegador

**Problema**: Responsive no se ve bien
- Solución: Limpia caché del navegador (Ctrl+Shift+R)

## 📧 Contacto desarrollo

Para modificaciones o soporte técnico, contactar al desarrollador.

---

**Inversiones AEQUITAS Capital SPA**  
Av. Alcalde Jorge Monckeberg #1721, Ñuñoa, Santiago
