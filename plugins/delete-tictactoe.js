let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return m.reply('Todavía no estas en ninguna partida')
delete conn.game[room.id]
await m.reply('Se eliminó la partida!')
}

handler.help = ['delttt']
handler.tags = ['game']
handler.command = /^(delttt)$/i

handler.fail = null

module.exports = handler
