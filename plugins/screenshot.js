let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  let full = /f$/i.test(command)
  if (!args[0]) return conn.reply(m.chat, `*Ingrese el link de una página para sacar captura*\n\n- Ejemplo: ${usedPrefix + command} https://cdn.nekos.life/ero/ero02.png`, m)
  conn.reply(m.chat, wait, m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'error.png', url, m)
}

handler.help = ['screenshot']
handler.tags = ['internet']
handler.command = /^(screenshot|captura|cap|capfull)$/i

handler.fail = null

module.exports = handler
