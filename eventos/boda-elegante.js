/* =====================================================================
   PLANTILLA COMPLETA (comentada) — Boda, tema Elegante
   Copia este archivo, cámbiale el nombre (ej. boda-ana-luis.js) y abre:
   invitacion.html?evento=boda-ana-luis
   Cualquier sección que borres o pongas en null simplemente no aparece.
   ===================================================================== */
window.EVENTO = {
  tema: 'elegante',              // 'elegante' | 'floral' | 'fiesta' | 'xv'
  tipo: 'boda',                  // libre: boda, xv, cumpleanos, graduacion, bautizo…
  titulo: 'Nuestra boda',
  nombres: ['Sofía', 'Alejandro'],
  conector: '&',
  fecha: '2027-04-17T17:00:00',  // AAAA-MM-DDTHH:MM:SS (hora local)
  duracionHoras: 7,
  zonaHoraria: 'America/Mexico_City',
  frase: 'Dos almas, un mismo camino. Nos encantaría que fueras parte de este día.',
  portada: 'img/elegante-portada.jpg',
  musica: '',                    // ej. 'audio/cancion.mp3' (usa música con licencia)
  intro: true,                   // pantalla "Abrir invitación"
  // efecto: 'polvo-dorado',     // 'polvo-dorado' | 'petalos' | 'confeti' | 'destellos' | null
  // colores: { accent: '#9c7c4a' },  // sobrescribe cualquier color del tema
  // orden: ['bienvenida','contador','eventos','mapa','rsvp'],  // orden/selección de secciones

  bienvenida: {
    titulo: 'Con la bendición de Dios y de nuestros padres',
    texto: 'Tenemos el honor de invitarte a celebrar el inicio de nuestra vida juntos. Tu presencia será el mejor regalo.',
    cita: 'El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección.',
    citaAutor: 'Antoine de Saint-Exupéry',
    padres: [
      { titulo: 'Padres de la novia', nombres: ['Laura Méndez Ríos', 'Jorge Herrera Paz'] },
      { titulo: 'Padres del novio', nombres: ['Patricia Navarro Gil', 'Ricardo Ortega Luna'] },
    ],
  },

  historia: {
    titulo: 'Nuestra historia',
    intro: 'Algunos momentos que nos trajeron hasta aquí.',
    momentos: [
      { fecha: 'Otoño 2019', titulo: 'Nos conocimos', texto: 'Una tarde de lluvia en una librería de Coyoacán, ambos buscando el mismo libro.', foto: 'img/elegante-historia-1.jpg' },
      { fecha: 'Febrero 2020', titulo: 'Primera cita', texto: 'Café, pan dulce y una conversación que duró hasta que cerraron el lugar.', foto: 'img/elegante-historia-2.jpg' },
      { fecha: 'Diciembre 2025', titulo: 'Dijo que sí', texto: 'Frente al mar, al atardecer, con el anillo escondido en un libro.', foto: 'img/elegante-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Ceremonia religiosa', icono: 'iglesia', hora: '5:00 p.m.', lugar: 'Parroquia de San Miguel Arcángel', direccion: 'Plaza Principal s/n, Centro, San Miguel de Allende, Gto.', mapa: 'Parroquia de San Miguel Arcángel, San Miguel de Allende' },
    { titulo: 'Recepción', icono: 'copa', hora: '7:30 p.m.', lugar: 'Jardín Principal', direccion: 'Centro, San Miguel de Allende, Gto.', mapa: 'Jardín Principal, San Miguel de Allende' },
    // coordenadas: [20.9144, -100.7437]   ← más preciso que el texto
  ],

  itinerario: [
    { hora: '5:00 pm', actividad: 'Ceremonia religiosa', icono: 'iglesia' },
    { hora: '7:30 pm', actividad: 'Cóctel de bienvenida', icono: 'copa' },
    { hora: '8:30 pm', actividad: 'Cena', icono: 'estrella' },
    { hora: '10:00 pm', actividad: 'Primer baile y fiesta', icono: 'musica' },
    { hora: '1:00 am', actividad: 'Tornaboda', icono: 'corazon' },
  ],

  vestimenta: {
    codigo: 'Etiqueta rigurosa',
    descripcion: 'Caballeros: smoking o traje oscuro. Damas: vestido largo.',
    colores: ['#1d1b18', '#4a3f35', '#b08d57', '#e8dcc6'],
    nota: 'Con cariño reservamos el color blanco para la novia.',
  },

  galeria: {
    kicker: 'Momentos',
    titulo: 'Galería',
    fotos: [
      { src: 'img/elegante-galeria-1.jpg', texto: 'Nuestra sesión de compromiso' },
      'img/elegante-galeria-2.jpg',
      'img/elegante-galeria-3.jpg',
      'img/elegante-galeria-4.jpg',
      'img/elegante-galeria-5.jpg',
    ],
  },

  padrinos: [
    { rol: 'Velación', nombres: 'Mariana y Andrés Robles' },
    { rol: 'Anillos', nombres: 'Fernanda y Luis Campos' },
    { rol: 'Arras', nombres: 'Gabriela y Tomás Vera' },
    { rol: 'Lazo', nombres: 'Claudia y Héctor Ruiz' },
  ],

  regalos: {
    texto: 'Tu presencia es lo más importante. Si deseas obsequiarnos algo, aquí tienes algunas opciones.',
    opciones: [
      { tipo: 'tienda', nombre: 'Liverpool', detalle: 'Evento número 51234567', url: 'https://mesaderegalos.liverpool.com.mx/', boton: 'Ver mesa' },
      { tipo: 'banco', nombre: 'Transferencia', detalle: 'BBVA', cuenta: '0121 8000 1234 5678 90', titular: 'Sofía Herrera Méndez' },
      { tipo: 'sobre', nombre: 'Lluvia de sobres', detalle: 'Habrá un buzón el día del evento.' },
    ],
  },

  hospedaje: [
    { nombre: 'Hotel Casa Colonial', detalle: 'A 5 minutos del evento. Tarifa preferencial para invitados.', codigo: 'BODASYA27', telefono: '415 000 0000' },
  ],

  rsvp: {
    texto: 'Nos ayudará mucho saber si podrás acompañarnos.',
    fechaLimite: '2027-03-15',   // AAAA-MM-DD
    maxPases: 4,                 // si la URL trae &pases=N se usa ese número
    preguntarAlimentos: true,
    preguntarCancion: false,
    para: 'los novios',
    whatsapp: '',                // ej. '5214151234567' (código país + número, sin +)
    endpoint: '',                // URL /exec de Google Apps Script (ver backend/google-apps-script.gs)
  },

  cierre: 'Gracias por ser parte de nuestra historia. ¡Te esperamos!',
  hashtag: '#SofíaYAlejandro2027',
  pie: 'Sofía & Alejandro · 17.04.2027',
};
