let handler = async (m, { conn, participants }) => {
// if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
if (!(m.chat in global.DATABASE._data.chats)) return m.reply('Este chat no está registrado en la base de datos!')
let chat = global.DATABASE._data.chats[m.chat]
if (chat.isBanned) return m.reply('Este grupo ya está baneado!')
chat.isBanned = true
m.reply('\t\t*‧ 📫 Chat baneado 📫 ‧*\n\nAhora nadie podrá utilizar los comandos')
// } else m.reply('Aquí hay un número de un host...')
}

handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^(banchat)$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
