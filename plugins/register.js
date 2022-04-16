const {
  MessageType
} = require("@adiwajshing/baileys");
const { createHash } = require('crypto')
let fs = require('fs')
let fetch = require('node-fetch')
let Reg = /(.*)([.|])([0-9]*)$/i
let Rname = /([A-Za-z])$/i
let handler = async function (m, { conn, text, usedPrefix, command}) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `*Ya estas registrado*, quieres volver a registrarte?\nUse ${usedPrefix}unreg <codigo>`
  if (!Reg.test(text)) throw `*Registro no valido*\n- Ejemplo: ${usedPrefix + command} <nombre>.<edad>\n\nNo se olvide del punto`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacio!'
  if (!age) throw 'La edad no puede estar vacia!'
  if (!Rname.test(name)) throw 'Ponga un nombre valido'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let reuser = './src/avatar_contact.png'
  try {
    reuser = await conn.getProfilePicture(m.sender)
  } catch (e) {
  	
  } finally {
  let repp = await(await fetch(reuser)).buffer()
  retext = `
\t\t\t*‧ 🧇 Usuario Registrado 🧇 ‧*

 *◦ Nombre:* ${name}
 *◦ Edad:* ${age} años
 *◦ Codigo:* ${sn}

 *◦ Fecha:* ${date}
 *◦ Hora:* ${time}`
  py =  await conn.prepareMessage(m.chat, repp, MessageType.image)
gbutsan = [
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '🍟 MENU'}, type: 1},
{buttonId: `${usedPrefix}owner`, buttonText: {displayText: '🍧 CREADOR'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: retext,
footerText: 'No olvides tu *codigo* por qué será necesario para próximas actuaciones',
buttons: gbutsan,
headerType: 4
}
conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { quoted: m })
}
conn.sendMessage(m.sender, `Codigo de registro: ${sn}`, MessageType.text, { quoted: m })
}

handler.help = ['registrar']
handler.tags = ['xp']
handler.command = /^(registrar|registrarse|daftar|register|reg)$/i

module.exports = handler


let d = new Date(new Date + 3600000)

let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

let time = d.toLocaleString('en-US', { 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true 
    })
