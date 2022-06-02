let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

//let tumb = fs.readFileSync('./storage/image/menu2.jpg')
let tumbb = await conn.getProfilePicture("51940617554-1604073088@g.us")
let tumb = await(await fetch(tumbb)).buffer()

let res = await conn.prepareMessageFromContent(m.chat, tumb, MessageType.image)

await m.reply(`${JSON.stringify(res, null, 1)}`)

await conn.relayWAMessage(res)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
