let { MessageType, MentionedJid } = require("@adiwajshing/baileys")
let fs = require('fs')

const Sdiamond = 750

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]

let type = (args[0] || ' ').toLowerCase()

const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)

switch (type) {
case 'diamante':
case 'diamantes':
      if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
      	global.DATABASE._data.users[m.sender].diamond -= count * 1
      	global.DATABASE._data.users[m.sender].money += Sdiamond * count
          conn.reply(m.chat, `Vendiste ${count} de diamante por ${Sdiamond * count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes diamantes para vender', m)
      break

    default:
let sell = `
*Que item quieres vender?*

- Ejemplo: ${usedPrefix + command} diamante 7

*Lista de items para vender*
- Diamante
`.trim()
return conn.reply(m.chat, sell, m)
  }
}

handler.help = ['vender']
handler.tags = ['rpg']
handler.command = /^(vender|sell)$/i

module.exports = handler
