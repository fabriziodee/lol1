let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {
let user = global.DATABASE._data.users[m.sender]

let healt = (Math.floor(Math.random() * 10) + 7)
let exp = (Math.floor(Math.random() * 800) + 100)
let mob = (user.mob == 1 ? 'Slime' : '????' || user.mob == 2 ? 'Orco' : '????')



let type = (args[0] || ' ').toLowerCase()
let _type = (args[1] || ' ').toLowerCase()

switch (type) {

case 'atacar':
      if (user.rpg == 0) return m.reply('El duelo a terminado!')
      
      global.DATABASE._data.users[m.sender].rpg = 0
      global.DATABASE._data.users[m.sender].mob = 0
      global.DATABASE._data.users[m.sender].hmob = 0
      
      let duelo = `
*${mob}*
- Vida: ${user.hmob}

*Jugador*
- Vida: ${user.healt}
`.trim()

      global.DATABASE._data.users[m.sender].healt -= healt * 1
      global.DATABASE._data.users[m.sender].hmob -= healt * 1

      if (user.hmob <= 0) {
      let fduelo = `
*Ganaste la batalla!*

◦Exp: ${exp}
`.trim()
      
      conn.sendMessage(m.chat, fduelo, MessageType.text)
      }
      let _duelo = conn.prepareMessageFromContent(m.chat, {
"listMessage":  {
"title": "\t\t\t*‧ 🌳 *BATALLA RPG* 🌳 ‧*",
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
      break

case 'escapar':
      if (user.rpg == 0) return m.reply('El duelo a terminado!')
      
      global.DATABASE._data.users[m.sender].healt -= healt * 1
      global.DATABASE._data.users[m.sender].rpg = 0
      global.DATABASE._data.users[m.sender].mob = 0
      global.DATABASE._data.users[m.sender].hmob = 0
      
let correr = `
*Escapaste del ${mob}*

◦Vida: -${healt}
`.trim()
      conn.sendMessage(m.chat, correr, MessageType.text)
      break





default:
  }
}

handler.command = /^(selec)$/i

module.exports = handler
