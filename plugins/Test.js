let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = conn.prepareMessageFromContent(m.chat, {
		        "extendedTextMessage": {
			"text": "Test owo",
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "3EB03DD1B912",
				"participant": false,
				"quotedMessage": {
					"conversation": false
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
