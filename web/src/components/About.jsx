import Reveal from './Reveal.jsx'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="nosotros" className="section">
      <div className={`wrap ${styles.grid}`}>
        <Reveal as="div" className={styles.mark}>
          <img src={`${import.meta.env.BASE_URL}assets/img/logo/farodev-symbol.svg`} alt="" width="120" height="120" />
        </Reveal>
        <Reveal as="div">
          <h2 className={styles.heading}>
            Sobre <span>FaroDevs</span>
          </h2>
          <p className={styles.copy}>
            Somos FaroDevs, un equipo de desarrollo de software especializado en crear soluciones digitales
            para negocios peruanos. No solo hacemos páginas web bonitas: construimos sistemas reales, como
            AxionOne, nuestro propio punto de venta para restaurantes. Esa experiencia técnica la ponemos al
            servicio de tu negocio.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
