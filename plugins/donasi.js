let handler = async m => m.reply(`
╭─「 Donasi • Electrick 」
│ • XL [087708773367]
│ • Smartfren [088229683561]
│ • Telkomsel [081213304135]
│ • Three3 [089504766053]
│ • Dana [0895609803131]
│ • Ovo [08988986891]
│ • Gopay [089504766053]
╰────
╭─「 Donasi kak buat beli kuota >,< 」
│ > Terima Kasih buat yang sudah mendonasi
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
