let handler = m => m

handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
        let q = m.quoted ? m.quoted : m
        if (m.quoted.mtype == 'viewOnceMessage') {
            await this.copyNForward(m.chat, await this.loadMessage(m.chat, q.id), false, { readViewOnce: true })
        }
}

module.exports = handler
