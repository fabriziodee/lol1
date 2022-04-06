let handler = async (m, { conn,usedPrefix, text }) => {
	if(isNaN(text) && !text.match(/@/g)){
	
	}else if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `Etiqueta a alguien para quitarle la administración!`, m)
	if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `El número que ingreso es incorrecto!`, m)
	
try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
} catch (e) {
		} finally {
			conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
			conn.reply(m.chat, 'Se le quito la administración al usuario!', m)
	}	
}
handler.help = ['degradar']
handler.tags = ['group']
handler.command = /^(degradar|demote|quitarpoder|quitaradmin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null

module.exports = handler

