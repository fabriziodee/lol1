let fs = require ('fs')

let handler  = async (m, { args, conn, text, participants }) => {
await conn.copyNForward(m.chat, await conn.loadMessage("51940617554-1621199330@g.us", "3EB07C9628CE"), false, { quoted: m })
}

handler.help = ['minecraft']
handler.tags = ['tools']
handler.command = /^(mcpe|minecraft)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
