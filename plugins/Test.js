let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = conn.prepareMessageFromContent(m.chat, {
					"templateMessage": {
						"hydratedFourRowTemplate": {
							"imageMessage": {
								"url": "https://mmg.whatsapp.net/d/f/AkegZuFDXySjfrk-4U160pu47hykhg6C8ZSjof4mdZ00.enc",
								"mimetype": "image/jpeg",
								"caption": "📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* Zeus golpeame...\n📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* te faltan bolas.\n📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* hace 4 meses\n⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* 13 segundos\n👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* 12,150 vistas",
								"fileSha256": "DET3MxjjOT8L+f9ZloFsLu878QzwqJAwLQw1PMTmMTE=",
								"fileLength": "5122",
								"mediaKey": "+upKO/keFovaICXOfP+W90ehYira+R+QiRxHrjd+z98=",
								"fileEncSha256": "6oh8qDUXrxv66zJLZuNZiB/+1dNBzTb/Fa9NdoyczhI=",
								"directPath": "/v/t62.7118-24/32097264_307480974788497_2841257977436975887_n.enc?ccb=11-4&oh=01_AVzjIF1Yd4Olb1J-OhVt3gheazNENfpm3eiO_cJmePc61Q&oe=62C14938",
								"mediaKeyTimestamp": "1654281335"
							},
							"hydratedContentText": "📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* Zeus golpeame...\n📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* te faltan bolas.\n📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* hace 4 meses\n⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* 13 segundos\n👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* 12,150 vistas",
							"hydratedFooterText": "KOMI",
							"hydratedButtons": [
								{
									"urlButton": {
										"displayText": "𝚄𝚁𝙻",
										"url": "https://www.youtube.com/watch?v=eMWzcHLDaE4"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "𝐀𝐔𝐃𝐈𝐎",
										"id": ".yta https://www.youtube.com/watch?v=eMWzcHLDaE4 yes"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "𝐕𝐈𝐃𝐄𝐎",
										"id": ".ytv https://www.youtube.com/watch?v=eMWzcHLDaE4 yes"
									},
									"index": 2
								}
							]
						},
						"hydratedTemplate": {
							"imageMessage": {
								"url": "https://mmg.whatsapp.net/d/f/AkegZuFDXySjfrk-4U160pu47hykhg6C8ZSjof4mdZ00.enc",
								"mimetype": "image/jpeg",
								"caption": "📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* Zeus golpeame...\n📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* te faltan bolas.\n📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* hace 4 meses\n⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* 13 segundos\n👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* 12,150 vistas",
								"fileSha256": "DET3MxjjOT8L+f9ZloFsLu878QzwqJAwLQw1PMTmMTE=",
								"fileLength": "5122",
								"mediaKey": "+upKO/keFovaICXOfP+W90ehYira+R+QiRxHrjd+z98=",
								"fileEncSha256": "6oh8qDUXrxv66zJLZuNZiB/+1dNBzTb/Fa9NdoyczhI=",
								"directPath": "/v/t62.7118-24/32097264_307480974788497_2841257977436975887_n.enc?ccb=11-4&oh=01_AVzjIF1Yd4Olb1J-OhVt3gheazNENfpm3eiO_cJmePc61Q&oe=62C14938",
								"mediaKeyTimestamp": "1654281335"
							},
							"hydratedContentText": "📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* Zeus golpeame...\n📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* te faltan bolas.\n📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* hace 4 meses\n⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* 13 segundos\n👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* 12,150 vistas",
							"hydratedFooterText": "KOMI",
							"hydratedButtons": [
								{
									"urlButton": {
										"displayText": "𝚄𝚁𝙻",
										"url": "https://www.youtube.com/watch?v=eMWzcHLDaE4"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "𝐀𝐔𝐃𝐈𝐎",
										"id": ".yta https://www.youtube.com/watch?v=eMWzcHLDaE4 yes"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "𝐕𝐈𝐃𝐄𝐎",
										"id": ".ytv https://www.youtube.com/watch?v=eMWzcHLDaE4 yes"
									},
									"index": 2
								}
							]
						}
					}
				}, {})

await m.reply(`${JSON.stringify(p, null, 1)}`)
await conn.relayWAMessage(p, {waitForAck: true})
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
