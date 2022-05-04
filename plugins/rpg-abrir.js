let { MessageType, MentionedJid } = require("@adiwajshing/baileys")
let fs = require('fs')

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]

let type = (args[0] || ' ').toLowerCase()

switch (type) {

case 'cofre':
                    let diamond = (Math.floor(Math.random() * (17 - 20) + 20) + 1)
                    let money = (Math.floor(Math.random() * (5000 - 7000) + 7000) + 1)
                    let exp = (Math.floor(Math.random() * (200 - 600) + 600) + 1)
                    let potion = (Math.floor(Math.random() * (1 - 3) + 3) + 1)
                    let Hcom = `
*Abriste un cofre 🧰 y obtienes:*

◦ Dinero: $${money}
◦ Poción: ${potion}
◦ Diamante: ${diamond}
◦ Exp: ${exp}
`.trim()
                    if (global.DATABASE._data.users[m.sender].chest >= 1) {
                        global.DATABASE._data.users[m.sender].chest -= 1
                        global.DATABASE._data.users[m.sender].diamond += diamond * 1
                        global.DATABASE._data.users[m.sender].money += money * 1
                        global.DATABASE._data.users[m.sender].potion += potion * 1
                        global.DATABASE._data.users[m.sender].exp += exp * 1
                        conn.reply(m.chat, Hcom, m)
                        
                    if (!global.DATABASE._data.users[m.sender].sword > 0) {
                        global.DATABASE._data.users[m.sender].sword += 1
                        global.DATABASE._data.users[m.sender].sworddurability += 500
                         conn.reply(m.chat, '*🥳 Felicidades acabas de sonseguir una espada por abrir tu primer cofre!*', m)
                        }
                        
                    } else conn.reply(m.chat, 'Ya no tienes mas cofres!', m)
                    break

    default:
let open = `*• Ingresɑ un objeto que quierɑ ɑbrir*

*Ejemplo de uso:*
1. ${usedPrefix + command} <objeto>
2. ${usedPrefix + command} cofre`
return conn.reply(m.chat, open, m)
  }
}

handler.help = ['abrir']
handler.tags = ['rpg']
handler.command = /^(abrir|open)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
} 
