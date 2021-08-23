for (let i = 0; i < args[0]; i++) {

await conn.toggleDisappearingMessages(from, 0)

reply(`Sukses SendBugg`)

}

handler.help = ['apk (kata kunci)']

handler.tags = ['apk']

handler.command = /^(apk)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 0

handler.limit = false

module.exports = handler

© 2021 GitHub, Inc.
