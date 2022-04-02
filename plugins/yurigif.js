let { MessageType } = require("@adiwajshing/baileys")
let fetch = require('node-fetch')
let axios = require('axios')

let handler = async(m, { conn }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/yurigif")
let les = await (await fetch(res.data.url).buffer())
conn.sendMessage(m.chat, les, MessageType.gif, { quoted : m })
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
