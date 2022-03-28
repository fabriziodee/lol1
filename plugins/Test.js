let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
let tol = conn.prepareMessageFromContent(m.chat, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "62882993109058@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: tumbb,
                                        productId: false
                                    },
                                    productSections: [
                                        { products: [{ productId: false }], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: false,
                                footerText: "b",
                                listType: 2
                            }
                        }, {});
                        await conn.relayWAMessage(tol)

}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
