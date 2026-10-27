const { cmd } = require('../command')

cmd({
  pattern: "sborra",
  desc: "manda link x volte",
  category: "group",
  react: "💦",
  filename: __filename
},
async (conn, mek, m, { from, isGroup, isAdmins, args, reply }) => {
  try {
    if (!isGroup) return reply("❌ Solo nei gruppi")
    if (!isAdmins) return reply("❌ Solo admin")

    let num = parseInt(args[0]) || 1
    if (num > 10) num = 10
    if (num < 1) num = 1

    let link = "https://metti-qui-il-tuo-link.com"

    for (let i = 0; i < num; i++) {
      await conn.sendMessage(from, { text: link }, { quoted: mek })
      await new Promise(r => setTimeout(r, 1000))
    }

  } catch (e) {
    console.log(e)
    reply("Errore: " + e)
  }
})
