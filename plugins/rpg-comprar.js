let { MessageType, MentionedJid } = require("@adiwajshing/baileys")
let fs = require('fs')

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]

let _pickaxe = global.DATABASE._data.users[m.sender].pickaxe
let pickaxe = (_pickaxe == 0 ? 20000 : '' || _pickaxe == 1 ? 49999 : '' || _pickaxe == 2 ? 99999 : '' || _pickaxe == 3 ? 149999 : '' || _pickaxe == 4 ? 299999 : '')
let cpickaxe = (_pickaxe == 0 ? 'madera' : '' || _pickaxe == 1 ? 'piedra' : '' || _pickaxe == 2 ? 'hierro' : '' || _pickaxe == 3 ? 'oro' : '' || _pickaxe == 4 ? 'diamante' : '')

let _axe = global.DATABASE._data.users[m.sender].axe
let axe = (_axe == 0 ? 20000 : '' || _axe == 1 ? 49999 : '' || _axe == 2 ? 99999 : '' || _axe == 3 ? 149999 : '' || _axe == 4 ? 299999 : '')
let caxe = (_axe == 0 ? 'madera' : '' || _axe == 1 ? 'piedra' : '' || _axe == 2 ? 'hierro' : '' || _axe == 3 ? 'oro' : '' || _axe == 4 ? 'diamante' : '')

let _rod = global.DATABASE._data.users[m.sender].rod
let rod = (_rod == 0 ? 10000 : '')
let crod = (_rod == 0 ? 'normal' : '')

let imgshop = fs.readFileSync('./storage/image/shop.png')

let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'pico':
      if (global.DATABASE._data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Tu pico esta al nivel máximo', m)
      if (global.DATABASE._data.users[m.sender].money > pickaxe * 1) {
      	global.DATABASE._data.users[m.sender].pickaxe += 1
          global.DATABASE._data.users[m.sender].pickaxedurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
          global.DATABASE._data.users[m.sender].money -= pickaxe * 1
          conn.reply(m.chat, 'Compraste un pico por ' + pickaxe + ' de dinero' ,m)
           } else conn.reply(m.chat, 'Tu dinero no es suficiente para comprar un pico que cuesta ' + pickaxe + ' de dinero', m)
      break

case 'hacha':
      if (global.DATABASE._data.users[m.sender].axe == 5) return conn.reply(m.chat, 'Tu hacha esta al nivel máximo', m)
      if (global.DATABASE._data.users[m.sender].money > axe * 1) {
      	global.DATABASE._data.users[m.sender].axe += 1
          global.DATABASE._data.users[m.sender].axedurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
          global.DATABASE._data.users[m.sender].money -= axe * 1
          conn.reply(m.chat, 'Compraste una hacha por ' + axe + ' de dinero' ,m)
           } else conn.reply(m.chat, 'Tu dinero no es suficiente para comprar una hacha que cuesta ' + axe + ' de dinero', m)
      break

case 'caña':
      if (global.DATABASE._data.users[m.sender].rod == 1) return conn.reply(m.chat, 'Tu caña de pescar esta al nivel máximo', m)
      if (global.DATABASE._data.users[m.sender].money > rod * 1) {
      	global.DATABASE._data.users[m.sender].rod += 1
          global.DATABASE._data.users[m.sender].roddurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
          global.DATABASE._data.users[m.sender].money -= rod * 1
          conn.reply(m.chat, 'Compraste una hacha por ' + rod + ' de dinero' ,m)
           } else conn.reply(m.chat, 'Tu dinero no es suficiente para comprar una hacha que cuesta ' + rod + ' de dinero', m)
      break

    default:
let shop = `
*[${user.money >= pickaxe ? '✅' : '✖️'}] Pico de ${cpickaxe}:*  $${pickaxe}
*[${user.money >= axe ? '✅' : '✖️'}] Hacha de ${caxe}:*  $${axe}
*[${user.money >= rod ? '✅' : '✖️'}] Caña ${crod}:*  $${rod}
`.trim()
return conn.reply(m.chat, shop, MessageType.text, { quoted: m, contextInfo: { externalAdReply:{title: '∙•⃝⃕🛍️ 𝗧𝗜𝗘𝗡𝗗𝗔 𝗥𝗣𝗚 🛍️⃝⃕・∙', previewType:"PHOTO",thumbnail: imgshop, sourceUrl:``}}})
  }
}

handler.help = ['comprar']
handler.tags = ['rpg']
handler.command = /^(comprar|buy)$/i

module.exports = handler
