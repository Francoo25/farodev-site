# FaroDev - Qué herramienta usar y cuándo

Este archivo documenta qué herramienta/skill instalada usar para cada tipo de tarea de desarrollo, para no dejarlo a criterio libre de futuras sesiones. Es sobre el **"cómo"** (con qué herramienta se construye cada cosa); el **"qué"** del proyecto (negocio, marca, sistema de diseño, decisiones) sigue viviendo en `STATUS.md`, `PRODUCT.md` y `DESIGN.md` - este archivo no los reemplaza ni los modifica.

---

## Estilo visual, paleta, tipografía de una sección nueva

**Usar:** UI/UX Pro Max (plugin instalado).

Consultarlo antes de definir o ajustar el estilo visual, la paleta o la tipografía de una sección nueva.

**No aplica** si el estilo ya está definido en `DESIGN.md` - colores y tipografía de marca (Navy Profundo, Verde Brújula, Coral Señal, Archivo, Plus Jakarta Sans) ya están aprobados y no se vuelven a decidir con esta herramienta; ahí solo se implementan.

---

## Animaciones (scroll, hover, transiciones, menús)

**Usar:** Framer Motion skill (`framer-motion-skills`, instalada).

Usarla siempre para cualquier animación: scroll-triggered, hover, transiciones, menús desplegables, etc.

**Nunca** animaciones CSS improvisadas escritas a mano para estos casos.

---

## Construir un componente de UI desde cero

**Usar:** 21st.dev / magic (MCP, comando `/ui`).

Consultarlo antes de construir un componente desde cero: heroes, forms, cards, navs. Después de obtenerlo, adaptarlo a los tokens de `DESIGN.md` (colores, tipografía, espaciado, radios) - no se usa tal cual sale de la herramienta.

---

## Estudiar la interacción real de un sitio de referencia

**Usar:** Playwright.

Usarlo para inspeccionar la interacción real (scroll, hovers, transiciones) de cualquier sitio de referencia que el usuario pase, **antes** de reproducir el patrón. Así se hizo con smultron.software (ver `docs/decisions.md` y `STATUS.md` sección 7).

No basta con mirar capturas estáticas de la referencia: hay que correr el scroll-through e inspeccionar CSS/JS en vivo para capturar el comportamiento real, no solo la composición visual.

---

## Regla explícita para referencias externas (flujo completo)

Cuando el usuario pasa un sitio de referencia para reproducir un patrón de interacción, el orden es siempre:

1. **Playwright** - estudiar la interacción real del sitio de referencia (scroll-through, inspección de CSS/JS en vivo).
2. **Framer Motion skill** - reproducir el patrón encontrado con la skill, nunca copiando el código ajeno tal cual.
3. **UI/UX Pro Max** - filtrar el resultado para que encaje con la identidad de FaroDev (Navy Profundo, Verde Brújula, Coral Señal) en vez de quedarse con la marca/paleta original de la referencia.

Ningún paso se salta ni se invierte el orden.
