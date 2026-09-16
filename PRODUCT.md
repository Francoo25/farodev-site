# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, sin WordPress ni framework. Es un sitio de una sola marca sin necesidad de que terceros editen contenido desde un panel; un sitio estático es más rápido de construir, más liviano y sin costos ni mantenimiento de plugins/hosting de WordPress. (WordPress sí se ofrece como opción de paquete para clientes de FaroDev que necesiten autonomía de contenido, pero eso es un servicio distinto, no el stack de este sitio.)

## Users

Dueños de pymes peruanas (restaurantes, tiendas, bodegas, servicios profesionales, fotografía/video) que evalúan contratar a FaroDev para crear o mejorar su presencia web, y necesitan decidir rápido si confiar el proyecto y pedir una cotización.

## Product Purpose

Sitio de portafolio y servicios de FaroDev (negocio de Franco Reategui) para captar leads de pymes peruanas vía WhatsApp. Éxito = visitante entiende los paquetes/precios, confía en la capacidad técnica del equipo y escribe por WhatsApp para pedir cotización.

## Positioning

FaroDev no es "otro diseñador de páginas bonitas": construye sistemas de software reales (ERPs, POS, integración de facturación electrónica SUNAT) con .NET/EF Core/SQL Server, y aplica esa capacidad técnica a sitios para pymes. El argumento diferencial es la profundidad técnica detrás del negocio, evidenciada por AxionOne (POS multi-tenant propio con integración SUNAT).

## Operating Context

- Tres paquetes con precio y plazo fijos (mercado peruano, soles): Básico (S/500-900, 3-5 días, página única), Estándar (S/1,000-1,800, 1-2 semanas, 3-5 páginas + SEO básico), Con funcionalidad (S/2,000-4,000+, 2-4 semanas, catálogo/reservas/carrito/panel admin básico).
- Mantenimiento mensual recurrente: S/50-150/mes (hosting, actualizaciones, cambios menores).
- Forma de pago: 50% adelanto / 50% contra entrega.
- Dominio/hosting: depende del cliente; si ya lo tiene se hace solo el deploy, si no se ofrece como parte del paquete o add-on.
- Contacto principal: WhatsApp directo, con mini-calificador de leads ("¿qué tipo de negocio tienes?") antes de derivar a WhatsApp.
- WordPress se ofrece como opción/add-on para clientes que necesitan editar su propio contenido seguido (menús, precios, productos) - típicamente restaurantes y tiendas - no como default.

## Capabilities and Constraints

- Nicho de servicio: general, no exclusivo - restaurantes, tiendas, bodegas, servicios de fotografía/video y otros negocios locales.
- Dominio objetivo: farodev.pe (verificado disponible en Punto.pe, pendiente de registrar). farodev.com no está disponible. Alternativa considerada: farodev.dev.
- Testimonios reales: no existen aún: la sección de testimonios debe mostrarse como placeholder ("Pronto encontrarás aquí las historias de nuestros clientes"), nunca inventados.
- Pendiente de definir: hosting del sitio propio de FaroDev.

## Brand Commitments

- Nombre: FaroDev, marca de Franco Reategui.
- Tono: cercano y directo; confianza técnica sin sonar corporativo/distante.
- Voz de escritura: español neutro peruano con tuteo ("tú"), nunca voseo; sin guion largo (em dash) en ningún texto, usar guion corto.
- Wordmark: "FaroDev" - "Faro" en navy, "Dev" en coral (modo claro) o teal (modo oscuro).
- Símbolo de marca: figura abstracta tipo flecha/compás dividida diagonalmente (navy con doble "pata" en la base / triángulo coral), generada con Gemini. Existe como PNG; el SVG final todavía no está vectorizado. Mientras tanto, usar un placeholder SVG simple basado en esta descripción, o solo el wordmark en Archivo 900.
- Referencia de layout aceptada por el usuario: smultron.software (tono cercano/directo, estructura hero con CTA píldora + servicios en tarjetas + casos de estudio + contacto directo) - se replica el layout sin usar WordPress.

## Evidence on Hand

- **AxionOne** (caso de estudio con evidencia técnica completa, confirmado): POS multi-tenant para restaurantes, producto propio de FaroDev. Problema: restaurantes necesitaban un punto de venta que cumpliera con facturación electrónica SUNAT y manejara múltiples locales desde un solo sistema. Solución: POS en .NET 10 + EF Core, frontend híbrido Razor/React, integración SUNAT (UBL 2.1), gestión multi-local.
- **Ícono Creativo** (portafolio, sin el mismo nivel de detalle técnico que AxionOne): sitio para productora audiovisual, enfoque visual/creativo con portafolio y galería, incluye gestión de redes sociales.
- **Negocio local de ejemplo** (portafolio, sin el mismo nivel de detalle técnico que AxionOne): página tipo restaurante/bodega con menú, ubicación y WhatsApp directo.
- **Pendiente:** proyecto de ejemplo en WordPress para respaldar la opción de servicio en WordPress (aún no existe).
- **Pendiente:** screenshots reales de Ícono Creativo para el portafolio (AxionOne ya tiene capturas reales tomadas del sistema deployado).

## Product Principles

1. La confianza se gana mostrando capacidad técnica real (sistemas de negocio, no solo plantillas), no solo diseño visual.
2. El contacto debe ser de fricción mínima: WhatsApp directo como CTA principal, con calificación breve del tipo de negocio.
3. El sitio propio de FaroDev debe ser simple de mantener (estático, sin panel de terceros) mientras se ofrece WordPress solo como servicio para clientes que sí lo necesitan.
4. La transparencia de precios y plazos por paquete reduce fricción de decisión para pymes con presupuesto ajustado.
5. Nunca fabricar evidencia: testimonios y casos sin desarrollar se marcan como placeholder o con menor nivel de detalle, en vez de inventar contenido.
