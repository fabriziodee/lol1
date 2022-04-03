let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  if (!args[0]) return conn.reply(m.chat, `*Ingrese el link de una imagen para descargar*\n\n- Ejemplo: ${usedPrefix + command} https://cdn.nekos.life/ero/ero02.png`, m)
  conn.reply(m.chat, wait, m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(text)).buffer()
  conn.sendFile(m.chat, ss, 'error.png', url, m)
}

handler.help = ['imgweb']
handler.tags = ['internet']
handler.command = /^(imgweb|imageweb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
