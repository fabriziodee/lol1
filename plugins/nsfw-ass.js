let fetch = require('node-fetch')

    let handler  = async (m, { conn, usedPrefix, command }) => {
    let chat = global.DATABASE.data.chats[m.chat]
    if (chat.nsfw) {
    conn.reply(m.chat, wait, m)
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/ass?apikey=apirey`)
    json = await heum.buffer()
    conn.sendFile(m.chat, json, 'ass', '*ASS*', m)
} else m.reply(nsfw)
}

handler.help = ['ass']
handler.tags = ['nsfw']
handler.command = /^(ass)$/i

module.exports = handler
