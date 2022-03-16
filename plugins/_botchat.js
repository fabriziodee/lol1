let util = require('util')
let path = require('path')

let handler = async (m, { conn, command, text }) => {

if (!/Test/i.test(m.text)) {
	let vn = './storage/audio/Yamete_onii_chan.mp3'
	conn.sendFile(m.chat, vn, 'Yamete_onii_chan.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	}

}

module.exports = handler
