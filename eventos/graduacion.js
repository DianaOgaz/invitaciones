// Graduación — usa el tema Elegante con colores personalizados (azul marino y dorado)
window.EVENTO = {
  tema: 'elegante',
  tipo: 'graduacion',
  titulo: 'Graduación · Generación 2023–2027',
  subtitulo: 'Ingeniería Industrial',
  nombres: ['Daniel Castillo'],
  fecha: '2027-07-03T18:00:00',
  duracionHoras: 6,
  frase: 'El esfuerzo de cuatro años merece celebrarse con quienes estuvieron en cada paso.',
  portada: 'img/grad-portada.jpg',
  efecto: 'destellos',
  colores: {
    accent: '#c9a23c',
    'accent-2': '#0b1224',
    bg: '#f7f8fb',
    'bg-alt': '#eceff5',
    'fx-colors': '#c9a23c, #f3e2b8, #ffffff',
  },
  orden: ['bienvenida', 'contador', 'eventos', 'mapa', 'itinerario', 'vestimenta', 'galeria', 'rsvp'],

  bienvenida: {
    kicker: 'Lo logré',
    titulo: 'Gracias por acompañarme',
    texto: 'Tengo el gusto de invitarte a la ceremonia de graduación y a la cena con la que celebraremos esta nueva etapa.',
    padres: [{ titulo: 'Con el orgullo de mis padres', nombres: ['Alicia Romero', 'Fernando Castillo'] }],
  },

  eventos: [
    { titulo: 'Ceremonia de graduación', icono: 'birrete', hora: '6:00 p.m.', lugar: 'Auditorio universitario', direccion: 'Puebla, Pue.', mapa: 'Complejo Cultural Universitario, Puebla' },
    { titulo: 'Cena de gala', icono: 'copa', hora: '9:00 p.m.', lugar: 'Salón de eventos', direccion: 'Puebla, Pue.', mapa: 'Zócalo de Puebla' },
  ],

  itinerario: [
    { hora: '6:00 pm', actividad: 'Entrega de títulos', icono: 'birrete' },
    { hora: '9:00 pm', actividad: 'Cena de gala', icono: 'copa' },
    { hora: '10:30 pm', actividad: 'Vals de graduación', icono: 'musica' },
  ],

  vestimenta: { codigo: 'Formal', descripcion: 'Traje o vestido de coctel.' },

  galeria: ['img/grad-galeria-1.jpg', 'img/grad-galeria-2.jpg', 'img/grad-galeria-3.jpg', 'img/grad-galeria-4.jpg'],

  rsvp: {
    texto: 'Los lugares en el auditorio son limitados; confirma por favor.',
    fechaLimite: '2027-06-20',
    maxPases: 3,
    para: 'Daniel',
    whatsapp: '',
    endpoint: '',
  },

  cierre: 'Un logro compartido es un logro doble.',
  hashtag: '#Generación2027',
  pie: 'Daniel Castillo · 2027',
};
