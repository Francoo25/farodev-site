# FaroDevs - proyecto fuente del home (React + Vite)

Este es el proyecto fuente del home de FaroDevs. Compila directamente a la raíz del repo (`../index.html` + `../bundle`), que es lo que se publica en GitHub Pages. Ver el [`README.md` de la raíz](../README.md) para el panorama completo.

## Comandos

```
npm install
npm run dev      # servidor de desarrollo con recarga en caliente (localhost:5173)
npm run build    # compila a la raíz del repo (sobrescribe index.html y /bundle)
npm run lint      # oxlint
```

## Estructura

```
src/
├── App.jsx                → compone todas las secciones del home
├── components/              → una sección/componente por archivo, con su .module.css
├── styles/
│   ├── tokens.css             → copia de los tokens de DESIGN.md (no redecidir aquí)
│   └── global.css             → reset, .wrap, botones, tipografía base
├── data/content.js          → copy y datos reutilizados entre componentes
└── hooks/useHideOnScroll.js  → header oculto/visible al hacer scroll
```

Qué herramienta usar para cada tipo de tarea (estilo, animaciones, componentes, referencias externas): ver [`TOOLS.md`](../TOOLS.md) en la raíz.
