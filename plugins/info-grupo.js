let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/wa.jpg'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, antivirtex, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.DATABASE.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `\t\t*‧ ⚗️ Información del Grupo ⚗️ ‧*

*• Nombre:* 
${groupMetadata.subject}

*• Jid:* 
${groupMetadata.id}

*• Participantes:*
${participants.length} Participantes

*• Creador\'a:* 
@${m.chat.split`-`[0]}

*• Administradores\'as:*
${listAdmin}

*• Configuraciones:*
${welcome ? '✅' : '❌'} Bienvenida
${global.DATABASE.data.chats[m.chat].delete ? '❌' : '✅'} Antidelete
${antiLink ? '✅' : '❌'} Antienlace

*• Descripción:* 
${groupMetadata.desc}`
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}

handler.help = ['groupinfo']
handler.tags = ['group']
handler.command = /^(groupinfo|infogc|infogroup|gc|infogrupo)$/i

handler.group = true

module.exports = handler
