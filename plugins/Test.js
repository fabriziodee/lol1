let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
let test = conn.prepareMessageFromContent(m.chat, {
"listMessage":  {
"title": "Test",
"description": `xD`,
"buttonText": "Opciones",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": "Test 1",
"rowId": `test1`
},
{
"title": "Test 2",
"rowId": `test2`
}
]}]}}, { quoted: m })
conn.relayWAMessage(test)
}

//handler.help = ['test']
//handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
