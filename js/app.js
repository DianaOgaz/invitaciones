/* =====================================================================
   Motor de invitaciones digitales
   Lee la configuración de eventos/<id>.js (window.EVENTO) y construye
   la página con el tema elegido. No necesitas editar este archivo para
   crear una invitación nueva: solo copia un archivo de /eventos.

   URL:  invitacion.html?evento=boda-elegante
         &invitado=Familia%20García   (opcional, personaliza el pase)
         &pases=4                     (opcional, lugares reservados)
   ===================================================================== */
(function () {
  'use strict';

  const qs = (s, el = document) => el.querySelector(s);
  const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } },
  };

  const params = new URLSearchParams(location.search);
  const eventoId = (params.get('evento') || 'boda-elegante').replace(/[^\w-]/g, '');
  const invitado = (params.get('invitado') || '').trim().slice(0, 80);
  const pasesURL = parseInt(params.get('pases'), 10);
  const esPreview = params.has('preview');

  /* ---------- Íconos (trazos simples, heredan el color del tema) ---------- */
  const ICONOS = {
    iglesia: '<path d="M12 2v4M10 4h4M6 22V11l6-5 6 5v11M3 22h18M10 22v-4a2 2 0 0 1 4 0v4"/>',
    copa: '<path d="M7 3h5l-.6 5.5a2 2 0 0 1-3.8 0zM9.5 11v7M7 21h5"/><path d="M14 5h5l-.6 5.5a2 2 0 0 1-3.8 0zM16.5 13v5M14 21h5"/>',
    anillos: '<circle cx="9" cy="14" r="5.5"/><circle cx="15" cy="14" r="5.5"/><path d="M7.5 5.5 9 3h2l1.5 2.5L10 7.5z"/>',
    musica: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    birrete: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/>',
    pastel: '<path d="M4 21h16v-8H4zM4 16c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 4 0M12 13V9"/><path d="M12 6.5a1.2 1.2 0 0 0 1.2-1.2C13.2 4 12 3 12 3s-1.2 1-1.2 2.3A1.2 1.2 0 0 0 12 6.5z"/>',
    corona: '<path d="M3 19h18M4.5 19 3 7l5 4 4-6 4 6 5-4-1.5 12"/>',
    pin: '<path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/>',
    reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    regalo: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4 9 8 12 8zM12 8s2-5 4.5-4S15 8 12 8z"/>',
    hotel: '<path d="M3 20V6M3 14h18v6M21 14v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="1.6"/>',
    tarjeta: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
    sobre: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    corazon: '<path d="M12 20s-8-5-8-10.5A4.5 4.5 0 0 1 12 6.7a4.5 4.5 0 0 1 8 2.8C20 15 12 20 12 20z"/>',
    vestido: '<path d="M9 2v4l-3 6 2 1-3 9h14l-3-9 2-1-3-6V2"/><path d="M9 6h6"/>',
    copiar: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    estrella: '<path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',
    flecha: '<path d="M12 5v14M5 12l7 7 7-7"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    pausa: '<path d="M8 5v14M16 5v14"/>',
    cerrar: '<path d="M6 6l12 12M18 6 6 18"/>',
    izq: '<path d="m15 18-6-6 6-6"/>',
    der: '<path d="m9 18 6-6-6-6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    globo: '<path d="M12 15c-3.5 0-6-3-6-6.5a6 6 0 0 1 12 0c0 3.5-2.5 6.5-6 6.5z"/><path d="m11 15-1 2h4l-1-2M12 17c0 2-2 2.5-1 5"/>',
    luna: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
    sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    palmera: '<path d="M13 22c0-6-1-9-2-12"/><path d="M11 10C9 6 5 6 3 8c3-.5 5 .5 8 2zM11 10c1-4 5-6 8-4-3 0-5 1-8 4zM11 10c-3-1-6 1-6 4 2-2 4-3 6-4zM11 10c3-1 6 1 7 4-2-2-4-3-7-4z"/><path d="M8 22h10"/>',
    copo: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/><path d="m9 4 3 2 3-2M9 20l3-2 3 2M4 10.5l3.5.3L9 7.5M20 13.5l-3.5-.3-1.5 3.3M4 13.5l3.5-.3 1.5 3.3M20 10.5l-3.5.3L15 7.5"/>',
    biberon: '<path d="M10 2h4M9 5h6l-1-3h-4zM8 8h8v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zM8 8l1-3M16 8l-1-3M8 12h3M8 15h3M8 18h3"/>',
    ola: '<path d="M2 12c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1"/><path d="M2 17c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1"/><path d="M2 7c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1"/>',
    flor: '<circle cx="12" cy="9" r="2.5"/><path d="M12 6.5C12 3 15 3 15 5.5s-3 3-3 3M12 6.5C12 3 9 3 9 5.5s3 3 3 3M14.5 9c3.5 0 3.5 3 1 3s-3.5-3-3.5-3M9.5 9C6 9 6 12 8.5 12s3.5-3 3.5-3M12 11.5V22M12 18c-3 0-5-2-5-4 3 0 5 2 5 4zM12 16c3 0 5-2 5-4-3 0-5 2-5 4z"/>',
  };
  const icon = (n, cls = '') => `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS[n] || ICONOS.corazon}</svg>`;

  /* ---------- Efecto decorativo por tema (se puede cambiar en config: efecto) ---------- */
  const EFECTO_TEMA = {
    elegante: 'polvo-dorado', floral: 'petalos', fiesta: 'confeti', xv: 'destellos',
    boho: 'petalos', minimalista: null, mexicano: 'confeti', playa: 'burbujas', gatsby: 'polvo-dorado',
    acuarela: 'burbujas', celestial: 'destellos', infantil: 'globos', invierno: 'nieve',
  };

  const TEXTOS = {
    bienvenida: { kicker: 'Bienvenidos', titulo: 'Con mucha alegría' },
    contador: { kicker: 'Falta muy poco', titulo: 'Cuenta regresiva' },
    historia: { kicker: 'Así comenzó', titulo: 'Nuestra historia' },
    eventos: { kicker: 'Cuándo y dónde', titulo: 'Detalles del evento' },
    mapa: { kicker: 'Ubicación', titulo: 'Cómo llegar' },
    itinerario: { kicker: 'Programa', titulo: 'Itinerario' },
    vestimenta: { kicker: 'Dress code', titulo: 'Código de vestimenta' },
    galeria: { kicker: 'Momentos', titulo: 'Galería' },
    padrinos: { kicker: 'Con cariño', titulo: 'Padrinos' },
    regalos: { kicker: 'Detalles', titulo: 'Mesa de regalos' },
    hospedaje: { kicker: 'Para nuestros invitados', titulo: 'Hospedaje' },
    rsvp: { kicker: 'Te esperamos', titulo: 'Confirma tu asistencia' },
  };
  const NAV = { bienvenida: 'Inicio', historia: 'Historia', eventos: 'Evento', mapa: 'Mapa', itinerario: 'Programa', vestimenta: 'Vestimenta', galeria: 'Galería', padrinos: 'Padrinos', regalos: 'Regalos', hospedaje: 'Hospedaje', rsvp: 'Confirmar' };
  const ORDEN = ['bienvenida', 'contador', 'historia', 'eventos', 'mapa', 'itinerario', 'vestimenta', 'galeria', 'padrinos', 'regalos', 'hospedaje', 'rsvp'];

  /* ---------- Arranque ---------- */
  // Versión de un solo archivo (carpeta "listas/"): los datos y estilos ya vienen dentro de la página.
  if (window.EVENTO && window.EVENTO_EMBEBIDO) {
    setTimeout(() => iniciar(window.EVENTO)); // espera a que todo el motor esté definido
  } else {
    const s = document.createElement('script');
    s.src = `eventos/${eventoId}.js`;
    s.onload = () => (window.EVENTO ? iniciar(window.EVENTO) : error());
    s.onerror = error;
    document.head.appendChild(s);
  }

  function error() {
    document.body.classList.remove('cargando');
    qs('#app').innerHTML = `<div class="error-carga"><h1>Invitación no encontrada</h1>
      <p>No se encontró <code>eventos/${esc(eventoId)}.js</code>.</p>
      <p>Si abriste este archivo desde el .zip, primero descomprime la carpeta completa.<br>
      O usa las versiones de un solo archivo que vienen en la carpeta <code>listas/</code>.</p>
      <a href="index.html">Ver plantillas</a></div>`;
  }

  function iniciar(E) {
    const tema = (E.tema || 'elegante').replace(/[^\w-]/g, '');
    document.body.classList.add('tema-' + tema, 'tipo-' + (E.tipo || 'evento'));
    document.title = `${E.titulo || 'Invitación'} · ${(E.nombres || []).join(' & ')}`;

    // Colores personalizados (sobrescriben el tema)
    if (E.colores) Object.entries(E.colores).forEach(([k, v]) => document.documentElement.style.setProperty('--' + k, v));

    if (window.EVENTO_EMBEBIDO) { render(E, tema); return; }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `css/temas/${tema}.css`;
    let listo = false;
    const pintar = () => { if (listo) return; listo = true; render(E, tema); };
    link.onload = pintar;
    link.onerror = pintar;
    document.head.appendChild(link);
    setTimeout(pintar, 2500); // por si la hoja tarda
  }

  /* ---------- Utilidades de fecha ---------- */
  const fechaDe = (E) => (E.fecha ? new Date(E.fecha) : null);
  const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const fmt = (d, o) => new Intl.DateTimeFormat('es-MX', o).format(d);

  function head(sec, extra = {}) {
    const t = { ...TEXTOS[sec], ...extra };
    return `<header class="section-head reveal">
      ${t.kicker ? `<p class="section-kicker">${esc(t.kicker)}</p>` : ''}
      <h2 class="section-title">${esc(t.titulo)}</h2>
      <span class="section-orn" aria-hidden="true"></span>
    </header>`;
  }

  function nombresHTML(E) {
    const n = E.nombres || [];
    if (n.length < 2) return `<span class="hn">${esc(n[0] || '')}</span>`;
    return n.map((x) => `<span class="hn">${esc(x)}</span>`).join(`<span class="amp">${esc(E.conector || '&')}</span>`);
  }

  function iniciales(E) {
    return (E.nombres || []).map((n) => n.trim().charAt(0).toUpperCase()).join(E.nombres.length > 1 ? '&' : '');
  }

  /* =====================================================================
     Secciones
     ===================================================================== */
  const S = {};

  S.intro = (E) => {
    const f = fechaDe(E);
    return `<div class="intro" id="intro" role="dialog" aria-label="Abrir invitación">
      <div class="intro-card">
        <p class="intro-kicker">${esc(E.titulo || 'Estás invitado')}</p>
        <div class="seal" aria-hidden="true"><span>${esc(iniciales(E))}</span></div>
        <div class="intro-names">${nombresHTML(E)}</div>
        ${f ? `<p class="intro-date">${fmt(f, { day: 'numeric', month: 'long', year: 'numeric' })}</p>` : ''}
        ${invitado ? `<p class="intro-para">Para: <strong>${esc(invitado)}</strong></p>` : ''}
        <button class="btn" id="abrir">${esc(E.textoAbrir || 'Abrir invitación')}</button>
      </div>
    </div>`;
  };

  S.nav = (E, secciones) => {
    const links = secciones.filter((k) => NAV[k]).map((k) => `<a href="#${k}">${NAV[k]}</a>`).join('');
    return `<nav class="topnav" id="topnav" aria-label="Secciones">
      <a class="brand" href="#inicio">${esc(iniciales(E))}</a>
      <button class="nav-toggle" aria-label="Menú" aria-expanded="false">${icon('menu')}</button>
      <div class="nav-links">${links}</div>
    </nav>`;
  };

  S.hero = (E) => {
    const f = fechaDe(E);
    const portada = E.portada ? `<div class="hero-photo"><img src="${esc(E.portada)}" alt="" fetchpriority="high"></div>` : '';
    const fecha = f
      ? `<div class="hero-date">
          <span class="hd-side">${cap(fmt(f, { weekday: 'long' }))}</span>
          <span class="hd-day">${fmt(f, { day: 'numeric' })}</span>
          <span class="hd-side">${cap(fmt(f, { month: 'long' }))} ${fmt(f, { year: 'numeric' })}</span>
        </div>`
      : '';
    return `<header class="hero" id="inicio">
      <canvas class="fx" aria-hidden="true"></canvas>
      <div class="hero-inner">
        ${portada}
        <div class="hero-content">
          <p class="eyebrow">${esc(E.titulo || '')}</p>
          <span class="hero-deco" aria-hidden="true"></span>
          ${E.subtitulo ? `<p class="hero-sub">${esc(E.subtitulo)}</p>` : ''}
          <h1 class="hero-names">${nombresHTML(E)}</h1>
          ${fecha}
          ${E.frase ? `<p class="hero-phrase">${esc(E.frase)}</p>` : ''}
          <a href="#rsvp" class="btn btn-hero">Confirmar asistencia</a>
        </div>
      </div>
      <a class="scroll-hint" href="#${E.bienvenida ? 'bienvenida' : 'contador'}" aria-label="Bajar">${icon('flecha')}</a>
    </header>`;
  };

  S.pase = () => {
    if (!invitado) return '';
    const p = pasesURL > 0 ? pasesURL : null;
    return `<section class="pase" id="pase"><div class="container narrow">
      <div class="pase-card reveal">
        <p class="pase-label">Esta invitación es para</p>
        <p class="pase-nombre">${esc(invitado)}</p>
        ${p ? `<p class="pase-lugares">Hemos reservado <strong>${p}</strong> ${p === 1 ? 'lugar' : 'lugares'} en tu honor</p>` : ''}
      </div>
    </div></section>`;
  };

  S.bienvenida = (E) => {
    const b = E.bienvenida;
    if (!b) return '';
    return `<section id="bienvenida"><div class="container narrow center">
      ${head('bienvenida', b)}
      ${b.texto ? `<p class="lead reveal">${esc(b.texto)}</p>` : ''}
      ${b.cita ? `<blockquote class="cita reveal"><p>${esc(b.cita)}</p>${b.citaAutor ? `<cite>${esc(b.citaAutor)}</cite>` : ''}</blockquote>` : ''}
      ${b.padres ? `<div class="padres">${b.padres.map((g) => `<div class="padres-grupo reveal"><h3>${esc(g.titulo)}</h3>${g.nombres.map((n) => `<p>${esc(n)}</p>`).join('')}</div>`).join('')}</div>` : ''}
    </div></section>`;
  };

  S.contador = (E) => {
    const f = fechaDe(E);
    if (!f || E.contador === false) return '';
    return `<section id="contador"><div class="container center">
      ${head('contador', E.textosContador)}
      <div class="countdown reveal" data-fecha="${f.toISOString()}">
        ${['Días', 'Horas', 'Min', 'Seg'].map((l) => `<div class="cd-item"><span class="cd-num">00</span><span class="cd-label">${l}</span></div>`).join('')}
      </div>
      <p class="cd-fecha reveal">${cap(fmt(f, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))} · ${fmt(f, { hour: 'numeric', minute: '2-digit' })}</p>
      <div class="btn-row reveal">
        <a class="btn btn-ghost" id="cal-google" target="_blank" rel="noopener">${icon('calendario')} Google Calendar</a>
        <button class="btn btn-ghost" id="cal-ics">${icon('calendario')} Apple / Outlook</button>
      </div>
    </div></section>`;
  };

  S.historia = (E) => {
    const h = E.historia;
    if (!h || !h.momentos) return '';
    return `<section id="historia"><div class="container">
      ${head('historia', h)}
      ${h.intro ? `<p class="lead center narrow reveal">${esc(h.intro)}</p>` : ''}
      <div class="timeline">
        ${h.momentos.map((m, i) => `<article class="tl-item reveal ${i % 2 ? 'tl-alt' : ''}">
          ${m.foto ? `<div class="tl-photo"><img src="${esc(m.foto)}" alt="${esc(m.titulo)}" loading="lazy"></div>` : '<div class="tl-photo tl-empty"></div>'}
          <span class="tl-dot" aria-hidden="true"></span>
          <div class="tl-body">
            ${m.fecha ? `<span class="tl-date">${esc(m.fecha)}</span>` : ''}
            <h3>${esc(m.titulo)}</h3>
            <p>${esc(m.texto)}</p>
          </div>
        </article>`).join('')}
      </div>
    </div></section>`;
  };

  const mapsQuery = (ev) => (ev.coordenadas ? ev.coordenadas.join(',') : ev.mapa || `${ev.lugar || ''} ${ev.direccion || ''}`);
  const mapsLink = (ev) => ev.linkMaps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery(ev))}`;
  const mapsEmbed = (ev) => ev.mapaEmbed || `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery(ev))}&z=15&output=embed`;
  const wazeLink = (ev) => `https://waze.com/ul?q=${encodeURIComponent(mapsQuery(ev))}&navigate=yes`;

  S.eventos = (E) => {
    const list = E.eventos;
    if (!list || !list.length) return '';
    const conMapa = E.mapa !== false;
    return `<section id="eventos"><div class="container">
      ${head('eventos', E.textosEventos)}
      <div class="cards cards-${Math.min(list.length, 3)}">
        ${list.map((ev, i) => `<article class="card event-card reveal">
          <div class="card-icon">${icon(ev.icono || 'corazon')}</div>
          <h3>${esc(ev.titulo)}</h3>
          ${ev.hora ? `<p class="ev-time">${esc(ev.hora)}</p>` : ''}
          <p class="ev-place">${esc(ev.lugar)}</p>
          ${ev.direccion ? `<p class="ev-address">${esc(ev.direccion)}</p>` : ''}
          <div class="card-actions">
            <a class="btn btn-sm" href="${esc(mapsLink(ev))}" target="_blank" rel="noopener">${icon('pin')} Cómo llegar</a>
            ${conMapa ? `<a class="btn btn-sm btn-ghost" href="#mapa" data-map-go="${i}">Ver mapa</a>` : ''}
          </div>
        </article>`).join('')}
      </div>
    </div></section>`;
  };

  S.mapa = (E) => {
    const list = E.eventos;
    if (!list || !list.length || E.mapa === false) return '';
    return `<section id="mapa"><div class="container">
      ${head('mapa')}
      ${list.length > 1 ? `<div class="tabs reveal" role="tablist">${list.map((ev, i) => `<button role="tab" class="tab ${i ? '' : 'active'}" data-map="${i}" aria-selected="${!i}">${esc(ev.titulo)}</button>`).join('')}</div>` : ''}
      <div class="map-frame reveal">
        <iframe title="Mapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${esc(mapsEmbed(list[0]))}"></iframe>
      </div>
      <div class="btn-row reveal">
        <a class="btn" id="map-gmaps" href="${esc(mapsLink(list[0]))}" target="_blank" rel="noopener">${icon('pin')} Google Maps</a>
        <a class="btn btn-ghost" id="map-waze" href="${esc(wazeLink(list[0]))}" target="_blank" rel="noopener">Waze</a>
      </div>
    </div></section>`;
  };

  S.itinerario = (E) => {
    const it = E.itinerario;
    if (!it || !it.length) return '';
    return `<section id="itinerario"><div class="container narrow">
      ${head('itinerario')}
      <ol class="agenda">
        ${it.map((x) => `<li class="reveal"><span class="ag-hora">${esc(x.hora)}</span><span class="ag-ico">${icon(x.icono || 'estrella')}</span><span class="ag-txt">${esc(x.actividad)}</span></li>`).join('')}
      </ol>
    </div></section>`;
  };

  S.vestimenta = (E) => {
    const v = E.vestimenta;
    if (!v) return '';
    return `<section id="vestimenta"><div class="container narrow center">
      ${head('vestimenta')}
      <div class="card dress-card reveal">
        <div class="card-icon">${icon('vestido')}</div>
        <h3 class="dress-code">${esc(v.codigo)}</h3>
        ${v.descripcion ? `<p>${esc(v.descripcion)}</p>` : ''}
        ${v.colores ? `<div class="swatches">${v.colores.map((c) => `<span class="swatch" style="background:${esc(c)}" title="${esc(c)}"></span>`).join('')}</div>` : ''}
        ${v.nota ? `<p class="nota">${esc(v.nota)}</p>` : ''}
      </div>
    </div></section>`;
  };

  S.galeria = (E) => {
    const g = E.galeria;
    const fotos = g && (Array.isArray(g) ? g : g.fotos);
    if (!fotos || !fotos.length) return '';
    const items = fotos.map((f) => (typeof f === 'string' ? { src: f } : f));
    return `<section id="galeria"><div class="container">
      ${head('galeria', Array.isArray(g) ? {} : g)}
      <div class="carousel reveal" data-carousel tabindex="0" aria-roledescription="carrusel">
        <div class="carousel-viewport"><div class="carousel-track">
          ${items.map((f, i) => `<figure class="carousel-slide" aria-label="${i + 1} de ${items.length}">
            <img src="${esc(f.src)}" alt="${esc(f.alt || f.texto || 'Foto ' + (i + 1))}" loading="${i ? 'lazy' : 'eager'}" data-index="${i}">
            ${f.texto ? `<figcaption>${esc(f.texto)}</figcaption>` : ''}
          </figure>`).join('')}
        </div></div>
        <button class="carousel-btn prev" aria-label="Anterior">${icon('izq')}</button>
        <button class="carousel-btn next" aria-label="Siguiente">${icon('der')}</button>
        <div class="carousel-dots">${items.map((_, i) => `<button aria-label="Ir a foto ${i + 1}" data-dot="${i}"></button>`).join('')}</div>
      </div>
    </div></section>`;
  };

  S.padrinos = (E) => {
    const p = E.padrinos;
    if (!p || !p.length) return '';
    return `<section id="padrinos"><div class="container">
      ${head('padrinos')}
      <div class="padrinos-grid">
        ${p.map((x) => `<div class="padrino reveal"><p class="padrino-rol">${esc(x.rol)}</p><p class="padrino-nombres">${esc(x.nombres)}</p></div>`).join('')}
      </div>
    </div></section>`;
  };

  S.regalos = (E) => {
    const r = E.regalos;
    if (!r) return '';
    const ICO = { tienda: 'regalo', banco: 'tarjeta', sobre: 'sobre' };
    return `<section id="regalos"><div class="container">
      ${head('regalos', r)}
      ${r.texto ? `<p class="lead center narrow reveal">${esc(r.texto)}</p>` : ''}
      <div class="cards cards-${Math.min((r.opciones || []).length, 3)}">
        ${(r.opciones || []).map((o) => `<article class="card gift-card reveal">
          <div class="card-icon">${icon(ICO[o.tipo] || 'regalo')}</div>
          <h3>${esc(o.nombre)}</h3>
          ${o.detalle ? `<p>${esc(o.detalle)}</p>` : ''}
          ${o.cuenta ? `<div class="cuenta"><code>${esc(o.cuenta)}</code><button class="btn-copy" data-copy="${esc(o.cuenta.replace(/\s/g, ''))}" aria-label="Copiar">${icon('copiar')}<span>Copiar</span></button></div>` : ''}
          ${o.titular ? `<p class="titular">Titular: ${esc(o.titular)}</p>` : ''}
          ${o.url ? `<a class="btn btn-sm" href="${esc(o.url)}" target="_blank" rel="noopener">${esc(o.boton || 'Ver mesa')}</a>` : ''}
        </article>`).join('')}
      </div>
    </div></section>`;
  };

  S.hospedaje = (E) => {
    const h = E.hospedaje;
    if (!h || !h.length) return '';
    return `<section id="hospedaje"><div class="container">
      ${head('hospedaje')}
      <div class="cards cards-${Math.min(h.length, 3)}">
        ${h.map((x) => `<article class="card reveal">
          <div class="card-icon">${icon('hotel')}</div>
          <h3>${esc(x.nombre)}</h3>
          ${x.detalle ? `<p>${esc(x.detalle)}</p>` : ''}
          ${x.codigo ? `<p class="nota">Código: <strong>${esc(x.codigo)}</strong></p>` : ''}
          ${x.telefono ? `<p><a href="tel:${esc(x.telefono.replace(/\s/g, ''))}">${esc(x.telefono)}</a></p>` : ''}
          ${x.url ? `<a class="btn btn-sm" href="${esc(x.url)}" target="_blank" rel="noopener">Reservar</a>` : ''}
        </article>`).join('')}
      </div>
    </div></section>`;
  };

  S.rsvp = (E) => {
    const r = E.rsvp;
    if (!r) return '';
    const max = pasesURL > 0 ? pasesURL : r.maxPases || 5;
    const limite = r.fechaLimite ? new Date(r.fechaLimite + 'T23:59:59') : null;
    const cerrado = limite && Date.now() > limite.getTime();
    const opciones = Array.from({ length: max }, (_, i) => `<option value="${i + 1}" ${i + 1 === max && pasesURL > 0 ? 'selected' : ''}>${i + 1}</option>`).join('');
    return `<section id="rsvp"><div class="container narrow">
      ${head('rsvp', r)}
      ${r.texto ? `<p class="lead center reveal">${esc(r.texto)}</p>` : ''}
      ${limite ? `<p class="rsvp-limite center reveal">Por favor confirma antes del <strong>${fmt(limite, { day: 'numeric', month: 'long', year: 'numeric' })}</strong></p>` : ''}
      <div class="card rsvp-card reveal">
        ${cerrado
          ? `<p class="center">El periodo de confirmación ha terminado. Si tienes dudas, contacta a los anfitriones${r.whatsapp ? ` por <a href="https://wa.me/${esc(r.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>` : ''}.</p>`
          : `<form id="rsvp-form" novalidate>
          <div class="field">
            <label for="f-nombre">Nombre completo</label>
            <input id="f-nombre" name="nombre" required autocomplete="name" value="${esc(invitado)}" placeholder="Tu nombre">
          </div>
          <fieldset class="field">
            <legend>¿Nos acompañarás?</legend>
            <div class="choice">
              <label><input type="radio" name="asistencia" value="si" required checked><span>Sí, ahí estaré</span></label>
              <label><input type="radio" name="asistencia" value="no"><span>No podré asistir</span></label>
            </div>
          </fieldset>
          <div class="field-row" data-si>
            <div class="field">
              <label for="f-personas">Número de personas</label>
              <select id="f-personas" name="personas">${opciones}</select>
            </div>
            <div class="field">
              <label for="f-tel">Teléfono</label>
              <input id="f-tel" name="telefono" type="tel" autocomplete="tel" placeholder="Opcional">
            </div>
          </div>
          ${r.preguntarAlimentos ? `<div class="field" data-si><label for="f-alim">Alergias o restricciones alimentarias</label><input id="f-alim" name="restricciones" placeholder="Ej. vegetariano, sin gluten…"></div>` : ''}
          ${r.preguntarCancion ? `<div class="field" data-si><label for="f-cancion">¿Qué canción no puede faltar?</label><input id="f-cancion" name="cancion" placeholder="Opcional"></div>` : ''}
          <div class="field">
            <label for="f-msg">Mensaje para ${esc(r.para || 'los anfitriones')}</label>
            <textarea id="f-msg" name="mensaje" rows="3" placeholder="Opcional"></textarea>
          </div>
          <p class="form-error" role="alert" hidden></p>
          <button class="btn btn-block" type="submit">Enviar confirmación</button>
          ${!r.endpoint ? `<p class="demo-note">Modo demostración: las respuestas se guardan solo en este navegador. Configura <code>rsvp.endpoint</code> para recibirlas en Google Sheets.</p>` : ''}
        </form>`}
        <div class="rsvp-gracias" hidden></div>
      </div>
    </div></section>`;
  };

  S.footer = (E) => `<footer class="footer">
      <canvas class="fx fx-footer" aria-hidden="true"></canvas>
      <div class="container center">
        ${E.cierre ? `<p class="footer-msg">${esc(E.cierre)}</p>` : ''}
        <p class="footer-names">${nombresHTML(E)}</p>
        ${E.hashtag ? `<p class="hashtag">${esc(E.hashtag)}</p>` : ''}
        <p class="footer-small">${esc(E.pie || 'Hecho con cariño')}</p>
      </div>
    </footer>`;

  S.musica = (E) => (E.musica ? `<button class="music-btn" id="music-btn" aria-label="Música">${icon('musica')}</button><audio id="audio" src="${esc(E.musica)}" loop preload="none"></audio>` : '');

  /* =====================================================================
     Render + comportamiento
     ===================================================================== */
  function render(E, tema) {
    const orden = (E.orden || ORDEN).filter((k) => S[k]);
    const partes = orden.map((k) => [k, S[k](E)]).filter(([, h]) => h);
    const secciones = partes.map(([k]) => k);
    const usarIntro = E.intro !== false && !esPreview;

    qs('#app').innerHTML = [
      usarIntro ? S.intro(E) : '',
      S.nav(E, secciones),
      S.hero(E),
      '<main>',
      S.pase(),
      partes.map(([, h]) => h).join(''),
      '</main>',
      S.footer(E),
      S.musica(E),
      '<div class="toast" id="toast" role="status"></div>',
    ].join('');

    // Alternar fondos de sección
    qsa('main > section').forEach((sec, i) => sec.classList.toggle('alt', i % 2 === 1));
    document.body.classList.remove('cargando');

    const efecto = E.efecto === undefined ? EFECTO_TEMA[tema] : E.efecto;
    particulas(qs('.hero .fx'), efecto, qs('.hero'));
    particulas(qs('.footer .fx'), efecto, qs('.footer'), 0.5);

    if (usarIntro) intro(E, efecto);
    nav();
    reveal();
    contador(E);
    calendario(E);
    mapa(E);
    qsa('[data-carousel]').forEach(carrusel);
    copiar();
    rsvp(E, efecto);
    musica();
  }

  function toast(msg) {
    const t = qs('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('show'), 2400);
  }

  function intro(E, efecto) {
    document.body.classList.add('intro-abierta');
    qs('#abrir').addEventListener('click', () => {
      qs('#intro').classList.add('cerrar');
      document.body.classList.remove('intro-abierta');
      const a = qs('#audio');
      if (a) a.play().then(() => qs('#music-btn').classList.add('playing')).catch(() => {});
      if (efecto === 'confeti') festejo();
      setTimeout(() => qs('#intro')?.remove(), 1200);
    });
  }

  function nav() {
    const n = qs('#topnav');
    const onScroll = () => n.classList.toggle('scrolled', scrollY > innerHeight * 0.6);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const t = qs('.nav-toggle');
    t.addEventListener('click', () => {
      const open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open);
    });
    qsa('.nav-links a').forEach((a) => a.addEventListener('click', () => n.classList.remove('open')));
  }

  function reveal() {
    const els = qsa('.reveal');
    if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('visible'));
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((e) => io.observe(e));
  }

  function contador(E) {
    const cd = qs('.countdown');
    if (!cd) return;
    const meta = new Date(cd.dataset.fecha).getTime();
    const nums = qsa('.cd-num', cd);
    const tick = () => {
      let d = Math.max(0, meta - Date.now());
      const v = [864e5, 36e5, 6e4, 1e3].map((u) => { const x = Math.floor(d / u); d -= x * u; return x; });
      nums.forEach((n, i) => (n.textContent = String(v[i]).padStart(2, '0')));
      if (meta <= Date.now()) cd.classList.add('llego');
    };
    tick();
    setInterval(tick, 1000);
  }

  function calendario(E) {
    const f = fechaDe(E);
    if (!f) return;
    const fin = new Date(f.getTime() + (E.duracionHoras || 6) * 36e5);
    const p = (n) => String(n).padStart(2, '0');
    const local = (d) => `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(d.getHours())}${p(d.getMinutes())}00`;
    const utc = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const titulo = `${E.titulo || 'Evento'} · ${(E.nombres || []).join(' & ')}`;
    const ev0 = (E.eventos || [])[0] || {};
    const lugar = [ev0.lugar, ev0.direccion].filter(Boolean).join(', ');
    const g = qs('#cal-google');
    if (g) g.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&dates=${local(f)}/${local(fin)}&ctz=${encodeURIComponent(E.zonaHoraria || 'America/Mexico_City')}&details=${encodeURIComponent(location.href.split('&invitado')[0])}&location=${encodeURIComponent(lugar)}`;
    const b = qs('#cal-ics');
    if (b) b.addEventListener('click', () => {
      const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Invitaciones//ES', 'BEGIN:VEVENT',
        `UID:${eventoId}-${utc(f)}@invitacion`, `DTSTAMP:${utc(new Date())}`, `DTSTART:${utc(f)}`, `DTEND:${utc(fin)}`,
        `SUMMARY:${titulo}`, `LOCATION:${lugar.replace(/,/g, '\\,')}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
      a.download = `${eventoId}.ics`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
  }

  function mapa(E) {
    const iframe = qs('#mapa iframe');
    if (!iframe) return;
    const set = (i) => {
      const ev = E.eventos[i];
      iframe.src = mapsEmbed(ev);
      qs('#map-gmaps').href = mapsLink(ev);
      qs('#map-waze').href = wazeLink(ev);
      qsa('#mapa .tab').forEach((t, j) => { t.classList.toggle('active', i === j); t.setAttribute('aria-selected', i === j); });
    };
    qsa('#mapa .tab').forEach((t) => t.addEventListener('click', () => set(+t.dataset.map)));
    qsa('[data-map-go]').forEach((a) => a.addEventListener('click', () => set(+a.dataset.mapGo)));
  }

  function carrusel(root) {
    const track = qs('.carousel-track', root);
    const slides = qsa('.carousel-slide', root);
    const dots = qsa('[data-dot]', root);
    let i = 0, timer;
    const go = (n) => {
      i = (n + slides.length) % slides.length;
      track.style.transform = `translateX(${-i * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle('active', j === i));
      slides.forEach((s, j) => s.setAttribute('aria-hidden', j !== i));
    };
    const auto = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 5000); };
    qs('.prev', root).addEventListener('click', () => { go(i - 1); auto(); });
    qs('.next', root).addEventListener('click', () => { go(i + 1); auto(); });
    dots.forEach((d) => d.addEventListener('click', () => { go(+d.dataset.dot); auto(); }));
    root.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') go(i - 1); if (e.key === 'ArrowRight') go(i + 1); });
    root.addEventListener('mouseenter', () => clearInterval(timer));
    root.addEventListener('mouseleave', auto);

    // Deslizar con el dedo
    let x0 = null, dx = 0;
    const vp = qs('.carousel-viewport', root);
    vp.addEventListener('pointerdown', (e) => { x0 = e.clientX; dx = 0; track.style.transition = 'none'; clearInterval(timer); });
    vp.addEventListener('pointermove', (e) => {
      if (x0 === null) return;
      dx = e.clientX - x0;
      track.style.transform = `translateX(calc(${-i * 100}% + ${dx}px))`;
    });
    const end = () => {
      if (x0 === null) return;
      track.style.transition = '';
      if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1); else go(i);
      x0 = null; auto();
    };
    vp.addEventListener('pointerup', end);
    vp.addEventListener('pointerleave', end);
    vp.addEventListener('pointercancel', end);

    // Ver en grande (clic sin arrastrar)
    slides.forEach((s, j) => qs('img', s).addEventListener('click', () => { if (Math.abs(dx) < 5) lightbox(slides.map((x) => qs('img', x)), j); }));
    qsa('img', track).forEach((img) => img.setAttribute('draggable', 'false'));
    go(0);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) auto();
  }

  function lightbox(imgs, start) {
    let i = start;
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `<button class="lb-close" aria-label="Cerrar">${icon('cerrar')}</button>
      <button class="lb-nav lb-prev" aria-label="Anterior">${icon('izq')}</button>
      <img alt=""><button class="lb-nav lb-next" aria-label="Siguiente">${icon('der')}</button>`;
    const img = qs('img', lb);
    const show = () => { img.src = imgs[i].src; img.alt = imgs[i].alt; };
    const close = () => { lb.remove(); removeEventListener('keydown', key); };
    const key = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') { i = (i - 1 + imgs.length) % imgs.length; show(); }
      if (e.key === 'ArrowRight') { i = (i + 1) % imgs.length; show(); }
    };
    qs('.lb-close', lb).onclick = close;
    qs('.lb-prev', lb).onclick = () => { i = (i - 1 + imgs.length) % imgs.length; show(); };
    qs('.lb-next', lb).onclick = () => { i = (i + 1) % imgs.length; show(); };
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    addEventListener('keydown', key);
    show();
    document.body.appendChild(lb);
  }

  function copiar() {
    qsa('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy); toast('Copiado al portapapeles'); }
      catch (e) { toast(b.dataset.copy); }
    }));
  }

  function rsvp(E, efecto) {
    const form = qs('#rsvp-form');
    if (!form) return;
    const r = E.rsvp;
    const gracias = qs('.rsvp-gracias');
    const err = qs('.form-error', form);
    const clave = 'rsvp-hecho-' + eventoId + (invitado ? '-' + invitado : '');

    const toggleSi = () => {
      const si = form.asistencia.value === 'si';
      qsa('[data-si]', form).forEach((el) => (el.hidden = !si));
    };
    qsa('input[name=asistencia]', form).forEach((x) => x.addEventListener('change', toggleSi));

    const mostrarGracias = (d) => {
      const si = d.asistencia === 'si';
      const nombres = (E.nombres || []).join(' y ');
      const msgWA = `Hola, soy ${d.nombre}. ${si ? `Confirmo mi asistencia (${d.personas} ${d.personas == 1 ? 'persona' : 'personas'})` : 'Lamentablemente no podré asistir'} a ${E.titulo || 'el evento'} de ${nombres}.`;
      gracias.innerHTML = `<div class="gracias-ico">${icon(si ? 'corazon' : 'sobre')}</div>
        <h3>${si ? '¡Gracias por confirmar!' : 'Gracias por avisarnos'}</h3>
        <p>${si ? `Te esperamos, <strong>${esc(d.nombre)}</strong>. Registramos ${esc(d.personas)} ${d.personas == 1 ? 'lugar' : 'lugares'}.` : `Te extrañaremos, <strong>${esc(d.nombre)}</strong>.`}</p>
        <div class="btn-row">
          ${r.whatsapp ? `<a class="btn" href="https://wa.me/${esc(r.whatsapp)}?text=${encodeURIComponent(msgWA)}" target="_blank" rel="noopener">Avisar por WhatsApp</a>` : ''}
          <button class="btn btn-ghost" id="rsvp-cambiar">Cambiar respuesta</button>
        </div>`;
      form.hidden = true;
      gracias.hidden = false;
      qs('#rsvp-cambiar').onclick = () => { form.hidden = false; gracias.hidden = true; };
    };

    const previo = store.get(clave);
    if (previo) mostrarGracias(previo);
    toggleSi();

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      err.hidden = true;
      const fd = new FormData(form);
      const d = Object.fromEntries(fd.entries());
      d.nombre = (d.nombre || '').trim();
      if (!d.nombre) { err.textContent = 'Por favor escribe tu nombre.'; err.hidden = false; form.nombre.focus(); return; }
      if (d.asistencia === 'no') d.personas = 0;
      Object.assign(d, { evento: eventoId, invitado, pasesAsignados: pasesURL > 0 ? pasesURL : '', enviado: new Date().toISOString() });

      const btn = qs('button[type=submit]', form);
      btn.disabled = true;
      btn.textContent = 'Enviando…';
      try {
        if (r.endpoint) {
          // Google Apps Script: text/plain evita el bloqueo CORS; la respuesta es opaca pero el registro se guarda.
          await fetch(r.endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(d) });
        } else {
          const k = 'rsvp-demo-' + eventoId;
          store.set(k, [...(store.get(k) || []), d]);
        }
        store.set(clave, d);
        mostrarGracias(d);
        if (d.asistencia === 'si' && efecto) festejo();
      } catch (ex) {
        err.textContent = 'No pudimos enviar tu respuesta. Revisa tu conexión e inténtalo de nuevo.';
        err.hidden = false;
      } finally {
        btn.disabled = false;
        btn.textContent = 'Enviar confirmación';
      }
    });
  }

  function musica() {
    const b = qs('#music-btn');
    if (!b) return;
    const a = qs('#audio');
    b.addEventListener('click', () => {
      if (a.paused) a.play().then(() => b.classList.add('playing')).catch(() => toast('No se pudo reproducir'));
      else { a.pause(); b.classList.remove('playing'); }
    });
  }

  /* ---------- Partículas decorativas (canvas) ---------- */
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coloresFx = () => getComputedStyle(document.body).getPropertyValue('--fx-colors').split(',').map((x) => x.trim()).filter(Boolean);

  function particulas(canvas, tipo, host, densidad = 1) {
    if (!canvas || !tipo || reduce()) return;
    const ctx = canvas.getContext('2d');
    const colors = coloresFx().length ? coloresFx() : ['#d4af37'];
    let W = 0, H = 0, visible = true, raf;
    const N = Math.round(({ petalos: 22, destellos: 45, confeti: 55, 'polvo-dorado': 60, nieve: 90, burbujas: 26, globos: 9 }[tipo] || 30) * densidad);
    const sube = ['polvo-dorado', 'burbujas', 'globos'].includes(tipo);
    const R = { 'polvo-dorado': [0.6, 2.2], destellos: [2, 6], nieve: [1, 3.6], burbujas: [3, 13], globos: [14, 22] };
    const V = { 'polvo-dorado': [-0.5, -0.15], destellos: [-0.15, 0.15], nieve: [0.3, 1.1], burbujas: [-0.9, -0.25], globos: [-0.8, -0.35], confeti: [0.5, 2.2] };
    const rnd = (a, b) => a + Math.random() * (b - a);
    const P = [];
    const spawn = (p, inicio) => {
      p.c = colors[Math.floor(Math.random() * colors.length)];
      p.r = rnd(...(R[tipo] || [5, 10]));
      p.x = rnd(0, W); p.y = inicio ? rnd(0, H) : (sube ? H + p.r * 3 : -20);
      p.vy = rnd(...(V[tipo] || [0.5, 1.1]));
      p.vx = rnd(-0.3, 0.3); p.a = rnd(0, Math.PI * 2); p.va = rnd(-0.04, 0.04); p.t = rnd(0, 100); p.ts = rnd(0.02, 0.06);
      return p;
    };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    for (let i = 0; i < N; i++) P.push(spawn({}, true));
    addEventListener('resize', resize);
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }).observe(host);

    function draw(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.a);
      ctx.fillStyle = p.c;
      if (tipo === 'petalos') {
        ctx.globalAlpha = 0.75;
        ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2); ctx.fill();
      } else if (tipo === 'confeti') {
        ctx.scale(1, Math.cos(p.t));
        ctx.fillRect(-p.r / 2, -p.r / 3, p.r, p.r * 0.6);
      } else if (tipo === 'nieve') {
        ctx.globalAlpha = 0.85;
        ctx.beginPath(); ctx.arc(0, 0, p.r, 0, Math.PI * 2); ctx.fill();
      } else if (tipo === 'burbujas') {
        ctx.globalAlpha = 0.55;
        ctx.strokeStyle = p.c; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.arc(0, 0, p.r, 0, Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = 0.35;
        ctx.beginPath(); ctx.arc(-p.r * 0.35, -p.r * 0.35, p.r * 0.22, 0, Math.PI * 2); ctx.fill();
      } else if (tipo === 'globos') {
        ctx.rotate(-p.a + Math.sin(p.t) * 0.08);
        ctx.globalAlpha = 0.9;
        ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, p.r * 1.2); ctx.quadraticCurveTo(p.r * 0.4, p.r * 2.2, 0, p.r * 3.2); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * 1.2, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-3, p.r * 1.3); ctx.lineTo(3, p.r * 1.3); ctx.lineTo(0, p.r * 1.12); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.globalAlpha = 0.35;
        ctx.beginPath(); ctx.ellipse(-p.r * 0.35, -p.r * 0.45, p.r * 0.18, p.r * 0.32, -0.5, 0, Math.PI * 2); ctx.fill();
      } else if (tipo === 'destellos') {
        ctx.globalAlpha = 0.25 + 0.75 * Math.abs(Math.sin(p.t));
        const r = p.r;
        ctx.beginPath();
        ctx.moveTo(0, -r); ctx.quadraticCurveTo(0, 0, r, 0); ctx.quadraticCurveTo(0, 0, 0, r);
        ctx.quadraticCurveTo(0, 0, -r, 0); ctx.quadraticCurveTo(0, 0, 0, -r); ctx.fill();
      } else {
        ctx.globalAlpha = 0.3 + 0.6 * Math.abs(Math.sin(p.t));
        ctx.beginPath(); ctx.arc(0, 0, p.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }
    function loop() {
      cancelAnimationFrame(raf);
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of P) {
        p.t += p.ts; p.a += p.va;
        p.x += p.vx + (['petalos', 'nieve', 'burbujas', 'globos'].includes(tipo) ? Math.sin(p.t) * (tipo === 'globos' ? 0.3 : 0.6) : 0);
        p.y += p.vy;
        const m = p.r * 4 + 30;
        if (p.y > H + m || p.y < -m || p.x < -m || p.x > W + m) spawn(p, tipo === 'destellos');
        draw(p);
      }
      raf = requestAnimationFrame(loop);
    }
    loop();
  }

  // Ráfaga de confeti a pantalla completa (al confirmar asistencia)
  function festejo() {
    if (reduce()) return;
    const c = document.createElement('canvas');
    c.className = 'festejo';
    document.body.appendChild(c);
    const ctx = c.getContext('2d');
    const W = (c.width = innerWidth), H = (c.height = innerHeight);
    const colors = coloresFx().length ? coloresFx() : ['#e91e63', '#ffc107', '#3f51b5'];
    const P = Array.from({ length: 140 }, () => ({
      x: W / 2, y: H * 0.6, vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 16 - 6,
      r: 5 + Math.random() * 6, c: colors[Math.floor(Math.random() * colors.length)], a: Math.random() * 6, t: Math.random() * 6,
    }));
    const t0 = performance.now();
    (function f(now) {
      ctx.clearRect(0, 0, W, H);
      P.forEach((p) => {
        p.vy += 0.35; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += 0.1; p.t += 0.15;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.scale(1, Math.cos(p.t));
        ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore();
      });
      if (now - t0 < 3200) requestAnimationFrame(f); else c.remove();
    })(t0);
  }
})();
