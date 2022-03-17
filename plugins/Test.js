let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
	if (!text) throw '*Ingrese un enlace de WhatsApp*\n\n- Ejemplo: ${usedPrefix + command} https://chat.whatsapp.com/EphX7iaMsKj70m0BrZsmvw'
	let faketumb = fs.readFileSync('./storage/image/menu.jpg')
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Enlace invalido!'
    let { gid: target } = await conn.acceptInvite(code)
    let member = (await conn.groupMetadata(target)).participants.map(v => v.jid)
    let joinloc = await conn.prepareMessage(target, { jpegThumbnail: faketumb }, MessageType.location)
    let buttonss = [{ buttonId: 'Thanks', buttonText: { displayText: 'Welcome :3' }, type: 1 }]
    let buttonsMessagee = {
	locationMessage: joinloc.message.locationMessage,
    contentText: 'Test - Join',
    buttons: buttonss,
    footerText: "Lolibot - OFC',
    headerType: 6
    }
    await conn.sendMessage(target, buttonsMessagee, MessageType.buttonsMessage, { contextInfo: { mentionedJid: [m.sender] } } )

}

handler.help = ['test']
handler.tags = ['premium']
handler.command = /^(test)$/i

module.exports = handler
