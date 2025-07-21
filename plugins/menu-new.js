const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "Show interactive menu system",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const menuCaption = `👋 Hello ${pushname}*
    
  𝗗𝗨𝗟𝗔𝗡𝗧𝗛𝗔 𝗠𝗗💢
╭──────────────❑
┃ 👑 Owner : *${config.OWNER_NAME}*
┃ 🤖 Baileys : *Multi Device*
┃ 💻 Type : *NodeJs*
┃ 🚀 Platform : *Heroku*
┃ ⚙️ Mode : *[${config.MODE}]*
┃ 🔣 Prefix : *[${config.PREFIX}]*
┃ 🏷️ Version : *1.0.0 Bᴇᴛᴀ*
╰────────────────────❑


✆────────✇───────✆
*╭───────────────────────✇*
*│───► 1. DOWNLOAD*📥
*│───► 2. GROUP 🌝*
*│───► 3. FUN 😂*
*│───► 4. OWNER 😎*
*│───► 5. AI 🤖*
*│───► 6. ANIME*👾
*│───► 7. CONVERT 💢*
*│───► 8. OTHER*💨
*│───► 9. REACTION 💗*
*│───► 10. MAIN ✈️*
*│───► 11. LOGO 💠*
*│───► 12.MOVIE 🎬*
*╰────────────────────────㋛*

 ✆REPLY THE NUMBER 🔢

> © ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ*`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363417726891412@newsletter',
                newsletterName: ĐɄⱠ₳₦₮Ⱨ₳ ₥Đ 😗,
                serverMessageId: 143
            }
        };

        // Function to send menu image with timeout
        const sendMenuImage = async () => {
            try {
                return await conn.sendMessage(
                    from,
                    {
                        image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/KpTm0WRH/3244.jpg' },
                        caption: menuCaption,
                        contextInfo: contextInfo
                    },
                    { quoted: mek }
                );
            } catch (e) {
                console.log('Image send failed, falling back to text');
                return await conn.sendMessage(
                    from,
                    { text: menuCaption, contextInfo: contextInfo },
                    { quoted: mek }
                );
            }
        };

        // Function to send menu audio with timeout
        const sendMenuAudio = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Small delay after image
                await conn.sendMessage(from, {
                    audio: { url: 'https://i.imgur.com/AVKX7Ye.mp4' },
                    mimetype: 'audio/mp4',
                    ptt: true,
                }, { quoted: mek });
            } catch (e) {
                console.log('Audio send failed, continuing without it');
            }
        };

        // Send image first, then audio sequentially
        let sentMsg;
        try {
            // Send image with 10s timeout
            sentMsg = await Promise.race([
                sendMenuImage(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Image send timeout')), 10000))
            ]);
            
            // Then send audio with 1s delay and 8s timeout
            await Promise.race([
                sendMenuAudio(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Audio send timeout')), 8000))
            ]);
        } catch (e) {
            console.log('Menu send error:', e);
            if (!sentMsg) {
                sentMsg = await conn.sendMessage(
                    from,
                    { text: menuCaption, contextInfo: contextInfo },
                    { quoted: mek }
                );
            }
        }
        
        const messageID = sentMsg.key.id;

        // Menu data (complete version)
        const menuData = {
            '1': {
                title: "📥 *Download menu",
                content: `╭───│DOWNLOAD MENU📥─────✇
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
│▹ ♨ 𝚇𝚅
│▹ ♨ 𝚇𝚅𝙳𝙻
│▹ ♨ 𝙿𝙾𝚁𝙽𝙷𝚄𝙱
╰───────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '2': {
                title: "👥 *Group Menu* 👥",
                content: `╭─────│GROUP MENU 👥─────✇
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

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '3': {
                title: "😄 *Fun Menu* 😄",
                content: `╭─────│FUN MENU 😂─────✇
│
│▹ ♨ 𝚂𝙷𝙰𝙿𝙴𝚁
│▹ ♨ 𝚁𝙰𝚃𝙴 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙸𝙽𝚂𝚄𝙻𝚃 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙷𝙰𝙲𝙺 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝚂𝙷𝙸𝙿 [@𝚞𝚜𝚎𝚛1 @𝚞𝚜𝚎𝚛2]
│▹ ♨ 𝙹𝙾𝙺𝙴
│▹ ♨ 𝙲𝙷𝙰𝚁𝙰𝙲𝚃𝙴𝚁
│▹ ♨ 𝙿𝙸𝙲𝙺𝚄𝙿
│▹ ♨ 𝙷𝚁𝚃
│▹ ♨ 𝙲𝚄𝙽𝙵𝚄𝚉𝙴𝙳
│▹ ♨ 𝙼𝙾𝙽
│▹ ♨ 𝙺𝙸𝚂𝚂
│▹ ♨ 𝚂𝙷𝚈
│▹ ♨ 𝙰𝙽𝙶𝚁𝚈
│▹ ♨ 𝚂𝚈𝙳
│▹ ♨ 𝙷𝙿𝚈
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '4': {
                title: "👑 *Owner Menu* 👑",
                content: `╭─────│OWNER MENU 😎─────✇
│
│▹ ♨  𝙱𝙻𝙾𝙲𝙺 
│▹ ♨ 𝚄𝙽𝙱𝙻𝙾𝙲𝙺
│▹ ♨ 𝙵𝚄𝙻𝙻𝙿𝙿
│▹ ♨ 𝚂𝙴𝚃𝙿𝙿
│▹ ♨ 𝚁𝙴𝚂𝚃𝙰𝚁𝚃
│▹ ♨ 𝚂𝙷𝚄𝚃𝙳𝙾𝚆𝙽
│▹ ♨ 𝚄𝙿𝙳𝙰𝚃𝙴𝙲𝙼𝙳
│▹ ♨ 𝙶𝙹𝙸𝙳
│▹ ♨ 𝙹𝙸𝙳 
│▹ ♨ 𝙻𝙸𝚂𝚃𝙲𝙼𝙳
│▹ ♨ 𝙰𝙻𝙻𝙼𝙴𝙽𝚄
│▹ ♨ 𝚅𝚅
│▹ ♨ 𝚁𝙴𝙿𝙾
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '5': {
                title: "🤖 *AI Menu* 🤖",
                content: `╭─────│AI MENU 🤖─────✇
│
│▹ ♨  𝙰𝙸 [𝚚𝚞𝚎𝚛𝚢]
│▹ ♨ 𝙶𝙿𝚃3 [𝚚𝚞𝚎𝚛𝚢]
│▹ ♨ 𝙶𝙿𝚃2 [𝚚𝚞𝚎𝚛𝚢]
│▹ ♨ 𝙶𝙿𝚃𝙼𝙸𝙽𝙸 [𝚚𝚞𝚎𝚛𝚢]
│▹ ♨ 𝙶𝙿𝚃 [𝚚𝚞𝚎𝚛𝚢]
│▹ ♨ 𝙼𝙴𝚃𝙰 [𝚚𝚞𝚎𝚛𝚢]
│▹ ♨ 𝙸𝙼𝙰𝙶𝙴𝙸𝙽𝙴 
│▹ ♨ 𝙸𝙼𝙶𝙸𝙽𝙴2
│▹ ♨ 𝙱𝙻𝙰𝙲𝙺𝙱𝙾𝚇
│▹ ♨ 𝙻𝚄𝙼𝙰
│▹ ♨ 𝙳𝙹
│▹ ♨ 𝙳𝚄𝙻𝙴𝚇
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '6': {
                title: "🎎 *Anime Menu* 🎎",
                content: `╭─────│ANIME MENU  🎎─────✇
│
│▹ ♨ 𝙵𝙰𝙲𝙺
│▹ ♨ 𝙳𝙾𝙶
│▹ ♨ 𝙻𝙾𝙻𝙸
│▹ ♨ 𝙼𝙰𝙸𝙳
│▹ ♨ 𝙽𝙴𝙺𝙾
│▹ ♨ 𝙼𝙴𝙶𝙽𝚄𝙼𝙸𝙽
│▹ ♨ 𝚆𝙰𝙸𝙵𝚄
│▹ ♨ 𝙶𝙰𝚁𝙻
│▹ ♨ 𝙰𝚆𝙾𝙾
│▹ ♨ 𝙽𝙰𝚁𝚄𝚃𝙾
│▹ ♨ 𝙵𝙾𝚇 𝙶𝙸𝚁𝙻
│▹ ♨ 𝙰𝙽𝙸𝙼𝙴1-5
│▹ ♨ 𝙰𝙽𝙸𝙼𝙴𝙶𝙸𝚁𝙻
│▹ ♨ 𝙰𝙽𝙸𝙼𝙴𝙶𝙸𝚁𝙻1-5
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '7': {
                title: "🔄 *Convert Menu* 🔄",
                content: `╭─────│CONVERT MENU 🔄─────✇
│
│▹ ♨ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 [𝚒𝚖𝚐]
│▹ ♨ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁2 [𝚒𝚖𝚐]
│▹ ♨ 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇 [🥲+😎]
│▹ ♨ 𝚃𝙰𝙺𝙴 [𝚗𝚊𝚖𝚎,𝚝𝚎𝚡𝚝]
│▹ ♨ 𝚃𝙾𝙼𝙿3 [𝚟𝚒𝚍𝚎𝚘]
│▹ ♨ 𝙵𝙰𝙽𝙲𝚈
│▹ ♨ 𝚃𝚃𝚂
│▹ ♨ 𝚃𝚁𝚃
│▹ ♨ 𝙱𝙰𝚂𝙴64
│▹ ♨ 𝚄𝙽𝙱𝙰𝚂𝙴64
│▹ ♨ 𝙱𝙸𝙽𝙰𝚁𝚈
│▹ ♨ 𝙳𝙱𝙸𝙽𝙰𝚁𝚈
│▹ ♨ 𝚃𝙸𝙽𝚈𝚄𝚁𝙻
│▹ ♨ 𝚄𝚁𝙻𝙳𝙴𝙲𝙾𝙳𝙴
│▹ ♨ 𝚄𝚁𝙻𝙴𝙽𝙲𝙾𝙳𝙴
│▹ ♨ 𝚄𝚁𝙻
│▹ ♨ 𝚁𝙴𝙿𝙴𝙰𝚃
│▹ ♨ 𝙰𝚂𝙺
│▹ ♨ 𝙰𝚂𝙺
│▹ ♨ 𝚁𝙴𝙰𝙳𝙼𝙾𝚁𝙴
╰─────────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '8': {
                title: "📌 *Other Menu* 📌",
                content: `╭─────│OTHER MENU 📡─────✇
│
│▹ ♨  𝚃𝙸𝙼𝙴𝙽𝙾𝚆 
│▹ ♨ 𝙳𝙰𝚃𝙴
│▹ ♨ 𝙲𝙾𝚄𝙽𝚃
│▹ ♨ 𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝚃𝙴
│▹ ♨ 𝙲𝙾𝚄𝙽𝚃𝚇
│▹ ♨ 𝙵𝙰𝙲𝚃
│▹ ♨ 𝚁𝙾𝙻𝙻
│▹ ♨ 𝚁𝙲𝙾𝙻𝙾𝚁
│▹ ♨ 𝙲𝙾𝙸𝙽𝙵𝙻𝙸𝙿
│▹ ♨ 𝙵𝙻𝙸𝙿
│──── 𝘚𝘌𝘈𝘙𝘊𝘏 👇
│▹ ♨ 𝙳𝙴𝙵𝙸𝙽𝙴
│▹ ♨ 𝚆𝙴𝚃𝙷𝙴𝚁
│▹ ♨ 𝚂𝙼𝙾𝚅𝙸𝙴
│▹ ♨ 𝚈𝚃𝚂
│▹ ♨ 𝚈𝚃𝚅
│▹ ♨ 𝙶𝙿𝙰𝚂𝚂
│▹ ♨ 𝚆𝙸𝙺𝙸𝙿𝙸𝙳𝙸𝙰
│▹ ♨ 𝚂𝙰𝚅𝙴
│▹ ♨ 𝙸𝙽𝚂𝚄𝙻𝚃
│▹ ♨ 𝚂𝚁𝙴𝙿𝙾
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '9': {
                title: "💞 *Reactions Menu* 💞",
                content: `╭─────│REACTION MENU 😗─────✇
│
│▹ ♨ 𝙲𝚄𝙳𝙳𝙻𝙴 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙷𝚄𝙶 [@𝚞𝚜𝚎𝚛]
│▹ ♨ 𝙿𝙰𝚃 [@𝚞??𝚎𝚛]
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

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
            '10': {
                title: "🏠 *Main Menu* 🏠",
                content: `╭─────│MAIN MENU 🏠─────✇
│
│▹ ♨  𝙿𝙸𝙽𝙶
│▹ ♨ 𝙻𝙸𝚅𝙴
│▹ ♨ 𝙰𝙻𝙸𝚅𝙴
│▹ ♨ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴
│▹ ♨ 𝚄𝙿𝚃𝙸𝙼𝙴
│▹ ♨ 𝚁𝙴𝙿𝙾
│▹ ♨ 𝙾𝚆𝙽𝙴𝚁
│▹ ♨ 𝙼𝙴𝙽𝚄
│▹ ♨ 𝚁𝙴𝚂𝚃𝙰𝚁𝚃
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
  '11': {
                title: "💠 *Logo menu* 💠",
                content: `╭─────│LOGO MENU 💠─────✇
│
│▹ ♨ 𝙽𝙴𝙾𝙽𝙻𝙸𝙶𝙷𝚃
│▹ ♨ 𝙱𝙻𝙰𝙲𝙺𝙿𝙸𝙽𝙺
│▹ ♨ 𝙳𝚁𝙰𝙶𝙾𝙽𝙱𝙰𝙻𝙻
│▹ ♨ 3𝙳𝙲𝙾𝙼𝙸𝙲
│▹ ♨ 𝙰𝙼𝙴𝚁𝙸𝙲𝙰
│▹ ♨ 𝙽𝙰𝚁𝚄𝚃𝙾
│▹ ♨ 𝚂𝙰𝙳𝙶𝙸𝚁𝙻
│▹ ♨ 𝙲𝙻𝙾𝚄𝙳𝚂
│▹ ♨ 𝙵𝚄𝚃𝚄𝚁𝙸𝚂𝚃𝙸𝙲
│▹ ♨ 3𝙳𝙿𝙰𝙿𝙴𝚁
│▹ ♨ 𝙴𝚁𝙰𝚂𝙴𝚁
│▹ ♨ 𝚂𝚄𝙽𝚂𝙴𝚃
│▹ ♨ 𝙻𝙴𝙰𝙵
│▹ ♨ 𝙶𝙰𝙻𝙰𝚇𝚈
│▹ ♨ 𝚂𝙰𝙽𝚂
│▹ ♨ 𝙱𝙾𝙾𝙼
│▹ ♨ 𝙷𝙰𝙲𝙺𝙴𝚁
│▹ ♨ 𝙳𝙴𝚅𝙸𝙻𝚅𝙸𝙽𝙶𝚂
│▹ ♨ 𝙽𝙸𝙶𝙴𝚁𝙸𝙰
│▹ ♨ 𝙱𝚄𝙻𝙱
│▹ ♨ 𝙰𝙽𝙶𝙻𝙴𝚆𝙸𝙽𝙶𝚂
│▹ ♨ 𝚉𝙾𝙳𝙸𝙰𝙲
│▹ ♨𝙻𝚄𝚇𝚄𝚁𝚈
│▹ ♨ 𝙿𝙰𝙸𝙽𝚃 
│▹ ♨ 𝙵𝚁𝙾𝚉𝙴𝙽 
│▹ ♨ 𝙲𝙰𝚂𝚃𝙻𝙴
│▹ ♨ 𝚃𝙰𝚃𝚃𝙾
│▹ ♨ 𝚅𝙰𝙻𝙾𝚁𝙰𝙽𝚃
│▹ ♨ 𝙱𝙴𝙰𝚁
│▹ ♨ 𝚃𝚈𝙾𝙶𝚁𝙰𝙿𝙷𝚈
│▹ ♨ 𝙱𝙸𝚁𝚃𝙷𝙳𝙰𝚈
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            },
'12': {
                title: "🎬 *Movie Menu* 🎬",
                content: `╭─────│MOVIE MENU 🎬─────✇
│
│▹ ♨ 𝙱𝙰𝙸𝚂𝙲𝙾𝙿𝙴
│▹ ♨ 𝙲𝙸𝙽𝙴𝚂𝚄𝙱𝚉
│▹ ♨ 𝙼𝚅
│▹ ♨ 𝚂𝙸𝙽𝙷𝙰𝙻𝙰𝚂𝚄𝙱
│▹ ♨ 𝚄𝙿𝚃𝙸𝙼𝙴
│▹ ♨ 𝚁𝙴𝙿𝙾
│▹ ♨ 𝙾𝚆𝙽𝙴𝚁
│▹ ♨ 𝙼𝙴𝙽𝚄
│▹ ♨ 𝚁𝙴𝚂𝚃𝙰𝚁𝚃
│▹ ♨ 𝙱𝙸𝚂
│▹ ♨ 𝚂𝚄𝙱𝚃𝙸𝙻𝙴𝚂
╰───────────────────────────✇

> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                image: true
            }
        };

        // Message handler with improved error handling
        const handler = async (msgData) => {
            try {
                const receivedMsg = msgData.messages[0];
                if (!receivedMsg?.message || !receivedMsg.key?.remoteJid) return;

                const isReplyToMenu = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;
                
                if (isReplyToMenu) {
                    const receivedText = receivedMsg.message.conversation || 
                                      receivedMsg.message.extendedTextMessage?.text;
                    const senderID = receivedMsg.key.remoteJid;

                    if (menuData[receivedText]) {
                        const selectedMenu = menuData[receivedText];
                        
                        try {
                            if (selectedMenu.image) {
                                await conn.sendMessage(
                                    senderID,
                                    {
                                        image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/KpTm0WRH/3244.jpg' },
                                        caption: selectedMenu.content,
                                        contextInfo: contextInfo
                                    },
                                    { quoted: receivedMsg }
                                );
                            } else {
                                await conn.sendMessage(
                                    senderID,
                                    { text: selectedMenu.content, contextInfo: contextInfo },
                                    { quoted: receivedMsg }
                                );
                            }

                            await conn.sendMessage(senderID, {
                                react: { text: '✅', key: receivedMsg.key }
                            });

                        } catch (e) {
                            console.log('Menu reply error:', e);
                            await conn.sendMessage(
                                senderID,
                                { text: selectedMenu.content, contextInfo: contextInfo },
                                { quoted: receivedMsg }
                            );
                        }

                    } else {
                        await conn.sendMessage(
                            senderID,
                            {
                                text: `❌ *Invalid Option!* ❌\n\nPlease reply with a number between 1-10 to select a menu.\n\n*Example:* Reply with "1" for Download Menu\n\n> © ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ`,
                                contextInfo: contextInfo
                            },
                            { quoted: receivedMsg }
                        );
                    }
                }
            } catch (e) {
                console.log('Handler error:', e);
            }
        };

        // Add listener
        conn.ev.on("messages.upsert", handler);

        // Remove listener after 5 minutes
        setTimeout(() => {
            conn.ev.off("messages.upsert", handler);
        }, 300000);

    } catch (e) {
        console.error('Menu Error:', e);
        try {
            await conn.sendMessage(
                from,
                { text: `❌ Menu system is currently busy. Please try again later.\n\n> © ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜʟᴀɴᴛʜᴀ ᴍᴅ` },
                { quoted: mek }
            );
        } catch (finalError) {
            console.log('Final error handling failed:', finalError);
        }
    }
});
