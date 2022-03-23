let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
let duelo = `
		*‧ ⚔️ BATALLA RPG ⚔️ ‧*

*Slime*
- Vida: 40

*Jugador*
- Vida: 100
`.trim()
      let _duelo = conn.prepareMessageFromContent(m.chat, {
"listMessage":  {
"title": "		*‧ ⚔️ BATALLA RPG ⚔️ ‧*",
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
]}]}}, {})
conn.relayWAMessage(_duelo, {waitForAck: true})

}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
