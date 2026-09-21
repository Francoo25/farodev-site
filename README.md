# FaroDevs

Sitio de portafolio y servicios de FaroDevs: desarrollo web para pymes peruanas (restaurantes, tiendas, bodegas, servicios profesionales, fotografía/video).

## Correrlo

El sitio publicado (`index.html` + `/bundle` en la raíz) es estático: basta con servirlo con cualquier servidor local, por ejemplo:

```
python -m http.server 8000
```

y abrir `http://localhost:8000`.

Para modificar el sitio hay que trabajar en el proyecto fuente `/web` (React + Vite) y reconstruir:

```
cd web
npm install
npm run dev      # servidor de desarrollo con recarga en caliente
npm run build    # compila a la raíz del repo (index.html + /bundle)
```

## Estructura

```
farodev-site/
├── index.html            → sitio publicado (generado por `web`, no editar a mano)
├── bundle/                → JS/CSS compilados (generado por `web`, no editar a mano)
├── web/                    → proyecto fuente: React + Vite + Framer Motion
│   └── src/
│       ├── components/       → secciones del home (Hero, Services, Portfolio, etc.)
│       ├── styles/            → tokens.css (copia de DESIGN.md) + global.css
│       └── data/content.js    → copy y datos reutilizados entre componentes
├── assets/img/
│   ├── logo/            → símbolo y wordmark de FaroDevs
│   └── portfolio/       → screenshots reales del portafolio
├── archive/               → snapshot autocontenido de la versión anterior (HTML/CSS/JS plano, sin build step) - histórico, no se sirve
├── PRODUCT.md            → contexto de negocio, usuarios y posicionamiento
├── DESIGN.md              → sistema de diseño (colores, tipografía, componentes)
├── TOOLS.md                → qué herramienta/skill usar para cada tipo de tarea de desarrollo
├── STATUS.md                → resumen de un vistazo del estado completo del proyecto
└── docs/
    ├── brief.md            → brief original de negocio/copy/marca (fuente de verdad)
    ├── decisions.md        → por qué se tomó cada decisión técnica no obvia
    └── changelog.md        → qué cambió, por fecha
```

## Fuente de verdad

- **Negocio, copy y marca:** [`docs/brief.md`](docs/brief.md)
- **Contexto de producto:** [`PRODUCT.md`](PRODUCT.md)
- **Sistema visual:** [`DESIGN.md`](DESIGN.md)
- **Qué herramienta usar y cuándo:** [`TOOLS.md`](TOOLS.md)
- **Estado completo del proyecto:** [`STATUS.md`](STATUS.md)
