let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

//let tumb = fs.readFileSync('./storage/image/menu2.jpg')
let tumb = fs.readFileSync('./storage/gif/loli_logo.gif')
//let tumbb = await conn.getProfilePicture("51940617554-1604073088@g.us")


//let tumbb = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`)
//let tumb = await tumbb.buffer()
//let tumb = await(await fetch(tumbb)).buffer()

let res = await conn.prepareMessage(m.chat, tumb, MessageType.video, { quoted: m, mimetype: 'video/gif' })

let typenya = res.message.imageMessage

//typenya["viewOnce"] = true

typenya["fileLength"] = 99999999999

//typenya["height"] = 50

//typenya["width"] = 100

await m.reply(`${JSON.stringify(res, null, 1)}`)

await conn.relayWAMessage(res)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
