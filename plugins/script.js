let { MessageType } = require("@adiwajshing/baileys")
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/oHrJTtq.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/oHrJTtq.jpg')).buffer()
let github = `*https://github.com/g4tito/lolibot*`.trim()
conn.sendMessage(m.chat, github, MessageType.text, { quoted: m, contextInfo: { externalAdReply:{title: 'Repositorio de este bot', body: '𝅄 ׂ ׅ ꒰ lolibot 🌸 ୭ ֶָ', previewType: "PHOTO", thumbnail: reusesr, sourceUrl: 'https://github.com/g4tito/lolibot'}}})
}

handler.help = ['script']
handler.tags = ['info']
handler.command = /^(sc|script|repositorio|repobot|scbot)$/i
module.exports = handler
