let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE._data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `\t\t\t\t\t*‧ 🐣 Perfil Info 🐣 ‧*

*• Nombre:* ${username}
*• Tag:* @${who.replace(/@.+/, '')}
*• Bio:* ${about ? `${about}` : 'Sin info'}
*• Nunero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*• Link:* wa.me/${who.split`@`[0]}
*• Nivel:* ${level}
*• Exp:* ${exp}
*• Exp nivel:* ${who.exp - min}/${max}
*• Limite:* ${limit}
*• Premium:* ${prem ? 'Si' : 'No'}
*• Ultimo claim:* *${lastclaim > 0 ? `${formatDate(lastclaim)}` : '-'}

*• Registrado:* ${registered ? 'Si': 'No'}
*• Fecha:* ${registered ? `${formatDate(regTime)}` : '-'}
*• Hora:* ${registered ? `${formatHour(regTime)}` : '-'}
*• Nombre:* ${registered ? `${name}` : '-'}
*• Edad:* ${registered ? `${age}` : '-'}`
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}

handler.help = ['perfil']
handler.tags = ['tools']
handler.command = /^(profile|perfil)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}
