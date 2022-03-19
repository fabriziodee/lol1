let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')


let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
let caption = 'test4'
let footer = 'test5'
const btnCover = [
                    { quickReplyButton: { displayText: `Original Sound`, id: `test` } },
                    { quickReplyButton: { displayText: `Extract Audio`, id: `test2` } },
                    { urlButton: { displayText: `Download in Browser`, url: `test3` } }
                ]
                let buttonMessage = {
                    caption,
                    footer,
                    templateButtons: btnCover,
                    height: 'test6',
                    width: 'test7',
                    video: { url: 'test8' }
                }
                await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}

handler.help = ['test']
handler.tags = ['premium']
handler.command = /^(test)$/i

module.exports = handler
