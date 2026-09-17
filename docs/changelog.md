# Changelog

Registro de cambios por fecha, útil para el mantenimiento mensual del sitio.

## 2026-09-16 - Primera versión del sitio

- Construido el sitio completo de una sola página: Hero, Servicios, Portafolio, Sobre FaroDev, Testimonios y Contacto.
- Agregado selector de tipo de negocio en Contacto, que arma un mensaje de WhatsApp prellenado según la elección.
- Agregado menú móvil con CTA de WhatsApp incluido en el panel.
- Agregado reveal-on-scroll (con fallback visible sin JavaScript) como único momento de animación del sitio.
- Escrito `PRODUCT.md`, `DESIGN.md` y `.impeccable/design.json` a partir del brief de negocio y del sistema visual implementado.
- Corregidos durante la verificación: contraste insuficiente del coral como texto, símbolo del logo ilegible sobre fondo navy, colapso de layout del mockup del hero en mobile, y CTA de WhatsApp ausente del header en mobile.
- Pendiente: registrar farodev.pe, vectorizar variantes adicionales del logo si hicieran falta, definir hosting propio, conseguir screenshots reales de Ícono Creativo, armar ejemplo en WordPress para el portafolio.
- Publicado en GitHub Pages: https://francoo25.github.io/farodev-site/

## 2026-09-16 - Capturas reales de AxionOne

- Reemplazado el placeholder "Captura pendiente" de AxionOne por tres capturas reales tomadas directamente del sistema deployado (`axiononetest.runasp.net`): pantalla de toma de pedido (imagen principal del caso de estudio), mapa de salón y reporte de ventas.
- Agregada una galería de dos miniaturas dentro de la tarjeta de AxionOne para mostrar más de una pantalla del sistema.
- Agregado un lightbox: las tres capturas de AxionOne se pueden ampliar con un clic (overlay oscuro, cierre con botón, clic afuera o `Escape`, foco accesible por teclado).

## 2026-09-16 - Dinamismo inspirado en Smultron

- Estudiada la interacción real (scroll-through + inspección de CSS/JS) de smultron.software, la referencia de layout original del proyecto.
- Agregado: header que se oculta al hacer scroll hacia abajo y reaparece al subir.
- Agregado: flecha deslizante en el CTA principal del hero al hacer hover.
- Agregado: zoom de imagen en hover para la captura principal de AxionOne y las miniaturas de la galería.
- Agregada la sección "Tecnologías" (.NET 10, EF Core, SQL Server, SUNAT · UBL 2.1, Razor + React, Multi-local) entre el portafolio y "Sobre FaroDev".
- Descartado: marquee infinito para la tira de tecnologías (el detector de diseño lo marcó como problema real de legibilidad con contenido fijo de solo 6 items); se implementó como fila estática que se envuelve en mobile.
