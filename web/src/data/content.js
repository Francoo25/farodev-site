// Copy y datos reutilizados en las secciones del home.
// Fuente de verdad del contenido: docs/brief.md y el index.html original
// (archive/index-v1.html). No se cambia el copy en esta reconstrucción visual.

const WHATSAPP_NUMBER = '51942348968'

export const WHATSAPP_DEFAULT_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola FaroDev, quiero cotizar una página web para mi negocio.',
)}`

export const WHATSAPP_BASE_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

export function whatsappQuoteLink(businessType) {
  const text = `Hola FaroDev, tengo ${businessType} y quiero cotizar mi página web.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const pricingPlans = [
  {
    id: 'basico',
    name: 'Básico',
    description: 'Tu presencia digital en una sola página. Ideal para darte a conocer rápido.',
    priceFrom: 'S/ 500',
    priceTo: '900',
    time: 'Entrega en 3 a 5 días',
    features: ['Página única', 'Inicio, servicios y contacto'],
    featured: false,
  },
  {
    id: 'estandar',
    name: 'Estándar',
    description: 'Un sitio completo con varias secciones, pensado para mostrar todo lo que ofreces.',
    priceFrom: 'S/ 1,000',
    priceTo: '1,800',
    time: 'Entrega en 1 a 2 semanas',
    features: ['3 a 5 páginas', 'SEO básico', 'Integración con redes'],
    featured: true,
    badge: 'Más pedido',
  },
  {
    id: 'funcionalidad',
    name: 'Con funcionalidad',
    description: 'Catálogo, reservas o carrito de compras. Cuando tu negocio necesita algo más que una página bonita.',
    priceFrom: 'S/ 2,000',
    priceTo: '4,000+',
    time: 'Entrega en 2 a 4 semanas',
    features: ['Catálogo o reservas', 'Carrito simple', 'Panel admin básico'],
    featured: false,
  },
]

export const techStack = [
  { icon: 'code', label: '.NET 10' },
  { icon: 'database', label: 'EF Core' },
  { icon: 'database', label: 'SQL Server' },
  { icon: 'receipt', label: 'SUNAT · UBL 2.1' },
  { icon: 'code', label: 'Razor + React' },
  { icon: 'layers', label: 'Multi-local' },
]

export const businessTypes = [
  { value: 'un restaurante', label: 'Restaurante' },
  { value: 'una tienda o bodega', label: 'Tienda / bodega' },
  { value: 'un negocio de servicios profesionales', label: 'Servicios profesionales' },
  { value: 'un negocio de fotografía o video', label: 'Fotografía / video' },
  { value: 'otro tipo de negocio', label: 'Otro' },
]

export const axionGallery = [
  {
    src: `${import.meta.env.BASE_URL}assets/img/portfolio/axionone-mapa-salon.png`,
    alt: 'Mapa de salón de AxionOne con el estado de cada mesa: libre u ocupada',
    caption: 'Mapa de salón',
  },
  {
    src: `${import.meta.env.BASE_URL}assets/img/portfolio/axionone-reportes.png`,
    alt: 'Reporte de ventas de AxionOne con total vendido, propinas y gráficos de método de pago y productos más vendidos',
    caption: 'Reportes de venta',
  },
]
