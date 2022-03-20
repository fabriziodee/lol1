let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args }) => {
	let text = args.join` `
	if(!args || !args[0]) {
		conn.reply(m.chat, `Ingrese un texto para cambiar el nombre del grupo!`, m)
	} else if(args[0].length > 25) {
		conn.reply(m.chat, `El nombre debe tener máximo 25 caracteres!`, m)
	} else {
		conn.groupUpdateSubject(m.chat, text)
                conn.reply(m.chat, `El nombre del grupo se cambió a *${text}*`, m)
	} 
}
handler.help = ['setnamegp']
handler.tags = ['admin']
handler.command = /^(setnamegp|setnamegroup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0

module.exports = handler
