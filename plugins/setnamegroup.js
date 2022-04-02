let { GroupSettingChange, mentionedJid } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {

 if (!text) return conn.reply(m.chat, 'Ingrese el nombre del grupo!', m)

    let id = m.key.remoteJid
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`
    conn.groupUpdateSubject(idgrup, text)
conn.reply(m.chat, 'Se cambió el nombre del grupo!', m)
}
handler.help = ['setnamegroup']
handler.tags = ['group']
handler.command = /^(setnamegroup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
