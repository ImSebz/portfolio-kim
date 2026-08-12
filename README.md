# Portafolio web — Kimberly Pulido

Código fuente completo de la landing de portafolio profesional de Kimberly Pulido.

## Incluye

- Landing responsive para escritorio, tablet y móvil.
- Fuente Poppins mediante `next/font/google`.
- Todos los logos e imágenes del proyecto en `public/`.
- Paleta de colores, estilos y ajustes responsive en `app/globals.css`.
- Contenido y estructura principal en `app/page.tsx`.
- Metadatos, fuente y configuración general en `app/layout.tsx`.
- Enlaces de contacto, LinkedIn, Instagram, TikTok y landing de Aurum.

## Tecnología

- React 19
- Next.js 16
- TypeScript
- Tailwind CSS 4

## Requisitos

- Node.js 20 o superior
- npm

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

El servidor indicará en la terminal la dirección local disponible.

## Crear una versión de producción

```bash
npm run build
npm run start
```

## Archivos principales

```text
app/
  layout.tsx        Fuente Poppins, idioma y metadatos
  page.tsx          Contenido completo de la landing
  globals.css       Colores, diseño, componentes y responsive
public/
  brand-logos/      Logos utilizados en la página
  portfolio/        Material gráfico adicional del portafolio
```

## Paleta actual

| Variable | Color | Uso principal |
| --- | --- | --- |
| `--ink` | `#1d1815` | Texto y fondos oscuros |
| `--paper` | `#f4eee5` | Fondo principal |
| `--white` | `#fffaf4` | Tarjetas y texto claro |
| `--wine` | `#5a1718` | Hero, gestión y contacto |
| `--red` | `#a63225` | Acentos y títulos |
| `--acid` | `#d9e57a` | Secciones destacadas |
| `--peach` | `#efbb9a` | Acentos claros |

## Sustituir el video de Bodytech

Actualmente la landing conserva un espacio visual para el video. Cuando esté disponible:

1. Guardar el archivo optimizado dentro de `public/videos/`.
2. En `app/page.tsx`, reemplazar el bloque `bodytech-video-slot` por un elemento `<video>`.
3. Usar `controls`, `playsInline`, `preload="metadata"` y una imagen `poster` para mejorar el rendimiento.

## Recomendaciones para desarrollo

- Conservar los logos dentro de tarjetas con `object-fit: contain` para evitar recortes.
- Comprimir videos antes de publicarlos y ofrecer formatos MP4/WebM.
- No ampliar imágenes rasterizadas por encima de su resolución original.
- Revisar los enlaces externos y datos de contacto antes de cada publicación.
