let { MessageType } = require('@adiwajshing/baileys')
let util = require('util')
let path = require('path')
let fs = require("fs")
let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

let ss = ["./storage/sticker/Bot.webp", "./storage/sticker/Bot1.webp"]
let vn = ss[Math.floor(Math.random() * ss.length)]
let pp = await conn.getProfilePicture(m.sender) 
let ppp = await(await fetch(pp)).buffer()
await conn.sendMessage(m.chat, `*Test*`, MessageType.text, { quoted: m, contextInfo: { externalAdReply: {title: conn.getName(m.sender), body:"© lolibot", mediaType:"2", previewType: "VIDEO", thumbnail: ppp, sourceUrl: "https://youtu.be/3_5zlC6NExY"}}})
//conn.sendMessage(m.chat, { contentText: `*Test*`, footerText: `-`, buttons: [{buttonId: ``, buttonText: {displayText: 'Test'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.ms-excel", "title": "- - -", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 99999999999, "pageCount": "0", "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "- - -⁩", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": false }}, MessageType.buttonsMessage, { quoted: m, thumbnail: false, contextInfo: { mentionedJid: [who], forwardingScore: 750, isForwarded: true, externalAdReply: { title: conn.getName(m.sender), body:"© lolibot", thumbnail: invt, mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/3_5zlC6NExY" } }})
       
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
