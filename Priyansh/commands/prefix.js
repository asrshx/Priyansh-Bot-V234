module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐫𝐲𝐚𝐧",
  description: "Check bot prefix",
  commandCategory: "Admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot" ,"how use bot", "where are the bots","bot not working","bot is offline","where prefix","prefx","prfix","prifx","perfix","bot not talking","where is bot"];
  
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
      const prefix = threadSetting.PREFIX || global.config.PREFIX;
      
      const msg = `╔══════════════════╗
     📋 PREFIX INFO 📋
╚══════════════════╝

🔰 Prefix  : [ ${prefix} ]

━━━━━━━━━━━━━━━━━━

🤖 Bot     : ${global.config.BOTNAME}
👑 Admin   : 𝐀𝐫𝐲𝐚𝐧

━━━━━━━━━━━━━━━━━━
💡 Use ${prefix}help for commands
╔══════════════════╗
     ✨ 𝐀𝐫𝐲𝐚𝐧 ✨
╚══════════════════╝`;

      if (data.PREFIX == null) {
        return out(msg)
      }
      else return out(msg)
    }
  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("╔══════════════════╗\n  ❓ PREFIX COMMAND\n╚══════════════════╝\n\nType 'prefix' or 'what prefix' to see bot prefix info.", event.threadID)
}
