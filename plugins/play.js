let { youtubeSearch } = require('@bochilteam/scraper')

let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#play Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾*'
conn.play = conn.play ? conn.play : {}
if (conn.user.jid in conn.play) throw 'Todavia hay un video pendiente descargandode, intente de nuevo mas tarde'
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
let _url = 'www.youtube.com/watch?v=' + videoId
let url = 'http://www.youtube.com/watch?v=' + videoId
let ptxt = `
\t\t*‧ 📻 Descarga de YouTube 📻 ‧*

*• Titulo:* ${title}
*• Duración:* ${durationH}
*• Visitas:* ${viewH}
*• Publicado:* ${publishedTime}
*• Url:* ${_url}
`.trim()
await conn.send2ButtonImg(m.chat, thumbnail, ptxt, author, 'AUDIO', `${usedPrefix}ytmp3 ${url}`, 'VIDEO', `${usedPrefix}ytmp4 ${url}`, m)
}

handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^(play)$/i

module.exports = handler
