const axios = require('axios')

let handler = async(m, { conn }) => {
let les = await axios.get('https://meme-api.herokuapp.com/gimme/yurigif')
conn.sendFile(m.chat, `${les.data.url}`, 'yuri.gif', `*${les.data.title}*`, m, 0, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
  }
handler.help = ['yurigif']
handler.tags = ['nsfw']
handler.command = /^(yurigif)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
