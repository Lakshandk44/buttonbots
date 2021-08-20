function handler(m) {
  this.sendContact(m.chat, '94753943957', this.getName('94753943957@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
