let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
let _test = conn.prepareMessageFromContent(m.chat, {
"listMessage":  {
"title": "Test Title",
"description": 'xD',
"buttonText": "Opciones",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": "Test 1",
"rowId": ".test"
},
{
"title": "Test 2",
"rowId": ".test"
}
]}]}}, { quoted: m })
conn.relayWAMessage(_test)
}

//handler.help = ['test']
//handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
