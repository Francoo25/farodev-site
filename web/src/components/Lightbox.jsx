import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './IconSprite.jsx'
import styles from './Lightbox.module.css'

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <button className={styles.close} type="button" aria-label="Cerrar imagen ampliada" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
          <motion.img
            className={styles.img}
            src={image.src}
            alt={image.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
