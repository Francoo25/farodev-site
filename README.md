# FaroDev

Sitio de portafolio y servicios de FaroDev: desarrollo web para pymes peruanas (restaurantes, tiendas, bodegas, servicios profesionales, fotografía/video).

## Correrlo

Sitio estático, sin build step. Basta con servirlo con cualquier servidor local, por ejemplo:

```
python -m http.server 8000
```

y abrir `http://localhost:8000`.

## Estructura

```
farodev-site/
├── index.html
├── css/
│   ├── tokens.css     → variables de color, tipografía y espaciado
│   └── styles.css
├── js/
│   └── main.js         → menú móvil, calificador de WhatsApp, reveal-on-scroll
├── assets/img/
│   ├── logo/            → símbolo y wordmark de FaroDev
│   └── portfolio/       → screenshots reales del portafolio (pendiente)
├── PRODUCT.md            → contexto de negocio, usuarios y posicionamiento
├── DESIGN.md              → sistema de diseño (colores, tipografía, componentes)
└── docs/
    ├── brief.md            → brief original de negocio/copy/marca (fuente de verdad)
    ├── decisions.md        → por qué se tomó cada decisión técnica no obvia
    └── changelog.md        → qué cambió, por fecha
```

## Fuente de verdad

- **Negocio, copy y marca:** [`docs/brief.md`](docs/brief.md)
- **Contexto de producto:** [`PRODUCT.md`](PRODUCT.md)
- **Sistema visual:** [`DESIGN.md`](DESIGN.md)
