let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'bienvenida':
case 'welcome':
      if (chat.welcome) return m.reply('La *bienvenida* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isAdmin) return global.dfail('admin', m, conn)
      chat.welcome = true
      m.reply('Se activó la *bienvenida* en este grupo!')
      break

case 'despedida':
case 'leave':
      if (chat.welcome) return m.reply('La *bienvenida* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isAdmin) return global.dfail('admin', m, conn)
      chat.welcome = true
      m.reply('Se activó la *bienvenida* en este grupo!')
      break

case 'antienlace':
case 'antilink':
      if (chat.antilink) return m.reply('La función *anti-enlace* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isAdmin) return global.dfail('admin', m, conn)
      chat.antilink = true
      m.reply('Se activó la función *anti-enlace* en este grupo!')
      break

case 'antifake':
      if (chat.antilink) return m.reply('La función *antifake* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isAdmin) return global.dfail('admin', m, conn)
      chat.antifake = true
      m.reply('Se activó la función *antifake* en este grupo!')
      break

case 'nsfw':
case '+18':
      if (chat.nsfw) return m.reply('La función *nsfw* ya está *activado* en este grupo!')
      if (!m.isGroup) return global.dfail('group', m, conn)
      if (!isAdmin) return global.dfail('admin', m, conn)
      chat.nsfw = true
      m.reply('Se activó la función *nsfw* en este grupo!')
      break

    default:
let opc = `
\t\t\t*✗ | Activar*

‧ antienlace
‧ antifake
‧ nsfw
‧ bienvenida
`.trim()
return m.reply(opc)
  }
}

handler.help = ['activar < opcion >']
handler.tags = ['group']
handler.command = /^(activar|enable)$/i

module.exports = handler
