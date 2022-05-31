let handler = m => m

handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
 //let q = m.quoted ? m.quoted : m
 if (m.mtype == 'viewOnceMessage') {
 //await this.copyNForward(m.chat, await this.loadMessage(m.chat, m.id), false, { readViewOnce: true })
 var msg = {...m}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `\t\t\t*‧ 👁 ViewOnce Detectado  👁 ‧*\n\n*• Usuario:* @${sender.split("@")[0]}\n*• Fecha:* ${date}\n*• Texto:* ${(typenya.caption === '') ? 'No hay' : typenya.caption}`
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : { "viewOnce": true } } } } } :  { key: { fromMe: false, participant: m.sender, id: m.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : { "viewOnce": true } } } } }
            
let pe = await conn.prepareMessageFromContent(m.chat, msg.message.viewOnceMessage.message, { quoted: peq, contextInfo: {"mentionedJid": [m.sender]} })
            
await conn.relayWAMessage(pe)
 }
}

module.exports = handler


let d = new Date(new Date + 3600000)
let locale = 'es'
let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })


