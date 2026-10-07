// Boda de jardín — tema Floral romántico
window.EVENTO = {
  tema: 'floral',
  tipo: 'boda',
  titulo: '¡Nos casamos!',
  nombres: ['Valeria', 'Diego'],
  conector: 'y',
  fecha: '2027-05-22T13:00:00',
  duracionHoras: 8,
  frase: 'Y en medio de tantas flores, nos elegimos.',
  portada: 'img/floral-portada.jpg',

  bienvenida: {
    titulo: 'Queremos compartirlo contigo',
    texto: 'Después de siete primaveras juntos, decidimos dar el siguiente paso. Nos haría muy felices celebrar rodeados de las personas que más queremos.',
    padres: [
      { titulo: 'Padres de la novia', nombres: ['Rosa Elena Cárdenas', 'Manuel Ibarra'] },
      { titulo: 'Padres del novio', nombres: ['Verónica Treviño', 'Arturo Salinas'] },
    ],
  },

  historia: {
    titulo: 'Nuestra historia',
    momentos: [
      { fecha: '2020', titulo: 'Un mercado de flores', texto: 'Ella compraba girasoles; él, una planta que no sabía cuidar. Ella lo ayudó.', foto: 'img/floral-historia-1.jpg' },
      { fecha: '2023', titulo: 'Nuestro primer hogar', texto: 'Un departamento pequeño con un balcón lleno de macetas.', foto: 'img/floral-historia-2.jpg' },
      { fecha: '2026', titulo: 'La propuesta', texto: 'En un campo de lavanda, con nuestras familias escondidas detrás de los árboles.', foto: 'img/floral-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Ceremonia civil', icono: 'anillos', hora: '1:00 p.m.', lugar: 'Jardín Botánico', direccion: 'Guadalajara, Jalisco', mapa: 'Bosque Los Colomos, Guadalajara' },
    { titulo: 'Comida y fiesta', icono: 'copa', hora: '2:30 p.m.', lugar: 'Terraza del Jardín', direccion: 'Guadalajara, Jalisco', mapa: 'Bosque Los Colomos, Guadalajara' },
  ],

  itinerario: [
    { hora: '1:00 pm', actividad: 'Ceremonia en el jardín', icono: 'anillos' },
    { hora: '2:00 pm', actividad: 'Brindis y fotos', icono: 'copa' },
    { hora: '3:00 pm', actividad: 'Comida', icono: 'estrella' },
    { hora: '5:00 pm', actividad: '¡A bailar!', icono: 'musica' },
  ],

  vestimenta: {
    codigo: 'Formal de jardín',
    descripcion: 'Telas ligeras y tonos pastel. Te sugerimos evitar tacón de aguja: ¡habrá pasto!',
    colores: ['#f2c4c1', '#c9d6c3', '#f7e7c6', '#d8cfe8'],
    nota: 'Reservamos el blanco para la novia.',
  },

  galeria: ['img/floral-galeria-1.jpg', 'img/floral-galeria-2.jpg', 'img/floral-galeria-3.jpg', 'img/floral-galeria-4.jpg', 'img/floral-galeria-5.jpg'],

  padrinos: [
    { rol: 'Padrinos de anillos', nombres: 'Daniela y Óscar' },
    { rol: 'Padrinos de lazo', nombres: 'Lucía y Ernesto' },
    { rol: 'Damas de honor', nombres: 'Ana, Paola y Regina' },
  ],

  regalos: {
    texto: 'Lo más valioso es tu compañía. Si quieres tener un detalle con nosotros:',
    opciones: [
      { tipo: 'tienda', nombre: 'Amazon', detalle: 'Lista de bodas Valeria & Diego', url: 'https://www.amazon.com.mx/wedding', boton: 'Ver lista' },
      { tipo: 'banco', nombre: 'Luna de miel', detalle: 'Ayúdanos a llegar a Japón', cuenta: '0021 8000 9876 5432 10', titular: 'Diego Salinas Treviño' },
    ],
  },

  rsvp: {
    texto: 'Confírmanos antes de la fecha límite para preparar todo con cariño.',
    fechaLimite: '2027-04-30',
    maxPases: 3,
    preguntarAlimentos: true,
    para: 'los novios',
    whatsapp: '',
    endpoint: '',
  },

  cierre: 'Gracias por florecer con nosotros.',
  hashtag: '#ValeYDiegoEnFlor',
  pie: 'Valeria y Diego · 22.05.2027',
};
