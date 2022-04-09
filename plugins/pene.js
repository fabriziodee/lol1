const axios = require('axios')

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/penis")
let json = res.data
let ShadowBot = json.url

conn.sendButtonImg(m.chat, ShadowBot, "*Pene 🍆*", '©The Shadow Borkers - Bot', '🥵 SIGUIENTE 🥵', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})
}

handler.command = /^(penexxx)$/i

module.exports = handler
