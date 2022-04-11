let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  conn.reply(m.chat, wait, m)
  let res = await fetch('https://axoltlapi.herokuapp.com')
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.url) throw json
  conn.sendFile(m.chat, json.url, 'ajolote', `*${json.facts}*`, m)
}

handler.help = ['ajolote']
handler.tags = ['random']
handler.command = /^(ajolote|axoltl)$/i

module.exports = handler
