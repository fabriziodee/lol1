let { MessageType } = require("@adiwajshing/baileys");
let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  //Test
}

handler.command = /^(test)$/i

module.exports = handler
