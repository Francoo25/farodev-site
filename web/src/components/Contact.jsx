import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { Icon } from './IconSprite.jsx'
import { businessTypes, whatsappQuoteLink } from '../data/content.js'
import styles from './Contact.module.css'

export default function Contact() {
  const [businessType, setBusinessType] = useState(businessTypes[0].value)

  return (
    <section id="contacto" className="section">
      <div className={`wrap ${styles.grid}`}>
        <Reveal as="div">
          <h2 className={styles.heading}>
            ¿Listo para tener <span>tu página web</span>?
          </h2>
          <p className={styles.subtitle}>Cuéntanos sobre tu negocio y te enviamos una propuesta sin compromiso.</p>
        </Reveal>

        <Reveal as="form" className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <fieldset className={styles.picker}>
            <legend>¿Qué tipo de negocio tienes?</legend>
            <div className={styles.chipGroup} role="radiogroup" aria-label="Tipo de negocio">
              {businessTypes.map((type) => {
                const selected = businessType === type.value
                return (
                  <label key={type.value} className={`${styles.chip} ${selected ? styles.chipSelected : ''}`}>
                    <input
                      type="radio"
                      name="business-type"
                      value={type.value}
                      checked={selected}
                      onChange={() => setBusinessType(type.value)}
                    />
                    <span>{type.label}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <motion.a
            className={`btn btn-coral btn-lg ${styles.whatsappCta}`}
            href={whatsappQuoteLink(businessType)}
            target="_blank"
            rel="noopener"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Icon name="whatsapp" size={24} />
            Escríbenos por WhatsApp
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
