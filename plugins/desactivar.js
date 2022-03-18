let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'bienvenida':
case 'welcome':
      if (!chat.welcome) return m.reply('La *bienvenida* ya está *desactivado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.welcome = false
      m.reply('Se *desactivó* la *bienvenida* en este grupo!')
      break

case 'antienlace':
case 'antilink':
      if (!chat.antilink) return m.reply('La función *anti-enlace* ya está *desactivado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.welcome = false
      m.reply('Se *desactivó* la función *anti-enlace* en este grupo!')
      break

    default:
let opc = `
*Ingrese una opción para desactivar*

- Ejemplo: ${usedPrefix + command} bienvenida

*Lista de opciones:*
- Bienvenida
- Antienlace
`.trim()
return m.reply(opc)
  }
}

handler.help = ['desactivar < opcion >']
handler.tags = ['group']
handler.command = /^(desactivar|disable)$/i

module.exports = handler
