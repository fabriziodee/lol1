let { MessageType } = require("@adiwajshing/baileys");
let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, text, usedPrefix, command }) => {
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let valueAppearances = [];

for (let index = 0; index < 10; index++) {
  valueAppearances.push(0);
}


for (let i = 0; i <= 10000; i++) {
  
  let randomIndex = random(999, 9);
  
  valueAppearances[randomIndex]++;
}
console.log(valueAppearances)
m.reply(valueAppearances)
}

handler.command = /^(test)$/i

module.exports = handler
