let webp = require('node-webpmux')

let handler = async (m, { conn }) => {
    if (!/sticker/.test(m.quoted.mtype)) return m.reply('Etiqueta un sticker con el comando!')
    let q = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.load(await m.quoted.download())
        m.reply(conn.format(JSON.parse(img.exif.slice(22).toString())))
    }
}

handler.help = ['getexif']
handler.tags = ['tools']
handler.command = /^(getexif)$/i

module.exports = handler
