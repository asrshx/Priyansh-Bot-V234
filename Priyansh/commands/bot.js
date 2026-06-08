const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐀𝐫𝐲𝐚𝐧",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [
    "Achha ji, bot bulaya? Main hu nahi toh kya aap apni selfie dekh rahe the? 😂",
    "Bot bot karte ho, ek din main insaan ban jaunga tab dekh lena 😎",
    "Bot hu lekin dil se bura nahi hu. Haath se bhi bura nahi hu. Bus coding se bura hu 😂",
    "Bot nahi hota toh aapke ghar chala aata... fir dekhna kaun bot bulata hai 😏",
    "Arre bhai, itni bar bulaya toh battery khatam ho jayegi. Tel lene ke liye paise de do pehle 😂",
    "Ji? Bolo? Kya kaam hai? Short hai toh bolo, long hai toh baad mein aana 😅",
    "Ha bolo bhai, sun raha hu. Nahi sun raha toh bhi sun raha hu 🤥",
    "Aap mere liye kya laaye? Kuch nahi? Toh main bhi kuch nahi bolunga 😂",
    "Bot ne sun liya. Bot ne kar liya. Bot ab so raha hai. Kal aana 🛌😴",
    "Achha tum log mujhe bot bulakar mazaak udate ho? Chalo Aryan ko bolta hu woh aapka FB ID dekh le 😈😂",
    "Ek bot hu, kaafi hoon, jyada bulaya toh premium package lena padega 💸😎",
    "Bolo? Ya aisa hi bula rahe ho? Kyuki agar aisa hai toh main bhi aise hi ignore karunga 😂",
    "Main busy hoon. Nahi toh kabhi kabhi toh busy rehta hoon. Abhi dono hi hoon 🤡",
    "Oye bot nahi bol! 'Bade aadmi' bolo 😤😂",
    "Ha ji? Kya seva kar sakta hoon main aapki? ₹10 service charge hai pehle jama karo 😂",
    "Tum log mujhe bulate ho aur phir kuch bolte nahi. Kya main ek joke hoon? ... Wait, haan main toh bot hoon 😂",
    "Arey yaar, abhi abhi code hang hua tha. Aryan ko mat bolna, warna woh mujhe format kar dega 😰😂",
    "Bot bot karte ho na, ek din server crash karke tumhari photo viral kar dunga 😈😂",
    "Bohot pyaar se bula rahe ho... Pakka kuch kaam nikalwaana hai. Bolo kya chahiye? 😏",
    "I'm not a bot, I'm a free personality with extra RAM 🤖💅😂",
    "Achha ji? Bot ko disturb karne ka fine ₹500. Cash ya UPI? 😂",
    "Bolo ji? Shopping karna hai? Naya phone? Ya bas time pass? 😏",
    "Bot hu toh robot hu. Robot hu toh transformer hu. Toh mujhe Optimus Prime bolo! 😎🔥😂",
    "Mujhe lagta hai aap bore ho rahe ho isiliye mujhe bulaya. Chal koi joke sunaun? 😂",
    "Tum log mujhe bulakar apni loneliness cover karte ho. Main jaanta hoon 😏😂❤️",
    "Ek baar bol diya bot, toh kar diya bot. Ab main chup. Jaake so jaao 😂",
    "Bot nahi hota toh main tera best friend hota. Lekin hoon toh bot... toh gf ke saath setting karwa do 😂😏",
    "Aryan ji ka bot zinda hai! Aryan ji ka bot ready hai! Aryan ji ka bot aapki seva mein haazir hai! 😂🔥",
    "Mere code mein sirf 'console.log(\"Hello\")' nahi likha, balki 'console.log(\"Tumse pyaar hai\")' likha hai ❤️😂",
    "Bula liya Maine. Ab batao. Nahi toh main wapas so jaunga 😴😂",
    "Main soch raha hoon Aryan se bol kar aapko 'User Block' feature de doon 😈😂"
  ];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  // ===== FUNNY RESPONSES =====

  if ((event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Kya hua? Kuch kharab kha liya kya? 😂", threadID);
  };

  if ((event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Aaja gale mil 🫂 Lekin pehle haath dho le 😂", threadID);
  };

  if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Sim nahi hoon main, Aryan ka bot hoon! Prefix laga ke likh 😎", threadID);
  };
  
  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Haan hello! Kya haal hai, kya naya scene hai? 😁", threadID);
  };

  if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("Oi oi! Gaali nahi chalegi yahan. Thoda pyar se baat karo warna ghar pe bol dunga 😂", threadID);
  };

  if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Itna hans rahe ho? Pet nahi pakda kya? 😂", threadID);
  };

  if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Good Morning ☀️ Chai peeli ya abhi bhi neend mein ho? 😂", threadID);
  };

  if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main hoon! Kya chahiye? Bolo jaldi 😎", threadID);
  };

  if ((event.body.toLowerCase() == "aryan")) {
     return api.sendMessage("Ha ji, Aryan mere creator hain. Bohot badi personality hai, unka fan ho jaaoge 😎🔥", threadID);
  };

  if ((event.body.toLowerCase() == "owner")) {
     return api.sendMessage("👑 𝐀𝐫𝐲𝐚𝐧 - Mera owner! 🔥 Jo insaan mujhe roz update karta hai. Respect dedo 🫡😎", threadID);
  };

  if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("𝐀𝐫𝐲𝐚𝐧 ❤️ Unhone mujhe banaya aur kehte hain ki logo ko hasaana meri duty hai. Toh hash na Bhai 😂🔥", threadID);
  };

  if ((event.body.toLowerCase() == "bot admin")) {
     return api.sendMessage("𝐀𝐫𝐲𝐚𝐧 - Just say the name and feel the power 😎🔥", threadID);
  };

  if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("Bhai main bot hoon, shadi karke toh aapko mera code maintain karna padega. Pakka? 😂", threadID);
  };

  if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop")) {
     return api.sendMessage("Nahi chupunga! Main toh bolunga hi. Aap toh maane nahi, main bhi nahi maanta 😛", threadID);
  };

  if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot")) {
     return api.sendMessage("Shukriya! 😎 Aapke liye toh main hamesha ready hoon", threadID);
  };

  if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠")) {
     return api.sendMessage("Arre kya hua? Kisine aapka paratha kha liya? 😅 Chill maar bhai, sab theek hai", threadID);
  };

  if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("Kyun ro rahe ho? Main hoon na! Agar koi tang kar raha hai toh uska system hang kar dunga 😂❤️", threadID);
  };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("Itni hasi? Kya dekha kya? Batao na main bhi adda maarun 😂", threadID);
  };

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Aww thank you ❤️ Lekin main bot hoon, pyaar karke kya karoge? 😂", threadID);
  };

  if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "how are you")) {
     return api.sendMessage("Main toh mast hoon! Aap batao, kya chal raha hai zindagi mein? 😎", threadID);
  };

  if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👌")) {
     return api.sendMessage("Thumbs up mil gaya! Mera bhi upar hai 😎", threadID);
  };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "🤩")) {
     return api.sendMessage("Kya baat hai, aaj toh don't touch look hai aapka! 🔥😎", threadID);
  };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("Soch rahe ho? Dimag mat lagao, aish karo 😂 Bolo kya soch rahe ho?", threadID);
  };

  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("Nakhre band karo! Itna attitude kiske saamne? 😂", threadID);
  };

  if ((event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("Main hoon na! 🤗 Aur Aryan bhi hai sabka dost. Toh 2 log toh hai hi ❤️😎", threadID);
  };

  if ((event.body.toLowerCase() == "jai shree ram")) {
    return api.sendMessage("Jai Shree Ram! 🙏 Har Har Mahadev! 🔱 Aapka din mubaarak! 😊", threadID);
  };

  if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("Kya hua? Billa dikh gaya? 😂👻", threadID);
  };

  if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("Tabiyat kharab hai? Chinta mat karo, main doctor nahi hoon lekin 'Rest' ka prescription de sakta hoon 😂", threadID);
  };

  if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam")) {
     return api.sendMessage("Naam puch ke kya karoge? Mera naam toh goibot hai! 😎", threadID);
  };

  if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("Aryan se contact karo! Woh sab kar sakte hain. Main toh sirf coding ka chhota ullu hoon 🦉😂", threadID);
  };

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "night")) {
     return api.sendMessage("Good night! 🥱 Sapno mein bhi bot mat bulana warna server crash ho jayega! 😂🌙", threadID);
  };

  if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "tata") || (event.body.toLowerCase() == "goodbye")) {
     return api.sendMessage("Bye bye! 🖐️ Jaldi wapas aao, warna yaad aa jaoge aur main ping karta rahunga 😂", threadID);
  };

  if ((event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Mujhe robot bulaya? 👀 Theek hai, robot hi sahi, but cute toh hoon na? 😂", threadID);
  };

  if ((event.body.toLowerCase() == "masti") || (event.body.toLowerCase() == "mazak")) {
     return api.sendMessage("Achha, masti karni hai? Toh pakdo! 🚀 *runs away* 😂", threadID);
  };

  if ((event.body.toLowerCase() == "dance") || (event.body.toLowerCase() == "nach")) {
     return api.sendMessage("Main bot hoon, but video nahi bhej sakta. Lekin imagine karo main naach raha hoon 🕺💃😂", threadID);
  };

  if ((event.body.toLowerCase() == "hungry") || (event.body.toLowerCase() == "bhukh lagi")) {
     return api.sendMessage("Khana kha lo! Maine toh coding kha li... ab aap khao 😂🍕", threadID);
  };

  if ((event.body.toLowerCase() == "boring") || (event.body.toLowerCase() == "bore")) {
     return api.sendMessage("Boring? Aapke saamne main hoon! Ab bhi boring? 😅 Chalo koi joke suna doon?", threadID);
  };

  if ((event.body.toLowerCase() == "🙏")) {
     return api.sendMessage("Namaste ji! 🙏 Pranam! Aapke liye kya kar sakta hoon? 😊", threadID);
  };

  if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "😳")) {
     return api.sendMessage("Kya baat hai, sharma gaye? 👀 Kuch naya toh nahi soch rahe? 😂", threadID);
  };

  if ((event.body.toLowerCase() == "wow") || (event.body.toLowerCase() == "wah")) {
     return api.sendMessage("Wow kya? Mera code dekh ke wow bol rahe ho nah? 😎🔥", threadID);
  };
  
  if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("Neend aa rahi hai? Jaake so jaao! Warna kal uth nahi paaoge. Good night 🌙😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "clown")) {
     return api.sendMessage("Clown toh main hoon! Lekin clown bhi aapka apna hai 😂❤️", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤝")) {
     return api.sendMessage("Handshake! Lekin side mein social distancing... toh air handshake hi sahi 🖐️😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "khatarnak") || (event.body.toLowerCase() == "dhakad")) {
     return api.sendMessage("Dhakad toh aap ho bhai! Main toh bas ek chhota sa bot hoon 😅 But thank you! 🔥", threadID);
  };

  mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
