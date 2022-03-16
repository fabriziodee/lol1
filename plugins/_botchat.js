let util = require('util')
let path = require('path')

let handler = m => m

handler.before = async function (m, { conn, command, text }) {

if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
if (!/Test/i.exec(m.text)) {
	let vn = './storage/audio/Yamete_onii_chan.mp3'
	conn.sendFile(m.chat, vn, 'Yamete_onii_chan.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	}

}

module.exports = handler
