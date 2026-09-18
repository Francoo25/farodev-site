import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// El repo se sirve como sitio estático desde la raíz (GitHub Pages).
// v2 es la versión oficial: el build se emite directamente en la raíz del
// repo (index.html + /bundle). emptyOutDir queda en false a propósito -
// la raíz tiene otros archivos del repo (PRODUCT.md, docs/, .git, etc.)
// que este build nunca debe borrar, solo sobrescribir index.html y /bundle.
// assetsDir usa "bundle" para no chocar con /assets/img (imágenes del sitio).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '..',
    assetsDir: 'bundle',
    emptyOutDir: false,
  },
})
