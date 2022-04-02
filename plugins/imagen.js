let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix, watermark }) => {
  if (!text) throw `*Que imagen quiere buscar*\n\n- Ejemplo: ${usedPrefix + command} Minecraft`
  conn.reply(m.chat, wait, m)
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw error
  conn.sendFile(m.chat, await (await fetch(url)).buffer(), 'imagen.jpg', `\t\t‧ 🪴 *Imagen de Google* 🪴 ‧\n\n*• Búsqueda:* ${text}\n*• Tamaño:* ${width + '×' + height} Pixeles\n*• Link:* ${url}`, m)
}

handler.help = ['imagen']
handler.tags = ['internet']
handler.command = /^(gimage|image|imagen)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
