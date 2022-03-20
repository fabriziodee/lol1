let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
conn.reply(m.chat, wait, m)
  try {
    let res = await fetch('https://random.dog/woof.json')
    let json = await res.json()
    if (json.status) throw json
    conn.sendFile(m.chat, json.url, 'perro.jpg', '*PERRO*', m)
   } catch (e) {
        console.log(e)
        throw error
    }
}

handler.help = ['perro']
handler.tags = ['random']
handler.command = /^(perro|dog)$/i

handler.fail = null

module.exports = handler
