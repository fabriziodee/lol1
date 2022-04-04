let fetch = require('node-fetch')
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
  if (!text) throw `*Ingrese el número al que quiere añadir*\n\n- Ejemplo: ${usedPrefix + command} +51 990 181 480`
  let _participants = participants.map(user => user.jid)
  let users = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.isOnWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  let response = await conn.groupAdd(m.chat, users)
  if (response[users] == 408) throw `*El usuario se salio recientemente*\nLa unica manera de añadirlo es por medio del enlace del grupo. Usa ${usedPrefix}link para obtener el enlace`
  let pp = await conn.getProfilePicture(m.chat).catch(_ => false)
  let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
  for (let user of response.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    let teks = `No se pudo añadir a *@${jid.split('@')[0]}*, se le envió una invitacion al grupo a su privado!`
    m.reply(teks, null, {
      contextInfo: {
        mentionedJid: conn.parseMention(teks)
      }
    })
    await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, false, '\t\t∙ 🥧 *Invitation a un Grupo* 🥧 ∙\n\nHolaa soy una loli bot, alguien te invito para que unas a este hermoso grupo :3', jpegThumbnail ? {
      jpegThumbnail
    } : {})
  }
}

handler.help = ['add']
handler.tags = ['adm']
handler.command = /^(add|agregar|añadir)$/i
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
