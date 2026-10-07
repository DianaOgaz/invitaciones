// Baby shower — tema Acuarela pastel
window.EVENTO = {
  tema: 'acuarela',
  tipo: 'baby-shower',
  titulo: 'Baby shower',
  subtitulo: 'Esperamos con amor a',
  nombres: ['Emma'],
  fecha: '2027-03-06T11:00:00',
  duracionHoras: 4,
  frase: 'Un pequeño milagro está por llegar y queremos celebrarlo contigo.',
  portada: 'img/acuarela-portada.jpg',
  textoAbrir: 'Abrir invitación',

  bienvenida: {
    kicker: 'Con mucho cariño',
    titulo: '¡Viene en camino!',
    texto: 'Acompáñanos en un brunch lleno de juegos, risas y buenos deseos para la pequeña Emma.',
    padres: [{ titulo: 'Sus papás', nombres: ['Karen Osorio', 'José Luis Bravo'] }],
  },

  historia: {
    kicker: 'La dulce espera',
    titulo: 'Nuestro camino',
    momentos: [
      { fecha: 'Julio 2026', titulo: 'La gran noticia', texto: 'Dos rayitas y muchas lágrimas de felicidad.', foto: 'img/acuarela-historia-1.jpg' },
      { fecha: 'Octubre 2026', titulo: '¡Es niña!', texto: 'Lo supimos con un pastel rosa y toda la familia reunida.', foto: 'img/acuarela-historia-2.jpg' },
      { fecha: 'Abril 2027', titulo: 'Bienvenida, Emma', texto: 'Muy pronto por fin te conoceremos.', foto: 'img/acuarela-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Brunch y juegos', icono: 'biberon', hora: '11:00 a.m.', lugar: 'Casa de los abuelos', direccion: 'Colonia del Valle, San Pedro Garza García, N.L.', mapa: 'Colonia del Valle, San Pedro Garza García' },
  ],

  itinerario: [
    { hora: '11:00 am', actividad: 'Bienvenida y brunch', icono: 'flor' },
    { hora: '12:00 pm', actividad: 'Juegos y concursos', icono: 'estrella' },
    { hora: '1:00 pm', actividad: 'Apertura de regalos', icono: 'regalo' },
    { hora: '2:00 pm', actividad: 'Pastel', icono: 'pastel' },
  ],

  vestimenta: { codigo: 'Casual primaveral', descripcion: 'Tonos pastel para las fotos.', colores: ['#a9c3e8', '#f6c7b1', '#c9e4d6', '#e8cdee'] },

  galeria: ['img/acuarela-galeria-1.jpg', 'img/acuarela-galeria-2.jpg', 'img/acuarela-galeria-3.jpg', 'img/acuarela-galeria-4.jpg'],

  regalos: {
    texto: 'Si deseas traer un detalle, Emma te lo agradecerá:',
    opciones: [
      { tipo: 'tienda', nombre: 'Lista de bebé', detalle: 'Amazon · Lista de Karen y José', url: 'https://www.amazon.com.mx/baby-reg/homepage', boton: 'Ver lista' },
      { tipo: 'sobre', nombre: 'Pañales', detalle: 'Etapa 2 o 3, ¡nunca sobran!' },
    ],
  },

  rsvp: { fechaLimite: '2027-02-25', maxPases: 2, para: 'los papás', whatsapp: '', endpoint: '' },

  cierre: 'Gracias por acompañarnos en esta dulce espera.',
  hashtag: '#BienvenidaEmma',
  pie: 'Baby shower de Emma',
};
