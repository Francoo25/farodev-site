import { motion } from 'framer-motion'
import { Icon } from './IconSprite.jsx'
import { WHATSAPP_DEFAULT_LINK } from '../data/content.js'
import styles from './Hero.module.css'

// Patrón de stagger de texto + CTA inspirado en el componente "Hero Section"
// de 21st.dev (staggerChildren + fade/translateY), adaptado a los tokens de
// FaroDevs en vez del look oscuro/SaaS genérico del original.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className={styles.copy}>
          <motion.h1 variants={itemVariants} className={styles.title}>
            Páginas web que hacen crecer <span>tu negocio</span>
          </motion.h1>
          <motion.p variants={itemVariants} className={styles.subtitle}>
            Diseño y desarrollo de sitios web para restaurantes, tiendas, bodegas y servicios profesionales en Perú.
          </motion.p>
          <motion.div variants={itemVariants} className={styles.actions}>
            <motion.a
              className={`btn btn-coral btn-lg ${styles.ctaBtn}`}
              href={WHATSAPP_DEFAULT_LINK}
              target="_blank"
              rel="noopener"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              Solicita tu cotización gratis
              <motion.span
                className={styles.nudge}
                variants={{ rest: { x: 0 }, hover: { x: 3 } }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon name="arrow" size={18} />
              </motion.span>
            </motion.a>
            <a className="link-inline" href="#portafolio">Ver portafolio</a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.deviceStack}>
            <div className={`${styles.device} ${styles.deviceBack}`}>
              <div className={styles.deviceBar} />
              <div className={`${styles.deviceBody} ${styles.deviceBodyPos}`}>
                <span className={styles.deviceTag}>AxionOne · POS</span>
                <div className={styles.posRow}><span /><span /></div>
                <div className={styles.posRow}><span /><span /></div>
                <div className={styles.posTotal}>S/ 148.00</div>
              </div>
            </div>
            <div className={`${styles.device} ${styles.deviceFront}`}>
              <div className={styles.deviceBar} />
              <div className={`${styles.deviceBody} ${styles.deviceBodySite}`}>
                <span className={styles.deviceTag}>Negocio local</span>
                <div className={styles.siteHeroBlock} />
                <div className={styles.siteLine} />
                <div className={`${styles.siteLine} ${styles.siteLineShort}`} />
                <div className={styles.siteBtn} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
