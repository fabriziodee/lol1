let fs = require('fs')
let crypto = require('crypto')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {
let test = createHash('Test', 7)
await m.reply(test)
}

//handler.help = ['test']
//handler.tags = ['group']
handler.command = /^(test)$/i
//handler.group = true
handler.owner = true

module.exports = handler

const crypto = require("crypto");

function createHash(data, len) {
    return crypto.createHash("shake256", { outputLength: len })
      .update(data)
      .digest("hex");
}
