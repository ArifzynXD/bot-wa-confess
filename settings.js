const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["62895347198105"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Saya adalah bot WhatsApp confess 👋 ketik .confess untuk memulai chat.
`
}
}
