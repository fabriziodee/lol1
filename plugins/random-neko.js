let fetch = require('node-fetch')

let handler = async(m, { conn }) => {
  conn.reply(m.chat, wait, m)
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw error
  conn.sendFile(m.chat, json.url, '', '*NEKO*', m)
}

handler.help = ['neko']
handler.tags = ['random']
handler.command = /^(neko)$/i

module.exports = handler
