let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'bienvenida':
case 'welcome':
      if (chat.welcome) return m.reply('La *bienvenida* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.welcome = true
      m.reply('Se activó la *bienvenida* en este grupo!')
      break

case 'antienlace':
case 'antilink':
      if (chat.antilink) return m.reply('La función *anti-enlace* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.antilink = true
      m.reply('Se activó la función *anti-enlace* en este grupo!')
      break
      
case 'nsfw':
case '+18':
      if (chat.nsfw) return m.reply('La función *nsfw* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.nsfw = true
      m.reply('Se activó la función *nsfw* en este grupo!')
      break

    default:
let opc = `
*Ingrese una opción para activar*

- Ejemplo: ${usedPrefix + command} bienvenida

*Lista de opciones:*
- Bienvenida
- Antienlace
- Nsfw
`.trim()
return m.reply(opc)
  }
}

handler.help = ['activar < opcion >']
handler.tags = ['group']
handler.command = /^(activar|enable)$/i

module.exports = handler
