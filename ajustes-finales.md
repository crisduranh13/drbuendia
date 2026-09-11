# Ajustes Finales - Dr. Diego Buendía

## 1. Unificación de la Sección de Contacto y Call to Action
* **Objetivo:** Fusionar el bloque suelto de "Agenda tu consulta" y el bloque de "Da el primer paso hacia una vida sin dolor" en una sola sección cohesiva.
* **Estructura:**
  * El encabezado principal de la sección unificada debe ser el titular: "Da el primer paso hacia una vida sin dolor", seguido de su bajada de texto.
  * Inmediatamente debajo, coloca el grid con las tarjetas de contacto (Citas, Urgencias, Correo).
  * Elimina cualquier titular redundante como "Agenda tu consulta" que haya quedado arriba.
* **Diseño y Efectos:** Mejora el diseño de las tarjetas de contacto usando clases de Tailwind. Agrega efectos hover interactivos (por ejemplo: `hover:-translate-y-1 hover:shadow-xl transition-all duration-300`).

## 2. Video de Fondo en la Portada (Hero Section)
* **Objetivo:** Reemplazar la imagen de fondo estática por un video de YouTube en bucle (loop) como background, manteniendo la imagen actual como respaldo.
* **Video de YouTube:** `https://www.youtube.com/embed/eH6Rl-GKjXw?autoplay=1&mute=1&loop=1&playlist=eH6Rl-GKjXw&controls=0&showinfo=0&rel=0`
* **Implementación técnica:**
  * Usa un `iframe` posicionado de forma absoluta (`absolute inset-0 w-full h-full object-cover`), con `pointer-events-none` para que el usuario no pueda interactuar ni pausar el video.
  * Mantén el `div` con la imagen de fondo actual detrás del iframe. Si el video tarda en cargar o está bloqueado, la imagen se verá.
  * Asegúrate de mantener la capa superpuesta oscura (`bg-slate-900/60` o similar) sobre el video para garantizar que los textos blancos sigan siendo legibles.

## 3. Mejoras Visuales en "Cirugías y tratamientos"
* **Objetivo:** Darle más peso visual a esta sección sin necesidad de agregar fotografías.
* **Diseño:**
  * Aumenta el peso tipográfico de los títulos de cada categoría de tratamiento (ej. `font-bold text-xl text-blue-900`).
  * Envuelve cada categoría (Columna, Articulaciones, etc.) en un diseño de tarjeta (card) limpia (ej. `bg-white p-6 rounded-2xl shadow-sm`).
  * Agrega efectos hover a estas tarjetas para que respondan al pasar el mouse (ej. `hover:scale-[102%] hover:shadow-md transition-transform duration-300 border border-transparent hover:border-blue-200`).