// Cumpleaños — tema Fiesta moderna (sin padrinos ni historia: solo lo esencial)
window.EVENTO = {
  tema: 'fiesta',
  tipo: 'cumpleanos',
  titulo: '¡Fiesta de cumpleaños!',
  subtitulo: 'Los 30 de',
  nombres: ['Mariana'],
  fecha: '2027-02-20T20:00:00',
  duracionHoras: 6,
  frase: 'Treinta vueltas al sol merecen una noche épica. Trae tus mejores pasos de baile.',
  portada: 'img/fiesta-portada.jpg',
  textoAbrir: '¡Vamos!',

  bienvenida: {
    kicker: '¡Hey!',
    titulo: 'Se armó la fiesta',
    texto: 'Dirty thirty, pero con estilo. Habrá música, tacos al pastor, karaoke y muchas sorpresas.',
  },

  eventos: [
    { titulo: 'La fiesta', icono: 'pastel', hora: '8:00 p.m. — hasta que el cuerpo aguante', lugar: 'Roof Garden', direccion: 'Colonia Roma, Ciudad de México', mapa: 'Plaza Río de Janeiro, Roma Norte, CDMX' },
  ],

  itinerario: [
    { hora: '8:00 pm', actividad: 'Llegada y drinks', icono: 'copa' },
    { hora: '9:30 pm', actividad: 'Taquiza', icono: 'estrella' },
    { hora: '11:00 pm', actividad: 'Pastel y mañanitas', icono: 'pastel' },
    { hora: '11:30 pm', actividad: 'Karaoke y baile', icono: 'musica' },
  ],

  vestimenta: {
    codigo: 'Disco Glam ✨',
    descripcion: 'Brillos, lentejuelas, colores neón… ¡entre más, mejor!',
    colores: ['#ff3d7f', '#ffc93c', '#3d5afe', '#00c2a8'],
  },

  galeria: {
    kicker: 'Throwback',
    titulo: 'Fotos',
    fotos: ['img/fiesta-galeria-1.jpg', 'img/fiesta-galeria-2.jpg', 'img/fiesta-galeria-3.jpg', 'img/fiesta-galeria-4.jpg', 'img/fiesta-galeria-5.jpg'],
  },

  rsvp: {
    kicker: '¿Vienes?',
    titulo: 'Confirma',
    texto: 'Avísame para calcular los tacos 🌮',
    fechaLimite: '2027-02-10',
    maxPases: 2,
    preguntarCancion: true,
    para: 'Mariana',
    whatsapp: '',
    endpoint: '',
  },

  cierre: '¡Nos vemos en la pista!',
  hashtag: '#Mariana30',
  pie: 'Mariana · 30',
};
