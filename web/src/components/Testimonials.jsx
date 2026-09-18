import Reveal from './Reveal.jsx'
import { Icon } from './IconSprite.jsx'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className="section section--tint">
      <div className="wrap">
        <Reveal as="div" className={styles.placeholder}>
          <Icon name="quote" size={30} />
          <p>Pronto encontrarás aquí las historias de nuestros clientes.</p>
        </Reveal>
      </div>
    </section>
  )
}
