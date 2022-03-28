let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'localización':
case 'localizacion':
case 'locatión':
case 'location':
case 'loc':
      if (chat.menu == 1) return m.reply('Ya está cambiado el menu a *localización*!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 1
      m.reply('Se cambió el menu a *localización*!')
      break

case 'imagen':
case 'image':
case 'img':
      if (chat.menu == 2) return m.reply('Ya está cambiado el menu a *imagen*!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 2
      m.reply('Se cambió el menu a *imagen*!')
      break

case 'documento':
case 'document':
      if (chat.menu == 3) return m.reply('Ya está cambiado el menu a *documento*!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 3
      m.reply('Se cambió el menu a *documento*!')
      break
      
case 'simple':
      if (chat.menu == 4) return m.reply('Ya está cambiado el menu a *simple*!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 4
      m.reply('Se cambió el menu a *simple*!')
      break

    default:
let opc = `
*Ingrese un tipo de menú*

- Ejemplo: ${usedPrefix + command} simple

*Tipos de menús:*
- Localización
- Imagen
- Documento
- Simple
`.trim()
return m.reply(opc)
  }
}

handler.help = ['menutype']
handler.tags = ['owner']
handler.command = /^(menutype)$/i

module.exports = handler
