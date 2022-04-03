let { MessageType } = require("@adiwajshing/baileys")
let fetch = require('node-fetch')
let fs = require("fs")

let handler = async (m, { conn, usedPrefix }) => {
let sc = fs.readFileSync('./storage/image/menu2.jpg')
let github = 'https://github.com/g4tito/lolibot'
conn.sendMessage(m.chat, github, MessageType.text, { quoted: m, contextInfo: { externalAdReply:{title: 'Repositorio de este bot', body: '𝅄 ׂ ׅ ꒰ lolibot 🌸 ୭ ֶָ', previewType: "PHOTO", thumbnail: sc, sourceUrl: github }}})
}

handler.help = ['script']
handler.tags = ['info']
handler.command = /^(sc|script|repositorio|repobot|scbot)$/i

module.exports = handler
