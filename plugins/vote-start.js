let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `*Escriva un texto para la votación*\m\n- Ejemplo: ${usedPrefix + command} soy gay`
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `Todavía hay votos e este chat, si quieres eliminar escriba ${usedPrefix + command}delvote`
    }
    conn.send2Button(m.chat, `*🗳️ Votación iniciada!*\n\n*Voto:* ${text}`, `Si quieres eliminar la votación escriba *${usedPrefix + command}delvote*`, '✅ Si', `${usedPrefix}upvote`, '❌ No', `${usedPrefix}devote`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}

handler.help = ['startvote']
handler.tags = ['vote']
handler.command = /^(startvote|mulaivote)$/i
handler.limit = true
handler.group = true
handler.admin = true

module.exports = handler
