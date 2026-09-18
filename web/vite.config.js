import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// El repo se sirve como GitHub Pages de proyecto, en
// https://francoo25.github.io/farodev-site/ (no dominio raíz ni custom
// domain), así que base debe incluir el nombre del repo o las rutas
// absolutas a /bundle y /assets resuelven contra la raíz del dominio y
// quedan en 404 (pantalla en blanco).
// El build se emite directamente en la raíz del repo (index.html +
// /bundle). emptyOutDir queda en false a propósito - la raíz tiene otros
// archivos del repo (PRODUCT.md, docs/, .git, etc.) que este build nunca
// debe borrar, solo sobrescribir index.html y /bundle.
// assetsDir usa "bundle" para no chocar con /assets/img (imágenes del sitio).
export default defineConfig({
  plugins: [react()],
  base: '/farodev-site/',
  build: {
    outDir: '..',
    assetsDir: 'bundle',
    emptyOutDir: false,
  },
})
