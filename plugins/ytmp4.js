let fetch = require('node-fetch')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')

let handler = async (m, { conn, text, args, isPrems, isOwner }) => {
  if (!text) throw `_URL Not Found_`
  let ras = `wrong url, this command to download video/shorts`
  if (!args[0].match(/(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)\/(watch|shorts)|(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)/gi)) throw ras
  let limit
  if((isOwner || isPrems)) limit = 300
  else limit = 100
  if (!args || !args[0]) throw 'Uhm ... where\'s the URL?'
  try {
  conn.play = conn.play ? conn.play : {}
  if (m.chat in conn.play) throw 'Todavia hay un video pendiente descargandode, intente de nuevo mas tarde'
  else conn.play[m.chat] = true
  let vid = await youtubedlv2(args[0])
  let { thumbnail } = vid
  let det = vid.video['360p']
  let { fileSize } = det
  let url = await det.download()
  conn.sendFile(m.chat, url, `${vid.title}.mp4`, ``, m)
  } finally {
    delete conn.play[m.chat]
  }
}

handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.command = /^(ytmp4)$/i



module.exports = handler
