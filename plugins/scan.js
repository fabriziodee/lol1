let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
    if (!args || !args[0] || args.length === 0) throw `*Ingrese un numero valido*\n\n- Ejemplo: ${usedPrefix + command} +51 988 050 859`
    if (args[0].startsWith('0')) throw 'Ingrese el código de país!'
    let _participants = participants.map(user => user.jid)
    let user = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.isOnWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
    //let user = await conn.isOnWhatsApp(args[0])
    let exists = user && user.exists ? true : false
    if (exists) {
        let sameGroup = [], isInDatabase = false
        let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
        for (let gc of chat) {
            let participants = gc && gc.metadata && gc.metadata.participants ? gc.metadata.participants : []
            if (participants.some(v => v.jid === user.jid)) sameGroup.push(gc.jid)
        }
        if (user.jid in global.DATABASE._data.users) isInDatabase = true
        let str = ` 
*Nombre:* ${conn.getName(user.jid)}
*Numero:* ${splitM(user.jid)}
*Mencion:* ${toM(user.jid)}
*Link:* wa.me/${splitM(user.jid)}
*Jid:* ${user.jid}
*Whatsapp Bussines:* ${user.isBusiness ? 'Si' : 'No'}
*Registrado en la base datos:* ${isInDatabase ? 'Si' : 'No'}
*Esta en algun grupo con el BOT:* ${sameGroup.length} *Group*
`.trim()
        m.reply(str, m.chat, { 
            contextInfo: { 
                mentionedJid: conn.parseMention(str)
            }
        })
    } else throw 'El número no está registrado en WhatsApp!'
}
    
handler.help = ['scan']
handler.tags = ['tools']
handler.command = /^(scan)$/i

module.exports = handler

function splitM(jid) {
    return jid.split('@')[0]
}

function toM(jid) {
    return '@' + splitM(jid)
}
