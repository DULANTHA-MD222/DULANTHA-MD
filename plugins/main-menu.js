const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "⭕",
    alias: ["allmenu","fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `🚀 *${config.BOT_NAME}* 
╭─────────────────❑
┃• 👑 Owner : *${config.OWNER_NAME}*
┃• ⚙️ Prefix : *[${config.PREFIX}]*
┃• 🌐 Platform : *Heroku*
┃• 📦 Version : *4.0.0*
┃• ⏱️ Runtime : *${runtime(process.uptime())}*
╰─────────────────❑
╭───│DOWNLOAD MENU📥─────✇
│
│▹ ♨ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 [𝚞𝚛𝚕]
│▹ ♨ 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴 [𝚞𝚛𝚕]
│▹ ♨ 𝚃𝙸𝙺𝚃𝙾𝙺 [𝚞𝚛𝚕]
│▹ ♨ 𝚃𝚆𝙸𝚃𝚃𝙴𝚁 [𝚞𝚛𝚕]
│▹ ♨ 𝙸𝙽𝚂𝚃𝙰 [𝚞𝚛𝚕]
│▹ ♨ 𝙰𝙿𝙺 [𝚊𝚙𝚙 𝚗𝚊𝚖𝚎]
│▹ ♨ 𝙿𝙸𝙽𝚃𝙴𝚁𝙴𝚂𝚃 [𝚞𝚛𝚕]
│▹ ♨ 𝙵𝙱2 [𝚞𝚛𝚕]
│▹ ♨ 𝙰𝙿𝙺2 [𝚊𝚙𝚙 𝚗𝚊𝚖𝚎]
│▹ ♨ 𝙿𝙸𝙽𝚂 [𝚞𝚛𝚕]
│▹ ♨ 𝚃𝚃2 [𝚞𝚛𝚕]
│▹ ♨ 𝙸𝙼𝙶 [𝚚𝚞𝚎𝚛𝚢]
│▹ ♨ 𝚂𝙿𝙾𝚃𝙸𝙵𝚈 [𝚚𝚞𝚎𝚛𝚢]
│▹ ♨ 𝙿𝙻𝙰𝚈 [𝚜𝚘𝚗𝚐]
│▹ ♨ 𝙿𝙻𝙰𝚈2-10 [𝚜𝚘𝚗𝚐]
│▹ ♨ 𝙰𝚄𝙳𝙸𝙾 [𝚞𝚛𝚕]
│▹ ♨ 𝚂𝙾𝙽𝙶 [𝚗𝚊𝚖𝚎]
│▹ ♨ 𝚈𝚃𝙼𝙿4 [𝚞𝚛𝚕]
│▹ ♨ 𝚈𝚃𝙼𝙿3 [𝚞𝚛𝚕]
╰────────────────────────✇

╭╭─────│GROUP MENU 👥─────✇
│
│▹ ♨ 𝙶𝚁𝙾𝚄𝙿𝙻𝙸𝙽𝙺
│▹ ♨ 𝙺𝙸𝙲𝙺𝙰𝙻𝙻
│▹ ♨ 𝙺𝙸𝙲𝙺𝙰𝙻𝙻2
│▹ ♨ 𝙺𝙸𝙲𝙺𝙰𝙻𝙻3
│▹ ♨ 𝙰𝙳𝙳 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝚁𝙴𝙼𝙾𝚅𝙴 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙺𝙸𝙲𝙺
│▹ ♨ 𝙸𝙽𝚅𝙸𝚃𝙴
│▹ ♨ 𝚃𝙰𝙶𝙰𝙳𝙼𝙸𝙽𝚂
│▹ ♨ 𝚃𝙰𝙶𝙰𝙻𝙻
│▹ ♨ 𝙷𝙸𝙳𝙴𝚃𝙰𝙶 [𝚖𝚎𝚜𝚜𝚎𝚐𝚎]
│▹ ♨ 𝚃𝙰𝙶 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝚄𝙻𝙽𝙻𝙾𝙲𝙺𝙶𝙲
│▹ ♨ 𝙻𝙾𝙲𝙺𝙶𝙲
│▹ ♨ 𝚄𝙽𝙼𝚄𝚃𝙴
│▹ ♨ 𝙼𝚄𝚃𝙴 [𝚝𝚒𝚖𝚎]
│▹ ♨ 𝚁𝙴𝚅𝙾𝙺𝙴
│▹ ♨ 𝙳𝙸𝚂𝙼𝙸𝚂𝚂
│▹ ♨ 𝙳𝙴𝙼𝙾𝚃𝙴
│▹ ♨ 𝙿𝚁𝙾𝙼𝙾𝚃𝙴 [@𝚞𝚜𝚎𝚛]
╰───────────────────────────✇

╭─────│REACTION MENU 😗─────✇
│
│▹ ♨ 𝙲𝚄𝙳𝙳𝙻𝙴 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙷𝚄𝙶 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙿𝙰𝚃 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙺𝙸𝚂𝚂 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙻𝙸𝙲𝙺 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙱𝚄𝙻𝙻𝚈 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙱𝙾𝙽𝙺 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝚈𝙴𝙴𝚃 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝚂𝙻𝙰𝙿 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙺𝙸𝙻𝙻 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙱𝙻𝚄𝚂𝙷 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝚂𝙼𝙸𝙻𝙴 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙷𝙰𝙿𝙿𝚈 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝚆𝙸𝙽𝙺 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙿𝙾𝙺𝙴 [@𝚞𝚜𝚎𝚛]
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ

╭━━〔 🎨 *LOGO MAKER* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 💡 neonlight
┃◈┃• 🎀 blackpink
┃◈┃• 🐉 dragonball
┃◈┃• 🎭 3dcomic
┃◈┃• 🇺🇸 america
┃◈┃• 🍥 naruto
┃◈┃• 😢 sadgirl
┃◈┃• ☁️ clouds
┃◈┃• 🚀 futuristic
┃◈┃• 📜 3dpaper
┃◈┃• ✏️ eraser
┃◈┃• 🌇 sunset
┃◈┃• 🍃 leaf
┃◈┃• 🌌 galaxy
┃◈┃• 💀 sans
┃◈┃• 💥 boom
┃◈┃• 💻 hacker
┃◈┃• 😈 devilwings
┃◈┃• 🇳🇬 nigeria
┃◈┃• 💡 bulb
┃◈┃• 👼 angelwings
┃◈┃• ♈ zodiac
┃◈┃• 💎 luxury
┃◈┃• 🎨 paint
┃◈┃• ❄️ frozen
┃◈┃• 🏰 castle
┃◈┃• 🖋️ tatoo
┃◈┃• 🔫 valorant
┃◈┃• 🐻 bear
┃◈┃• 🔠 typography
┃◈┃• 🎂 birthday
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 👑 *OWNER MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 owner
┃◈┃• 📜 menu
┃◈┃• 📜 menu2
┃◈┃• 📊 vv
┃◈┃• 📋 listcmd
┃◈┃• 📚 allmenu
┃◈┃• 📦 repo
┃◈┃• 🚫 block
┃◈┃• ✅ unblock
┃◈┃• 🖼️ fullpp
┃◈┃• 🖼️ setpp
┃◈┃• 🔄 restart
┃◈┃• ⏹️ shutdown
┃◈┃• 🔄 updatecmd
┃◈┃• 💚 alive
┃◈┃• 🏓 ping
┃◈┃• 🆔 gjid
┃◈┃• 🆔 jid
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎉 *FUN MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🤪 shapar
┃◈┃• ⭐ rate
┃◈┃• 🤬 insult
┃◈┃• 💻 hack
┃◈┃• 💘 ship
┃◈┃• 🎭 character
┃◈┃• 💌 pickup
┃◈┃• 😆 joke
┃◈┃• ❤️ hrt
┃◈┃• 😊 hpy
┃◈┃• 😔 syd
┃◈┃• 😠 anger
┃◈┃• 😳 shy
┃◈┃• 💋 kiss
┃◈┃• 🧐 mon
┃◈┃• 😕 cunfuzed
┃◈┃• 🖼️ setpp
┃◈┃• ✋ hand
┃◈┃• 🏃 nikal
┃◈┃• 🤲 hold
┃◈┃• 🤗 hug
┃◈┃• 🏃 nikal
┃◈┃• 🎵 hifi
┃◈┃• 👉 poke
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🔄 *CONVERT MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🏷️ sticker
┃◈┃• 🏷️ sticker2
┃◈┃• 😀 emojimix
┃◈┃• ✨ fancy
┃◈┃• 🖼️ take
┃◈┃• 🎵 tomp3
┃◈┃• 🗣️ tts
┃◈┃• 🌐 trt
┃◈┃• 🔢 base64
┃◈┃• 🔠 unbase64
┃◈┃• 010 binary
┃◈┃• 🔤 dbinary
┃◈┃• 🔗 tinyurl
┃◈┃• 🌐 urldecode
┃◈┃• 🌐 urlencode
┃◈┃• 🌐 url
┃◈┃• 🔁 repeat
┃◈┃• ❓ ask
┃◈┃• 📖 readmore
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🤖 *AI MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🧠 ai
┃◈┃• 🤖 gpt3
┃◈┃• 🤖 gpt2
┃◈┃• 🤖 gptmini
┃◈┃• 🤖 gpt
┃◈┃• 🔵 meta
┃◈┃• 📦 blackbox
┃◈┃• 🌈 luma
┃◈┃• 🎧 dj
┃◈┃• 👑 khan
┃◈┃• 🤵 jawad
┃◈┃• 🧠 gpt4
┃◈┃• 🔍 bing
┃◈┃• 🎨 imagine
┃◈┃• 🖼️ imagine2
┃◈┃• 🤖 copilot
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 ⚡ *MAIN MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🏓 ping
┃◈┃• 🏓 ping2
┃◈┃• 🚀 speed
┃◈┃• 📡 live
┃◈┃• 💚 alive
┃◈┃• ⏱️ runtime
┃◈┃• ⏳ uptime
┃◈┃• 📦 repo
┃◈┃• 👑 owner
┃◈┃• 📜 menu
┃◈┃• 📜 menu2
┃◈┃• 🔄 restart
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎎 *ANIME MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🤬 fack
┃◈┃• ✅ truth
┃◈┃• 😨 dare
┃◈┃• 🐶 dog
┃◈┃• 🐺 awoo
┃◈┃• 👧 garl
┃◈┃• 👰 waifu
┃◈┃• 🐱 neko
┃◈┃• 🧙 megnumin
┃◈┃• 🐱 neko
┃◈┃• 👗 maid
┃◈┃• 👧 loli
┃◈┃• 🎎 animegirl
┃◈┃• 🎎 animegirl1
┃◈┃• 🎎 animegirl2
┃◈┃• 🎎 animegirl3
┃◈┃• 🎎 animegirl4
┃◈┃• 🎎 animegirl5
┃◈┃• 🎬 anime1
┃◈┃• 🎬 anime2
┃◈┃• 🎬 anime3
┃◈┃• 🎬 anime4
┃◈┃• 🎬 anime5
┃◈┃• 📰 animenews
┃◈┃• 🦊 foxgirl
┃◈┃• 🍥 naruto
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭───────│*OTHER MENU 🙃*
│
│▹ 🕒 timenow
│▹  date
│▹ 🔢 count
│▹ 🧮 calculate
│▹ 🔢 countx
│▹  🎲 flip
│▹  🪙 coinflip
┃◈┃• 🎨 rcolor
┃◈┃• 🎲 roll
┃◈┃• ℹ️ fact
┃◈┃• 💻 cpp
┃◈┃• 🎲 rw
┃◈┃• 💑 pair
┃◈┃• 💑 pair2
┃◈┃• 💑 pair3
┃◈┃• ✨ fancy
┃◈┃• 🎨 logo <text>
┃◈┃• 📖 define
┃◈┃• 📰 news
┃◈┃• 🎬 movie
┃◈┃• ☀️ weather
┃◈┃• 📦 srepo
┃◈┃• 🤬 insult
┃◈┃• 💾 save
┃◈┃• 🌐 wikipedia
┃◈┃• 🔑 gpass
┃◈┃• 👤 githubstalk
┃◈┃• 🔍 yts
┃◈┃• 📹 ytv
┃◈╰─────────────────┈⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/KpTm0WRH/3244.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363417726891412@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://i.imgur.com/nvzGOPp.mp4' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
