let fetch = require('node-fetch')

let handler = async (m, { conn, args, text, usedPrefix, command, text }) => {
if (!text) throw `*Ingrese en nombre de una música*\n\n- Ejemplo: ${usedPrefix + command} It's Been So long`
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/playmp3?q=${text}&apikey=MIMINGANZ`)
await m.reply(`${JSON.stringify(res, null, 1)}`)
//let json = await res.json()
//conn.sendFile(m.chat, json.result.link.link, 'error.mp4', `_The Shadow Brokers - Bot_`, m)}

handler.command = /^(testplay)$/i

module.exports = handler
