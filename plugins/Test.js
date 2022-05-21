let { MessageType } = require("@adiwajshing/baileys");
let util = require('util')
let path = require('path')
let fs = require("fs")
let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

await conn.fakeReply(m.chat, `*[ 🎰 SLOT 🎰 ]*

🍌 | 🪙 | 🍋
🍑 | 🍑 | 🍑 *⇐*
🍎 | 🍅 | 🪙

*[ 🎰 SLOT 🎰 ]*`, '0@s.whatsapp.net', `*Ganaste x3*\n${shortNum(7518783450)} de Dinero`, 'status@broadcast')
}

handler.command = /^(‎slot)$/i
handler.owner = true

module.exports = handler

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
