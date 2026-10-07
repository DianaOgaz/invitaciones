#!/usr/bin/env python3
"""
Genera versiones de UN SOLO ARCHIVO de cada invitación en la carpeta listas/.

Cada archivo .html incluye dentro los estilos, el código, los datos del evento
y las fotos, así que funciona aunque lo abras solo, lo mandes por correo o lo
subas a cualquier hosting sin carpetas.

Uso (después de editar o crear un evento en eventos/):
    python3 construir.py                 # todas las invitaciones
    python3 construir.py boda-ana-luis   # solo una
"""
import base64
import mimetypes
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
SALIDA = RAIZ / 'listas'
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('image/webp', '.webp')


def data_uri(ruta: Path) -> str:
    tipo = mimetypes.guess_type(ruta.name)[0] or 'application/octet-stream'
    if tipo == 'image/svg+xml':
        from urllib.parse import quote
        return 'data:image/svg+xml;charset=utf-8,' + quote(ruta.read_text(encoding='utf-8'))
    return f'data:{tipo};base64,' + base64.b64encode(ruta.read_bytes()).decode()


def incrustar_css(css: str, carpeta: Path) -> str:
    def rep(m):
        ruta = (carpeta / m.group(2)).resolve()
        return f"url('{data_uri(ruta)}')" if ruta.exists() else m.group(0)
    return re.sub(r"url\((['\"]?)(?!data:|https?:)([^'\")]+)\1\)", rep, css)


def incrustar_js(js: str) -> str:
    """Sustituye rutas 'img/...', 'audio/...' u otras locales del evento por su contenido."""
    def rep(m):
        ruta = RAIZ / m.group(2)
        return f"{m.group(1)}{data_uri(ruta)}{m.group(1)}" if ruta.exists() else m.group(0)
    return re.sub(r"(['\"])((?:img|audio|fotos|media)/[^'\"]+)\1", rep, js)


def construir(evento: Path):
    js_evento = evento.read_text(encoding='utf-8')
    tema = re.search(r"tema:\s*['\"]([\w-]+)['\"]", js_evento)
    tema = tema.group(1) if tema else 'elegante'
    css_tema_ruta = RAIZ / 'css' / 'temas' / f'{tema}.css'
    if not css_tema_ruta.exists():
        print(f'  ! {evento.stem}: no existe el tema "{tema}", se omite')
        return

    base = incrustar_css((RAIZ / 'css' / 'base.css').read_text(encoding='utf-8'), RAIZ / 'css')
    css_tema = incrustar_css(css_tema_ruta.read_text(encoding='utf-8'), css_tema_ruta.parent)
    # @import debe ir al inicio de la hoja: lo sacamos a un <link>
    fuentes = re.findall(r"@import url\('([^']+)'\);", css_tema)
    css_tema = re.sub(r"@import url\('[^']+'\);\s*", '', css_tema)

    html = (RAIZ / 'invitacion.html').read_text(encoding='utf-8')
    portada = re.search(r"portada:\s*['\"]([^'\"]+)['\"]", js_evento)
    titulo = re.search(r"titulo:\s*['\"]([^'\"]+)['\"]", js_evento)
    if titulo:
        html = html.replace('<title>Invitación</title>', f'<title>{titulo.group(1)}</title>')
    if portada:
        html = html.replace('content="img/portada-boda.jpg"', f'content="{portada.group(1)}"')

    estilos = ''.join(f'<link rel="stylesheet" href="{f}">\n  ' for f in fuentes)
    estilos += f'<style>\n{base}\n{css_tema}\n</style>'
    html = html.replace('<link rel="stylesheet" href="css/base.css">', estilos)

    app = (RAIZ / 'js' / 'app.js').read_text(encoding='utf-8')
    scripts = (f'<script>\n{incrustar_js(js_evento)}\nwindow.EVENTO_EMBEBIDO = true;\n</script>\n'
               f'  <script>\n{app}\n</script>')
    html = re.sub(r'<script src="js/app.js".*?></script>', lambda m: scripts, html, flags=re.S)

    destino = SALIDA / f'{evento.stem}.html'
    destino.write_text(html, encoding='utf-8')
    print(f'  ✓ listas/{destino.name}  ({destino.stat().st_size // 1024} KB, tema {tema})')


def galeria():
    """Copia index.html apuntando a las versiones de un solo archivo."""
    html = (RAIZ / 'index.html').read_text(encoding='utf-8')
    html = html.replace('invitacion.html?evento=${p.id}&preview', '${p.id}.html?preview')
    html = html.replace('invitacion.html?evento=${p.id}&invitado=', '${p.id}.html?invitado=')
    html = html.replace('invitacion.html?evento=${p.id}', '${p.id}.html')
    (SALIDA / 'index.html').write_text(html, encoding='utf-8')
    print('  ✓ listas/index.html  (galería)')


if __name__ == '__main__':
    SALIDA.mkdir(exist_ok=True)
    nombres = sys.argv[1:]
    eventos = [RAIZ / 'eventos' / f'{n}.js' for n in nombres] if nombres else sorted((RAIZ / 'eventos').glob('*.js'))
    print('Construyendo invitaciones de un solo archivo…')
    for e in eventos:
        if e.exists():
            construir(e)
        else:
            print(f'  ! no existe {e.relative_to(RAIZ)}')
    if not nombres:
        galeria()
