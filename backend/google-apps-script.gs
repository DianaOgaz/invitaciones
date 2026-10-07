/**
 * =====================================================================
 *  RSVP → Google Sheets  (gratis, sin servidor)
 * =====================================================================
 *  1. Crea una Hoja de cálculo de Google nueva (sheets.new).
 *  2. Menú  Extensiones → Apps Script.  Borra lo que haya y pega este archivo.
 *  3. (Opcional) escribe tu correo en AVISAR_A para recibir un email por cada respuesta.
 *  4. Botón  Implementar → Nueva implementación → Tipo: "Aplicación web".
 *       - Ejecutar como:  Yo
 *       - Quién tiene acceso:  Cualquier usuario
 *  5. Autoriza los permisos y copia la URL que termina en /exec.
 *  6. Pega esa URL en tu archivo de evento:   rsvp: { endpoint: 'https://script.google.com/macros/s/.../exec' }
 *
 *  Cada evento guarda sus respuestas en una pestaña con su nombre
 *  (ej. "boda-elegante"), así una sola hoja sirve para varias invitaciones.
 * =====================================================================
 */

const AVISAR_A = '';   // ej. 'tucorreo@gmail.com'  — déjalo vacío para no enviar correos

const COLUMNAS = [
  'Fecha de registro', 'Nombre', 'Asistencia', 'Personas', 'Teléfono',
  'Restricciones', 'Canción', 'Mensaje', 'Invitación para', 'Pases asignados',
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    const nombreHoja = String(d.evento || 'Confirmaciones').slice(0, 90);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let hoja = ss.getSheetByName(nombreHoja);
    if (!hoja) {
      hoja = ss.insertSheet(nombreHoja);
      hoja.appendRow(COLUMNAS);
      hoja.getRange(1, 1, 1, COLUMNAS.length).setFontWeight('bold').setBackground('#f3ede4');
      hoja.setFrozenRows(1);
    }
    const limpiar = (v) => String(v == null ? '' : v).replace(/^[=+\-@]/, "'$&").slice(0, 500); // evita fórmulas inyectadas
    hoja.appendRow([
      new Date(),
      limpiar(d.nombre),
      d.asistencia === 'si' ? 'Sí' : 'No',
      Number(d.personas) || 0,
      limpiar(d.telefono),
      limpiar(d.restricciones),
      limpiar(d.cancion),
      limpiar(d.mensaje),
      limpiar(d.invitado),
      limpiar(d.pasesAsignados),
    ]);

    if (AVISAR_A) {
      MailApp.sendEmail(AVISAR_A,
        `RSVP ${nombreHoja}: ${d.nombre} — ${d.asistencia === 'si' ? 'Sí asiste (' + d.personas + ')' : 'No asiste'}`,
        `Nombre: ${d.nombre}\nAsistencia: ${d.asistencia}\nPersonas: ${d.personas}\nTeléfono: ${d.telefono || '-'}\nMensaje: ${d.mensaje || '-'}`);
    }
    return respuesta({ ok: true });
  } catch (err) {
    return respuesta({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Abre la URL /exec en el navegador para comprobar que funciona. */
function doGet() {
  return respuesta({ ok: true, mensaje: 'El servicio de confirmaciones está activo.' });
}

function respuesta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Agrega una pestaña "Resumen" con totales por evento (ejecútala manualmente cuando quieras). */
function generarResumen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let res = ss.getSheetByName('Resumen') || ss.insertSheet('Resumen', 0);
  res.clear();
  res.appendRow(['Evento', 'Respuestas', 'Confirmados (personas)', 'No asisten']);
  ss.getSheets().filter((h) => h.getName() !== 'Resumen').forEach((h) => {
    const filas = h.getDataRange().getValues().slice(1);
    const si = filas.filter((f) => f[2] === 'Sí');
    res.appendRow([h.getName(), filas.length, si.reduce((t, f) => t + (Number(f[3]) || 0), 0), filas.length - si.length]);
  });
  res.getRange(1, 1, 1, 4).setFontWeight('bold');
}
