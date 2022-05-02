let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    let res = await fetch('https://some-random-api.ml/img/pikachu')
    let json = await res.json()
    if (json.status) throw json
    conn.sendFile(m.chat, json.link, '', '*PIKACHU*', m)
   } catch (e) {
        console.log(e)
        throw error
    }
}

handler.help = ['pikachu']
handler.tags = ['random']
handler.command = /^(pikachu)$/i

handler.fail = null

module.exports = handler
