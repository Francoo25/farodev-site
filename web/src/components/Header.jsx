import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useHideOnScroll from '../hooks/useHideOnScroll.js'
import { Icon } from './IconSprite.jsx'
import { WHATSAPP_DEFAULT_LINK } from '../data/content.js'
import styles from './Header.module.css'

// Subrayado animado con transform: scaleX (no width) para evitar layout
// thrash - detectado por el hook de diseño del proyecto en la versión con
// `transition: width` a mano, que además violaba la regla de TOOLS.md de
// no usar animaciones CSS improvisadas.
function NavLink({ href, children }) {
  return (
    <motion.a href={href} className={styles.navLink} initial="rest" whileHover="hover" animate="rest">
      {children}
      <motion.span
        className={styles.navUnderline}
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.a>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const hidden = useHideOnScroll({ disabled: menuOpen })

  return (
    <motion.header
      className={styles.header}
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.brand} href="#top" aria-label="FaroDev, inicio">
          <img className={styles.brandMark} src="/assets/img/logo/farodev-symbol.svg" alt="" width="34" height="34" />
          <span className={styles.brandWord}>
            Faro<em>Dev</em>
          </span>
        </a>

        <nav className={styles.nav}>
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#portafolio">Portafolio</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </nav>

        <a className={`btn btn-coral ${styles.headerCta}`} href={WHATSAPP_DEFAULT_LINK} target="_blank" rel="noopener">
          Cotización gratis
        </a>

        <button
          className={styles.navToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            className={styles.mobileNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="wrap">
              <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
              <a href="#portafolio" onClick={() => setMenuOpen(false)}>Portafolio</a>
              <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
              <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
              <a className="btn btn-coral" href={WHATSAPP_DEFAULT_LINK} target="_blank" rel="noopener" onClick={() => setMenuOpen(false)}>
                Cotización gratis
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
