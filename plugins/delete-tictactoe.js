let handler  = async (m, { conn, text }) => {
	
conn.game = conn.game ? conn.game : {}

try {
if ( conn.game = true ) {
	delete conn.game
	conn.reply( m.chat, 'Se eliminó la partida de tictactoe!', m)
	} else if ( conn.game = false ) {
		m.reply('Todavía no estas en ninguna partida')
		} else throw '*Error*'
	} catch (e) {
		m.reply('Error al eliminar la partida de tictactoe!')
		}
}

handler.help = ['delxo']
handler.tags = ['game']
handler.command = /^(delttt|dellttt|delxo)$/i

handler.register = true
handler.fail = null

module.exports = handler
