let fetch = require('node-fetch')

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `*Que imagen desea buscar*\n\n- Ejemplo: ${usedPrefix + command} minecraft`
conn.reply(m.chat, wait, m)
heum = await require('../lib/scraper').pinterest(text)
json = await heum
random = json.result[Math.floor(Math.random() * json.result.length)]
if (json.result.length == 0) return conn.reply(m.chat, error, m)
data = await fetch('https://api.imgbb.com/1/upload?key=c93b7d1d3f7a145263d4651c46ba55e4&image='+random).then(v => v.json())
get = await conn.getFile(data.data.url)
conn.sendMessage(m.chat, get.data, 'imageMessage', { quoted: m, mimetype: get.mime, caption: data.data.url })}

handler.help = ['pinterest']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

handler.fail = null

module.exports = handler
