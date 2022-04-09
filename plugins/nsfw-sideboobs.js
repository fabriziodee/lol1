let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()

let handler  = async (m, { conn, args }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
json = (await axios.get('https://meme-api.herokuapp.com/gimme/sideboobs')).data
conn.sendFile(m.chat, json.url, 'boobs.jpg', `*${json.title}*`, m, false)
}

handler.help = ['sideboobs']
handler.tags = ['nsfw']
handler.command = /^(sideboobs)$/i

module.exports = handler
