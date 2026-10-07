// Boda en la playa — tema Playa / tropical
window.EVENTO = {
  tema: 'playa',
  tipo: 'boda',
  titulo: 'Destination wedding',
  nombres: ['Andrea', 'Rodrigo'],
  conector: '&',
  fecha: '2027-11-13T17:30:00',
  duracionHoras: 7,
  frase: 'Pies en la arena, atardecer y para siempre.',
  portada: 'img/playa-portada.jpg',

  bienvenida: {
    kicker: 'Save the date',
    titulo: 'Nos vamos a casar frente al mar',
    texto: 'Sabemos que viajar requiere planearse, por eso te avisamos con tiempo. Aquí encontrarás todo: horarios, hospedaje y cómo llegar.',
  },

  historia: {
    titulo: 'Nuestra historia',
    momentos: [
      { fecha: '2020', titulo: 'Clase de surf', texto: 'Ninguno de los dos logró pararse en la tabla, pero salimos con una cita.', foto: 'img/playa-historia-1.jpg' },
      { fecha: '2024', titulo: 'Vivir juntos', texto: 'De la ciudad a la costa, persiguiendo atardeceres.', foto: 'img/playa-historia-2.jpg' },
      { fecha: '2026', titulo: 'Propuesta en kayak', texto: 'El anillo iba en un frasco amarrado al remo.', foto: 'img/playa-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Ceremonia en la playa', icono: 'palmera', hora: '5:30 p.m.', lugar: 'Playa Paraíso', direccion: 'Tulum, Quintana Roo', mapa: 'Playa Paraíso, Tulum' },
    { titulo: 'Recepción', icono: 'copa', hora: '7:00 p.m.', lugar: 'Beach club', direccion: 'Zona hotelera, Tulum, Q. Roo', mapa: 'Zona Hotelera Tulum' },
  ],

  itinerario: [
    { hora: '5:30 pm', actividad: 'Ceremonia al atardecer', icono: 'sol' },
    { hora: '6:30 pm', actividad: 'Cócteles frente al mar', icono: 'copa' },
    { hora: '8:00 pm', actividad: 'Cena de mariscos', icono: 'ola' },
    { hora: '10:00 pm', actividad: 'Fiesta descalzos', icono: 'musica' },
  ],

  vestimenta: {
    codigo: 'Formal de playa',
    descripcion: 'Lino, telas frescas y colores claros. Sandalias o pies descalzos: ¡la ceremonia es en la arena!',
    colores: ['#14a3b4', '#ff8a65', '#f3e3c3', '#ffffff'],
  },

  galeria: ['img/playa-galeria-1.jpg', 'img/playa-galeria-2.jpg', 'img/playa-galeria-3.jpg', 'img/playa-galeria-4.jpg', 'img/playa-galeria-5.jpg'],

  regalos: {
    texto: 'Tu viaje ya es un regalo enorme. Si aun así quieres consentirnos:',
    opciones: [
      { tipo: 'banco', nombre: 'Luna de miel', detalle: 'Bali, ¡allá vamos!', cuenta: '0124 8000 5566 7788 90', titular: 'Rodrigo Medina' },
      { tipo: 'tienda', nombre: 'Mesa de regalos', detalle: 'Liverpool · Evento 50987654', url: 'https://mesaderegalos.liverpool.com.mx/', boton: 'Ver mesa' },
    ],
  },

  hospedaje: [
    { nombre: 'Hotel boutique sede', detalle: 'Tarifa especial del 12 al 15 de noviembre.', codigo: 'ANDYRODRI', telefono: '984 000 0000' },
    { nombre: 'Opción económica', detalle: 'Hostales y cabañas en el pueblo, a 15 min en taxi.' },
  ],

  rsvp: { texto: 'Confírmanos pronto para ayudarte con tu reservación.', fechaLimite: '2027-09-30', maxPases: 2, preguntarAlimentos: true, para: 'los novios', whatsapp: '', endpoint: '' },

  cierre: 'Nos vemos en la arena.',
  hashtag: '#AndyYRodriEnTulum',
  pie: 'Andrea & Rodrigo · Tulum 2027',
};
