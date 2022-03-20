let handler = m => m

handler.before = function (m, { user, text }) {
  if (m.isBaileys && m.fromMe) {
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success)
  else throw json
}
}

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
