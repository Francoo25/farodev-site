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
