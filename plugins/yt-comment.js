let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Ingrese un texto*\n\n- Ejemplo: ${usedPrefix + command} Nuevo sub`
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'ytcomment.png', '*Comentario de YouTube*', m, 0, { thumbnail: Buffer.alloc(0) })
}

handler.help = ['ytcomment']
handler.tags = ['maker']

handler.command = /^(ytcomment|ytcoment)$/i

module.exports = handler
