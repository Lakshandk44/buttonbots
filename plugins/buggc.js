let handler = async (m, { conn, args, text, isPrems, isOwner }) => {

if(!isOwner) return m.reply('pamkak')

for (let i = 0; i < args[0]; i++) {

conn.message.client.toggleDisappearingMessages(message.jid, 64000);

}

}

handler.help = ['buggc <berapa>?']

handler.tags = ['owner']

handler.command = /^buggc/i

handler.owner = true

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler
