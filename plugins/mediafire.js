/*const { mediafiredl } = require('@bochilteam/scraper')
let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { isOwner, isPrems, command, usedPrefix, text, args, conn }) => {
     var limit
     if((isOwner || isPrems)) limit = 250
     else limit = 100
     if (!args[0]) throw `${nolink}\n\nExample:\n${usedPrefix + command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
     if (!args[0].match(/mediafire/gi)) throw `URL Invalid`
     const sentMsg = await m.reply(wait)
     let full = /f$/i.test(command)
     let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
     let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
     let res = await mediafiredl(args[0])
     let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
     let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < filesize
     m.reply(`${JSON.stringify(res, null, 1)}`)
     let capt = `📭 *Mediafire Downloader*

📝 *Name:* ${filename}
🎚 *Size:* ${filesizeH}
🗃 *Extension:* ${ext}
📤 *Uploaded:* ${aploud}
${isLimit ? `❌ *File size above ${limit} MB, download it yourself*\n` : ''}🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}` 
     
     if(ss) await conn.sendFile(m.chat, ss, 'screenshot.png', capt, sentMsg, 0, {jpegThumbnail: ss})
     try {
     if(!isLimit) await conn.sendMedia(m.chat, url, 0, {fileName: `${filename}`, mentions: [m.sender]})
     } catch {
      throw error 
  }
}

handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mdfire)$/i

module.exports = handler*/


const { mediafiredl } = require('@bochilteam/scraper')
let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, args, usedPrefix, command }) => {
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
  await conn.sendFile(m.chat, ss, 'error.png', caption, m)
  try {
  if (ext.endsWith('ZIP')) return conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: 'application/zip', asDocument: true })
  } catch {
   m.reply('El formato *${ext}* no se encontro!')
  }
}

handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mdfire|mfire)$/i

module.exports = handler
