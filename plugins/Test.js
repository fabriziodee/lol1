let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn }) => {

let ss = ["./storage/sticker/Bot.webp", "./storage/sticker/Bot1.webp"]
let vn = ss[Math.floor(Math.random() * ss.length)]
let pp = await conn.getProfilePicture(m.sender) 
let ppp = await(await fetch(pp)).buffer()
await conn.sendMessage(m.chat, `*Test*`, MessageType.text, { quoted: m, contextInfo: { externalAdReply: {title: conn.getName(m.sender), body:"© lolibot", previewType: "VIDEO", thumbnail: ppp, sourceUrl: "https://youtu.be/3_5zlC6NExY"}}})
       
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
