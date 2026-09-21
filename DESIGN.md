---
name: FaroDevs
description: Sitio de portafolio y servicios para FaroDevs, desarrollo web para pymes peruanas
colors:
  navy-profundo: "#0e2340"
  navy-profundo-soft: "#16345c"
  verde-brujula: "#1fa97c"
  verde-brujula-deep: "#157b5c"
  coral-senal: "#ff6b4a"
  coral-senal-deep: "#e5502f"
  neutral-text-secondary: "#5a6472"
  neutral-border-strong: "#c7ccd3"
  neutral-cream: "#fafaf8"
  neutral-white: "#ffffff"
  neutral-border: "#e4e1da"
typography:
  display:
    fontFamily: "Archivo, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 1.7rem + 2.4vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.9vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Archivo, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
rounded:
  sm: "10px"
  md: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  3xs: "0.25rem"
  2xs: "0.5rem"
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
  2xl: "6rem"
  3xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.coral-senal}"
    textColor: "{colors.navy-profundo}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.coral-senal}"
    textColor: "{colors.navy-profundo}"
  chip-selected:
    backgroundColor: "{colors.navy-profundo}"
    textColor: "{colors.neutral-white}"
    rounded: "{rounded.pill}"
  chip-unselected:
    backgroundColor: "{colors.neutral-white}"
    textColor: "{colors.neutral-text-secondary}"
    rounded: "{rounded.pill}"
  card-price-featured:
    backgroundColor: "{colors.navy-profundo}"
    textColor: "{colors.neutral-white}"
    rounded: "{rounded.md}"
    padding: "2.5rem"
---

# Design System: FaroDevs

## Overview

**Creative North Star: "El Compás Técnico"**

FaroDevs se presenta como un compás, no como un vitrinero de plantillas: el sistema visual traduce precisión técnica real (sistemas de negocio, integraciones fiscales) en una superficie cercana y sin pretensiones corporativas. El navy profundo ancla el sistema con autoridad y legibilidad; el coral funciona como una única señal de acción clara en cada pantalla, nunca como decoración repetida. Las formas son suaves y redondeadas (nunca angulosas ni neobrutalistas), porque la confianza técnica no necesita sonar fría.

El sistema rechaza explícitamente: gradientes de texto, íconos genéricos tipo emoji, kickers/eyebrows sobre títulos, y cualquier imitación de screenshot real donde no existe evidencia real todavía (los huecos de portafolio se marcan como pendientes, nunca se simulan).

**Key Characteristics:**
- Navy como ancla tipográfica y de fondo; coral como única señal de acción por pantalla.
- Esquinas generosas (16-24px) y sombras suaves con offset, nunca halos planos.
- Superficies planas en reposo; la elevación aparece como respuesta (hover, tarjeta destacada).
- Tipografía display de alto contraste (Archivo 900) contra cuerpo de lectura cómoda (Plus Jakarta Sans).

## Colors

Paleta de tres acentos sobre una base neutra cálida (crema, no blanco puro), pensada para que el coral funcione como única señal de acción por pantalla.

### Primary
- **Navy Profundo** (#0e2340): texto principal, fondos oscuros (tarjeta de precio destacada, header-cta text en hover), títulos display. Contraste 15.75:1 sobre blanco (AAA).
- **Navy Profundo Soft** (#16345c): variante para gradientes/detalles dentro de superficies navy (mockup del hero).

### Secondary
- **Verde Brújula** (#1fa97c): íconos, checks de features, etiquetas de tiempo de entrega. Nunca como fondo de botón de acción.
- **Verde Brújula Deep** (#157b5c): variante hover/texto sobre fondo claro cuando se necesita más contraste que el verde base.

### Tertiary
- **Coral Señal** (#ff6b4a): fondo de botones de acción (CTA de WhatsApp), highlights puntuales. Regla de accesibilidad: siempre con texto navy encima, nunca blanco (2.82:1, falla AA).
- **Coral Señal Deep** (#e5502f): usado en vez del coral base cuando el coral actúa como *texto* (palabras destacadas en títulos, "Dev" del wordmark) - el coral base falla contraste como texto sobre crema.

### Neutral
- **Crema** (#fafaf8): fondo base de todo el sitio.
- **Blanco** (#ffffff): superficies elevadas (tarjetas, header, formulario de contacto).
- **Gray 600** (#5a6472): texto secundario, subtítulos, cuerpo largo. 6.1:1 sobre blanco (AA).
- **Gray 300** (#c7ccd3): bordes de scrollbar, elementos decorativos de baja jerarquía.
- **Border** (#e4e1da): bordes de tarjetas, separadores, líneas de header/footer.

### Named Rules
**La Regla de la Señal Única.** El coral aparece como máximo una vez por viewport como fondo de acción (el CTA más relevante de esa pantalla). Todo lo demás que quiera destacar usa peso tipográfico, tamaño, o el navy/verde.

**La Regla del Texto Coral Oscuro.** El coral nunca es color de texto directo sobre fondo claro (falla contraste). Cuando se necesita "sensación coral" en texto (títulos, wordmark), se usa Coral Señal Deep.

## Typography

**Display Font:** Archivo (con fallback -apple-system, Segoe UI, Roboto, sans-serif)
**Body Font:** Plus Jakarta Sans (con fallback -apple-system, Segoe UI, Roboto, sans-serif)

**Character:** Archivo aporta peso y carácter geométrico a títulos y al wordmark; Plus Jakarta Sans mantiene el cuerpo cómodo de leer a tamaños de párrafo largo. El contraste de peso entre ambas (900 vs 400/600) es lo que separa jerarquías, no el color.

### Hierarchy
- **Display** (900, clamp(2.25rem, 1.7rem + 2.4vw, 2.75rem), line-height 1.05): H1 del hero. Máximo ancho 14ch para forzar el quiebre de línea deseado.
- **Headline** (700, clamp(1.5rem, 1.3rem + 0.9vw, 1.75rem), line-height 1.2): H2 de cada sección.
- **Title** (700, 1.25rem): H3 de tarjetas (precios, portafolio).
- **Body** (400, 1.0625rem, line-height 1.6): párrafos generales. Medida objetivo 62ch.
- **Body secundario** (400, 0.9375rem): descripciones dentro de tarjetas.
- **Label** (600, 0.8125rem): captions, badges, tags de tecnología.

### Named Rules
**La Regla Sin Kicker.** Ningún encabezado lleva una etiqueta/eyebrow encima. El propio H2 lleva el peso semántico; un span en coral-deep dentro del título es el único recurso de énfasis permitido.

## Layout

Contenedor centrado en `max-width: 1600px` con padding lateral `3rem` (`1.5rem` en mobile, `≤640px`) (`.wrap`), reutilizado dentro de cada `<section>` para dar el inset horizontal - las secciones en sí solo controlan el padding vertical (`--space-2xl` = 6rem entre secciones). El sitio es de una sola página con scroll y navegación por anclas.

**Nota de origen (2026-09-17):** el ancho se amplió de la medida original (`1180px` / `1.5rem`, usada en la v1 estática archivada) tras medir con Playwright el contenedor real de smultron.software (`max-width: 1632px`, padding `48px`, fijo por encima de ~1750px de viewport) - la referencia de layout original del proyecto. Se adoptó `1600px`/`3rem` como versión redondeada, aplicada primero en la reconstrucción con Vite + React (`/web`, ver `docs/decisions.md`).

Grillas de dos columnas (hero, about, contacto) colapsan a una columna en `900px`. La navegación principal se sustituye por un menú desplegable a partir de `760px`. El ritmo vertical sigue la escala de espaciado de `3xs` (0.25rem) a `3xl` (8rem), y el bloque de precios usa una tarjeta central elevada (`translateY(-0.75rem)`) que vuelve a la línea base en mobile.

## Elevation & Depth

Sistema de sombras suaves con offset y blur amplio (nunca halos de offset cero). Las superficies son planas en reposo; la elevación se reserva para estados de interacción (hover de botón) o para señalar jerarquía fija (la tarjeta de precio destacada, los mockups del hero, el panel de menú móvil).

### Shadow Vocabulary
- **sm** (`0 2px 8px rgba(14,35,64,0.06)`): botones en reposo.
- **md** (`0 8px 24px rgba(14,35,64,0.1)`): hover de botón, panel de menú móvil abierto, ícono "Sobre FaroDevs".
- **lg** (`0 20px 48px rgba(14,35,64,0.16)`): tarjeta de precio destacada, mockups flotantes del hero - la elevación más alta se reserva para lo que ya es visualmente el foco de la sección.

### Named Rules
**La Regla de la Elevación Merecida.** Ningún elemento lleva `shadow-lg` solo por decoración; se reserva para el elemento que ya es el punto focal de su sección (destacado, flotante, o superpuesto).

## Shapes

Esquinas consistentemente redondeadas: `10px` en controles pequeños, `16px` en tarjetas, `24px` en superficies grandes (tarjeta destacada, mockups del hero, contenedor "Sobre FaroDevs"), `999px` (pill) en botones y chips. Sin bordes duros ni esquinas vivas en ningún componente - la geometría siempre comunica cercanía, nunca angularidad corporativa.

## Components

### Buttons
- **Shape:** pill (`border-radius: 999px`).
- **Primary:** fondo Coral Señal, texto Navy Profundo, padding `0.9rem 1.75rem` (variante grande) o `0.7rem 1.4rem` (variante compacta del header).
- **Hover:** `translateY(-2px)` + sombra `md` (elevación que aparece solo al interactuar, nunca en reposo).
- **Secondary (link inline):** subrayado en Verde Brújula con offset, sin fondo - usado para acciones de menor jerarquía ("Ver portafolio").

### Chips
- **Style:** pill, borde `1.5px solid` neutral border en reposo.
- **State:** seleccionado = fondo Navy Profundo + texto blanco; no seleccionado = fondo blanco + texto gray-600; hover = borde Verde Brújula.

### Cards / Containers
- **Corner Style:** `16px` (tarjetas estándar), `24px` (destacada / grandes).
- **Background:** blanco (precio estándar, portafolio) o Navy Profundo (precio destacado).
- **Shadow Strategy:** ver Elevation - plano en reposo salvo la variante destacada, que usa `shadow-lg` de forma permanente por ser el punto focal de la grilla de precios.
- **Border:** `1px solid` neutral border en tarjetas estándar; ninguno en la tarjeta destacada (el contraste de fondo ya la separa).
- **Internal Padding:** `2.5rem` (`--space-lg`).

### Inputs / Fields
- **Style:** los "inputs" del sitio son radios ocultos detrás de chips pill (selector de tipo de negocio) - sin campos de texto tradicionales.
- **Focus:** anillo coral de 2px con offset, aplicado también sobre el chip visible (`:focus-visible`).

### Navigation
- **Style:** enlaces de texto gray-600 con subrayado coral animado (crece de izquierda a derecha en hover), texto navy en hover. En mobile, se colapsa a un panel desplegable con separadores y el CTA de WhatsApp incluido al final del panel.

## Do's and Don'ts

### Do:
- **Do** usar Coral Señal Deep (no el coral base) cuando el coral aparece como texto sobre fondo claro.
- **Do** reservar el coral de fondo para una única acción por pantalla.
- **Do** mantener las superficies planas en reposo y reservar la sombra para hover o para el elemento focal fijo de la sección.
- **Do** usar esquinas redondeadas (mínimo 10px) en todo control interactivo.

### Don't:
- **Don't** usar texto blanco sobre coral o verde brújula (falla contraste AA).
- **Don't** agregar kickers/eyebrows sobre encabezados.
- **Don't** simular screenshots reales de portafolio: cuando no hay evidencia real, se marca explícitamente como "pendiente".
- **Don't** usar sombras de offset cero (halo plano) en ningún componente; toda sombra lleva offset + blur suave.
