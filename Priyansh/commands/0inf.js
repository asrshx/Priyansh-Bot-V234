module.exports.config = {
    name: "info",
    version: "1.0.1", 
    hasPermssion: 0,
    credits: "𝐀𝐫𝐲𝐚𝐧",
    description: "Admin and Bot info.",
    commandCategory: "...",
    cooldowns: 1,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};
module.exports.run = async function({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    const time = process.uptime(),
          hours = Math.floor(time / (60 * 60)),
          minutes = Math.floor((time % (60 * 60)) / 60),
          seconds = Math.floor(time % 60);
    const moment = require("moment-timezone");
    var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
    
    // 🔁 YAHAN APNA IMAGE LINK LAGAO
    var link = ["https://i.imgur.com/eDbdlvd.jpg"];
    
    var callback = () => api.sendMessage({
        body: `╔══════════════════╗
               ✦  𝐁𝐎𝐓 & 𝐀𝐃𝐌𝐈𝐍 ✦
               ╚══════════════════╝

               🤖 Bot    : ${global.config.BOTNAME}
               👑 Owner  : 𝐀𝐫𝐲𝐚𝐧 (" https://www.facebook.com/share/18pkJCQsVz/ ")
               🔰 Prefix : ${global.config.PREFIX}

               ───────────────
               ⏱ Uptime  : ${hours}h ${minutes}m ${seconds}s
               📅 Time    : ${juswa}
               ───────────────

               ✨ Thanks for using ${global.config.BOTNAME} ✨`,
        attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg"));
    
    return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
        .pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg"))
        .on("close", () => callback());
};
