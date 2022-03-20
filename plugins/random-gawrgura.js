const axios = require('axios')

let handler = async(m, { conn }) => {
conn.reply(m.chat, wait, m)
let les = await axios.get('https://meme-api.herokuapp.com/gimme/GawrGura')
conn.sendFile(m.chat, `${les.data.url}`, '', `*${les.data.title}*`, m)
}

handler.help = ['gawrgura']
handler.tags = ['random']
handler.command = /^(gawrgura)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
