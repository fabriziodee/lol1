let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
let res = await fetch("https://api-alc.herokuapp.com/api/other/frases?apikey=ConfuMods")
let json = await res.json()
let { frase } = json
conn.reply(m.chat, `“${frase}”`, m)}

handler.help = ['frase']
handler.tags = ['quotes']
handler.command = /^(frase|frases|frace|fraces)$/i

module.exports = handler
