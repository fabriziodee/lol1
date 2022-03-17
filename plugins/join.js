let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, usedPrefix, command }) => {
	let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
	if (!link) throw `*Ingrese un enlace de WhatsApp o etiqueta uno*\n\n- Ejemplo: ${usedPrefix + command} https://chat.whatsapp.com/EphX7iaMsKj70m0BrZsmvw`
    let [_, code] = link.match(linkRegex) || []
    if (!code) throw 'Enlace invalido!'
    if (isMods || isOwner || m.fromMe) {
    let faketumb = fs.readFileSync('./storage/image/menu.jpg')
    let res = await conn.query({ json: ["query", "invite", code], expect200: true })
    let { gid: target } = await conn.acceptInvite(code)
    let member = (await conn.groupMetadata(target)).participants.map(v => v.jid)
    let textjoin = `
Holii soy una bot loli 7w7, Fuí invitado por *@${m.participant.split`@`[0]}* para unirme a este grupo

\t\t*‧ 🐋 Info del Grupo 🐋 ‧*

• Grupo: ${res.subject}
• Jid: ${res.id}
• Creador: @${res.id.split('-')[0]}
• Creado: ${formatDate(res.creation * 1000)}
• Miembros: ${res.size} Total
    `
    let joinloc = await conn.prepareMessage(target, { jpegThumbnail: faketumb }, MessageType.location)
    let buttonss = [{ buttonId: 'Thanks', buttonText: { displayText: 'Welcome :3' }, type: 1 }]
    let buttonsMessagee = {
	locationMessage: joinloc.message.locationMessage,
    contentText: textjoin,
    buttons: buttonss,
    footerText: 'Lolibot - OFC',
    headerType: 6
    }
    await conn.sendMessage(target, buttonsMessagee, MessageType.buttonsMessage, { contextInfo: { mentionedJid: member } } )
}
}

handler.help = ['join']
handler.tags = ['premium']
handler.command = /^(join)$/i

module.exports = handler
