let { spawn } = require('child_process')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Ingrese un texto junto al comando'
  if (text.length > 19) throw 'El texto es demasiado largo mínimo 19 caracteres'
  let str = '*Cartel loli kawaii 🪧*'
  if (global.support.convert || global.support.magick || global.support.gm) {
  let fontTexts = 'src/font/Zahraaa.ttf'
  let xtsx = 'storage/image/cartel_loli.jpg'
  let bufs = []
  const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
       'convert',
       xtsx,
       '-font',
       fontTexts,
       '-fill',
       '#26619c',
       '-size',
       '100x100',
       '-pointsize',
       '20',
       '-interline-spacing',
       '-7.5',
       '-annotate',
       '+57+255',
       text,
       '-append',
       'jpg:-'
     ]
     spawn(_spawnprocess, _spawnargs)
       .on('close', () => {
         conn.sendFile(m.chat, Buffer.concat(bufs), 'result.jpg', str, m)
       })
       .stdout.on('data', chunk => bufs.push(chunk))
  } else {
    m.reply(str)
  }
}

handler.help = ['cloli']
handler.tags = ['maker']
handler.command = /^(cartelloli|cloli)$/i

module.exports = handler

