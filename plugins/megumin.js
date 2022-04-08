let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  conn.reply(m.chat, wait, m)
  if (!res.ok) throw 'Ocurrió un error el la página!'
  let json = await res.json()
  if (!json.url) throw error
  conn.sendFile(m.chat, json.url, 'megumin', '*MEGUMIN*', m)
}

handler.help = ['megumin']
handler.tags = ['random']
handler.command = /^(megumin)$/i

handler.limit = true

module.exports = handler
