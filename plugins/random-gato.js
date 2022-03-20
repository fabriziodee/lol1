let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
conn.reply(m.chat, wait, m)
  try {
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
    conn.sendFile(m.chat, img, 'gato.jpg', '*GATO*', m)
   } catch (e) {
        console.log(e)
        throw error
    }
}

handler.help = ['gato']
handler.tags = ['random']
handler.command = /^(gato|cat)$/i

handler.fail = null

module.exports = handler
