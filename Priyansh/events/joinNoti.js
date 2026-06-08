module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "𝐀𝐫𝐲𝐚𝐧",
    description: "Welcome notification when someone joins the group",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "joinNoti");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    const path2 = join(__dirname, "cache", "joinNoti", "media");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        
        return api.sendMessage({
            body: `╔══════════════════╗
    🤖 BOT CONNECTED 🤖
╚══════════════════╝

━━━━━━━━━━━━━━━━━━
Hello Everyone! 👋

🤖 Bot    : ${global.config.BOTNAME}
👑 Admin  : 𝐀𝐫𝐲𝐚𝐧
🔰 Prefix : ${global.config.PREFIX}

━━━━━━━━━━━━━━━━━━
💡 Type ${global.config.PREFIX}help to see all commands
✨ Enjoy & Have Fun! ✨
━━━━━━━━━━━━━━━━━━`,
        }, threadID);
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinNoti");
            const pathMedia = join(path, "media");

            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);

            const memberCount = memLength.join(', ');
            const names = nameArray.join(', ');
            
            const msg = `╔══════════════════╗
   👋 WELCOME 👋
╚══════════════════╝

━━━━━━━━━━━━━━━━━━
Hello {name}, 

Welcome to {threadName}!
You are Member #{memberCount}

━━━━━━━━━━━━━━━━━━
💡 Make yourself at home!
🤖 Bot: ${global.config.BOTNAME}
👑 Admin: 𝐀𝐫𝐲𝐚𝐧
━━━━━━━━━━━━━━━━━━
✨ Enjoy Your Stay! ✨`;

            const finalMsg = msg
                .replace(/\{name}/g, names)
                .replace(/\{memberCount}/g, memberCount)
                .replace(/\{threadName}/g, threadName);

            const mediaFiles = readdirSync(pathMedia);
            
            let formPush = { body: finalMsg, mentions };

            if (mediaFiles.length > 0) {
                const randomMedia = join(pathMedia, mediaFiles[Math.floor(Math.random() * mediaFiles.length)]);
                formPush.attachment = createReadStream(randomMedia);
            }

            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
}
