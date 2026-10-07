// Cumpleaños de adulto estilo años 20 — tema Vintage Gatsby / art déco
window.EVENTO = {
  tema: 'gatsby',
  tipo: 'cumpleanos',
  titulo: 'Una noche de los años 20',
  subtitulo: 'La gran gala de los 40 de',
  nombres: ['Alejandra'],
  fecha: '2027-12-04T21:00:00',
  duracionHoras: 6,
  frase: 'Jazz, champaña y plumas. Se requiere tu presencia y tu mejor atuendo.',
  portada: 'img/gatsby-portada.jpg',
  textoAbrir: 'Entrar a la gala',

  bienvenida: {
    kicker: 'Bienvenidos',
    titulo: 'Cuarenta y fabulosa',
    texto: 'Volvamos a la época dorada por una noche: música en vivo, coctelería clásica, casino y una pista de baile al estilo charlestón.',
  },

  eventos: [
    { titulo: 'La gala', icono: 'copa', hora: '9:00 p.m.', lugar: 'Salón art déco', direccion: 'Colonia Condesa, CDMX', mapa: 'Edificio Basurto, Condesa, CDMX' },
  ],

  itinerario: [
    { hora: '9:00 pm', actividad: 'Coctel y jazz en vivo', icono: 'musica' },
    { hora: '10:00 pm', actividad: 'Cena de tres tiempos', icono: 'estrella' },
    { hora: '11:30 pm', actividad: 'Brindis y pastel', icono: 'pastel' },
    { hora: '12:00 am', actividad: 'Casino y charlestón', icono: 'corazon' },
  ],

  vestimenta: {
    codigo: 'Gatsby black tie',
    descripcion: 'Ellas: lentejuelas, flecos, perlas y plumas. Ellos: tirantes, moño y sombrero fedora.',
    colores: ['#0d0d0f', '#d4af37', '#ece0c4', '#7a1f2b'],
  },

  galeria: {
    kicker: 'Recuerdos',
    titulo: 'Galería',
    fotos: ['img/gatsby-galeria-1.jpg', 'img/gatsby-galeria-2.jpg', 'img/gatsby-galeria-3.jpg', 'img/gatsby-galeria-4.jpg', 'img/gatsby-galeria-5.jpg'],
  },

  regalos: {
    texto: 'Tu presencia es el mejor regalo. Si quieres brindar conmigo de otra forma:',
    opciones: [{ tipo: 'sobre', nombre: 'Sobre dorado', detalle: 'Habrá un cofre a la entrada del salón.' }],
  },

  rsvp: { kicker: 'R.S.V.P.', titulo: 'Confirma', fechaLimite: '2027-11-20', maxPases: 2, preguntarCancion: true, para: 'Alejandra', whatsapp: '', endpoint: '' },

  cierre: 'La noche es joven, y nosotros también.',
  hashtag: '#Ale40Gatsby',
  pie: 'Alejandra · MMXXVII',
};
