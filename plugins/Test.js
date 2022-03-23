let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
let duelo = `
*Slime*
- Vida: 40

*Jugador*
- Vida: 100
`.trim()
      let _duelo = conn.prepareMessageFromContent(m.chat, {
"listMessage":  {
"title": "\t\t\t*‧ ⚔️ BATALLA RPG ⚔️ ‧*",
"description": duelo,
"buttonText": "Opciones",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": "Atacar 🔪",
"rowId": `${usedPrefix}selec atacar`
},
{
"title": "Escapar 💨",
"rowId": `${usedPrefix}selec escapar`
}
]}]}}, { quoted: m })
conn.relayWAMessage(_duelo)

}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(explorar)$/i
handler.rowner = true

module.exports = handler
