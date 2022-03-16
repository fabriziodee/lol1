let handler = async (m, { conn, participants, groupMetadata, args }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/admins.jpg'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        //let { isBanned, welcome, antivirtex, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.DATABASE.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let pesan = args.join` `
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `\t\t*‧ [ 🍧 Lista de Admins 🍧 ] ‧*\n\nMensaje: ${pesan}\n${listAdmin}`
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}

handler.help = ['admins']
handler.tags = ['group']
handler.command = /^(admins|adms)$/i

handler.group = true

module.exports = handler
