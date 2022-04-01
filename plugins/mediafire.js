const axios = require('axios')

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply(`Kirim perintah ${usedPrefix + command} *link mediafire*`)
if (!args[0].includes('mediafire.com')) return m.reply(`Error`)
let les = await axios.get(`https://api.lolhuman.xyz/api/mediafire?apikey=40cd5b6566bef10af1425f0f&url=${text}`)
let result = les.result
result = `「 *MEDIAFIRE DOWNLOAD* 」

*Data Berhasil Didapatkan!*
🆔 Nama : ${result.filename}
📊 Ukuran : ${result.filesize}
💬 Link : ${result.link}

_Tunggu Proses Upload Media_`
m.reply(result)

conn.sendFile(m.chat, result.link, result.filename, null, m, false, { asDocument: true, mimetype: 'application/zip' })
}

handler.help = ['mediafire']
handler.tags = ['internet']
handler.command = /^(mediafire|mdfire)$/i

module.exports = handler
