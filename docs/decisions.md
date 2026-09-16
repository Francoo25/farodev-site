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
