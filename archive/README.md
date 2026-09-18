# Archivo de versiones anteriores

Esta carpeta guarda snapshots históricos del home de FaroDev. **No es contenido activo** y no se enlaza desde el sitio en vivo ni desde GitHub Pages.

## Contenido

- `index-v1.html` - versión original del sitio (HTML/CSS/JS plano, sin build step), archivada el 2026-09-17 antes de construir una nueva versión en `/draft/` con UI/UX Pro Max + 21st.dev/magic + Framer Motion (ver `TOOLS.md` y `docs/decisions.md`).
- `css/tokens.css`, `css/styles.css`, `js/main.js` - copia autocontenida de los estilos y el script que usaba `index-v1.html`, para que este snapshot siga funcionando igual aunque `css/` o `js/` en la raíz cambien más adelante.
- Las imágenes referenciadas (`assets/img/...`) no se duplican aquí: se siguen sirviendo desde la ubicación original en la raíz del repo, ya que son capturas reales que no cambian.

## Cómo abrir un snapshot

Sirve el repo desde la raíz (por ejemplo `python -m http.server 8000`) y abre `http://localhost:8000/archive/index-v1.html`.
