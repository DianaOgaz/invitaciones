// Boda civil — tema Minimalista moderno (sin intro, sin efectos)
window.EVENTO = {
  tema: 'minimalista',
  tipo: 'boda',
  titulo: 'Boda civil',
  nombres: ['Lucía', 'Pablo'],
  conector: '+',
  fecha: '2027-09-18T12:00:00',
  duracionHoras: 6,
  frase: 'Una ceremonia breve, una comida larga.',
  portada: 'img/minimalista-portada.jpg',
  intro: false,
  orden: ['bienvenida', 'contador', 'eventos', 'mapa', 'itinerario', 'vestimenta', 'galeria', 'regalos', 'rsvp'],

  bienvenida: {
    kicker: '01 · Invitación',
    titulo: 'Nos casamos',
    texto: 'Sin protocolo ni pista de baile interminable: solo nosotros, nuestra gente y una buena mesa. Nos encantaría que estuvieras.',
  },

  textosContador: { kicker: '02 · Fecha', titulo: 'Faltan' },
  textosEventos: { kicker: '03 · Lugar', titulo: 'Detalles' },

  eventos: [
    { titulo: 'Ceremonia civil', icono: 'anillos', hora: '12:00 h', lugar: 'Museo Tamayo', direccion: 'Bosque de Chapultepec, CDMX', mapa: 'Museo Tamayo, Ciudad de México' },
    { titulo: 'Comida', icono: 'copa', hora: '14:00 h', lugar: 'Terraza del museo', direccion: 'Bosque de Chapultepec, CDMX', mapa: 'Museo Tamayo, Ciudad de México' },
  ],

  itinerario: [
    { hora: '12:00', actividad: 'Firma' },
    { hora: '13:00', actividad: 'Brindis' },
    { hora: '14:00', actividad: 'Comida' },
    { hora: '17:00', actividad: 'Sobremesa' },
  ],

  vestimenta: { codigo: 'Blanco y negro', descripcion: 'Viste de blanco, negro o ambos.', colores: ['#111111', '#ffffff'] },

  galeria: ['img/minimalista-galeria-1.jpg', 'img/minimalista-galeria-2.jpg', 'img/minimalista-galeria-3.jpg', 'img/minimalista-galeria-4.jpg'],

  regalos: {
    opciones: [{ tipo: 'banco', nombre: 'Transferencia', detalle: 'Santander', cuenta: '0141 8000 2233 4455 66', titular: 'Lucía Ramírez' }],
  },

  rsvp: { kicker: '04 · Respuesta', titulo: 'RSVP', fechaLimite: '2027-08-31', maxPases: 2, para: 'Lucía y Pablo', whatsapp: '', endpoint: '' },

  hashtag: '#LucíaMásPablo',
  pie: 'L + P · 18.09.27',
};
