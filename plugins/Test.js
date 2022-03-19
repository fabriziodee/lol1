let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')


let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
let lolitest = fs.readFileSync('./storage/image/menu.jpg')
const btn = [ { urlButton: { displayText: `𝙃𝙤𝙨𝙩𝙞𝙣𝙜 `, url: `https://jsrepos.com/lib/Ilhamskhyi-catzy` } }, { urlButton: { displayText: `𝙂𝙞𝙩𝙝𝙪𝙗 `, url: `https://github.com/Ilhamskhyi` } }, { urlButton: { displayText: `𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 `, url: `developer atau pengembang bot https://wa.me/+6287773710155` } }, { quickReplyButton: {displayText: '𝙛𝙖𝙨𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙚 𝙗𝙤𝙩', id: '.ping '}}, { quickReplyButton: {displayText: '𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙧 ', id: '.allmenu'}} ]
conn.sendMessage(m.chat, { caption: 'Test', footer, templateButtons: btn, image: lolitest }, { quoted: m })
}

handler.help = ['test']
handler.tags = ['premium']
handler.command = /^(test)$/i

module.exports = handler
