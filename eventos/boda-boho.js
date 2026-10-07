// Boda en hacienda — tema Boho / rústico
window.EVENTO = {
  tema: 'boho',
  tipo: 'boda',
  titulo: 'Nos casamos',
  nombres: ['Camila', 'Mateo'],
  conector: '&',
  fecha: '2027-03-27T16:00:00',
  duracionHoras: 8,
  frase: 'Bajo el cielo abierto, entre agaves y amigos, queremos decir que sí.',
  portada: 'img/boho-portada.jpg',

  bienvenida: {
    kicker: 'Hola',
    titulo: 'Una boda sin prisas',
    texto: 'Imagina una tarde dorada en el campo, buena comida, mezcal y las personas que más queremos. Eso es lo que planeamos, y no sería igual sin ti.',
    padres: [
      { titulo: 'Padres de la novia', nombres: ['Teresa Aguilar', 'Joaquín Mora'] },
      { titulo: 'Padres del novio', nombres: ['Silvia Rentería', 'Hugo Paredes'] },
    ],
  },

  historia: {
    titulo: 'Cómo empezó todo',
    momentos: [
      { fecha: '2018', titulo: 'Un viaje de mochilazo', texto: 'Dos desconocidos compartiendo el mismo camión a Chiapas y una conversación interminable.', foto: 'img/boho-historia-1.jpg' },
      { fecha: '2021', titulo: 'Nuestro rincón', texto: 'Una casita con jardín, dos perros y muchas plantas.', foto: 'img/boho-historia-2.jpg' },
      { fecha: '2026', titulo: 'El anillo', texto: 'Al amanecer, en lo alto de un cerro, con café de olla.', foto: 'img/boho-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Ceremonia simbólica', icono: 'anillos', hora: '4:00 p.m.', lugar: 'Hacienda entre agaves', direccion: 'Tequila, Jalisco', mapa: 'Tequila, Jalisco' },
    { titulo: 'Celebración', icono: 'copa', hora: '5:30 p.m.', lugar: 'Jardín de la hacienda', direccion: 'Tequila, Jalisco', mapa: 'Tequila, Jalisco' },
  ],

  itinerario: [
    { hora: '4:00 pm', actividad: 'Ceremonia al aire libre', icono: 'anillos' },
    { hora: '5:00 pm', actividad: 'Mezcal y botanas', icono: 'copa' },
    { hora: '6:30 pm', actividad: 'Comida campestre', icono: 'estrella' },
    { hora: '8:00 pm', actividad: 'Fogata y baile', icono: 'musica' },
  ],

  vestimenta: {
    codigo: 'Casual elegante campestre',
    descripcion: 'Tonos tierra, lino y algodón. Zapato cómodo: la ceremonia es sobre pasto.',
    colores: ['#c0714f', '#d8b48f', '#a8956f', '#f7f0e6'],
  },

  galeria: ['img/boho-galeria-1.jpg', 'img/boho-galeria-2.jpg', 'img/boho-galeria-3.jpg', 'img/boho-galeria-4.jpg', 'img/boho-galeria-5.jpg'],

  regalos: {
    texto: 'Lo que más deseamos es verte ahí. Si quieres sumarte a nuestra aventura:',
    opciones: [
      { tipo: 'banco', nombre: 'Fondo de viaje', detalle: 'Rumbo a la Patagonia', cuenta: '0721 8000 4567 1234 98', titular: 'Camila Mora Aguilar' },
      { tipo: 'sobre', nombre: 'Lluvia de sobres', detalle: 'Habrá una canasta tejida a la entrada.' },
    ],
  },

  hospedaje: [
    { nombre: 'Casas del pueblo', detalle: 'Reservamos cabañas a 10 minutos de la hacienda.', codigo: 'CAMIMATEO', telefono: '374 000 0000' },
  ],

  rsvp: { fechaLimite: '2027-02-28', maxPases: 3, preguntarAlimentos: true, para: 'los novios', whatsapp: '', endpoint: '' },

  cierre: 'Nos vemos bajo el sol de Jalisco.',
  hashtag: '#CamiYMateo',
  pie: 'Camila & Mateo · 27.03.2027',
};
