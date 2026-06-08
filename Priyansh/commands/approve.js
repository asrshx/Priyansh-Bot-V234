module.exports.config = {
    name: "approve",
    version: "1.0.2",
    hasPermssion: 2,
    credits: "𝐀𝐫𝐲𝐚𝐧",
    description: "Approve group chats for bot usage",
    commandCategory: "Admin",
    cooldowns: 5
};

const dataPath = __dirname + "/Aryan/approvedThreads.json";
const dataPending = __dirname + "/Aryan/pendingThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
    if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
    if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}

module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
    switch (type) {
        case "pending": {
            switch (body) {
                case `A`: {
                    data.push(idBox);
                    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
                    api.sendMessage(`✅ Successfully Approved\n📌 Group ID: ${idBox}`, threadID, () => {
                        dataP.splice(dataP.indexOf(idBox), 1);
                        fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
                    }, messageID)
                }
            }
        }
    }
}

module.exports.run = async ({ event, api, args, Threads, handleReply, Users }) => {
    const { threadID, messageID, senderID } = event;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let msg = "";
    var lydo = args.splice(2).join(" ");
    let idBox = (args[0]) ? args[0] : threadID;
    
    if (args[0] == "list" || args[0] == "l") {
        msg = `╔══════════════════╗\n  📋 APPROVED GROUPS\n╚══════════════════╝\n\nTotal: ${data.length}`;
        let count = 0;
        for (e of data) {
            let threadInfo = await api.getThreadInfo(e);
            let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
            msg += `\n\n${++count}. ${threadName}\n📌 ${e}`;
        }
        api.sendMessage(msg, threadID, (error, info) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                type: "a",
            })
        }, messageID);
    }
    else if (args[0] == "pending" || args[0] == "p") {
        msg = `╔══════════════════╗\n  ⏳ PENDING GROUPS\n╚══════════════════╝\n\nTotal: ${dataP.length}`;
        let count = 0;
        for (e of dataP) {
            let threadInfo = await api.getThreadInfo(e);
            let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
            msg += `\n\n${++count}. ${threadName}\n📌 ${e}`;
        }
        api.sendMessage(msg, threadID, (error, info) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                type: "pending",
            })
        }, threadID);
    }
    else if (args[0] == "help" || args[0] == "h") {
        const tst = (await Threads.getData(String(event.threadID))).data || {};
        const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
        const nmdl = this.config.name;
        return api.sendMessage(`╔══════════════════╗\n  ❓ APPROVE HELP\n╚══════════════════╝\n\n${pb}${nmdl} list → View approved groups\n${pb}${nmdl} pending → View pending groups\n${pb}${nmdl} del [id] → Remove group\n${pb}${nmdl} [id] → Approve specific group\n\n👑 Owner: 𝐀𝐫𝐲𝐚𝐧`, threadID, messageID);
    }
    else if (args[0] == "del" || args[0] == "d") {
        idBox = (args[1]) ? args[1] : event.threadID;
        if (isNaN(parseInt(idBox))) return api.sendMessage("[ ERR ] Invalid ID number", threadID, messageID);
        if (!data.includes(idBox)) return api.sendMessage("[ ERR ] This group is not approved yet!", threadID, messageID);
        api.sendMessage(`⚠️ Your group has been removed from bot access by admin.\nReason: ${lydo || "Not specified"}`, idBox);
        api.sendMessage(`✅ Successfully removed group from approved list`, threadID, () => {
            data.splice(data.indexOf(idBox), 1);
            fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        }, messageID);
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("[ ERR ] The ID you entered is not valid", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`ℹ️ Group ${idBox} is already approved!`, threadID, messageID);
    else {
        api.sendMessage(`━━━━━━━━━━━━━━━━━━━━
✅  GROUP APPROVED SUCCESSFULLY  ✅
━━━━━━━━━━━━━━━━━━━━

🤖 Bot     : ${global.config.BOTNAME}
👑 Admin   : 𝐀𝐫𝐲𝐚𝐧
🔰 Prefix  : ${global.config.PREFIX}

━━━━━━━━━━━━━━━━━━━━
💡 Use ${global.config.PREFIX}help to see all commands
━━━━━━━━━━━━━━━━━━━━`, idBox, (error, info) => {
            api.changeNickname(`〖 ${global.config.PREFIX} 〗➺ ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
            
            const axios = require('axios');
            const request = require('request');
            const fs = require("fs");
            
            let admID = global.config.ADMINBOT ? global.config.ADMINBOT[0] : "61565281473392";
            
            api.getUserInfo(parseInt(admID), (err, data) => {
                if (err) { return console.log(err) }
                var obj = Object.keys(data);
                var firstname = data[obj].name.replace("@", "");
                
                axios.get('https://anime.apibypriyansh.repl.co/img/anime').then(res => {
                    let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
                    let callback = function () {
                        api.sendMessage({
                            body: `━━━━━━━━━━━━━━━━━━━━
🤖 BOT IS NOW ACTIVE 🤖
━━━━━━━━━━━━━━━━━━━━

👑 Admin   : 𝐀𝐫𝐲𝐚𝐧
🤖 Bot     : ${global.config.BOTNAME}
🔰 Prefix  : ${global.config.PREFIX}

📊 Users   : ${global.data.allUserID.length}
💬 Groups  : ${global.data.allThreadID.length}

━━━━━━━━━━━━━━━━━━━━
💡 Use ${global.config.PREFIX}help to explore commands
━━━━━━━━━━━━━━━━━━━━`,
                            attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
                        }, idBox, () => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`));
                    };
                    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
                })
            })
            
            if (error) return api.sendMessage("[ ERR ] Something went wrong! Make sure bot is in the group.", threadID, messageID);
            else {
                data.push(idBox);
                fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
                api.sendMessage(`✅ Successfully Approved!\n📌 Group ID: ${idBox}`, threadID, () => {
                    dataP.splice(dataP.indexOf(idBox), 1);
                    fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
                }, messageID);
            }
        });
    }
}
