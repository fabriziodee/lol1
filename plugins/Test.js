let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let res = await conn.prepareMessageFromContent(m.chat,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "Hi MyMans APIs 👋,\n\nThank you for your message.\n\nHow can I help you today?",
"hydratedFooterText": "WATI's Chatbot",
"hydratedButtons": [
{
"quickReplyButton": {
"displayText": "Know the Pricing",
"id": "60dd75b0081979507a679f99"
},
"index": 0
},
{
"quickReplyButton": {
"displayText": "Know how WATI works?",
"id": "60dd75b0081979507a679f99"
},
"index": 1
},
{
"quickReplyButton": {
"displayText": "Get Started",
"id": "60dd75b0081979507a679f99"
},
"index": 2
}
]
},
"hydratedTemplate": {
"hydratedContentText": "Hi Ivanzz",
"hydratedFooterText": "Selamat Datang",
"hydratedButtons": [
{
"quickReplyButton": {
"displayText": "Debug",
"id": "60dd75b0081979507a679f99"
},
"index": 0
},
{
"quickReplyButton": {
"displayText": "By",
"id": "60dd75b0081979507a679f99"
},
"index": 1
},
{
"quickReplyButton": {
"displayText": "Ivanzz",
"id": "60dd75b0081979507a679f99"
},
"index": 2
}
]
}
}
}, { quoted: m })
conn.relayWAMessage(res)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
