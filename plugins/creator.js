function handler(m) {
  this.sendContact(m.chat, '94756883698', this.getName('94756883698@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
