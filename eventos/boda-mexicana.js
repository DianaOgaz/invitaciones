// Boda en Oaxaca — tema Mexicano / talavera
window.EVENTO = {
  tema: 'mexicano',
  tipo: 'boda',
  titulo: '¡Nos casamos!',
  nombres: ['Guadalupe', 'Emiliano'],
  conector: 'y',
  fecha: '2027-10-30T17:00:00',
  duracionHoras: 9,
  frase: 'Con calenda, mezcal y mucho amor, te esperamos para celebrar en grande.',
  portada: 'img/mexicano-portada.jpg',
  textoAbrir: '¡Ábrela!',

  bienvenida: {
    kicker: '¡Bienvenidos!',
    titulo: 'Que viva el amor',
    texto: 'Queremos celebrar nuestra unión a la mexicana: con banda, calenda por las calles del centro y una fiesta que no termina hasta que salga el sol.',
    padres: [
      { titulo: 'Padres de la novia', nombres: ['María de los Ángeles Cruz', 'Felipe Santiago'] },
      { titulo: 'Padres del novio', nombres: ['Rocío Hernández', 'Armando López'] },
    ],
  },

  historia: {
    titulo: 'Nuestra historia',
    momentos: [
      { fecha: '2019', titulo: 'La Guelaguetza', texto: 'Nos conocimos bailando entre la multitud. Ella le pisó el pie; él no se quejó.', foto: 'img/mexicano-historia-1.jpg' },
      { fecha: '2022', titulo: 'Tlayudas los domingos', texto: 'Nuestra tradición favorita desde el primer mes.', foto: 'img/mexicano-historia-2.jpg' },
      { fecha: '2026', titulo: '¡Dijo que sí!', texto: 'Con mariachi sorpresa en Monte Albán.', foto: 'img/mexicano-historia-3.jpg' },
    ],
  },

  eventos: [
    { titulo: 'Misa', icono: 'iglesia', hora: '5:00 p.m.', lugar: 'Templo de Santo Domingo', direccion: 'Centro, Oaxaca de Juárez, Oax.', mapa: 'Templo de Santo Domingo de Guzmán, Oaxaca' },
    { titulo: 'Calenda', icono: 'musica', hora: '6:30 p.m.', lugar: 'Andador Macedonio Alcalá', direccion: 'Centro, Oaxaca', mapa: 'Andador Macedonio Alcalá, Oaxaca' },
    { titulo: 'Fiesta', icono: 'copa', hora: '7:30 p.m.', lugar: 'Jardín Etnobotánico', direccion: 'Centro, Oaxaca', mapa: 'Jardín Etnobotánico de Oaxaca' },
  ],

  itinerario: [
    { hora: '5:00 pm', actividad: 'Misa', icono: 'iglesia' },
    { hora: '6:30 pm', actividad: 'Calenda con banda y marmotas', icono: 'musica' },
    { hora: '8:00 pm', actividad: 'Cena oaxaqueña', icono: 'estrella' },
    { hora: '10:00 pm', actividad: 'Baile del guajolote', icono: 'flor' },
    { hora: '1:00 am', actividad: 'Tornaboda con tamales', icono: 'corazon' },
  ],

  vestimenta: {
    codigo: 'Formal mexicano',
    descripcion: '¡Luce tu huipil, guayabera o rebozo! También es bienvenido el formal tradicional.',
    colores: ['#e5337f', '#f6b81b', '#2a9d5c', '#1f4e9c'],
  },

  galeria: ['img/mexicano-galeria-1.jpg', 'img/mexicano-galeria-2.jpg', 'img/mexicano-galeria-3.jpg', 'img/mexicano-galeria-4.jpg', 'img/mexicano-galeria-5.jpg'],

  padrinos: [
    { rol: 'Padrinos de velación', nombres: 'Juana y Marcos' },
    { rol: 'Padrinos de lazo', nombres: 'Itzel y Gerardo' },
    { rol: 'Padrinos de mezcal', nombres: 'Los primos López' },
  ],

  regalos: {
    opciones: [
      { tipo: 'sobre', nombre: 'Lluvia de sobres', detalle: 'Habrá una caja de alebrije a la entrada.' },
      { tipo: 'banco', nombre: 'Transferencia', detalle: 'Banorte', cuenta: '0726 8000 1122 3344 55', titular: 'Guadalupe Santiago Cruz' },
    ],
  },

  rsvp: { texto: '¡Confírmanos para que no falte mezcal!', fechaLimite: '2027-10-01', maxPases: 4, preguntarAlimentos: true, para: 'los novios', whatsapp: '', endpoint: '' },

  cierre: '¡Gracias por ser parte de esta fiesta!',
  hashtag: '#LupitaYEmi',
  pie: 'Guadalupe y Emiliano · Oaxaca 2027',
};
