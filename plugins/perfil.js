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

*• Nombre:* ${username} ${registered ? '\n*• Nombre de Reg:* ' + name : ''}
*• Tag:* @${who.replace(/@.+/, '')}
*• Bio:* ${about ? `${about}` : 'Sin info'}
*• Nunero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*• Link:* https://wa.me/${who.split`@`[0]}${registered ? '\n• *Edad* : ' + age : ''}
*• Exp:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Listo para subir de nivel *${usedPrefix}levelup*` : `${math} Exp restante para subir de nivel`}]
*• Nivel:* ${level}
*• Limite:* ${limit}
*• Registrado:* ${registered ? 'Si (' + new Date(regTime) + ')': 'No'}
*• Premium:* ${prem ? 'Si' : 'No'}${lastclaim > 0 ? '\n*• Ultimo reclamo:* ' + new Date(lastclaim) : ''}
`
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
