let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
//Test
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
