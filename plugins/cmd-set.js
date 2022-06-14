let handler = async (m, { conn, text, usedPrefix, command }) => {
    global.DATABASE.data.sticker = global.DATABASE.data.sticker || {}
    if (!m.quoted) throw `Responde a un mensaje con *${usedPrefix + command}*`
    if (!m.quoted.fileSha256) throw '⚠️ Falta el hash SHA256'
    if (!text) throw `Falta el comando`
    let sticker = global.DATABASE.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '⚠️ No tienes permiso para cambiar este comando de Sticker'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`✅ Comando guardado`)
}


handler.help = ['setcmd']
handler.tags = ['database']
handler.command = /^(setcmd)$/i

module.exports = handler
