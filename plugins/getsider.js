let handler = async (m, { conn, command, usedPrefix }) => {
  if (!m.quoted) throw `Balas pesan bot dengan perintah *${usedPrefix + command}*`
  if (!m.quoted.fromMe) throw false
  if (!m.quoted.id) throw false
  let members = m.quoted.chat.endsWith('g.us') ? (await conn.groupMetadata(m.quoted.chat)).participants.length - 1 : m.quoted.chat.endsWith('@broadcast') ? -1 : 1
  let { reads, deliveries } = await conn.messageInfo(m.quoted.chat, m.quoted.id)
  let txt = `
*Leído por ${members > 1 ? `${members - reads.length} Miembros` : ''}*
${reads.sort((a, b) => b.t - a.t).map(({ jid, t }) => `*• Usuario:* @${jid.split`@`[0]}\n*• Fecha:* ${formatDate(t * 1000)}\n*• Hora:* ${formatHour(t * 1000)}`).join('\n\n')}


*Enviado a ${members > 1 ? `${members - reads.length - deliveries.length} Miembros` : ''}
${deliveries.sort((a, b) => b.t - a.t).map(({ jid, t }) => `*• Usuario:* @${jid.split`@`[0]}\n*• Fecha:* ${formatDate(t * 1000)}\n*• Hora:* ${formatHour(t * 1000)}`).join('\n\n')}
`.trim()
  m.reply(txt, null, {
    contextInfo: {
      mentionedJid: conn.parseMention(txt)
    }
  })
}

handler.help = ['getsider']
handler.tags = ['group']
handler.command = /^(getsider)$/

module.exports = handler

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
    second: 'numeric'
  })
}
