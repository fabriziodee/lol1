let handler = async (m, { conn, usedPrefix }) => {
let pp = './Bot.jpeg'
let str = `
*☆::¿Que es un Bot de WhatsApp?::☆*

- Un Bot es una inteligencia artificial que realiza tareas que le indiquen mediante comandos, en el caso de WhatsApp puede crear stickers, descargar música o vídeo, crear logos personalizados y mucho más, esto de porma automática, o sea que un humano no interfiere en el proceso.

- Para ver mis comandos escriba *.menu*
`.trim()
conn.sendFile(m.chat, pp, 'lp.jpeg', str, m)
}

handler.customPrefix = /¿Qué es un Bot?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot?/i
handler.command = new RegExp
handler.fail = null

module.exports = handler
