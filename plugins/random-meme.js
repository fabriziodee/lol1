const axios = require('axios')

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/MemesESP")
let json = res.data
conn.sendFile(m.chat, json.url, 'meme', `*${json.title}*`, m)
}

handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i

module.exports = handler
