import { Icon } from './IconSprite.jsx'
import { techStack } from '../data/content.js'
import styles from './TechStrip.module.css'

// Fila estática (no marquee): con solo 6 tags de contenido fijo, un scroll
// infinito escondería información sin necesidad (ver docs/decisions.md,
// entrada "Dinamismo inspirado en Smultron" - se descartó el marquee ahí
// mismo por el mismo motivo).
export default function TechStrip() {
  return (
    <section className={styles.strip} aria-label="Tecnologías que usamos">
      <ul className={`wrap ${styles.track}`}>
        {techStack.map((tech) => (
          <li key={tech.label}>
            <Icon name={tech.icon} size={18} />
            {tech.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
