let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = conn.prepareMessageFromContent(m.chat, {
		        "extendedTextMessage": {
			"text": "*Test*",
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "3EB03DD1B912",
				"participant": "51988050859@s.whatsapp.net",
				"quotedMessage": {
					"conversation": "Test owo"
				},
				"remoteJid": "51940617554-1600359399@g.us"
			}
		}
				}, {})

await m.reply(`${JSON.stringify(p, null, 1)}`)
await conn.relayWAMessage(p, {waitForAck: true})
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
