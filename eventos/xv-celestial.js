// XV años — tema Noche estrellada / celestial
window.EVENTO = {
  tema: 'celestial',
  tipo: 'xv',
  titulo: 'Mis XV años',
  subtitulo: 'Una noche bajo las estrellas',
  nombres: ['Renata'],
  fecha: '2027-08-21T20:00:00',
  duracionHoras: 7,
  frase: 'Quince años de mirar al cielo y pedir deseos. Esta noche quiero que estés conmigo.',
  portada: 'img/celestial-portada.jpg',
  textoAbrir: 'Abrir',

  bienvenida: {
    kicker: 'Con amor',
    titulo: 'Te invito a mi noche',
    texto: 'Con la bendición de Dios y la compañía de mi familia, celebraré mis quince años y nada me haría más feliz que compartirlo contigo.',
    padres: [
      { titulo: 'Mis padres', nombres: ['Gabriela Ochoa', 'Marco Antonio Ruiz'] },
      { titulo: 'Mis padrinos', nombres: ['Natalia Ruiz', 'Iván Contreras'] },
    ],
  },

  historia: {
    kicker: 'Mi universo',
    titulo: 'Mi historia',
    momentos: [
      { fecha: '2012', titulo: 'Una estrella nueva', texto: 'Nací en una noche de lluvia de estrellas, o eso dice mi mamá.', foto: 'img/celestial-historia-1.jpg' },
      { fecha: '2020', titulo: 'Mi primer telescopio', texto: 'Desde entonces no dejo de mirar hacia arriba.', foto: 'img/celestial-historia-2.jpg' },
      { fecha: '2027', titulo: 'Quince', texto: 'Hoy celebro todo lo vivido y lo que viene.', foto: 'img/celestial-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Misa', icono: 'iglesia', hora: '8:00 p.m.', lugar: 'Parroquia de Guadalupe', direccion: 'Zapopan, Jalisco', mapa: 'Basílica de Zapopan' },
    { titulo: 'Fiesta', icono: 'luna', hora: '9:30 p.m.', lugar: 'Jardín de eventos', direccion: 'Zapopan, Jalisco', mapa: 'Zapopan, Jalisco' },
  ],

  itinerario: [
    { hora: '8:00 pm', actividad: 'Misa', icono: 'iglesia' },
    { hora: '9:30 pm', actividad: 'Entrada y vals', icono: 'musica' },
    { hora: '10:30 pm', actividad: 'Cena', icono: 'estrella' },
    { hora: '12:00 am', actividad: 'Lluvia de luces y fiesta', icono: 'luna' },
  ],

  vestimenta: { codigo: 'Formal', descripcion: 'Tonos oscuros, plateados o dorados.', colores: ['#0b1030', '#26307a', '#e9c46a', '#c9d1ff'], nota: 'El azul medianoche está reservado para la quinceañera.' },

  galeria: ['img/celestial-galeria-1.jpg', 'img/celestial-galeria-2.jpg', 'img/celestial-galeria-3.jpg', 'img/celestial-galeria-4.jpg', 'img/celestial-galeria-5.jpg'],

  padrinos: [
    { rol: 'Padrinos de velación', nombres: 'Natalia e Iván' },
    { rol: 'Padrinos de corona', nombres: 'Abuelos Ochoa' },
    { rol: 'Chambelán de honor', nombres: 'Emilio Ruiz' },
  ],

  regalos: { opciones: [{ tipo: 'sobre', nombre: 'Lluvia de sobres', detalle: 'Tendremos un cofre de estrellas en la recepción.' }] },

  rsvp: { fechaLimite: '2027-08-01', maxPases: 4, preguntarCancion: true, para: 'Renata', whatsapp: '', endpoint: '' },

  cierre: 'Gracias por ser una estrella en mi cielo.',
  hashtag: '#XVRenata',
  pie: 'Renata · XV',
};
