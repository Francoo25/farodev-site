import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// El sitio se publica en dos destinos con rutas distintas:
// - GitHub Pages de proyecto: https://francoo25.github.io/farodev-site/
//   (subpath, no dominio raíz), build emitido en la raíz del repo
//   (index.html + /bundle) para que GitHub Pages lo sirva directo.
//   emptyOutDir queda en false a propósito - la raíz tiene otros archivos
//   del repo (PRODUCT.md, docs/, .git, etc.) que este build nunca debe
//   borrar, solo sobrescribir index.html y /bundle.
// - Vercel con dominio propio (farodevs.com): sirve desde la raíz del
//   dominio, así que base debe ser "/" y el output va a web/dist (Vercel
//   define la env var VERCEL=1 automáticamente en sus builds).
const isVercel = !!process.env.VERCEL

export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : '/farodev-site/',
  build: isVercel
    ? { outDir: 'dist' }
    : { outDir: '..', assetsDir: 'bundle', emptyOutDir: false },
})
