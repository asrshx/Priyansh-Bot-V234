module.exports.config = {
    name: "help2",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "𝐀𝐫𝐲𝐚𝐧",
    description: "View all bot commands",
    commandCategory: "system",
    usages: "[command name]",
    cooldowns: 1,
    envConfig: {
        autoUnsend: true,
        delayUnsend: 300
    }
};

module.exports.languages = {
    "en": {
        "moduleInfo": "╔══════════════════╗\n   「 %1 」\n╚══════════════════╝\n\n📝 Description: %2\n🔧 Usage: %3\n📂 Category: %4\n⏱ Cooldown: %5 sec(s)\n🔑 Permission: %6\n\n👑 Owner: 𝐀𝐫𝐲𝐚𝐧 ✨",
        "helpList": '╔══════════════════╗\n  📋 ALL COMMANDS 📋\n╚══════════════════╝\n\nTotal Commands: %1\n━━━━━━━━━━━━━━━━━━',
        "user": "👤 User",
        "adminGroup": "👥 Group Admin",
        "adminBot": "🤖 Bot Admin"
    }
};

module.exports.handleEvent = function ({ api, event, getText }) {
    const { commands } = global.client;
    const { threadID, messageID, body } = event;

    if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
    const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
    if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const command = commands.get(splitBody[1].toLowerCase());
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const command = commands.get((args[0] || "").toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

    if (!command) {
        const arrayInfo = [];
        let i = 0;
        let msg = "";

        for (var [name, value] of (commands)) {
            name += ``;
            arrayInfo.push(name);
        }

        arrayInfo.sort((a, b) => a.data - b.data);

        for (let item of arrayInfo) {
            i++;
            msg += ` ${i}. ${prefix}${item}\n`;
        }

        const header = `╔══════════════════╗
   📋 ALL COMMANDS 📋
╚══════════════════╝

👑 Owner: 𝐀𝐫𝐲𝐚𝐧 ✨
💡 Use: ${prefix}help [command] for details.
━━━━━━━━━━━━━━━━━━
Total: ${arrayInfo.length} Commands
━━━━━━━━━━━━━━━━━━\n`;

        const footer = `\n━━━━━━━━━━━━━━━━━━`;

        return api.sendMessage(header + msg + footer, threadID, async (error, info) => {
            if (autoUnsend) {
                await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
                return api.unsendMessage(info.messageID);
            } else return;
        }, event.messageID);
    }

    return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};
