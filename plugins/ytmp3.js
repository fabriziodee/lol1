let fetch = require('node-fetch')
const { aiovideodl, savefrom } = require('@bochilteam/scraper')

let handler = async (m, { conn, text, args, isPrems, isOwner }) => {
  if (!text) throw `_URL Not Found_`
  let ras = `wrong url, this command to download video/shorts`
  if (!args[0].match(/(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)\/(watch|shorts)|(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)/gi)) throw ras
  //let limit
  //if((isOwner || isPrems)) limit = 300
  //else limit = 100
  if (!args || !args[0]) throw 'Uhm ... where\'s the URL?'
  conn.play = conn.play ? conn.play : {}
  if (conn.user.jid in conn.play) throw 'Todavia hay un audio pendiente descargandose, intente de nuevo mas tarde'
  else conn.play[conn.user.jid] = true
  try {
  let vid = await aiovideodl(args[0])
  await conn.reply(m.chat, `*↓ Descɑrgɑndo audio:* ${vid.url.replace('https://', '')}`, m)
  //m.reply(`${JSON.stringify(vid, null, 1)}`)
  let urld = vid.medias[0].url
  //m.reply(urld)
  //let { thumbnail } = vid
  //let det = vid.video['360p']
  //let { fileSize } = det
  //let url = await urld.download()
  await conn.sendFile(m.chat, urld, `${vid.title}.mp3`, ``, m)
  //await conn.sendFile(m.chat, ``, `${vid.title}.mp3`, m)
  } finally {
    //await conn.reply(m.chat, '*✓* Video descargado', m)
    delete conn.play[conn.user.jid]
  }
}

handler.help = ['ytmp3']
handler.tags = ['downloader']
handler.command = /^(ytmp3)$/i

module.exports = handler
