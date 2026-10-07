# Invitaciones digitales: plantillas

Sitio estático (HTML, CSS y JS, sin dependencias ni compilación) para crear invitaciones de bodas, XV años, cumpleaños, graduaciones, bautizos y más.

## Estructura

```
index.html              Galería de plantillas (vista previa de cada demo)
invitacion.html         La invitación (lee ?evento=<archivo>)
js/app.js               Motor que arma las secciones (no necesitas editarlo)
css/base.css            Estilos compartidos
css/temas/*.css         13 temas (ver tabla abajo)
eventos/*.js            Un archivo por invitación (datos y textos)
img/                    Fotos de ejemplo (sustitúyelas por las reales)
backend/google-apps-script.gs   Guarda las confirmaciones en Google Sheets
listas/                 Invitaciones listas para usar, una por archivo (generadas)
construir.py            Regenera la carpeta listas/ después de editar
```

## Probar en tu computadora

Abre `index.html` con doble clic. Para que la vista previa de la galería y los mapas funcionen mejor, usa un servidor local:

```
cd invitaciones
python3 -m http.server 8000      # y abre http://localhost:8000
```

## Crear una invitación

1. Copia `eventos/boda-elegante.js` (trae **todas** las opciones comentadas) y renómbralo, por ejemplo `eventos/boda-ana-luis.js`.
2. Edita `tema` (ver tabla de temas), `nombres`, `fecha`, textos, lugares y fotos. Si borras una sección, no aparece en la página.
3. Abre `invitacion.html?evento=boda-ana-luis`.
4. Cuando esté lista, genera su versión de un solo archivo con `python3 construir.py boda-ana-luis` (o solo `python3 construir.py` para todas). Aparecerá en `listas/boda-ana-luis.html`.

**Secciones disponibles:** portada con fecha, pantalla "Abrir invitación" con sello, pase personalizado, bienvenida con padres, cuenta regresiva con botones para agregar al calendario (Google, Apple u Outlook), historia en línea de tiempo, tarjetas del evento, mapa con pestañas (Google Maps y Waze), itinerario, código de vestimenta con paleta, carrusel de fotos con vista ampliada y gesto de deslizar, padrinos, mesa de regalos (con botón para copiar la CLABE), hospedaje, RSVP y música opcional.

**Pases personalizados:** agrega `&invitado=Familia%20López&pases=4` al enlace. El nombre se rellena solo en el formulario y el selector limita el número de personas.

**Colores propios:** `colores: { accent: '#1e3a8a', 'accent-2': '#0b1224' }` sobrescribe cualquier variable del tema (mira `eventos/graduacion.js`).

**Orden de secciones:** `orden: ['bienvenida','contador','eventos','mapa','rsvp']`.

**Efecto animado:** `efecto: 'polvo-dorado' | 'petalos' | 'confeti' | 'destellos' | 'nieve' | 'burbujas' | 'globos' | null`. Para quitar la pantalla de "Abrir invitación" usa `intro: false`.

## Temas incluidos

| Tema (`tema:`) | Estilo | Demo | Ideal para |
|---|---|---|---|
| `elegante` | Marfil, negro y dorado | boda-elegante, graduacion | Bodas, galas, graduaciones |
| `floral` | Rosa palo, salvia y flores | boda-floral | Bodas de jardín, bautizos |
| `boho` | Terracota, pampas y arcos | boda-boho | Hacienda, campo, playa |
| `minimalista` | Blanco y negro, tipografía grande | boda-minimalista | Bodas civiles, corporativo |
| `mexicano` | Talavera y papel picado | boda-mexicana | Bodas y fiestas mexicanas |
| `playa` | Turquesa, coral, olas y palmas | boda-playa | Bodas en la playa |
| `invierno` | Verde bosque, vino, pino y nieve | boda-invierno | Bodas de invierno, posadas |
| `xv` | Lila, rosa, corona y destellos | xv-isabella | XV años, comuniones |
| `celestial` | Noche, luna y estrellas | xv-celestial | XV años, bodas de noche |
| `fiesta` | Colores vivos estilo sticker | cumple-fiesta | Cumpleaños, despedidas |
| `gatsby` | Art déco negro y oro | gala-gatsby | Galas, cumpleaños de adultos, Año Nuevo |
| `infantil` | Cielo, nubes y globos | cumple-infantil | Cumpleaños de niños |
| `acuarela` | Manchas de acuarela pastel | baby-shower | Baby shower, bautizos |

Cualquier tema sirve para cualquier evento: el tema define el diseño y el archivo del evento define el contenido.

## Recibir las confirmaciones (Google Sheets)

1. Crea una hoja nueva en sheets.new y abre **Extensiones → Apps Script**.
2. Pega el contenido de `backend/google-apps-script.gs`. Si quieres recibir un correo por cada respuesta, llena `AVISAR_A`.
3. Ve a **Implementar → Nueva implementación → Aplicación web**, con *Ejecutar como: Yo* y *Acceso: Cualquier usuario*.
4. Copia la URL que termina en `/exec` y pégala en `rsvp.endpoint` del archivo del evento.

Cada evento guarda sus respuestas en una pestaña propia. La función `generarResumen()` crea una pestaña con totales por evento.
Mientras `endpoint` esté vacío, la invitación funciona en **modo demostración** y las respuestas solo se guardan en ese navegador.

Opcional: con `rsvp.whatsapp: '5215512345678'`, al confirmar aparece un botón que abre WhatsApp con un mensaje ya escrito.

## Publicar

Sube la carpeta completa a cualquier hosting estático gratuito: Netlify (puedes arrastrar la carpeta), Vercel, GitHub Pages o Cloudflare Pages. También funciona en cualquier hosting tradicional.

Antes de compartir:
- Cambia las etiquetas `og:` en `invitacion.html`, que definen la imagen y el texto de la vista previa en WhatsApp.
- Usa fotos optimizadas (JPG o WebP de menos de 300 KB, con unos 1600 px de ancho para la portada).
- Si agregas música, usa una canción con licencia.

## Crear un tema nuevo

Copia `css/temas/floral.css`, cambia las variables de `:root` (colores, tipografías de Google Fonts, `--orn-glyph`, `--fx-colors`) y las decoraciones. Después usa `tema: 'mi-tema'` en el evento.
