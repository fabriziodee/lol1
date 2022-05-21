let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

await conn.fakeReply(m.chat, `*[ 🎰 SLOT 🎰 ]*

🍌 | 🪙 | 🍋
🍑 | 🍑 | 🍑 *⇐*
🍎 | 🍅 | 🪙

*[ 🎰 SLOT 🎰 ]*`, '0@s.whatsapp.net', `*Ganaste x3*\n+${shortNum(75188434.5)} de Dinero`, 'status@broadcast')
//Test
}

handler.command = /^(‎slot)$/i
handler.owner = true

module.exports = handler

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
