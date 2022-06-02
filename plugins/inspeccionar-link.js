
let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

let handler = async(m, { conn, text }) => {
  let [, code] = text.match(linkRegex) || []
  if (!code) throw 'El link es invalido'
  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) throw res
  let caption = `\t\t\t*‧ 🍭 Inspección del Grupo 🍭 ‧*

*• Nombre:* ${res.subject}
*• Jid:* ${res.id}
*• Creador:* @${res.id.split('-')[0]}
*• Creado:* ${formatDate(res.creation * 1000)}
${res.subjectOwner ? `
*• Titulo cambiado:* @${res.subjectOwner.split`@`[0]}
*• Fecha:* ${formatDate(res.subjectTime * 1000)}`: ''}
${res.descOwner ? `
*• Descripción cambiado:* @${res.descOwner.split`@`[0]}
*• Fecha:* ${formatDate(res.descTime * 1000)}` : ''}

*• Miembros:* ${res.size} total
*• Miembros unidos:* ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim( ) : '×'}
${res.desc ? `
*• Descripción:*
${res.desc}` : '×'}


*• Versión JSON:*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`
  let pp = await conn.getProfilePicture(res.id).catch((e)=>{ m.reply(caption) })
  if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', caption, m, false, { contextInfo: { mentionedJid: conn.parseMention(caption) }})
  //m.reply(caption, false, { contextInfo: { mentionedJid: conn.parseMention(caption) }})
}

handler.help = ['inspect']
handler.tags = ['tools']
handler.command = /^(inspect|ins|inspecciónar|inspeccionar)$/i

module.exports = handler


function formatDate(n, locale = 'es') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekdays: 'long',
    day: 'numeric',
    months: 'long',
    year: 'numeric',
    hour: 'numeric',
    minutes: 'numeric',
    second: 'numeric'
  })
}
