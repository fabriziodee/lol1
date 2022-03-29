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

let imgshop = fs.readFileSync('./storage/image/shop.png')

let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'pico':
      if (chat.welcome) return m.reply('La *bienvenida* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.welcome = true
      m.reply('Se activó la *bienvenida* en este grupo!')
      break

case 'hacha':
      if (chat.antilink) return m.reply('La función *anti-enlace* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.antilink = true
      m.reply('Se activó la función *anti-enlace* en este grupo!')
      break

    default:
let shop = `
*[${user.money >= pickaxe ? '✅' : '✖️'}] Pico de ${cpickaxe}:*  $${pickaxe}
*[${user.money >= axe ? '✅' : '✖️'}] Hacha de ${caxe}:*  $${axe}
`.trim()
return conn.reply(m.chat, shop, MessageType.text, { quoted: m, contextInfo: { externalAdReply:{title: '∙•⃝⃕🛍️ 𝗧𝗜𝗘𝗡𝗗𝗔 𝗥𝗣𝗚 🛍️⃝⃕・∙', previewType:"PHOTO",thumbnail: imgshop, sourceUrl:``}}})
  }
}

handler.help = ['comprar']
handler.tags = ['rpg']
handler.command = /^(comprar|buy)$/i

module.exports = handler
