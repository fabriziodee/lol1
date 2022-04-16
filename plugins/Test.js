let crypto = require('crypto')

let handler = async (m, { conn, usedPrefix }) => {
    let groups = "CcmCXks3T22J6Bc35jCKOS"
    let group = await conn.query({ json: ["query", "invite", groups], expect200: true })
    let reg = Object.entries(group).filter(group => group.id)
    m.reply(`\t\t\t\t\t*‧ 📨 Grupos 📨 ‧*

Total: ${reg.length} Grupos

${reg ? '\n' + reg.map(([id], i) => `*• ID:* ${id}`).join('\n\n') : ''}
`)
}

//handler.help = ['test']
//handler.tags = ['info']
handler.command = /^(test)$/i

module.exports = handler

function createHash(data, len) {
    return crypto.createHash("shake256", { outputLength: len })
      .update(data)
      .digest("hex");
}
