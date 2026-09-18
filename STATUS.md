# FaroDev - Estado del proyecto

Documento único de referencia con toda la información del proyecto: negocio, stack, diseño, decisiones tomadas, historial de cambios, pendientes y herramientas/skills usadas para construirlo. Consolida `README.md`, `PRODUCT.md`, `DESIGN.md`, `docs/brief.md`, `docs/decisions.md` y `docs/changelog.md` - esos archivos siguen siendo la fuente de verdad detallada de cada tema; este es el resumen de un vistazo.

Última actualización: 2026-09-17.

---

## 1. Qué es

Sitio de portafolio y servicios de **FaroDev**, negocio de Franco Reategui dedicado a crear páginas web para pymes peruanas (restaurantes, tiendas, bodegas, servicios profesionales, fotografía/video). Objetivo del sitio: que el visitante entienda los paquetes/precios, confíe en la capacidad técnica del equipo y escriba por WhatsApp para pedir cotización.

**Publicado en:** https://francoo25.github.io/farodev-site/

**Posicionamiento:** FaroDev no es "otro diseñador de páginas bonitas" - construye sistemas de software reales (ERPs, POS, integración de facturación electrónica SUNAT) con .NET/EF Core/SQL Server, y aplica esa capacidad técnica a sitios para pymes. El argumento diferencial es AxionOne, el POS propio con integración SUNAT.

---

## 2. Negocio

**Nicho:** general, no exclusivo - restaurantes, tiendas, bodegas, servicios de fotografía/video y otros negocios locales.

**Paquetes y precios (mercado peruano, soles):**

| Paquete | Incluye | Precio | Entrega |
|---|---|---|---|
| Básico | Página única (inicio, sobre nosotros, servicios, contacto) | S/ 500-900 | 3-5 días |
| Estándar | 3-5 páginas, SEO básico, integración redes | S/ 1,000-1,800 | 1-2 semanas |
| Con funcionalidad | Catálogo, reservas, carrito simple, panel admin básico | S/ 2,000-4,000+ | 2-4 semanas |
| Mantenimiento mensual | Hosting, actualizaciones, cambios menores | S/ 50-150/mes | recurrente |

- **Forma de pago:** 50% adelanto / 50% contra entrega.
- **Dominio/hosting:** depende del cliente - si ya lo tiene se hace solo el deploy; si no, se ofrece como parte del paquete o add-on.
- **Contacto:** WhatsApp directo, con mini-calificador de leads ("¿qué tipo de negocio tienes?") antes de derivar.
- **WordPress:** se ofrece como opción/add-on para clientes que necesitan editar su propio contenido seguido (menús, precios, productos), típicamente restaurantes y tiendas - no es el default.

**Usuarios objetivo:** dueños de pymes peruanas evaluando si contratar a FaroDev y pedir una cotización.

---

## 3. Stack técnico

**Sitio propio de FaroDev:** React + Vite + Framer Motion (proyecto fuente en `/web`), compilado a HTML/CSS/JS estático que se publica desde la raíz del repo - sigue sin backend ni WordPress, solo cambió de "escrito a mano" a "compilado con un bundler" para poder usar Framer Motion y componentes de 21st.dev/magic (ver `TOOLS.md`). La versión anterior sin build step queda archivada como referencia histórica (sección 7).

El sitio se publica como GitHub Pages de **proyecto** (`https://francoo25.github.io/farodev-site/`, no dominio raíz ni custom domain), así que `base` en `web/vite.config.js` está fijado a `/farodev-site/` y todas las rutas a imágenes usan `import.meta.env.BASE_URL` en vez de rutas absolutas `/assets/...` - si se sirve alguna vez desde un dominio propio o subpath distinto, este valor hay que actualizarlo (ver `docs/decisions.md`).

Correr el sitio ya compilado localmente (debe respetar el `base`, `http.server` en la raíz sirve las rutas mal):
```
cd ..
npx serve -l 4173 .
# abrir http://localhost:4173/farodev-site/
```

Para modificar el sitio con recarga en vivo:
```
cd web
npm install
npm run dev    # abre en http://localhost:5173/farodev-site/ (respeta el base)
```

Para recompilar y publicar los cambios:
```
cd web
npm run build    # sobrescribe index.html, /bundle y /assets en la raíz
```

**Estructura:**
```
farodev-site/
├── index.html             → sitio publicado (generado, no editar a mano)
├── bundle/                 → JS/CSS compilados (generado, no editar a mano)
├── assets/img/             → generado por el build a partir de web/public/assets/img (no editar a mano)
├── web/                     → proyecto fuente: React + Vite + Framer Motion
│   ├── public/assets/img/     → fuente real de las imágenes (logo, portafolio) - editar aquí, no en /assets de la raíz
│   └── src/
│       ├── components/        → secciones del home (Hero, Services, Portfolio, etc.)
│       ├── styles/             → tokens.css (copia de DESIGN.md) + global.css
│       └── data/content.js     → copy y datos reutilizados
├── archive/                → snapshot autocontenido de la versión anterior (histórico)
├── PRODUCT.md            → contexto de negocio, usuarios y posicionamiento
├── DESIGN.md              → sistema de diseño (colores, tipografía, componentes)
├── TOOLS.md                → qué herramienta/skill usar para cada tarea de desarrollo
└── docs/
    ├── brief.md            → brief original de negocio/copy/marca (fuente de verdad)
    ├── decisions.md        → por qué se tomó cada decisión técnica no obvia
    └── changelog.md        → qué cambió, por fecha
```

**WordPress:** contexto separado, ofrecido solo como opción de servicio para clientes que necesitan autonomía de contenido - no es el stack de este sitio. Pendiente armar un proyecto de ejemplo en WordPress para respaldar esa opción en el portafolio.

---

## 4. Identidad visual

**Creative North Star: "El Compás Técnico"** - FaroDev se presenta como un compás, no como un vitrinero de plantillas. El sistema visual traduce precisión técnica real en una superficie cercana y sin pretensiones corporativas.

### Colores

| Rol | Nombre | Hex | Uso |
|---|---|---|---|
| Primario | Navy Profundo | `#0e2340` | Texto principal, fondos oscuros, títulos display |
| Primario soft | Navy Profundo Soft | `#16345c` | Detalles/gradientes sobre superficies navy |
| Secundario | Verde Brújula | `#1fa97c` | Íconos, checks de features, etiquetas de tiempo - nunca fondo de botón |
| Secundario deep | Verde Brújula Deep | `#157b5c` | Hover/texto sobre fondo claro |
| Acento | Coral Señal | `#ff6b4a` | Fondo de botones de acción (CTA WhatsApp) - siempre con texto navy encima |
| Acento deep | Coral Señal Deep | `#e5502f` | Coral usado como *texto* (el base falla contraste sobre crema) |
| Neutro fondo | Crema | `#fafaf8` | Fondo base del sitio |
| Neutro texto | Gray 600 | `#5a6472` | Texto secundario, cuerpo largo |

**Reglas nombradas clave:**
- **Regla de la Señal Única:** el coral aparece como máximo una vez por viewport como fondo de acción.
- **Regla del Texto Coral Oscuro:** el coral nunca es color de texto directo sobre fondo claro (falla contraste); se usa Coral Señal Deep.
- **Regla Sin Kicker:** ningún encabezado lleva eyebrow/kicker encima.
- **Regla de la Elevación Merecida:** ninguna sombra `lg` es decorativa; se reserva para el punto focal fijo de la sección.

### Tipografía

- **Display/títulos:** Archivo, peso 900 (H1) / 700 (H2/H3).
- **Cuerpo:** Plus Jakarta Sans, peso 400/600.
- Fallback: `-apple-system, Segoe UI, Roboto, sans-serif`.

### Formas y componentes

- Esquinas redondeadas: 10px (controles), 16px (tarjetas), 24px (superficies grandes), pill/999px (botones y chips).
- Botones: pill, fondo coral, texto navy, hover con `translateY(-2px)` + sombra.
- Rechaza explícitamente: gradientes de texto, íconos genéricos tipo emoji, kickers sobre títulos, y simular screenshots reales donde no hay evidencia (se marca "pendiente").

### Logo

- Símbolo abstracto tipo flecha/compás dividido diagonalmente (navy con doble "pata" en la base / triángulo coral), generado con Gemini. Existe como PNG; el SVG final aún no está vectorizado.
- Wordmark "FaroDev": "Faro" en navy, "Dev" en coral (modo claro) o teal (modo oscuro).

---

## 5. Portafolio (evidencia mostrada en el sitio)

1. **AxionOne** (evidencia técnica completa): POS multi-tenant para restaurantes, .NET 10 + EF Core, frontend híbrido Razor/React, integración SUNAT (UBL 2.1), gestión multi-local. Capturas reales tomadas del sistema deployado (`axiononetest.runasp.net`): toma de pedido, mapa de salón, reporte de ventas. Con lightbox y galería de miniaturas.
2. **Ícono Creativo**: sitio para productora audiovisual (portafolio + gestión de redes sociales). **En pausa** hasta recibir logo, tipografía y prototipo de marca real del cliente - mantiene placeholder "Imagen pendiente".
3. **Negocio local de ejemplo** ("La Caleta Cevichería", https://francoo25.github.io/la-caleta-cevicheria/): página tipo restaurante con menú, ubicación y WhatsApp directo. Ya tiene captura real en el portafolio con enlace "Ver sitio".
4. **Pendiente:** proyecto de ejemplo en WordPress para respaldar esa opción de servicio (aún no existe).

Regla de producto: **nunca fabricar evidencia** - testimonios y casos sin desarrollar se marcan como placeholder explícito, nunca se inventan ni se simulan screenshots.

---

## 6. Historial de cambios (changelog)

**2026-09-16 - Primera versión del sitio**
- Construido el sitio completo de una sola página: Hero, Servicios, Portafolio, Sobre FaroDev, Testimonios, Contacto.
- Selector de tipo de negocio en Contacto que arma un mensaje de WhatsApp prellenado.
- Menú móvil con CTA de WhatsApp incluido.
- Reveal-on-scroll con fallback visible sin JavaScript.
- Escritos `PRODUCT.md`, `DESIGN.md` y `.impeccable/design.json` a partir del brief y el sistema visual implementado.
- Corregido en verificación: contraste insuficiente del coral como texto, símbolo del logo ilegible sobre fondo navy, colapso del mockup del hero en mobile, CTA de WhatsApp ausente del header en mobile.

**2026-09-16 - Capturas reales de AxionOne**
- Reemplazado el placeholder por tres capturas reales del sistema deployado, con galería de miniaturas y lightbox accesible por teclado.

**2026-09-16 - Dinamismo inspirado en Smultron**
- Estudiada la interacción real de smultron.software (scroll-through + inspección de CSS/JS).
- Agregado: header que se oculta al bajar y reaparece al subir, flecha deslizante en el CTA del hero, zoom de imagen en hover (AxionOne), sección "Tecnologías" (.NET 10, EF Core, SQL Server, SUNAT · UBL 2.1, Razor + React, Multi-local).
- Descartado: marquee infinito para la tira de tecnologías (detectado como problema real de legibilidad con solo 6 items fijos); se implementó como fila estática que se envuelve en mobile.

**2026-09-16 - Captura real de "Negocio local"**
- Reemplazado el placeholder por una captura real del hero de La Caleta Cevichería, con lightbox y enlace "Ver sitio". Ícono Creativo sigue con placeholder.

**2026-09-17 - Draft del home reconstruido con UI/UX Pro Max + 21st.dev/magic + Framer Motion**
- Construida una versión alternativa del home siguiendo `TOOLS.md`, disponible en `/draft/index.html` (build de un proyecto Vite + React en `/web`, con `framer-motion` para todas las animaciones: reveal-on-scroll, header oculto/visible, hover nudge del CTA, zoom del portafolio, menú móvil y lightbox). Mismo contenido, copy y orden de secciones que la v1; mismos tokens de `DESIGN.md`.
- La versión original queda archivada tal cual en `archive/index-v1.html` (con su propio `css/`/`js/` autocontenidos) y sigue siendo el sitio publicado - no se reemplaza el `index.html` de la raíz hasta confirmación explícita.
- Ver el porqué del build Vite+React (choque con la decisión original "sin framework") en `docs/decisions.md`.
- Verificado con Playwright (navegación real, no capturas estáticas): se encontraron y corrigieron dos bugs reales antes de dar el draft por terminado - el CTA "Cotización gratis" del header se superponía con el botón de cerrar el menú móvil (orden de imports CSS hacía que el `.btn` global ganara sobre el `display: none` del módulo), y la tarjeta "Negocio local" del portafolio desbordaba su propio borde porque la imagen real no respetaba el `aspect-ratio: 16/10` (un `height: 100%` heredado bloqueaba el cálculo). Sin errores de consola en desktop ni mobile tras el fix.

**2026-09-17 - v2 confirmado como sitio oficial**
- Tras revisión visual punto por punto contra v1 (hero, tarjetas de precio, footer, íconos) y las correcciones correspondientes, el usuario confirmó reemplazar el sitio publicado.
- `web/vite.config.js` reconfigurado para compilar directamente a la raíz del repo (`index.html` + `/bundle`) en vez de a `/draft`. Eliminados el `index.html`/`css/`/`js/` originales de la raíz (ya preservados en `archive/`), la carpeta `/draft` y las herramientas de comparación `/preview` + `preview.bat`.
- Ampliado el contenedor principal a `1600px/48px` (antes `1180px/24px`), medido con Playwright contra smultron.software.
- Corregidos antes de la promoción: mockup del hero sin rotación/puntos de ventana/color teal del original, checks teal en vez de coral en la tarjeta de precio destacada, footer con fondo navy que tapaba el símbolo del logo, ícono de WhatsApp en negro puro (`fill` sin `currentColor`) en vez del navy del botón.
- `PRODUCT.md` (Stack) y `README.md` (estructura) actualizados para reflejar React + Vite como stack real y publicado.

**2026-09-18 - Fix de pantalla en blanco en producción + ajustes de hero y header**
- **Bug crítico:** el sitio publicado se veía en blanco. Causa: `web/vite.config.js` tenía `base: '/'`, pero GitHub Pages sirve este repo como página de *proyecto* en `https://francoo25.github.io/farodev-site/`, no en la raíz del dominio - el navegador buscaba `/bundle/...` en `francoo25.github.io/bundle/...` (404) en vez de bajo `/farodev-site/`. Corregido con `base: '/farodev-site/'` y reemplazando toda ruta absoluta a `/assets/...` (en JSX y en `index.html`) por `import.meta.env.BASE_URL` / `%BASE_URL%`. Verificado con Playwright sirviendo el build en un subpath local, sin requests fallidos.
- **Fix relacionado:** `assets/img` vivía en la raíz del repo, fuera de `web/public`, así que en `npm run dev` las imágenes daban 404 (el dev server de Vite solo sirve estáticos desde `web/public`) aunque sí funcionaban en producción (el build las copiaba a la raíz). Movido a `web/public/assets/img` como única fuente real; el build lo sigue copiando a `/assets` en la raíz para el deploy.
- Hero: aumentado el tamaño del stack de tarjetas (mockup "AxionOne · POS" + "Negocio local") de `max-width: 360px` a `600px` y ajustado el solape entre ambas (`.deviceFront` con `top`/`left` en vez de `bottom: 0`) para que se vean superpuestas en vez de separadas por el crecimiento del contenedor.
- Reducido el padding vertical de todas las secciones (`--space-2xl` → `--space-xl`, de 96px a 64px por lado) para un scroll menos espaciado.
- Agregada la animación de flecha (hover nudge, Framer Motion) al CTA "Cotización gratis" del header y del menú móvil - antes no tenían ícono ni ningún feedback de interacción, a diferencia del CTA del hero.
- Todo verificado con Playwright en desktop/tablet/mobile (1600px, 900px, 390px) antes de cada confirmación, siguiendo la regla de `TOOLS.md` de usar Playwright para cualquier navegación/inspección real, no solo capturas estáticas.

---

## 7. Decisiones técnicas relevantes (el "por qué")

- **Sin build step:** confirmado en el brief y en la interview de `/impeccable init` - sitio de una sola marca, sin necesidad de panel de edición para terceros.
- **Reveal-on-scroll con fallback:** usa `data-reveal` + `IntersectionObserver`, pero el contenido solo se oculta por CSS cuando `<html>` tiene la clase `.js` (agregada por script inline). Si JS falla, el contenido se ve normal en vez de quedar invisible.
- **Coral nunca como texto de lectura:** el coral base da 2.7:1 de contraste sobre crema (insuficiente para WCAG AA); se usa `--color-coral-deep` como texto.
- **Símbolo del logo sobre fondo claro, no navy:** la mitad navy del símbolo se funde con un fondo navy y deja solo un triángulo coral irreconocible.
- **Placeholders explícitos en vez de screenshots simulados:** confirmado por el usuario durante `/impeccable shape`, alineado con el principio de producto "nunca fabricar evidencia".
- **Excepciones registradas en el detector de diseño** (`.impeccable/config.json`): tipografía Plus Jakarta Sans (decisión de marca ya aprobada), rayas del placeholder de portafolio (textura intencional, no decoración), padding de secciones (falso positivo, el `.wrap` hijo sí aplica el inset), borde+sombra de la tarjeta de precio destacada (falso positivo del análisis estático).
- **Capturas de AxionOne en aspect ratio exacto (1440x900, 16:10) desde el origen:** evita que el navegador recorte botones reales de la interfaz al aplicar `object-fit: cover`.
- **Excepciones de escala tipográfica/radios de un solo uso:** cinco valores puntuales (radios 4px/8px del mockup del hero y scrollbar; tamaños de fuente del wordmark, subtítulo del hero, cita de testimonios) se dejaron como excepción en vez de sumarlos a la escala formal de `DESIGN.md`, para no contaminar el sistema con precedentes de un solo uso.
- **Lightbox en vez de carrusel** para ver las capturas de AxionOne en grande: con solo 3 imágenes, un carrusel esconde contenido detrás de una interacción; la grilla + lightbox muestra todo de un vistazo y resuelve el problema de tamaño en pantallas grandes.
- **Estudio de interacción real de Smultron vía Playwright** (scroll-through + inspección de CSS/JS en vivo), no solo su composición visual - se adoptaron 4 patrones reales (header oculto/visible, flecha deslizante, zoom en hover, tira de tecnologías) y se descartó el marquee infinito por no aportar valor con contenido fijo.
- **Captura real de "Negocio local" reemplazando el placeholder:** el proyecto de ejemplo ya existe publicado (La Caleta Cevichería), mantener el placeholder sería desactualizar el portafolio a propósito.

---

## 8. Pendientes

- [ ] Registrar dominio `farodev.pe` (disponible en Punto.pe, verificado).
- [ ] Vectorizar el símbolo del logo (SVG limpio a partir del PNG generado con Gemini).
- [ ] Definir dónde irá el hosting del sitio propio de FaroDev.
- [ ] Recopilar screenshots reales de Ícono Creativo (proyecto en pausa hasta recibir assets de marca del cliente).
- [ ] Armar/recopilar un proyecto de ejemplo en WordPress para respaldar esa opción de servicio en el portafolio.

---

## 9. Skills y herramientas usadas en el desarrollo

El sitio se construyó con Claude Code usando principalmente el flujo de la skill **`impeccable`** (diseño/redesign de interfaces), en varias fases:

- **`/impeccable init`** - interview inicial de negocio/stack que confirmó el enfoque estático sin build step y generó la base de `PRODUCT.md`.
- **`/impeccable shape`** - definición de estructura de contenido, confirmó con el usuario la regla de placeholders explícitos en vez de screenshots simulados para el portafolio.
- **`impeccable detect`** (detector de diseño) - pasada automática de verificación que encontró: contraste insuficiente del coral como texto, símbolo del logo ilegible sobre navy, problemas de padding/sombra (algunos confirmados como falsos positivos y registrados como excepción en `.impeccable/config.json`), y el marquee infinito de tecnologías como antipatrón real de legibilidad.
- Verificación visual con **capturas de pantalla** en distintos breakpoints para detectar el colapso del mockup del hero en mobile y la ausencia del CTA de WhatsApp en el header móvil.
- **Playwright** (scroll-through programático + inspección de CSS/JS en vivo) para estudiar los patrones de interacción reales de smultron.software (referencia de layout del brief), en vez de replicar solo su composición visual estática.
- Generación de assets de marca con **Gemini** (símbolo del logo tipo flecha/compás, iterado por prompt).
- Documentación generada/actualizada como parte del proceso: `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, `docs/decisions.md`, `docs/changelog.md`.

Archivos de configuración de la skill en el repo: `.impeccable/config.json` (reglas y excepciones del detector), `.impeccable/design.json` (tokens de diseño estructurados), `.impeccable/config.local.json`, `.impeccable/hook.cache.json`.

**Reconstrucción con React + Vite (2026-09-17, siguiendo `TOOLS.md`):**

- **21st.dev/magic** (MCP) - referencia estructural/de interacción para el Hero (stagger de texto) y la grilla de pricing (tarjeta destacada), reimplementados a mano con los tokens de FaroDev en vez de copiar el Tailwind/shadcn original.
- **Framer Motion** - toda la animación del sitio: reveal-on-scroll, header oculto/visible, hover nudge del CTA, subrayado del nav (`scaleX`, no `width`, para evitar layout thrash), zoom del portafolio, menú móvil, lightbox.
- **UI/UX Pro Max** - no redecide paleta/tipografía (ya definidas en `DESIGN.md`), se usó para aplicar consistentemente los tokens existentes a los componentes nuevos.
- **Playwright** - usado dos veces con fines distintos: (1) verificación funcional/visual de cada cambio (navegación real, capturas, chequeo de bounding boxes y errores de consola - así se encontraron y corrigieron todos los bugs reales de esta ronda); (2) inspección de smultron.software para medir su ancho de contenedor real (`max-width: 1632px`, `padding: 48px`) antes de ajustar el `.wrap` del sitio.

Ver [`TOOLS.md`](TOOLS.md) para la guía de qué herramienta/skill usar en cada tipo de tarea futura (estilo visual, animaciones, componentes de UI, estudio de referencias externas).
