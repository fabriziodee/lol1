let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!args[0]) throw `*Ingrese un texto*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
response = args.join(' ').split('|')
let ralogo = pickRandom(global.logos)
let res = `https://api-alc.herokuapp.com/api/photooxy/${ralogo}?texto=${response[0]}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'logo.jpg', `*Logo personalizada*\n*Efecto:* ${ralogo}`, m)
}

handler.help = ['randomlogo']
handler.tags = ['maker']
handler.command = /^(randomlogo|logorandom)$/i

module.exports = handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.logos = [
"text-on-scary", 
"coffee-cup",
"teks-cup",
"funny-cup",
"love-messages",
"romantic-messages",
"romantic-messages",
"flaming-fire",
"flaming-fire",
"romantic-double",
"burn-paper",
"text-on-scary", 
"under-grass",
"shadow-sky",
"love-messages",
"romantic-messages",
"coffee-cup",
"teks-cup",
"romantic-double"
] 
