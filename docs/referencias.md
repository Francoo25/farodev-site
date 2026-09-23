# Referencias de UX/UI

Sitios y recursos guardados como inspiración de diseño/interacción para FaroDevs. El flujo para usarlos está en `TOOLS.md` ("Estudiar la interacción real de un sitio de referencia" y "Regla explícita para referencias externas"): Playwright primero (estudiar la interacción real), Framer Motion después (reproducir el patrón), UI/UX Pro Max al final (filtrar con la identidad de FaroDevs).

---

## Sitios individuales (estudiar interacción con Playwright antes de reproducir un patrón)

- **https://styles.refero.design/** - sistema de estilos con su propio `design.md` incluido; útil como referencia de cómo documentar un design system, además de la inspiración visual.
- **https://motionsites.ai/** - showcase de sitios con animación/motion fuerte.
- **https://ui.aceternity.com/** - librería de componentes con efectos visuales (React/Tailwind); igual que con 21st.dev/magic, no se copia el componente tal cual - se reimplementa con los tokens de `DESIGN.md`.

## Catálogos de navegación (para explorar patrones sueltos, no un único flujo de interacción a replicar)

- **https://www.pinterest.com/search/pins/?q=glassmorphism** - board de Pinterest, referencia visual estática (glassmorphism).
- **https://mobbin.com/discover/apps/ios/latest** - catálogo de capturas de apps iOS, referencia de patrones de UI mobile.

---

## Nota de origen (2026-09-23)

Lista pasada por el usuario para guardar como referencia. Se verificó con Playwright que los tres sitios individuales cargan correctamente (sin bloqueo ni error):

- `styles.refero.design` -> "DESIGN.md Examples for AI Agents | Refero Styles"
- `motionsites.ai` -> "MotionSites AI - Official Premium AI Website Prompts"
- `ui.aceternity.com` -> "Aceternity UI - React & Tailwind CSS Component Library"

Ninguno expone GSAP, Lenis, Locomotive Scroll ni Framer Motion como globals detectables desde la carga inicial (chequeo rápido, no un scroll-through completo). El estudio a fondo de interacción (scroll-through, inspección de CSS/JS en vivo) queda pendiente para cuando se vaya a reproducir un patrón concreto de alguno de ellos, siguiendo el flujo de `TOOLS.md` - no se hace de antemano sin un objetivo puntual.
