const TicTacToe = require("../lib/tictactoe")

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Todavía estás en el juego'
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('Jugador encontrado!')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
_*🕹️ Juego Tic-tac-toe 🎮*_

❎ = @${room.game.playerX.split`@`[0]}
⭕ = @${room.game.playerO.split`@`[0]}

      ${arr.slice(0, 3).join('')}
      ${arr.slice(3, 6).join('')}
      ${arr.slice(6).join('')}

Tu turno @${room.game.currentTurn.split('@')[0]}

Escriba *rendirse* para dejar de jugar
`.trim()
        if (room.x !== room.o) m.reply(str, room.x, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
        m.reply(str, room.o, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        m.reply(`*Esperando jugador*\n\n- Si quieres entrar a la partida escriba ${usedPrefix + command}`)
        conn.game[room.id] = room
    }
}

handler.help = ['tictactoe', 'ttt'].map(v => v + '')
handler.tags = ['game']
handler.command = /^(tictactoe|ttt)$/

module.exports = handler
