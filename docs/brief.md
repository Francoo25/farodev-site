# FaroDev — Brief de proyecto

Sitio web de portafolio y servicios para FaroDev, negocio de creación de
páginas web para pymes peruanas (restaurantes, tiendas, bodegas, servicios
profesionales, fotografía/video). Marca de Franco Reategui, operada bajo
FaroDev.

---

## 1. Negocio

**Nicho:** general, no exclusivo — restaurantes, tiendas, bodegas, servicios
de fotografía/video, y otros servicios locales.

**Paquetes y precios (mercado peruano):**

| Paquete | Incluye | Precio | Entrega |
|---|---|---|---|
| Básico | Página única (inicio, sobre nosotros, servicios, contacto) | S/ 500–900 | 3–5 días |
| Estándar | 3–5 páginas, SEO básico, integración redes | S/ 1,000–1,800 | 1–2 semanas |
| Con funcionalidad | Catálogo, reservas, carrito simple, panel admin básico | S/ 2,000–4,000+ | 2–4 semanas |
| Mantenimiento mensual | Hosting, actualizaciones, cambios menores | S/ 50–150/mes | recurrente |

**Dominio/hosting:** depende del cliente — si ya lo tiene, solo se hace el
deploy; si no, se ofrece como parte del paquete o add-on aparte.

**Forma de pago:** 50% adelanto / 50% contra entrega.

---

## 2. Stack técnico

Dos contextos distintos, con decisiones separadas:

### 2.1 Sitio propio de FaroDev (este proyecto)
- **HTML/CSS/JS simple** (o un stack ligero tipo React/Next si conviene
  para mantenimiento) — **no WordPress**.
- Razón: es un sitio de una sola marca, sin necesidad de que terceros
  editen contenido desde un panel. Un sitio estático es más rápido de
  construir, más liviano, sin costos de hosting/plugins de WordPress ni
  mantenimiento de actualizaciones de seguridad.
- Referencia de layout: **Smultron** (smultron.software) — coincide en
  tono cercano/directo y estructura (hero con CTA píldora, servicios en
  tarjetas, casos de estudio, bloque de contacto directo). Nota: el sitio
  real de Smultron está hecho en WordPress con tema custom + WPML, pero
  el layout se replica igual de bien sin WordPress.

### 2.2 WordPress — como opción de servicio para clientes
- Ofrecer WordPress **como uno de los paquetes/opciones** para clientes
  que necesiten administrar su propio contenido sin tocar código (menú,
  precios, productos que cambian seguido — típico en restaurantes y
  tiendas).
- Vale la pena incluir un proyecto de portafolio hecho en WordPress para
  demostrar esta capacidad, ya que ahora mismo el portafolio (AxionOne,
  Ícono Creativo, negocio local) no cubre ese caso.
- Trade-off a tener claro: WordPress da autonomía de contenido al
  cliente, pero implica más configuración inicial, hosting con más
  requisitos, y mantenimiento continuo (plugins, seguridad) — por eso
  encaja mejor como parte del paquete "Con funcionalidad" o como
  add-on, no como default.

---

## 3. Dominio de FaroDev

- **farodev.pe** — disponible, verificado en Punto.pe (S/ 110/año, 1 año;
  opciones hasta 5 años a S/ 465). Pendiente de registrar.
- farodev.com — no disponible (ya registrado por terceros).
- Alternativa considerada si hiciera falta: farodev.dev.

---

## 4. Portafolio inicial (para mostrar en el sitio)

1. **AxionOne** — sistema de punto de venta para restaurantes, con
   facturación electrónica integrada y gestión multi-local. Enfoque
   técnico/funcional.
2. **Ícono Creativo** — sitio para productora audiovisual (gestión de
   redes sociales), enfoque visual/creativo con portafolio y galería.
3. **Negocio local de ejemplo** (restaurante/bodega) — página con menú,
   ubicación, WhatsApp directo. Cubre el nicho de negocio cotidiano.
4. *(Pendiente)* Proyecto de ejemplo en WordPress, para respaldar la
   opción de servicio descrita en 2.2.

---

## 5. Estructura de contenido del sitio

1. **Inicio (Hero)** — posicionamiento + CTA a WhatsApp + mini-mockups de
   proyectos destacados.
2. **Servicios** — los 3 paquetes con precios y mantenimiento mensual.
3. **Portafolio** — tarjetas de AxionOne, Ícono Creativo, negocio local.
4. **Sobre FaroDev** — quién es Franco, experiencia en desarrollo de
   software (no solo plantillas).
5. **Testimonios** — placeholder hasta tener clientes reales.
6. **Contacto** — formulario simple + WhatsApp directo, con
   mini-calificador de leads ("¿qué tipo de negocio tienes?").

### Copy aprobado

- **Hero título:** "Páginas web que hacen crecer tu negocio"
- **Hero subtítulo:** "Diseño y desarrollo de sitios web para restaurantes,
  tiendas, bodegas y servicios profesionales en Perú."
- **Hero CTA:** "Solicita tu cotización gratis" (WhatsApp)
- **Servicios intro:** "Soluciones a la medida de tu negocio, sin
  complicaciones."
  - Básico: "Tu presencia digital en una sola página. Ideal para darte a
    conocer rápido."
  - Estándar: "Un sitio completo con varias secciones, pensado para
    mostrar todo lo que ofreces."
  - Con funcionalidad: "Catálogo, reservas o carrito de compras. Cuando tu
    negocio necesita algo más que una página bonita."
  - Nota mantenimiento: "También te ayudamos a mantener tu sitio
    actualizado, mes a mes."
- **Portafolio intro:** "Algunos proyectos en los que hemos trabajado."
  - AxionOne: "Sistema de punto de venta para restaurantes, con
    facturación electrónica integrada y gestión multi-local."
  - Ícono Creativo: "Sitio para productora audiovisual, con portafolio
    visual y gestión de redes sociales."
  - Negocio local: "Página para negocio local con menú, ubicación y
    contacto directo por WhatsApp."
- **Sobre FaroDev:** "Somos FaroDev, un equipo de desarrollo de software
  especializado en crear soluciones digitales para negocios peruanos. No
  solo hacemos páginas web bonitas: construimos sistemas reales, como
  AxionOne, nuestro propio punto de venta para restaurantes. Esa
  experiencia técnica la ponemos al servicio de tu negocio."
- **Testimonios placeholder:** "Pronto encontrarás aquí las historias de
  nuestros clientes."
- **Contacto título:** "¿Listo para tener tu página web?"
- **Contacto subtítulo:** "Cuéntanos sobre tu negocio y te enviamos una
  propuesta sin compromiso."
- **Contacto botón:** "Escríbenos por WhatsApp"

---

## 6. Identidad visual

### Tono de marca
Cercano y directo. Confianza técnica sin sonar corporativo/distante.

### Color

| Rol | Nombre | Hex | Uso | Contraste |
|---|---|---|---|---|
| Primario | Navy | `#0E2340` | Texto principal, fondos oscuros, títulos | 15.75:1 sobre blanco (AAA) |
| Secundario | Teal | `#1FA97C` | Detalles de marca, íconos, kicker labels | 2.99:1 sobre blanco (solo gráfico, no texto de párrafo) · 5.27:1 sobre navy (AA) |
| Acento | Coral | `#FF6B4A` | Fondos de botón, highlights | 5.59:1 con texto navy (AA) · 2.82:1 con texto blanco (falla — no usar texto blanco sobre coral) |
| Neutro texto | Gray 600 | `#5A6472` | Texto secundario, subtítulos, cuerpo largo | 6.1:1 sobre blanco (AA) |
| Neutro fondo | Cream | `#FAFAF8` | Fondo base del sitio | — |

**Regla de accesibilidad clave:** los botones usan texto **navy** sobre
fondo coral o teal — nunca texto blanco sobre esos colores (falla WCAG AA).

### Tipografía

- **Archivo** (Google Fonts) — pesos 700/900 — títulos y display.
- **Plus Jakarta Sans** (Google Fonts) — pesos 400/600 — cuerpo de texto.
- Fallback stack: `-apple-system, Segoe UI, Roboto, sans-serif`
- Ambas son gratuitas, sin costo de licencia web.

**Escala tipográfica:**

| Rol | Tamaño | Peso |
|---|---|---|
| Display / H1 | 44px | Archivo 900 |
| H2 | 28px | Archivo 700 |
| H3 | 20px | Archivo 700 |
| Cuerpo | 17px | Jakarta 400 |
| Cuerpo secundario | 15px | Jakarta 400 |
| Caption / labels | 12–13px | Jakarta 600 |

### Logo

- **Símbolo aprobado:** marca abstracta tipo flecha/compás, dividida
  diagonalmente en navy (izquierda, con doble "pata" en la base) y coral
  (triángulo derecho), separadas por una línea blanca fina. Generado con
  Gemini a partir de un prompt iterativo (ver historial de la
  conversación para el prompt exacto si se necesita regenerar).
- **Wordmark:** "FaroDev" en Archivo 900 — "Faro" en navy, "Dev" en coral
  (modo claro) o en teal (modo oscuro).
- **Lockups:** horizontal (símbolo + texto en línea) y apilado (símbolo
  arriba, texto abajo) para contextos cuadrados/redes sociales.
- Pasa la prueba de silueta a tamaños reducidos hasta favicon (16px),
  aunque la línea divisoria interna se pierde un poco a ese tamaño
  mínimo — la silueta general se mantiene reconocible.
- **Pendiente:** obtener el archivo final vectorizado del símbolo
  generado por Gemini (actualmente solo existe como PNG e interpretación
  SVG aproximada).

---

## 7. Reglas de estilo de escritura

- **Tuteo, no voseo:** español neutro peruano, siempre con "tú" — nunca
  "vos", "tenés", "querés", etc.
- **Guiones:** no usar guion largo (em dash, —). Si se necesita un guion
  en el texto, usar siempre el guion corto/minus (`-`).

---

## 8. Estructura de carpetas (sitio estático, opción 2.1)

```
farodev-site/
├── README.md              → overview rápido: qué es, cómo correrlo, link al brief
├── index.html
├── /docs
│   ├── brief.md            → este brief completo (fuente de verdad de negocio/copy/marca)
│   ├── decisions.md        → registro de decisiones técnicas a medida que surjan
│   └── changelog.md        → qué se agregó/cambió, por fecha (útil por el mantenimiento mensual)
├── /assets
│   ├── /images
│   │   ├── logo/           → símbolo, wordmark, lockups (svg + png)
│   │   └── portfolio/      → capturas de AxionOne, Ícono Creativo, etc.
│   ├── /fonts               → si se alojan localmente en vez de Google Fonts CDN
│   └── favicon.ico
├── /css
│   ├── tokens.css           → variables de color y tipografía (sección 6)
│   └── styles.css
└── /js
    └── main.js               → formulario de contacto, menú, interacciones
```

**Notas:**
- `tokens.css` centraliza los colores/tipografía del brief — cualquier
  ajuste de marca se hace en un solo lugar.
- `decisions.md` evita que decisiones técnicas puntuales (ej. por qué se
  eligió una librería u otra) se pierdan o se repitan preguntas.
- Si más adelante se agrega el proyecto de ejemplo en WordPress (sección
  2.2/4), va en un repo o carpeta completamente aparte — no comparte
  estructura con el sitio estático.

---

## 9. Pendientes antes/durante el desarrollo

- [ ] Registrar farodev.pe
- [ ] Vectorizar el logo final (SVG limpio a partir del PNG de Gemini)
- [ ] Definir dónde irá el hosting del sitio de FaroDev mismo
- [ ] Recopilar screenshots reales de AxionOne e Ícono Creativo para el
      portafolio
- [ ] Armar/recopilar un proyecto de ejemplo en WordPress para el
      portafolio, respaldando la opción de servicio en WordPress
