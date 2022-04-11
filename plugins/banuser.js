let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async (m, { conn, text }) => {
    let buser = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender 
    //if (!m.chat) return m.reply('Etiqueta a alguien del grupo para eliminar!')
    //let buser = m.quoted.sender ? m.quoted.sender : m.quoted.sender && m.mentionedJid[0] ? m.quoted.sender : m.mentionedJid[0]
    if (!buser) throw 'Etiqueta a alguien del grupo!'
    let _buser = `${buser.split("@s.whatsapp.net")[0]}`
    let users = global.DATABASE._data.users
    users[buser].banned = true
    users[buser].BannedReason = `${text.replace(_buser, '')}`
    conn.sendMessage(m.chat, `*🔕 El usuario @${buser.split("@s.whatsapp.net")[0]} fue baneado*\n\n*Razón:* ${text}\n\n- Ahora ya no podrá utilizar los comandos`, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [buser] } })
}

handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^(banuser)$/i
handler.rowner = true

module.exports = handler
