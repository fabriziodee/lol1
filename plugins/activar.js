let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'bienvenida':
case 'welcome':
      if (chat.welcome) return m.reply('La *bienvenida* ya está *activado* en este chat!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.welcome = true
      m.reply('Se activó la *bienvenida* en este grupo!')
      break

    default:
let opc = `
*Ingrese una opción para activar*

- Ejemplo: ${usedPrefix + command} bienvenida

*Lista de opciones:*
- Bienvenida
`.trim()
return m.reply(opc)
  }
}

handler.help = ['activar < opcion >']
handler.tags = ['group']
handler.command = /^(activar)$/i

module.exports = handler
