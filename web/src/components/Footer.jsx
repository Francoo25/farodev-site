import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.brand} href="#top" aria-label="FaroDev, inicio">
          <img src="/assets/img/logo/farodev-symbol.svg" alt="" width="28" height="28" />
          <span className={styles.brandWord}>
            Faro<em>Dev</em>
          </span>
        </a>
        <nav className={styles.nav}>
          <a href="#servicios">Servicios</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p className={styles.copy}>&copy; {year} FaroDev &middot; Perú</p>
      </div>
    </footer>
  )
}
