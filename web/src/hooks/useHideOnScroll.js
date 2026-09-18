import { useEffect, useRef, useState } from 'react'

// Header oculto al bajar / visible al subir, igual al patrón estudiado
// en smultron.software (ver docs/decisions.md). Se desactiva mientras
// `disabled` es true (ej. con el menú móvil abierto).
export default function useHideOnScroll({ threshold = 160, disabled = false } = {}) {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    if (disabled) {
      setHidden(false)
      return
    }

    let ticking = false

    const update = () => {
      const y = window.scrollY
      if (y > threshold && y > lastY.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY.current = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold, disabled])

  return hidden
}
