let fetch = require('node-fetch')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')

let handler = async (m, { conn, text, args, isPrems, isOwner, isROwner, usedPrefix }) => {
  let user = global.DATABASE._data.users[m.sender]
  if (!text) throw `_URL Not Found_`
  let ras = `wrong url, this command to download video/shorts`
  if (!args[0].match(/(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)\/(watch|shorts)|(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)/gi)) throw ras
  let isLimitYt = (isOwner ? 99.00 : 27.00)
  if (!args || !args[0]) throw 'Uhm ... where\'s the URL?'
  conn.play = conn.play ? conn.play : {}
  if (conn.user.jid in conn.play) throw 'Todavia hay un video pendiente descargandose, intente de nuevo mas tarde'
  else conn.play[conn.user.jid] = true
  try {
  let vid = await youtubedlv2(args[0])
  let { thumbnail } = vid
  let det = vid.video['360p']
  let { fileSizeH } = det
  let size = fileSizeH
  if (Number(size.split(' MB')[0]) >= isLimitYt) return m.reply('El video pesa más de 27 MB!')
  if (!isPrems && user.limit < 1) return conn.reply(m.chat, `Te quedaste sin limites, compra más escribiendo ${usedPrefix}buylimit`, m)
  if (!isOwner || !isPrems || !isROwner) {
  global.DATABASE._data.users[m.sender].limit -= 1
  }
  await conn.reply(m.chat, `*↓ Descɑrgɑndo video:* www.youtube.com/watch?v=${vid.id}${!isOwner || !isPrems || !isROwner ? '\n\n🎟️ Se utilizó *uno* de su *limite*!' : ''}`, m)
  //await m.reply(`${JSON.stringify(vid, null, 1)}`)
  let url = await det.download()
  let yp4 = `
*🍄 Título:* ${vid.title}
*⭐ Link:* ${args[0]}
`.trim()
  let thumbyt = await (await fetch(vid.thumbnail)).buffer()
  conn.sendFile(m.chat, url, `${vid.title}.mp4`, `${yp4}`, m, false, { thumbnail: thumbyt })
  } finally {
    await conn.reply(m.chat, '*✓* Video descargado!', m)
    delete conn.play[conn.user.jid]
  }
}

handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.command = /^(ytmp4)$/i



module.exports = handler
