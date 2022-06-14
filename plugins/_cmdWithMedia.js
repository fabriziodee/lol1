const { MessageType, newMessagesDB } = require("@adiwajshing/baileys")

module.exports = {
    async all(m, chatUpdate) {
        if (m.isBaileys) return
        if (!m.message) return
        if (!m.msg.fileSha256) return
        if (!(Buffer.from(m.msg.fileSha256).toString('base64') in global.DATABASE._data.sticker)) return
        //if (!(m.msg.fileSha256.toString('hex') in global.DATABASE._data.sticker)) return
        
        let hash = global.db.data.sticker[Buffer.from(m.msg.fileSha256).toString('base64')]
        //let hash = global.DATABASE._data.sticker[m.msg.fileSha256.toString('hex')]
        m.reply('Test')
        let { text, mentionedJid } = hash
        this.emit('chat-update', {
            ...chatUpdate,
            messages: newMessagesDB([
                this.cMod(m.chat,
                    await this.prepareMessage(m.chat, text, MessageType.extendedText, {
                        contextInfo: {
                            mentionedJid
                        },
                        ...(m.quoted ? { quoted: m.quoted.fakeObj } : {}),
                        messageId: m.id,
                    }),
                    text,
                    m.sender
                )
            ])
        })
    }
}
