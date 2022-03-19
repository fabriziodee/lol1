let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'imagen':
case 'Image':
case 'img':
      if (chat.menu == 1) return m.reply('El menu *imagen* ya está activado!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 1
      m.reply('Se activó el menu *imagen*!')
      break

case 'documento':
case 'document':
      if (chat.menu == 2) return m.reply('El menu *documento* ya está activado!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 2
      m.reply('Se activó el menu *documento*!')
      break
      
case 'simple':
      if (chat.menu == 3) return m.reply('El menu *simple* ya está activado!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 3
      m.reply('Se activó el menu *simple*!')
      break

    default:
let opc = `
*Ingrese un tipo de menú*

- Ejemplo: ${usedPrefix + command} simple

*Tipos de menús:*
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
