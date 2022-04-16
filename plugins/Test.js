let crypto = require('crypto')

let handler = async (m, { conn, usedPrefix }) => {
await m.reply(`${tnumberto(65512)}`)
}

//handler.help = ['test']
//handler.tags = ['info']
handler.command = /^(test)$/i

module.exports = handler

function numberto(n){
x=(''+n).length;
p=Math.pow;
d=p(10,true);
x-=x%3;
return Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3];
}

function createHash(data, len) {
    return crypto.createHash("shake256", { outputLength: len })
      .update(data)
      .digest("hex");
}
