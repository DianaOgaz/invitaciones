// Boda de invierno — tema Invierno / navideño
window.EVENTO = {
  tema: 'invierno',
  tipo: 'boda',
  titulo: 'Boda de invierno',
  nombres: ['Elena', 'Tomás'],
  conector: '&',
  fecha: '2027-12-11T16:00:00',
  duracionHoras: 8,
  frase: 'En la temporada más cálida del año, entre pinos y luces, unimos nuestras vidas.',
  portada: 'img/invierno-portada.jpg',

  bienvenida: {
    kicker: 'Queridos amigos',
    titulo: 'Celebremos juntos',
    texto: 'Te invitamos a una boda junto al lago, con chimenea, chocolate caliente y la alegría de diciembre.',
    padres: [
      { titulo: 'Padres de la novia', nombres: ['Carmen Velasco', 'Andrés Ríos'] },
      { titulo: 'Padres del novio', nombres: ['Beatriz Lozano', 'Federico Garza'] },
    ],
  },

  historia: {
    titulo: 'Nuestra historia',
    momentos: [
      { fecha: 'Diciembre 2019', titulo: 'La posada', texto: 'Nos tocó romper la misma piñata. Ganó ella.', foto: 'img/invierno-historia-1.jpg' },
      { fecha: '2022', titulo: 'Primera Navidad juntos', texto: 'Un árbol chueco y ponche quemado: perfecto.', foto: 'img/invierno-historia-2.jpg' },
      { fecha: 'Enero 2027', titulo: 'La pregunta', texto: 'Entre la nieve del Nevado de Toluca.', foto: 'img/invierno-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Ceremonia', icono: 'iglesia', hora: '4:00 p.m.', lugar: 'Capilla del bosque', direccion: 'Valle de Bravo, Edo. de México', mapa: 'Valle de Bravo, Estado de México' },
    { titulo: 'Recepción', icono: 'copa', hora: '6:00 p.m.', lugar: 'Casa junto al lago', direccion: 'Avándaro, Valle de Bravo', mapa: 'Avándaro, Valle de Bravo' },
  ],

  itinerario: [
    { hora: '4:00 pm', actividad: 'Ceremonia', icono: 'iglesia' },
    { hora: '5:30 pm', actividad: 'Ponche y chocolate caliente', icono: 'copa' },
    { hora: '7:00 pm', actividad: 'Cena', icono: 'estrella' },
    { hora: '9:00 pm', actividad: 'Baile junto a la chimenea', icono: 'musica' },
  ],

  vestimenta: {
    codigo: 'Formal de invierno',
    descripcion: 'Terciopelo, tonos profundos y abrigo: las noches en el bosque son frías.',
    colores: ['#1f4d3a', '#6b1f2a', '#b8954a', '#f6f5f0'],
    nota: 'Reservamos el blanco para la novia.',
  },

  galeria: ['img/invierno-galeria-1.jpg', 'img/invierno-galeria-2.jpg', 'img/invierno-galeria-3.jpg', 'img/invierno-galeria-4.jpg', 'img/invierno-galeria-5.jpg'],

  padrinos: [
    { rol: 'Padrinos de anillos', nombres: 'Sofía y Julián' },
    { rol: 'Padrinos de lazo', nombres: 'Mónica y Ramiro' },
  ],

  regalos: {
    opciones: [
      { tipo: 'tienda', nombre: 'Mesa de regalos', detalle: 'Liverpool · Evento 51112223', url: 'https://mesaderegalos.liverpool.com.mx/', boton: 'Ver mesa' },
      { tipo: 'banco', nombre: 'Transferencia', detalle: 'BBVA', cuenta: '0121 8000 9988 7766 55', titular: 'Tomás Garza Lozano' },
    ],
  },

  hospedaje: [{ nombre: 'Cabañas Avándaro', detalle: 'Tarifa especial para invitados, del 10 al 12 de diciembre.', codigo: 'ELEYTOM', telefono: '726 000 0000' }],

  rsvp: { fechaLimite: '2027-11-15', maxPases: 3, preguntarAlimentos: true, para: 'los novios', whatsapp: '', endpoint: '' },

  cierre: 'Que el calor de este día nos acompañe todo el año.',
  hashtag: '#ElenaYTomásEnInvierno',
  pie: 'Elena & Tomás · 11.12.2027',
};
