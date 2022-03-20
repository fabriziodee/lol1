const axios = require('axios')

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/MemesESP")
let json = res.data
let ShadowBot = 
conn.sendFile(m.chat, json.url, 'meme', `*${json.title}*`, m)
}
conn.sendButtonImg(m.chat, json.url, "*😂😂😂😂😂*", '©The Shadow Borkers - Bot', '😂 SIGUIENTE 😂', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}

handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i

module.exports = handler
