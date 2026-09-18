import { motion } from 'framer-motion'
import Reveal, { RevealItem } from './Reveal.jsx'
import { Icon } from './IconSprite.jsx'
import { pricingPlans } from '../data/content.js'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>
            Soluciones a la medida de tu negocio, <span>sin complicaciones</span>.
          </h2>
        </Reveal>

        <Reveal as="div" className={styles.grid} stagger>
          {pricingPlans.map((plan) => (
            <RevealItem key={plan.id} as="article">
              <motion.article
                className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {plan.badge && <p className={styles.badge}>{plan.badge}</p>}
                <h3>{plan.name}</h3>
                <p className={styles.desc}>{plan.description}</p>
                <p className={styles.value}>
                  {plan.priceFrom} <span>&ndash; {plan.priceTo}</span>
                </p>
                <p className={styles.time}>{plan.time}</p>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal as="p" className={styles.maintenance}>
          <Icon name="layers" size={20} />
          También te ayudamos a mantener tu sitio actualizado, mes a mes
          <strong>&middot; S/ 50&ndash;150/mes</strong>
        </Reveal>
      </div>
    </section>
  )
}
