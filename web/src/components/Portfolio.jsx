import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import { Icon } from './IconSprite.jsx'
import { axionGallery } from '../data/content.js'
import styles from './Portfolio.module.css'

const AXION_MAIN = {
  src: `${import.meta.env.BASE_URL}assets/img/portfolio/axionone-pos.png`,
  alt: 'Pantalla de toma de pedido de AxionOne: catálogo de productos por categoría y resumen de la orden de la mesa con total y acciones de cobro',
}

const NEGOCIO_LOCAL = {
  src: `${import.meta.env.BASE_URL}assets/img/portfolio/negocio-local-hero.png`,
  alt: 'Hero de La Caleta Cevichería: título en tipografía de tiza sobre fondo de pizarra, con CTA de WhatsApp',
}

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <section id="portafolio" className="section section--tint">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>
            Algunos proyectos en los que <span>hemos trabajado</span>.
          </h2>
        </Reveal>

        <Reveal as="article" className={styles.caseStudy}>
          <div className={styles.caseMedia}>
            <motion.button
              type="button"
              className={styles.mediaTrigger}
              aria-label="Ampliar captura de la pantalla de pedido de AxionOne"
              onClick={() => setLightboxImage(AXION_MAIN)}
              whileHover="hover"
              initial="rest"
            >
              <motion.img
                className={styles.mediaImg}
                src={AXION_MAIN.src}
                alt={AXION_MAIN.alt}
                variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.button>
          </div>
          <div className={styles.caseBody}>
            <p className={styles.caseLabel}>Producto propio de FaroDev</p>
            <h3>AxionOne</h3>
            <p>Sistema de punto de venta para restaurantes, con facturación electrónica integrada y gestión multi-local.</p>
            <ul className={styles.caseTags}>
              <li><Icon name="code" size={15} />.NET 10 + EF Core</li>
              <li><Icon name="receipt" size={15} />SUNAT · UBL 2.1</li>
              <li><Icon name="layers" size={15} />Multi-local</li>
            </ul>
            <div className={styles.gallery}>
              {axionGallery.map((image) => (
                <figure key={image.src}>
                  <motion.button
                    type="button"
                    className={styles.galleryTrigger}
                    aria-label={`Ampliar captura: ${image.caption}`}
                    onClick={() => setLightboxImage(image)}
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </motion.button>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <div className={styles.grid}>
          <Reveal as="article" className={styles.card}>
            <div className={styles.mediaPlaceholder}>
              <span><Icon name="image" size={16} />Imagen pendiente</span>
            </div>
            <h3>Ícono Creativo</h3>
            <p>Sitio para productora audiovisual, con portafolio visual y gestión de redes sociales.</p>
          </Reveal>

          <Reveal as="article" className={styles.card}>
            <motion.button
              type="button"
              className={styles.mediaTrigger}
              aria-label="Ampliar captura de La Caleta Cevichería"
              onClick={() => setLightboxImage(NEGOCIO_LOCAL)}
              whileHover="hover"
              initial="rest"
            >
              <motion.img
                className={styles.mediaImg}
                src={NEGOCIO_LOCAL.src}
                alt={NEGOCIO_LOCAL.alt}
                variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.button>
            <h3>Negocio local</h3>
            <p>
              Página para negocio local con menú, ubicación y contacto directo por WhatsApp.{' '}
              <a className="link-inline" href="https://francoo25.github.io/la-caleta-cevicheria/" target="_blank" rel="noopener">
                Ver sitio
              </a>
            </p>
          </Reveal>
        </div>
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  )
}
