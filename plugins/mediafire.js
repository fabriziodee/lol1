const axios = require('axios')
const cheerio = require('cheerio')

const mdfireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nombre = seplit[5]
mime = nombre.split('.')
mime = mime[1]
hasil.push({ nombre, mime, size, link })
return hasil
}


let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply(`Kirim perintah ${usedPrefix + command} *link mediafire*`)
if (!args[0].includes('mediafire.com')) return m.reply(`Error`)
let mdjon = args.join(' ')
res = await mdfireDl(mdjon)
result = `「 *MEDIAFIRE DOWNLOAD* 」
*Data Berhasil Didapatkan!*
🆔 Nama : ${res[0].nama}
📊 Ukuran : ${res[0].size}
💬 Link : ${res[0].link}
_Tunggu Proses Upload Media_`
m.reply(result)

conn.sendFile(m.chat, res[0].link, res[0].nama, null, m, false, { asDocument: true, mimetype: res[0].mime })
}

handler.help = ['mediafire']
handler.tags = ['internet']
handler.command = /^(mediafire|mdfire)$/i

module.exports = handler
