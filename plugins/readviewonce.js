let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, 'Etiqueta un mensaje viewOnce!', 'conversation')
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Etiqueta un mensaje viewOnce!'
    await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply(''))
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.limit = 1

handler.command = /^(readviewonce|rvo)$/i

module.exports = handler
