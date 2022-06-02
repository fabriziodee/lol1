let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let res = await conn.prepareMessageFromContent(m.chat,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "Hello world!",
"hydratedFooterText": "Debug By Gatito",
"hydratedButtons": [
{
"urlButton": {
"displayText": "Test Group",
"url": "https://chat.whatsapp.com/ELn6Ck7InoP6UmA3QiQsgo"
},
"index": 0
}
]
},
"hydratedTemplate": {
"hydratedContentText": "Hello world!",
"hydratedFooterText": "Debug By Gatito",
"hydratedButtons": [
{
"urlButton": {
"displayText": "Test Group",
"url": "https://chat.whatsapp.com/ELn6Ck7InoP6UmA3QiQsgo"
},
"index": 0
}
]
}
}
}, { quoted: m })
await conn.relayWAMessage(res)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
