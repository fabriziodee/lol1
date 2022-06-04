let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = conn.prepareMessage(m.chat, { requestPaymentMessage: {
                        noteMessage: "Entahlah",
                        currencyCodeIso4217: "IDR",
                        amount1000: "100000",
                        requestFrom: `Wea Bot 🤖`,
                        expiryTimestamp: 1,
                        amount: `100000`,
                  }})
await m.reply(`${JSON.stringify(p, null, 1)}`)
await conn.relayWAMessage(p)
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
