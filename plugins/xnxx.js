let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

  if (!args[0]) throw 'Uhm...url nya mana?'

  let res = await fetch(global.API('lol', 'xnxx', {

    url: args[0]

  }, 'APIKEY'))

  if (res.status !== 200) throw await res.text()

  let json = await res.json()

  if (!json.status) throw json

  try {

    await conn.sendFile(m.chat, json.server_1, 'xnxx.mp4', '', m)

  } catch (e) {

    m.reply('Server 1 Failed, Retrying with Server 2')

    await conn.sendFile(m.chat, json.server_2, 'xnxx.mp4', '', m)

  }

}

handler.help = ['xnxx'].map(v => v + ' <url>')

handler.tags = ['downloader']

handler.command = /^(xnxx(dl)?)$/i

module.exports = handler

