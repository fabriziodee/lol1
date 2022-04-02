let { MessageType } = require("@adiwajshing/baileys")
let axios = require('axios')

let handler = async(m, { conn }) => {
let les = await (await fetch('https://meme-api.herokuapp.com/gimme/yurigif').buffer()
conn.sendMessage(m.chat, les, MessageType.video, { mimetype: Mimetype.gif, quoted : m })
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
