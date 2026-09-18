# Decisiones técnicas

Registro de decisiones puntuales tomadas durante el desarrollo, para no repetir preguntas ni perder el porqué de una elección. El "qué" vive en `brief.md` y `DESIGN.md`; este archivo es el "por qué" de decisiones que no eran obvias.

---

## 2026-09-16 - Sitio estático sin build step

**Decisión:** HTML/CSS/JS plano, sin framework ni bundler.

**Por qué:** confirmado en el brief (sección 2.1) y en la interview de `/impeccable init` - es un sitio de una sola marca, sin necesidad de que terceros editen contenido, así que un stack estático es más rápido de construir y mantener que WordPress o un framework con build step.

---

## 2026-09-16 - Reveal-on-scroll con fallback sin JavaScript

**Decisión:** las secciones usan `data-reveal` + `IntersectionObserver` para el fade-in de entrada, pero solo se ocultan por CSS cuando `<html>` tiene la clase `.js` (añadida por un script inline en el `<head>`).

**Por qué:** la primera versión ocultaba el contenido con `opacity: 0` incondicional. Si JavaScript fallaba o no cargaba, secciones completas del sitio quedaban invisibles permanentemente. El patrón `.js` en `<html>` asegura que sin JS el contenido se muestra normal (visible por defecto), y solo se anima cuando el script confirma que puede manejar la transición.

---

## 2026-09-16 - Coral como acento, nunca como texto de lectura

**Decisión:** el coral base (`#ff6b4a`) solo se usa como fondo (botones, highlights puntuales). Cuando el coral aparece como color de *texto* (palabras destacadas en títulos, "Dev" del wordmark), se usa `--color-coral-deep` (`#e5502f`).

**Por qué:** el coral base sobre fondo crema/blanco da 2.7:1 de contraste, insuficiente incluso para texto grande (WCAG AA exige 3:1). El brief ya documentaba esta regla para botones ("nunca texto blanco sobre coral"); la extendimos también a "coral como texto sobre fondo claro", detectado por el hook de diseño del proyecto durante la verificación final.

---

## 2026-09-16 - Símbolo del logo sobre fondo claro, no navy

**Decisión:** en la sección "Sobre FaroDev", el símbolo del logo se muestra dentro de una caja de fondo blanco/crema, no navy.

**Por qué:** el símbolo tiene su propia mitad navy (ver `assets/img/logo/farodev-symbol.svg`). Sobre un fondo navy, esa mitad se funde con el fondo y solo queda visible un triángulo coral suelto, irreconocible como marca. Detectado visualmente en la ronda de verificación con capturas de pantalla.

---

## 2026-09-16 - Portafolio con placeholders explícitos, no screenshots simulados

**Decisión:** mientras no haya capturas reales de AxionOne, Ícono Creativo y el negocio local de ejemplo, las tarjetas de portafolio muestran un placeholder con patrón de rayas diagonales + etiqueta "Captura pendiente" / "Imagen pendiente", en vez de un mockup que aparente ser una captura real.

**Por qué:** confirmado explícitamente por el usuario durante `/impeccable shape` - evita que el sitio comunique evidencia que todavía no existe. Es también un principio de producto registrado en `PRODUCT.md` ("nunca fabricar evidencia").

---

## 2026-09-16 - Excepciones registradas en el detector de diseño

Dos hallazgos del detector (`impeccable detect`) se marcaron como excepción justificada en `.impeccable/config.json` en vez de corregirse, porque el "problema" es intencional o un falso positivo confirmado:

- **`overused-font` (Plus Jakarta Sans):** tipografía pinneada explícitamente en `brief.md` (sección 6) como decisión de marca ya aprobada por el usuario.
- **`repeating-stripes-gradient` (rayas del placeholder de portafolio):** patrón de rayas usado deliberadamente como "textura de imagen pendiente" (análogo al patrón de transparencia de Photoshop), no como decoración genérica.
- **`cramped-padding` (secciones sin inset propio):** falso positivo - el detector no traza que el `.wrap` hijo aplica el padding horizontal; confirmado visualmente en capturas que el contenido no queda pegado al borde.
- **`gpt-thin-border-wide-shadow` (tarjeta de precio destacada):** falso positivo - el análisis estático suma el borde de `.price-card` con la sombra de `.price-card--featured`, sin ver que esta última sobrescribe el borde a `none` en cascada.

---

## 2026-09-16 - Capturas reales de AxionOne, aspect ratio exacto en el origen

**Decisión:** las capturas de AxionOne (`assets/img/portfolio/`) se tomaron a 1440x900px exactos (relación 16:10), la misma que usa `aspect-ratio` en `.case-media-img` y `.case-gallery img`.

**Por qué:** un primer intento recortó las capturas a una relación distinta (1440x660, ~2.18:1) para eliminar espacio en blanco sobrante. Al forzar luego `aspect-ratio: 16/10` con `object-fit: cover`, el navegador recortaba también los costados, cortando botones reales de la interfaz (ej. "Dividir"). Capturar directamente en la proporción final evita cualquier recorte en el navegador.

---

## 2026-09-16 - Excepciones de escala tras escribir DESIGN.md

**Decisión:** cinco valores puntuales del CSS original (radios de 4px/8px en el mockup ilustrado del hero y el scrollbar; tamaños de fuente 1.3rem/1.125rem/1.15rem en el wordmark, subtítulo del hero y cita de testimonios) se marcaron como excepción en el detector en vez de sumarlos a la escala de `DESIGN.md` o reescribirlos.

**Por qué:** son valores de un solo uso, ya revisados y funcionando desde antes de escribir `DESIGN.md`. Sumarlos a la escala formal del sistema los convertiría en precedente para futuros usos que no lo ameritan (ver `document.md`: "no extraer cada token, los de un solo uso contaminan el sistema").

---

## 2026-09-16 - Lightbox en vez de carrusel para ver las capturas en grande

**Decisión:** las capturas de AxionOne se ven en una grilla estática (imagen principal + galería de 2 miniaturas) y cada una abre un lightbox al hacer clic, en vez de convertir la galería en un carrusel.

**Por qué:** el usuario pidió alguna interacción porque las imágenes se ven pequeñas en pantallas grandes. Un carrusel esconde contenido detrás de una interacción (hay que navegar para ver las otras capturas), mientras que la grilla actual ya muestra las tres de un vistazo; el lightbox resuelve el problema de tamaño sin sacrificar esa visibilidad inmediata. Con solo 3 imágenes, un carrusel sería complejidad sin beneficio real.

**Cómo aplica:** `.case-media-trigger` y `.gallery-trigger` envuelven cada imagen real en un `<button>` con `data-lightbox-src`/`data-lightbox-alt`; `main.js` abre `#lightbox` con esa imagen a tamaño grande. Cierra con el botón, clic afuera, o `Escape`, y devuelve el foco al trigger original. Los placeholders "Imagen pendiente" (Ícono Creativo, negocio local) no son clicables porque no hay imagen real que ampliar.

---

## 2026-09-16 - Estudio de interacción de Smultron (referencia de layout del brief)

**Decisión:** se hizo scroll-through programático (Playwright) e inspección de CSS/JS en vivo de smultron.software para extraer patrones reales de interacción, no solo su composición visual. Se adoptaron 4 patrones: header oculto al bajar/visible al subir, flecha deslizante en botones con ícono de flecha, zoom de imagen en hover de tarjetas de portafolio, y una sección de "tecnologías" en grid/tira.

**Por qué:** `docs/brief.md` ya nombraba a Smultron como referencia de layout desde el brief original; el usuario pidió estudiar puntualmente su dinamismo e interacciones (ver memoria `feedback_reference_urls_workflow`).

**Cómo aplica:**
- Header: `main.js` compara `window.scrollY` contra el valor anterior en cada frame (`requestAnimationFrame`); si baja y ya pasó los 160px iniciales, agrega `.site-header--hidden` (`transform: translateY(-100%)`); si sube, la quita. Se desactiva mientras el menú móvil está abierto.
- Flecha: `.icon-nudge` en el ícono de flecha del CTA principal del hero, con `transform: translateX(3px)` en `.btn:hover`.
- Zoom: `.case-media-trigger` y `.gallery-trigger` ahora tienen `overflow: hidden`, y su `<img>` escala a `1.05-1.06` en hover/focus-visible.

**Descartado:** marquee infinito para la tira de tecnologías (el patrón real de Smultron, usado para su carrusel de logos de clientes). El detector de diseño lo marcó como problema real: con solo 6 tags de contenido fijo (no logos de clientes que cambian), el scroll infinito esconde información sin necesidad en vez de mostrarla completa. Se implementó como fila estática (`flex-wrap`) que muestra los 6 tags de una vez y se envuelve en mobile.

---

## 2026-09-16 - Captura real de "Negocio local" reemplazando el placeholder

**Decisión:** la tarjeta "Negocio local" del portafolio usa ahora una captura real del hero de `la-caleta-cevicheria` (proyecto hermano ya publicado), en vez del placeholder rayado, con el mismo patrón de lightbox + zoom en hover que AxionOne, más un enlace "Ver sitio" al proyecto real.

**Por qué:** el negocio de ejemplo ya existe como sitio construido y publicado (ver `la-caleta-cevicheria` en GitHub); mantener el placeholder ahí sería desactualizar el portafolio a propósito. "Ícono Creativo" mantiene su placeholder porque ese proyecto sigue sin construirse (en pausa por assets de marca pendientes del cliente).

---

## 2026-09-17 - Build Vite + React acotado a /web y /draft, para poder usar Framer Motion y 21st.dev/magic

**Decisión:** se introdujo un proyecto Vite + React en `/web` (con `framer-motion`), que compila directamente a `/draft` (`vite.config.js`: `build.outDir: "../draft"`, `build.assetsDir: "bundle"`), para reconstruir el home siguiendo `TOOLS.md`. El `index.html` original permanece intacto en la raíz y sigue siendo el sitio publicado hasta que se confirme el reemplazo; el snapshot previo queda además archivado en `archive/index-v1.html` (ver `archive/README.md`).

**Por qué:** `TOOLS.md` exige usar la skill de Framer Motion y el MCP de 21st.dev/magic para animaciones y componentes de UI, pero ambas herramientas son de React - el sitio original es HTML/CSS/JS plano sin build step (decisión registrada arriba, el 2026-09-16, y en `PRODUCT.md`). El usuario, al pedir explícitamente esta reconstrucción con esas herramientas, eligió resolver el choque introduciendo el build step solo para esta nueva versión, en vez de reescribir esas herramientas en vanilla JS. El proyecto estático original no cambia de stack mientras el draft no se confirme como reemplazo - si se confirma, la sección "Stack" de `PRODUCT.md` deberá actualizarse en ese momento.

**Cómo aplica:** `web/src/components/*` usa `motion.*` de `framer-motion` para todas las animaciones (reveal-on-scroll vía `whileInView`, header oculto/visible, hover nudge del CTA, zoom de imágenes del portafolio, transición del menú móvil y del lightbox) - ninguna animación CSS a mano, como pide `TOOLS.md`. Los tokens de `DESIGN.md` se reutilizan tal cual copiando `css/tokens.css` a `web/src/styles/tokens.css`, sin redecidir paleta ni tipografía. Los componentes de 21st.dev/magic (Hero con stagger de texto, grilla de pricing con tarjeta destacada) se usaron como referencia estructural/de interacción y se reimplementaron a mano con los tokens de FaroDev, no se copiaron tal cual (vienen en Tailwind/shadcn, stack que este proyecto no usa).

---

## 2026-09-17 - Contenedor `.wrap` ampliado a 1600px/48px, medido en smultron.software con Playwright

**Decisión:** el ancho máximo del contenedor (`.wrap`, en `web/src/styles/global.css`) pasó de `1180px`/`1.5rem` a `1600px`/`3rem` (padding vuelve a `1.5rem` solo en mobile, `≤640px`). Aplicado por ahora solo en `/web` (draft); la v1 archivada mantiene su ancho original.

**Por qué:** el usuario notó que smultron.software - la referencia de layout original del proyecto (ver `docs/brief.md` sección 2.1 y la entrada de "Dinamismo inspirado en Smultron" arriba) - usa bastante más ancho de pantalla que nuestro `.wrap`. Se midió con Playwright (`getBoundingClientRect` del contenedor principal en varios anchos de viewport) en vez de estimarlo a ojo: `max-width: 1632px`, `padding: 48px` por lado, fijo por encima de ~1750px de viewport (confirmado con viewports de 1280 a 1920px). Se adoptó `1600px`/`3rem` como versión redondeada. `DESIGN.md` (sección Layout) queda actualizado con el nuevo valor y esta nota de origen.

---

## 2026-09-17 - v2 (Vite + React) confirmado como sitio oficial, v1 retirado a archivo

**Decisión:** tras una ronda de revisión visual comparando v1 (`archive/index-v1.html`) contra el draft en `/draft` (verificación con Playwright, capturas y comparación directa contra la versión publicada), el usuario confirmó reemplazar el sitio publicado. Se reconfiguró `web/vite.config.js` para compilar directamente a la raíz del repo (`build.outDir: ".."`, `build.assetsDir: "bundle"`, `base: "/"`, `emptyOutDir: false` a propósito - la raíz tiene archivos del repo que el build nunca debe borrar). Se eliminaron el `index.html`/`css/`/`js/` originales de la raíz (ya preservados en `archive/`), la carpeta `/draft` (staging ya no necesario) y las herramientas de comparación `/preview` + `preview.bat` (cumplieron su propósito).

**Por qué:** el draft pasó verificación funcional (Playwright: sin errores de consola, lightbox/menú/scroll/formulario funcionando en desktop y mobile) y visual (paridad con v1 en cada punto donde había diferencia notada: mockup del hero, tarjetas de precio, footer, íconos) - documentado en las entradas de esta sección y en el historial de la sesión. `PRODUCT.md` (sección Stack) queda actualizado para reflejar React + Vite como stack real del sitio.

**Cómo aplica:** de ahora en adelante, cualquier cambio al home se hace editando `web/src/` y corriendo `npm run build` dentro de `/web` - eso sobrescribe `index.html` y `/bundle` en la raíz directamente. `archive/index-v1.html` queda como referencia histórica de la versión anterior, no se vuelve a tocar ni se sirve.

---

## 2026-09-18 - `base` de Vite fijado a `/farodev-site/` (no `/`) y assets movidos a `web/public`

**Decisión:** `web/vite.config.js` cambió `base: "/"` por `base: "/farodev-site/"`. Todas las rutas a imágenes que estaban escritas a mano como `/assets/img/...` (en `web/index.html` y en JSX: `Header.jsx`, `Footer.jsx`, `About.jsx`, `Portfolio.jsx`, `content.js`) se reemplazaron por `import.meta.env.BASE_URL` (o `%BASE_URL%` en HTML). Además, `assets/img` se movió de la raíz del repo a `web/public/assets/img` (con `git mv`, historial preservado); el build lo sigue copiando de vuelta a `/assets` en la raíz en cada `npm run build`.

**Por qué:** el sitio se publica como GitHub Pages de *proyecto* en `https://francoo25.github.io/farodev-site/`, no en la raíz del dominio ni con un custom domain (no hay `CNAME`). Con `base: "/"`, toda ruta absoluta (`/bundle/...`, `/assets/...`) se resolvía contra `francoo25.github.io/` en vez de `francoo25.github.io/farodev-site/`, así que el navegador pedía `francoo25.github.io/bundle/index-*.js` (404) - React nunca montaba y el sitio publicado se veía completamente en blanco. Verificado el bug y el fix con Playwright (antes: dos 404 y `#root` vacío; después: cero requests fallidos y la app montada) sirviendo el build localmente en un subpath que imita la estructura de GitHub Pages. Por separado, `assets/img` vivía fuera de `web/public`, así que esas mismas imágenes daban 404 en `npm run dev` (el dev server de Vite solo sirve estáticos desde `public/`) aunque sí funcionaban en producción; moverlas a `web/public/assets/img` las deja disponibles en ambos entornos desde una única fuente.

**Cómo aplica:** si el sitio se llega a servir desde otro subpath, un dominio propio (`farodev.pe`, pendiente en sección 8 de `STATUS.md`) o la raíz de `francoo25.github.io`, hay que actualizar `base` en `web/vite.config.js` a juego con esa ruta. Cualquier imagen nueva referenciada desde el código debe usar `import.meta.env.BASE_URL` (JSX/JS) o `%BASE_URL%` (HTML), nunca una ruta absoluta `/assets/...` escrita a mano - y su archivo fuente va en `web/public/assets/img/`, no en `/assets` de la raíz (eso es salida generada por el build, no se edita a mano).
