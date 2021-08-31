let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/xnxx?apikey=0bc2903f193ecc977d61427a&url=?text', '', 'caption', m)

}

handler.help = ['xnxx]

handler.tags = ['NSFW']

handler.command = /^(xnxx)$/i

handler.premium = true

handler.limit = true

handler.Grup = true

module.exports = handler
