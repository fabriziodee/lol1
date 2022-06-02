let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let res = await conn.prepareMessageFromContent(m.chat, {
requestPaymentMessage: {
                    noteMessage: "Test",
                        currencyCodeIso4217: "IDR",
                        amount1000: "100000",
                        requestFrom: `lolibot`,
                        expiryTimestamp: 1,
                        amount: `100000`,
                  }
    }, { quoted: m })
await conn.relayWAMessage(res)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
