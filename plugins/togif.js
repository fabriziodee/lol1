let { webp2mp4 } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `Etiqueta un video o stickergif para convertirlo en GIF!`
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw `Etiqueta un video o stickergif para convertirlo en GIF!`
    conn.reply(m.chat, wait, m)
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    }
    await conn.sendFile(m.chat, out, 'out.gif', '*Se convirtió a GIF*', m, 0, { mimetype: 'video/gif' })
}

handler.help = ['togif']
handler.tags = ['sticker']
handler.command = /^(togif|agif|gif)$/i

module.exports = handler
