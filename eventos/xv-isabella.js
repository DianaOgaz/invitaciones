// XV años — tema Princesa
window.EVENTO = {
  tema: 'xv',
  tipo: 'xv',
  titulo: 'Mis XV años',
  subtitulo: 'Te invito a celebrar',
  nombres: ['Isabella'],
  fecha: '2027-06-12T19:00:00',
  duracionHoras: 7,
  frase: 'Hay momentos que se esperan toda la vida. Este es uno de ellos y quiero vivirlo contigo.',
  portada: 'img/xv-portada.jpg',
  textoAbrir: 'Abrir mi invitación',

  bienvenida: {
    kicker: 'Con amor',
    titulo: 'Acompáñame en esta noche mágica',
    texto: 'Con la bendición de Dios y el amor de mis padres, celebro mis quince años y me encantaría que fueras parte de este sueño.',
    padres: [
      { titulo: 'Mis padres', nombres: ['Mónica Fuentes de la Garza', 'Raúl Domínguez Cantú'] },
      { titulo: 'Mis padrinos', nombres: ['Karla Domínguez', 'Sergio Villarreal'] },
    ],
  },

  historia: {
    kicker: 'Quince años',
    titulo: 'Mi historia',
    momentos: [
      { fecha: '2012', titulo: 'Llegué al mundo', texto: 'Una mañana de junio en Monterrey, llenando de alegría a mi familia.', foto: 'img/xv-historia-1.jpg' },
      { fecha: '2019', titulo: 'Mi primer recital', texto: 'Ballet, nervios y un tutú rosa que todavía guardo.', foto: 'img/xv-historia-2.jpg' },
      { fecha: '2027', titulo: '¡Quince!', texto: 'Ahora celebro todo lo vivido y lo que viene.', foto: 'img/xv-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Misa de acción de gracias', icono: 'iglesia', hora: '7:00 p.m.', lugar: 'Catedral Metropolitana', direccion: 'Monterrey, N.L.', mapa: 'Catedral Metropolitana de Monterrey' },
    { titulo: 'Recepción', icono: 'corona', hora: '9:00 p.m.', lugar: 'Salón de eventos', direccion: 'Parque Fundidora, Monterrey, N.L.', mapa: 'Parque Fundidora, Monterrey' },
  ],

  itinerario: [
    { hora: '7:00 pm', actividad: 'Misa', icono: 'iglesia' },
    { hora: '9:00 pm', actividad: 'Entrada de la quinceañera', icono: 'corona' },
    { hora: '9:30 pm', actividad: 'Vals', icono: 'musica' },
    { hora: '10:00 pm', actividad: 'Cena', icono: 'estrella' },
    { hora: '11:00 pm', actividad: 'Baile sorpresa y fiesta', icono: 'pastel' },
  ],

  vestimenta: {
    codigo: 'Formal',
    descripcion: 'Damas: vestido de coctel o largo. Caballeros: traje.',
    colores: ['#c08ad8', '#f4a6c6', '#f6e27a', '#ffffff'],
    nota: 'El color lila está reservado para la quinceañera.',
  },

  galeria: ['img/xv-galeria-1.jpg', 'img/xv-galeria-2.jpg', 'img/xv-galeria-3.jpg', 'img/xv-galeria-4.jpg', 'img/xv-galeria-5.jpg'],

  padrinos: [
    { rol: 'Padrinos de velación', nombres: 'Karla y Sergio' },
    { rol: 'Padrinos de anillo', nombres: 'Elena y Javier' },
    { rol: 'Padrinos de última muñeca', nombres: 'Abuelos Domínguez' },
    { rol: 'Chambelán de honor', nombres: 'Santiago Fuentes' },
  ],

  regalos: {
    texto: '¡Tu compañía es el mejor regalo! Si deseas darme un detalle:',
    opciones: [
      { tipo: 'sobre', nombre: 'Lluvia de sobres', detalle: 'Tendremos un cofre en la recepción.' },
      { tipo: 'tienda', nombre: 'Mesa de regalos', detalle: 'Palacio de Hierro · Evento 7788', url: 'https://www.elpalaciodehierro.com/', boton: 'Ver mesa' },
    ],
  },

  rsvp: {
    texto: '¡Confírmame tu asistencia para apartarte un lugar!',
    fechaLimite: '2027-05-25',
    maxPases: 4,
    preguntarCancion: true,
    para: 'Isabella',
    whatsapp: '',
    endpoint: '',
  },

  cierre: 'Gracias por ser parte de mi historia.',
  hashtag: '#XVIsabella',
  pie: 'Isabella · XV años',
};
