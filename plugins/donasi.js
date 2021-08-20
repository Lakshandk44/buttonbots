let handler = async m => m.reply(`
┌〔 join • group 〕
├ https://chat.whatsapp.com/CHEzXIzUuYL7TLuziDlZH1
`.trim())
handler.help = ['group']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
