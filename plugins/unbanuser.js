let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async (m, { conn, text}) => {
    //let buser = m.quoted.sender ? m.quoted.sender : m.quoted.sender && m.mentionedJid[0] ? m.quoted.sender : m.mentionedJid[0]
    let buser = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (!buser) throw 'Etiqueta a alguien del grupo!'
    let users = global.DATABASE._data.users
    users[buser].banned = false
    conn.sendMessage(m.chat, `*🔔 El usuario @${buser.split("@s.whatsapp.net")[0]} fue desbaneado*\n\n- Ahora podrá utilizar los comandos`, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [buser] } })
}

handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^(unbanuser)$/i
handler.rowner = true

module.exports = handler
