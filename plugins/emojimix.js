let fetch = require('node-fetch')
let fs = require("fs")

let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*Ingrese dos emojis*\m\n- Ejemplo: ${usedPrefix + command} 🐱+👻`
   	let [emoji1, emoji2] = text.split`+`
                let anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)).json()
		let emix = anu.results[0].media_formats.png_transparent.url
                m.reply(`${emix}`)
		    let encmedia = await conn.sendImageAsSticker(m.chat, emix, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		
}
handler.help = ['emojimix']
handler.tags = ['sticker']
handler.command = /^(emojimix|emix)$/i

module.exports = handler
