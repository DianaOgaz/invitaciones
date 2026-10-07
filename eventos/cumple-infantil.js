// Cumpleaños infantil — tema Infantil
window.EVENTO = {
  tema: 'infantil',
  tipo: 'cumpleanos',
  titulo: '¡Estás invitado!',
  subtitulo: 'Cumple 5 años',
  nombres: ['Santiago'],
  fecha: '2027-05-15T14:00:00',
  duracionHoras: 4,
  frase: 'Habrá brincolín, piñata, pastel y muchos amigos. ¡No faltes!',
  portada: 'img/infantil-portada.jpg',
  textoAbrir: '¡A jugar!',

  bienvenida: {
    kicker: '¡Hola, amiguito!',
    titulo: 'Ven a mi fiesta',
    texto: '¡Ya voy a cumplir cinco! Vamos a jugar, brincar y comer pastel de chocolate.',
    padres: [{ titulo: 'Te esperan mis papás', nombres: ['Daniela y Roberto'] }],
  },

  eventos: [
    { titulo: '¡La fiesta!', icono: 'globo', hora: '2:00 a 6:00 p.m.', lugar: 'Salón de fiestas infantiles', direccion: 'Querétaro, Qro.', mapa: 'Parque Querétaro 2000' },
  ],

  itinerario: [
    { hora: '2:00 pm', actividad: 'Juegos y brincolín', icono: 'estrella' },
    { hora: '3:30 pm', actividad: 'Show de magia', icono: 'sol' },
    { hora: '4:30 pm', actividad: 'Piñata', icono: 'globo' },
    { hora: '5:00 pm', actividad: 'Pastel y mañanitas', icono: 'pastel' },
  ],

  vestimenta: { codigo: 'Ropa cómoda', descripcion: '¡Para brincar y ensuciarse! Trae calcetas para el brincolín.', colores: ['#ff595e', '#ffca3a', '#8ac926', '#1982c4'] },

  galeria: ['img/infantil-galeria-1.jpg', 'img/infantil-galeria-2.jpg', 'img/infantil-galeria-3.jpg', 'img/infantil-galeria-4.jpg'],

  rsvp: { kicker: '¿Vienes?', titulo: 'Avísanos', texto: 'Confirma cuántos niños y adultos vienen.', fechaLimite: '2027-05-08', maxPases: 4, preguntarAlimentos: true, para: 'los papás de Santi', whatsapp: '', endpoint: '' },

  cierre: '¡Te espero para jugar!',
  hashtag: '#Santi5',
  pie: 'Santiago · 5 años',
};
