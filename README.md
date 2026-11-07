# Durán Presupuestos

App de presupuestos para oficios (aire acondicionado, electricidad, gas, plomería y oficios propios).
Funciona desde el navegador del celular y se agrega a la pantalla de inicio. Todos los datos quedan en el teléfono del usuario.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La app completa |
| `sw.js` | Hace que la app funcione sin internet (guarda la app y el generador de PDF en el teléfono) |
| `manifest.webmanifest` | Nombre, colores e íconos para instalarla en la pantalla de inicio |
| `icons/` | Íconos de la app |
| `privacidad.html` | Política de privacidad y términos (español, portugués e inglés) |
| `netlify.toml` | Configuración de Netlify |

## Publicar en Netlify

1. En Netlify: **Add new site → Import an existing project → GitHub** y elegir este repositorio.
2. No hace falta comando de build. La carpeta a publicar es la raíz (`.`).
3. Cada cambio que se sube a GitHub se publica solo.

## Importante

- La app completa se desbloquea con un código de activación atado a cada teléfono.
- El **generador de códigos NO va en este repositorio** (tiene la llave privada). Guardarlo aparte.
- Conviene que el repositorio sea **privado**.
