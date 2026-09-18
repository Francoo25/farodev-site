import { motion } from 'framer-motion'

// Reemplaza el IntersectionObserver manual de la v1 (ver docs/decisions.md)
// por whileInView de Framer Motion. Ya no necesita el fallback de la clase
// `.js` porque React solo pinta el DOM cuando JS está disponible: sin JS no
// hay contenido de ningún tipo, así que no hay riesgo de secciones invisibles.
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Reveal({ as: Tag = motion.div, className, children, stagger = false, delay = 0, ...rest }) {
  const Component = motion[Tag] || Tag
  const variants = stagger
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: delay } },
      }
    : itemVariants

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export function RevealItem({ as: Tag = 'div', className, children }) {
  const Component = motion[Tag] || motion.div
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  )
}
