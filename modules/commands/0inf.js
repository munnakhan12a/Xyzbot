module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Arun Kumar", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/4yVw6tm7/Picsart-23-03-26-11-08-19-025.jpg", "https://i.imgur.com/rg0fjQE.jpg", "https://i.imgur.com/QcNXYfT.jpg", "https://i.imgur.com/WhVSHLB.png"];
var callback = () => api.sendMessage({body:`🌹𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 🇧🇩 


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎ 𝗠𝗨𝗡𝗡𝗔 𝗞𝗛𝗔𝗡 ☜︎︎︎✰ \n\n
🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪ \n\n  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨https://www.facebook.com/arun.x76 💞🕊️
  \n 
✅𝗧𝗜𝗞𝗧𝗢𝗞 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 @lyricseditor90 \n\n  ====𝐈𝐟 𝐘𝐨𝐮 𝐋𝐢𝐤𝐞 𝐓𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐎𝐮𝐫 𝐗𝐦𝐥 𝐅𝐢𝐥𝐞 === 𝗩𝗶𝘀𝗶𝘁 𝗔𝗻𝗱 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗧𝗼 𝗠𝘆 𝗬𝘁 𝗖𝗵𝗮𝗻𝗻𝗲𝗹✅ 🗡 https://www.youtube.com/@munnaeditz90
✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using My Bot ❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close",() => callback());
   };
