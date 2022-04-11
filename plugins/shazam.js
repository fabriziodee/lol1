const fetch = require('node-fetch');

let handler = async (m, { conn }) => {
const url = 'https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
}

handler.help = ['shazam']
handler.tags = ['tools']
handler.command = /^(shazam)$/i

module.exports = handler
