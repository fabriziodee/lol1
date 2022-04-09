let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Ingrese el país*\n\n- Ejemplo: ${usedPrefix + command} peru`
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'Ingrese el país correcto!'
  if (json.confirmed) m.reply(`\t\t\t\t *‧ 🧫 Covid Info 🧫 ‧*

*• País:* ${text}
*• Confirmados:* ${json.confirmed.value}
*• Recuperados:* ${json.recovered.value}
*• Muertes:* ${json.deaths.value}
*• Actualizado:* ${json.lastUpdate}`
)
  else throw json
}

handler.help = ['covid']
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i

module.exports = handler
