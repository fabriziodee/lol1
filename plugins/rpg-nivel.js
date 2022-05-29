let { MessageType, mentionedJid } = require("@adiwajshing/baileys");
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
    //let pp = './src/avatar_contact.png'
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.DATABASE._data.users[who]
    try {
      pp = await conn.getProfilePicture(who)
    } catch {
      pp = await conn.getProfilePicture("51940617554-1604073088@g.us")
    }
    let _pp = await(await fetch(pp)).buffer()
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE._data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])

    var per = '□□□□□□□□□□ 0%'
    let xl = exp - min
    let zl = max
    let resl = Math.floor((xl * 100) / zl)
    if (resl <= 10) {
	per = `■□□□□□□□□□ ${resl}%`
    } else if (resl <= 20) {
	per = `■■□□□□□□□□ ${resl}%`
    } else if (resl <= 30) {
	per = `■■■□□□□□□□ ${resl}%`
    } else if (resl <= 40) {
	per = `■■■■□□□□□□ ${resl}%`
    } else if (resl <= 50) {
	per = `■■■■■□□□□□ ${resl}%`
    } else if (resl <= 60) {
	per = `■■■■■■□□□□ ${resl}%`
    } else if (resl <= 70) {
	per = `■■■■■■■□□□ ${resl}%`
    } else if (resl <= 80) {
	per = `■■■■■■■■□□ ${resl}%`
    } else if (resl <= 90) {
	per = `■■■■■■■■■□ ${resl}%`
    } else if (resl <= 100) {
	per = `■■■■■■■■■■ ${resl}%`
    }

    let str = `*Nivel de @${who.replace(/@.+/, '')}*

*✨ • Exp:* ${exp - min}/${max}
*📚 • Nivel:* ${level}
*🏅 • Rango:* ${user.role}

*Nota:* puedes ganar exp jugando mini juegos`
conn.sendMessage(m.chat, str, MessageType.text, { quoted: m, contextInfo: { externalAdReply:{title: `${per}`,body:"porsentaje del nivel", previewType:"PHOTO",thumbnail: _pp, sourceUrl:``}, "mentionedJid": [who]}})
}

handler.help = ['nivel']
handler.tags = ['rpg']
handler.command = /^(nivel|level)$/i
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
