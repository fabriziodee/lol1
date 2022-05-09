let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'producto':
      if (chat.menu == 1) return m.reply('Ya está cambiado el menu a *producto*!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 1
      m.reply('Se cambió el menu a *producto*!')
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

case 'artículo':
case 'articulo':
      if (chat.menu == 5) return m.reply('Ya está cambiado el menu a *artículo*!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 5
      m.reply('Se cambió el menu a *artículo*!')
      break

case 'gif':
//case 'articulo':
      if (chat.menu == 6) return m.reply('Ya está cambiado el menu a *gif*!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isOwner) return global.dfail('owner', m, conn)
      chat.menu = 6
      m.reply('Se cambió el menu a *gif*!')
      break

    default:
let opc = `
*Ingrese un tipo de menú*

- Ejemplo: ${usedPrefix + command} simple

*Tipos de menús:*
- Articulo
- Producto
- Imagen
- Documento
- Simple
- Gif
`.trim()
return m.reply(opc)
  }
}

handler.help = ['menutype']
handler.tags = ['owner']
handler.command = /^(menutype)$/i

module.exports = handler
