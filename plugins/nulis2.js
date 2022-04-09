let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let fontPath = 'src/font/Zahraaa.ttf'

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `*Escribe un texto*\n\n- Ejemplo: ${usedPrefix + command} Hola`
  if (!global.support.convert &&
      !global.support.magick &&
      !global.support.gm) return handler.disabled = true // Disable if doesnt support
  let inputPath = 'src/kertas/magernulis1.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('es-Id')
  let hari = d.toLocaleDateString('es-Id', { weekday: 'long' })
  let teks = args.join` `
  // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
  let bufs = []
  const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
    'convert',
    inputPath,
    '-font',
    fontPath, 
    '-fill', 
    'blue', 
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-fill', 
    'blue', 
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath, 
    '-fill', 
    'blue', 
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    teks,
    'jpg:-'
  ]
  spawn(_spawnprocess, _spawnargs)
    .on('error', e => conn.reply(m.chat, util.format(e), m))
    .on('close', () => {
      conn.sendFile(m.chat, Buffer.concat(bufs), 'nulis.jpg', 'Es mejor de lo que escribes tu', m)
    })
    .stdout.on('data', chunk => bufs.push(chunk))
}

handler.help = ['nulis2']
handler.tags = ['tools']
handler.command = /^(nulis2)$/i

handler.fail = null

module.exports = handler

