let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = conn.prepareMessageFromContent(m.chat, {
					"protocolMessage": {
						"key": {
							"remoteJid": "51940617554-1600359399@g.us",
							"fromMe": false,
							"id": "BB10115ADD606948A0E62968D22DFC6D"
						},
						"type": "REVOKE"
					}
				})
conn.relayWAMessage(p)
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
