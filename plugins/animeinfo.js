let translate = require('translate-google-api')
let fetch = require('node-fetch')
let cheerio = require('cheerio')

const defaultLang = 'es'
const tld = 'cn'

let handler = async (m, { conn, text }) => {
  if (!text) throw `[❗] Ingrese el nombre de un anime a buscar`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
  let ssynopsis = await translate(synopsis, { tld, to: defaultLang, })
  let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
  if (!res2.ok) throw await res2.text()
  let html = await res2.text()
  
  let animeingfo = `✨ *Titulo:* ${title}
🎆 *Episodios:* ${episodes}
💬 *Transmitido en:* ${type}
💌 *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Miembros:* ${members}
💚 *Sinopsis:* ${ssynopsis}
🌐 *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}

handler.help = ['animeinfo']
handler.tags = ['internet']
handler.command = /^(animeinfo|infoanime)$/i

module.exports = handler
