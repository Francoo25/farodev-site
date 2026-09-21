# Changelog

Registro de cambios por fecha, útil para el mantenimiento mensual del sitio.

## 2026-09-21 - Cambio de marca a FaroDevs, SEO, hosting en Vercel y fixes de responsive

- Renombrada la marca de "FaroDev" a "FaroDevs" en todo el sitio (código fuente en `web/src`, `index.html`) y en la documentación del proyecto, incluido el wordmark partido `Faro<em>Dev</em>` en Header/Footer que un reemplazo de texto simple no cubría.
- Dominio `farodevs.com` adquirido.
- Actualizado el número de WhatsApp a `+51 943 402 701` en `web/src/data/content.js`.
- Agregadas etiquetas `canonical`, `robots`, Open Graph y Twitter Card a `web/index.html` para indexación en Google y vista previa al compartir el link.
- `web/vite.config.js` ahora detecta `process.env.VERCEL` para compilar con `base: '/'` a `web/dist` en Vercel, sin dejar de compilar a la raíz del repo con `base: '/farodev-site/'` para GitHub Pages.
- Conectada la app de Vercel al repo de GitHub para deploy automático; pendiente terminar el import del proyecto y apuntar el DNS de `farodevs.com`.
- **3 bugs de responsive corregidos, verificados con Playwright (bounding boxes, no solo capturas):**
  - `overflow-x: hidden` en `html`/`body`: el mockup del hero se salía del viewport en mobile y eso rompía `position: fixed` en toda la página (el lightbox del portafolio aparecía descentrado).
  - `.deviceFront` del hero cambiado de `left: -12%` a `left: 0`: antes quedaba recortado contra el borde de pantalla en vez de centrado.
  - Breakpoint del header subido de `760px` a `900px`: el wordmark se desbordaba sobre el nav entre esos anchos por falta de espacio real.
  - `flex-wrap: wrap` agregado al `<nav>` del footer: los 4 links se desbordaban 51px a 320px de ancho.

## 2026-09-16 - Primera versión del sitio

- Construido el sitio completo de una sola página: Hero, Servicios, Portafolio, Sobre FaroDevs, Testimonios y Contacto.
- Agregado selector de tipo de negocio en Contacto, que arma un mensaje de WhatsApp prellenado según la elección.
- Agregado menú móvil con CTA de WhatsApp incluido en el panel.
- Agregado reveal-on-scroll (con fallback visible sin JavaScript) como único momento de animación del sitio.
- Escrito `PRODUCT.md`, `DESIGN.md` y `.impeccable/design.json` a partir del brief de negocio y del sistema visual implementado.
- Corregidos durante la verificación: contraste insuficiente del coral como texto, símbolo del logo ilegible sobre fondo navy, colapso de layout del mockup del hero en mobile, y CTA de WhatsApp ausente del header en mobile.
- Pendiente: registrar farodev.pe, vectorizar variantes adicionales del logo si hicieran falta, definir hosting propio, conseguir screenshots reales de Ícono Creativo, armar ejemplo en WordPress para el portafolio.
- Publicado en GitHub Pages: https://francoo25.github.io/farodev-site/

## 2026-09-16 - Capturas reales de AxionOne

- Reemplazado el placeholder "Captura pendiente" de AxionOne por tres capturas reales tomadas directamente del sistema deployado (`axiononetest.runasp.net`): pantalla de toma de pedido (imagen principal del caso de estudio), mapa de salón y reporte de ventas.
- Agregada una galería de dos miniaturas dentro de la tarjeta de AxionOne para mostrar más de una pantalla del sistema.
- Agregado un lightbox: las tres capturas de AxionOne se pueden ampliar con un clic (overlay oscuro, cierre con botón, clic afuera o `Escape`, foco accesible por teclado).

## 2026-09-16 - Dinamismo inspirado en Smultron

- Estudiada la interacción real (scroll-through + inspección de CSS/JS) de smultron.software, la referencia de layout original del proyecto.
- Agregado: header que se oculta al hacer scroll hacia abajo y reaparece al subir.
- Agregado: flecha deslizante en el CTA principal del hero al hacer hover.
- Agregado: zoom de imagen en hover para la captura principal de AxionOne y las miniaturas de la galería.
- Agregada la sección "Tecnologías" (.NET 10, EF Core, SQL Server, SUNAT · UBL 2.1, Razor + React, Multi-local) entre el portafolio y "Sobre FaroDevs".
- Descartado: marquee infinito para la tira de tecnologías (el detector de diseño lo marcó como problema real de legibilidad con contenido fijo de solo 6 items); se implementó como fila estática que se envuelve en mobile.

## 2026-09-16 - Captura real de "Negocio local" en el portafolio

- Reemplazado el placeholder "Imagen pendiente" de la tarjeta "Negocio local" por una captura real del hero de La Caleta Cevichería (ya construida y publicada como proyecto independiente).
- La tarjeta ahora abre la captura en el lightbox y agrega un enlace "Ver sitio" al proyecto real.
- "Ícono Creativo" sigue con el placeholder: ese proyecto está en pausa hasta recibir logo, tipografía y prototipo de la marca real.

## 2026-09-17 - Reconstrucción del home con React + Vite + Framer Motion, confirmada como sitio oficial

- Reconstruido el home completo en un proyecto Vite + React (`/web`), usando Framer Motion para toda la animación (reveal-on-scroll, header oculto/visible al hacer scroll, hover del CTA, zoom del portafolio, menú móvil, lightbox) y componentes de 21st.dev/magic como referencia estructural para el hero y las tarjetas de precio.
- Ampliado el contenedor principal de `1180px/24px` a `1600px/48px` de padding lateral, después de medir con Playwright el ancho real usado por smultron.software (referencia de layout del proyecto).
- Corregidos varios detalles visuales para mantener paridad con la versión anterior: mockup del hero (rotación, puntos de "ventana", color teal), checks coral en la tarjeta de precio destacada, fondo del footer (el símbolo del logo se perdía sobre navy), color del ícono de WhatsApp (usaba negro por defecto del SVG en vez de heredar el navy del botón).
- Confirmado como sitio publicado: la versión anterior (HTML/CSS/JS plano, sin build step) queda archivada en `archive/index-v1.html` como referencia histórica. De ahora en adelante los cambios al home se hacen en `web/src/` y se compilan con `npm run build`.

## 2026-09-18 - Fix de pantalla en blanco en producción + ajustes de hero, espaciado y header

- **Corregido bug crítico:** el sitio publicado se veía completamente en blanco. `web/vite.config.js` tenía `base: "/"`, pero el sitio se sirve como página de proyecto de GitHub Pages (`https://francoo25.github.io/farodev-site/`), así que el bundle JS/CSS y las imágenes pedían rutas equivocadas (404) y React nunca montaba. Corregido fijando `base: "/farodev-site/"` y usando `import.meta.env.BASE_URL` en vez de rutas absolutas `/assets/...` en todo el código.
- Movido `assets/img` de la raíz del repo a `web/public/assets/img` (única fuente real; el build sigue copiándolo a `/assets` en la raíz) - antes esas imágenes daban 404 en `npm run dev` aunque sí funcionaban en producción.
- Hero: aumentado el stack de tarjetas del mockup ("AxionOne · POS" + "Negocio local") de 360px a 600px de ancho máximo y ajustado el solape entre ambas para que se vean superpuestas.
- Reducido el padding vertical de las secciones de 96px a 64px por lado, para un scroll menos espaciado.
- Agregada la animación de flecha (hover nudge) al CTA "Cotización gratis" del header y del menú móvil, que antes no tenían ningún ícono ni feedback de interacción.
- Todo verificado con Playwright (navegación real en desktop/tablet/mobile, sin errores de consola ni requests fallidos) antes de dar cada cambio por confirmado.
