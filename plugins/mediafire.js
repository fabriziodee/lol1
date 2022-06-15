const { MessageType } = require("@adiwajshing/baileys");
const { mediafiredl } = require('@bochilteam/scraper')
let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!args[0]) throw `✳️ Ingrese el link de mediafire junto al comando`
  if (!args[0].match(/mediafire/gi)) throw `❎ Link incorrecto`
  let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
  let res = await mediafiredl(args[0])
  let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
  let caption = `   ≡ *MEDIAFIRE*

▢ *Nombre:* ${filename}
▢ *Tamaño:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Subido:* ${aploud}`
  let rees = await conn.prepareMessage(m.chat, ss, MessageType.image, { quoted: m, caption: caption })
  let typenya = rees.message.imageMessage
  typenya["height"] = 51
  typenya["width"] = 100
  await conn.relayWAMessage(rees)
  //await conn.sendFile(m.chat, ss, 'error.png', caption, m)

  if (args[0].match(/mediafire/gi)) {
    if (text.endsWith('.apk/file')) return conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: 'application/vnd.android.package-archive', asDocument: true })
    if (text.endsWith('.zip/file')) return conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: 'application/zip', asDocument: true })
  } else m.reply(`El formato *${ext}* no se encontro!`)
}

handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mdfire|mfire)$/i

module.exports = handler
