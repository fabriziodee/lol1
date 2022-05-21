let fetch = require('node-fetch')
let fs = require('fs')

let handler = async (m, { conn }) => {
conn.reply(m.chat, wait, m)
let ra = Math.floor(Math.random() * 74)
let pack = fs.readFileSync(`./storage/image/pack/gawr_gura/0${ra}.jpg`)
conn.sendFile(m.chat, pack, 'pack', '*Patreon Umeko J hololive Gawr gura - COSPLAY*', m)
}

handler.help = ['pack']
handler.tags = ['nsfw']
handler.command = /^(pack)$/i
handler.nsfw = true

module.exports = handler
