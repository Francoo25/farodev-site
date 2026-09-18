import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Los estilos globales se importan antes que App para que su cascada quede
// primero en el stylesheet final; si no, un empate de especificidad entre
// `.btn` (global) y una clase de CSS module con `display: none` (ej.
// `.headerCta` en mobile) lo gana el que se inyectó último, no el más
// específico - y en JS de módulos ES, App (importado primero) inyecta su
// CSS de componentes antes que estos estilos globales.
import './styles/tokens.css'
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
