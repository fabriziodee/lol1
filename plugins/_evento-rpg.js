let moment = require('moment-timezone')

let handler = m => m

handler.all = async function (m) {
	let eve = await moment.tz('Asia/Jakarta').format('H')
	if (eve == 3) {
	//this.reply(m.chat, '*Test event . . .*')
	//this.event = this.event ? this.event : {}
	//this.event[m.chat] = true
	//this.sendButton(m.chat, `\n*Caba de caer una caja 📦 misteriosa*\n`, '', 'Recojer!', '.recoger')
    }

}

module.exports = handler

