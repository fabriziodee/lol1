let handler = async (m, { conn,usedPrefix, text, args }) => {
	if(isNaN(text) && !text.match(/@/g)){
		return conn.reply(m.chat, `Etiqueta a alguien para darle la administración!`, m)
	}else if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `Etiqueta a alguien para darle la administración!`, m)
	if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] El número ingresado es incorrecto, por favor ingrese el número correcto*`, m)
	
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
			conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
			conn.reply(m.chat, `Se le dio la administración al usuario!`, m)
	}	
}
handler.help = ['promover']
handler.tags = ['adm']
handler.command = /^(promover|promote|daradmin|admin|darpoder)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null

module.exports = handler

