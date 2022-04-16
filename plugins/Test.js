let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix }) => {
await m.reply(`${formatNumber(text)}`)
}

//handler.help = ['test']
//handler.tags = ['info']
handler.command = /^(test)$/i

module.exports = handler

var ranges = [{
      divider: 1e18,
      suffix: 'E'
   },
   {
      divider: 1e15,
      suffix: 'P'
   },
   {
      divider: 1e12,
      suffix: 'T'
   },
   {
      divider: 1e9,
      suffix: 'G'
   },
   {
      divider: 1e6,
      suffix: 'M'
   },
   {
      divider: 1e3,
      suffix: 'k'
   }
];

function formatNumber(n) {
   for (var i = 0; i < ranges.length; i++) {
      if (n >= ranges[i].divider) {
         return (n / ranges[i].divider).toString() + ranges[i].suffix;
      }
   }
   return n.toString();
}

function createHash(data, len) {
    return crypto.createHash("shake256", { outputLength: len })
      .update(data)
      .digest("hex");
}
