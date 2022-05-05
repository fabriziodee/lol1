let { MessageType, MentionedJid } = require("@adiwajshing/baileys")
let fs = require('fs')

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]

let type = (args[0] || ' ').toLowerCase()

switch (type) {

case 'pocion':
case 'poción':
                    let potion = 1
                    let npotion = (pickRandom(['No tienes suficientes pociones', 'Te quedaste sin pociones', 'No te queda mas pociones', 'Te que das te sin po ci o nes :v', 'No tienes pociones', 'No tienes mas pociones'])) 
                    let puse = (pickRandom(['Tu vida ya esta llena', 'Ya no puedes beber mas pociones', 'Tu vida esta llena :v', 'Ya no puedes usar mas pociones'])) 
                    let usep = (pickRandom(['Acabas de beber', 'Bebiste cum digo,', 'Glu glu glu... bebiste', 'Tu usas', 'Acabas de usar']) + ` *${potion <= 1 ? 'una pocion' : `${potion} pociones`}*`) 
                    if (global.DATABASE._data.users[m.sender].healt > 90) return m.reply(puse)
                    if (global.DATABASE._data.users[m.sender].potion >= 1) {
                        global.DATABASE._data.users[m.sender].potion -= potion * 1
                        global.DATABASE._data.users[m.sender].healt += 50
                        conn.reply(m.chat, usep, m)
                    } else conn.reply(m.chat, 'Ya no tienes mas pociones!', m)
                    break

    default:
let open = `*• Ingresɑ un item que quierɑs usɑr*

*Ejemplo de uso:*
1. ${usedPrefix + command} <item>
2. ${usedPrefix + command} poción`
return conn.reply(m.chat, open, m)
  }
}

handler.help = ['usar']
handler.tags = ['rpg']
handler.command = /^(use|usar)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
} 
