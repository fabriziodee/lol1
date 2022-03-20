let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Ingrese un texto*\n\n- Ejemplo: ${usedPrefix + command} Nuevo sub`
let coment = global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  })
  conn.sendFile(m.chat, coment, 'ytcomment.png', '*Comentario de YouTube*', m, 0, { thumbnail: coment })
}

handler.help = ['ytcomment']
handler.tags = ['maker']

handler.command = /^(ytcomment|ytcoment)$/i

module.exports = handler
