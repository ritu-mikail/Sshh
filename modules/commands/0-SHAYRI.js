const axios = require('axios');
const fs = require('fs-extra');
const request = require('request');

module.exports.config = {
    name: "shayri",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "SHANKAR-PROJECT",
    description: "YEH BOT SHANKAR SUMAN DWARA BANAYA GAYA HAI",
    commandCategory: "SHAYRI+PROFILE",
    usePrefix: false,
    cooldowns: 0
};

const triggerWords = ["shayari", "shayri", "शायरी"];
const githubShayariUrl = "https://raw.githubusercontent.com/SHANKAR-BOT/SHANKAR-SHAYARI/main/SHANKAR-SHAYARI.txt";
const _0x4856=['WRJdSmkPqYi','mCk+W7hdKmog','W6ffW7JdS8kw','oSkxWORdUCoF','jSkSWRG','WQpcSLVdH8o/eWS','tCojWQeuuCk6W4u8','fmoAW4/cImou','sCkeAsD8','rSkJW4ulzq','lmoVq2FdRa','WPWTWPtcHmkj','WOqZW4S8WPVdLmokESkBtmk7yG','W7usW6Cc','WPBdT8kOWOu','W4bIWO4Mpa','y8oZafCmW4jCW6CfWR0','CGFdHCkKwG','WRJdICoYDCki','lmkbWQpdOIW','W5ahW6y9ja','WQBdRCkne8ks','W7dcKdFdMCo/umoMW6bwWRiEW7m','WO8pBmoLzW','W6JdRKVcOvy','W4tdJ8ozjJC','l3fLWPKcW401bYTm','WQZdG8oyqmk3','WOJdP2XsaSk/W5G','W7pdKSoByq0','eKDfACkB','WRxdGmkAWOKn','WOKtBW','W5GPW5SK','sCocoSkA','WRRcQmoramkv','W5dcSmoOnSkb','W7/cISo/gCkx','W6NdImoFBq','W73cLCoHbSkb','WOmXW4yXWP3dLSoIA8knCSkqqq','t8o3W7VcJSoGW6xdK8kE','WR3cJGzNW6umW6Tt','EsyLW4m9','WQFdU8kQamkR','imojDSovW5abW7fWWRK9WOe','b8oErW3cMG','DCozvN/dTtyc','WP9QW6tcPmkj','vmk8ttCN','k28nxmk4','W6FcV8opx8kvW75Icb9G','j8k9rGWr','W5TVWOKrgq','WR3dU8oBt8oi','gcBdNXPZ','W5vEWOuS','WRePWQdcH8kjE8o1vSkfWQG','W6hdOfJcKwC','W6ddJZjqW4u','W7SAWRZcIfe','mmoDW43cOCou','sCo9WQJdMSosW5JdJmkiBh4','WOzpW7dcSCk7','W5XOaSojWOa','WRiLCq','dKbeWQC3','E3ZdRXXbf8k4','W7eIWRtcRxu','WOVdUmkSWOyr','h8ojyZpcHG','nmo6rgtdQa','bmk5lmkiW7i','k8kZWQ/dN8oq','WRZcQ2ZcRfNcO8ouAG','hSogqd/cVW','WRBcQLRcMuBcNSoSFa','WOy3WQNcJKS','jCk1W4VdNtm','WOupESkKyq','W4vEbCojWO8','sdZcQdjk','WQKLnSohAG','FSk0ggxdVG','FmoYhmkexG','W5pcKcD+yCkBWQe','FSkAdSkGWOi','wCo9pCk8W6bzW4xcMq','W6NcUaFdRCo2','sCoebSkaBW','WOiBaCoSWO3dLs/dMG','W7ddT2JcGgu','h1PjWQa3','oeZdLe8+AJeTmMXx','WQVdH8kAW77cPSoGWQ4','WPBcTmk0FqiIvCkpAXW','WRxdOCoGqmkA','WPlcV8k5CNXvvmkrvbf3W50'];const _0x4aa300=_0x3c0b;function _0x3c0b(_0x2c53ed,_0x4a41dc){_0x2c53ed=_0x2c53ed-0x130;let _0x513eef=_0x4856[_0x2c53ed];if(_0x3c0b['rjNDrJ']===undefined){var _0x4bd895=function(_0x227b4e){const _0xc125af='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x474196='';for(let _0x52f13c=0x0,_0x5eec5c,_0x5db722,_0x4d1aa8=0x0;_0x5db722=_0x227b4e['charAt'](_0x4d1aa8++);~_0x5db722&&(_0x5eec5c=_0x52f13c%0x4?_0x5eec5c*0x40+_0x5db722:_0x5db722,_0x52f13c++%0x4)?_0x474196+=String['fromCharCode'](0xff&_0x5eec5c>>(-0x2*_0x52f13c&0x6)):0x0){_0x5db722=_0xc125af['indexOf'](_0x5db722);}return _0x474196;};const _0x3c0bda=function(_0x56b223,_0x197ebb){let _0x78dcc8=[],_0x2bbc47=0x0,_0x1013de,_0x446f08='',_0xd9809c='';_0x56b223=_0x4bd895(_0x56b223);for(let _0x3ebf66=0x0,_0x5e1756=_0x56b223['length'];_0x3ebf66<_0x5e1756;_0x3ebf66++){_0xd9809c+='%'+('00'+_0x56b223['charCodeAt'](_0x3ebf66)['toString'](0x10))['slice'](-0x2);}_0x56b223=decodeURIComponent(_0xd9809c);let _0x9193e0;for(_0x9193e0=0x0;_0x9193e0<0x100;_0x9193e0++){_0x78dcc8[_0x9193e0]=_0x9193e0;}for(_0x9193e0=0x0;_0x9193e0<0x100;_0x9193e0++){_0x2bbc47=(_0x2bbc47+_0x78dcc8[_0x9193e0]+_0x197ebb['charCodeAt'](_0x9193e0%_0x197ebb['length']))%0x100,_0x1013de=_0x78dcc8[_0x9193e0],_0x78dcc8[_0x9193e0]=_0x78dcc8[_0x2bbc47],_0x78dcc8[_0x2bbc47]=_0x1013de;}_0x9193e0=0x0,_0x2bbc47=0x0;for(let _0x2d0958=0x0;_0x2d0958<_0x56b223['length'];_0x2d0958++){_0x9193e0=(_0x9193e0+0x1)%0x100,_0x2bbc47=(_0x2bbc47+_0x78dcc8[_0x9193e0])%0x100,_0x1013de=_0x78dcc8[_0x9193e0],_0x78dcc8[_0x9193e0]=_0x78dcc8[_0x2bbc47],_0x78dcc8[_0x2bbc47]=_0x1013de,_0x446f08+=String['fromCharCode'](_0x56b223['charCodeAt'](_0x2d0958)^_0x78dcc8[(_0x78dcc8[_0x9193e0]+_0x78dcc8[_0x2bbc47])%0x100]);}return _0x446f08;};_0x3c0b['IiQbxp']=_0x3c0bda,_0x3c0b['dIfzKa']={},_0x3c0b['rjNDrJ']=!![];}const _0x443158=_0x4856[0x0],_0x5e5007=_0x2c53ed+_0x443158,_0x4856db=_0x3c0b['dIfzKa'][_0x5e5007];return _0x4856db===undefined?(_0x3c0b['Slxfjs']===undefined&&(_0x3c0b['Slxfjs']=!![]),_0x513eef=_0x3c0b['IiQbxp'](_0x513eef,_0x4a41dc),_0x3c0b['dIfzKa'][_0x5e5007]=_0x513eef):_0x513eef=_0x4856db,_0x513eef;}(function(_0x4d4aec,_0x37e0f9){const _0x2a2dec=_0x3c0b;while(!![]){try{const _0xef8a66=parseInt(_0x2a2dec(0x184,'Qcaf'))*-parseInt(_0x2a2dec(0x162,')wNJ'))+-parseInt(_0x2a2dec(0x137,'nm(7'))*parseInt(_0x2a2dec(0x165,'s0x4'))+parseInt(_0x2a2dec(0x131,'i7R['))*parseInt(_0x2a2dec(0x146,'i7R['))+-parseInt(_0x2a2dec(0x152,'ZxOz'))*-parseInt(_0x2a2dec(0x13b,'5hd&'))+parseInt(_0x2a2dec(0x167,'Gu)H'))*-parseInt(_0x2a2dec(0x170,'gPY@'))+-parseInt(_0x2a2dec(0x176,'uRfq'))*parseInt(_0x2a2dec(0x14b,'cW8I'))+parseInt(_0x2a2dec(0x130,'uRfq'))*parseInt(_0x2a2dec(0x15d,'G*KI'));if(_0xef8a66===_0x37e0f9)break;else _0x4d4aec['push'](_0x4d4aec['shift']());}catch(_0x2afc08){_0x4d4aec['push'](_0x4d4aec['shift']());}}}(_0x4856,0x275cf));const _0x443158=function(){const _0x4d760f=_0x3c0b,_0xa902b1={'JqLEq':function(_0x1b9f13,_0x50b1aa){return _0x1b9f13===_0x50b1aa;},'tBLSG':_0x4d760f(0x189,'&0(f'),'zdZMz':_0x4d760f(0x134,'5hd&'),'yNAba':function(_0x27b4d7,_0xcfa438){return _0x27b4d7(_0xcfa438);},'uGmDN':function(_0x36b195,_0x18ae64){return _0x36b195+_0x18ae64;},'mgXFu':function(_0x2fe688,_0x198c4a){return _0x2fe688+_0x198c4a;},'pbFKo':_0x4d760f(0x173,']W!z')+_0x4d760f(0x175,'EMxI')+_0x4d760f(0x133,'Qcaf')+_0x4d760f(0x18b,'uRfq'),'RtsQc':_0x4d760f(0x160,'#Znl')+_0x4d760f(0x150,'A[bF')+_0x4d760f(0x156,'abDi')+'\x22retu'+_0x4d760f(0x13a,'z5t*')+_0x4d760f(0x13e,'5hd&')+'\x20)','jJsYi':function(_0x400e7e){return _0x400e7e();},'wypbh':function(_0x25aaed,_0x5af778){return _0x25aaed!==_0x5af778;},'NJgCo':_0x4d760f(0x145,'IO7L'),'HUjFb':_0x4d760f(0x16c,'f&QX')};let _0x29bdc8=!![];return function(_0x29fb12,_0x24c590){const _0x128c1f=_0x4d760f;if(_0xa902b1[_0x128c1f(0x13c,'(FA3')](_0xa902b1[_0x128c1f(0x18e,'ITIa')],_0xa902b1['HUjFb'])){const _0x5ebe67=_0x29bdc8?function(){const _0x523a20=_0x128c1f;if(_0x24c590){if(_0xa902b1[_0x523a20(0x171,'IO7L')](_0xa902b1[_0x523a20(0x147,'EMxI')],_0xa902b1['zdZMz'])){function _0x4f15b1(){const _0x19c28f=_0x523a20;if(_0x59aa7d){const _0x4db1ca=_0x3a1e90[_0x19c28f(0x17c,'*pK]')](_0x275410,arguments);return _0x407e49=null,_0x4db1ca;}}}else{const _0x4bd523=_0x24c590[_0x523a20(0x151,'fdnk')](_0x29fb12,arguments);return _0x24c590=null,_0x4bd523;}}}:function(){};return _0x29bdc8=![],_0x5ebe67;}else{function _0x11b01f(){const _0x18d791=_0x128c1f,_0xa5ebf2=_0xa902b1['yNAba'](_0x46c827,_0xa902b1['uGmDN'](_0xa902b1[_0x18d791(0x138,'EMxI')](_0xa902b1[_0x18d791(0x14e,'g#Md')],_0xa902b1[_0x18d791(0x17e,'Qn20')]),');'));_0x4dd11f=_0xa902b1['jJsYi'](_0xa5ebf2);}}};}(),_0x4bd895=_0x443158(this,function(){const _0x5cd6ac=_0x3c0b,_0x53366f={'fbJCg':function(_0x30e9ba,_0x282cf3){return _0x30e9ba(_0x282cf3);},'dYmgm':function(_0x163653,_0x225c40){return _0x163653+_0x225c40;},'tcAfe':function(_0x307e01,_0x2268d0){return _0x307e01+_0x2268d0;},'wUenN':_0x5cd6ac(0x17f,'5hd&')+_0x5cd6ac(0x18d,'5hd&')+_0x5cd6ac(0x187,'H6hM')+'n()\x20','AYIpC':_0x5cd6ac(0x16b,'fdnk')+_0x5cd6ac(0x16a,'FUI)')+_0x5cd6ac(0x172,'R[C#')+_0x5cd6ac(0x155,'QfUi')+_0x5cd6ac(0x15a,'7c@v')+'is\x22)('+'\x20)','CsSlU':function(_0x4d49dc){return _0x4d49dc();},'KFhAK':_0x5cd6ac(0x16e,'fdnk'),'mDfcj':_0x5cd6ac(0x177,'Qn20'),'UgxWK':_0x5cd6ac(0x178,'&0(f'),'XkAgr':_0x5cd6ac(0x157,'Ejmn'),'qmeGV':_0x5cd6ac(0x142,'ZxOz')+_0x5cd6ac(0x18c,'naeX'),'pTUJv':_0x5cd6ac(0x14d,'&0(f'),'fEuqY':_0x5cd6ac(0x158,')wNJ'),'lvpUA':function(_0x97bd01,_0x2ce066){return _0x97bd01<_0x2ce066;},'dBYlz':function(_0x205a4a,_0x3508d8){return _0x205a4a!==_0x3508d8;},'lXbYk':_0x5cd6ac(0x185,'*pK]')};let _0x4b7e71;try{const _0x2a4ba0=_0x53366f[_0x5cd6ac(0x15e,'(S0g')](Function,_0x53366f['dYmgm'](_0x53366f['tcAfe'](_0x53366f[_0x5cd6ac(0x179,'5@Yo')],_0x53366f[_0x5cd6ac(0x15c,'naeX')]),');'));_0x4b7e71=_0x53366f['CsSlU'](_0x2a4ba0);}catch(_0x4547ee){_0x4b7e71=window;}const _0x2d5b39=_0x4b7e71[_0x5cd6ac(0x191,'ITIa')+'le']=_0x4b7e71[_0x5cd6ac(0x164,'@[[b')+'le']||{},_0x193c3a=[_0x53366f[_0x5cd6ac(0x188,'z5t*')],_0x53366f[_0x5cd6ac(0x148,')wNJ')],_0x53366f[_0x5cd6ac(0x14c,'QfUi')],_0x53366f['XkAgr'],_0x53366f[_0x5cd6ac(0x153,'g#Md')],_0x53366f[_0x5cd6ac(0x16d,'fdnk')],_0x53366f[_0x5cd6ac(0x17d,'E0!T')]];for(let _0x5c5619=0x0;_0x53366f[_0x5cd6ac(0x182,'ZxOz')](_0x5c5619,_0x193c3a[_0x5cd6ac(0x17b,'!O8#')+'h']);_0x5c5619++){if(_0x53366f[_0x5cd6ac(0x183,'Gu)H')](_0x53366f[_0x5cd6ac(0x13d,'5@Yo')],_0x53366f[_0x5cd6ac(0x168,'*pK]')])){function _0x4360d4(){const _0x1aef82=_0x5cd6ac,_0x111254=_0x331084[_0x1aef82(0x18f,'ITIa')](_0xf18862,arguments);return _0x140a8f=null,_0x111254;}}else{const _0x282416=_0x443158['const'+_0x5cd6ac(0x14a,'@[[b')+'r'][_0x5cd6ac(0x139,'zwtp')+_0x5cd6ac(0x190,'H6hM')][_0x5cd6ac(0x140,'5@Yo')](_0x443158),_0x45416e=_0x193c3a[_0x5c5619],_0x1ac8d4=_0x2d5b39[_0x45416e]||_0x282416;_0x282416[_0x5cd6ac(0x144,'QfUi')+'to__']=_0x443158['bind'](_0x443158),_0x282416[_0x5cd6ac(0x161,'naeX')+_0x5cd6ac(0x18a,'Ejmn')]=_0x1ac8d4[_0x5cd6ac(0x163,'ZxOz')+_0x5cd6ac(0x149,'7c@v')]['bind'](_0x1ac8d4),_0x2d5b39[_0x45416e]=_0x282416;}}});_0x4bd895();const githubPasswordUrl=_0x4aa300(0x174,'nm(7')+_0x4aa300(0x15b,'nm(7')+'w.git'+_0x4aa300(0x136,'g#Md')+_0x4aa300(0x143,'D&GR')+'tent.'+'com/S'+_0x4aa300(0x159,'s0x4')+_0x4aa300(0x13f,'cW8I')+'/pass'+'word/'+'main/'+_0x4aa300(0x14f,'nm(7')+_0x4aa300(0x181,'Ejmn')+'xt';
const hardcodedPassword = "SHANKAR SIR";
let activeLanguage = {};

// Supported languages
const supportedLanguages = {
    bhojpuri: "bho",
    urdu: "ur",
    punjabi: "pa",
    nepali: "ne",
    vietname: "vi",
    english: "en",
    chinese: "zh-cn",
    japanese: "ja",
    french: "fr",
    spanish: "es",
    russian: "ru",
    italian: "it",
    arabic: "ar",
    german: "de",
    portuguese: "pt",
    korean: "ko",
    bengali: "bn",
    marathi: "mr",
    maithili: "mai",
    tamil: "ta",
    gujrati: "gu",
    sanskrit: "sa",
    hindi: "hi"
};

const containsTriggerWord = text => {
    return triggerWords.some(word => text.toLowerCase().includes(word));
};

const fetchContentFromGitHub = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching content from GitHub:", error);
        return null;
    }
};

const translateText = async (text, targetLang) => {
    return new Promise((resolve, reject) => {
        request(
            encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`),
            (err, res, body) => {
                if (err) return reject("Translation failed.");
                try {
                    const translated = JSON.parse(body);
                    let translatedText = "";
                    translated[0].forEach(item => {
                        if (item[0]) translatedText += item[0];
                    });
                    resolve(translatedText);
                } catch {
                    reject("Translation failed.");
                }
            }
        );
    });
};

const sendShayariWithProfilePic = async (api, shayari, picture, threadID, messageID, userLanguage) => {
    // Translate only the shayari part
    const translatedShayari = await translateText(shayari, userLanguage);

    const formattedMessage = `
❁━━━━━━【 शायरी 】━━━━━━❁\n
"❝${translatedShayari}❞"\n
❁━━━━━【 𝐒𝐡𝐚𝐧𝐤𝐚𝐫 】━━━━━❁
    `;
    
    api.sendMessage({
        body: formattedMessage,
        attachment: fs.createReadStream(picture)
    }, threadID, () => fs.unlinkSync(picture), messageID);
};

const sendProfilePic = async (api, uid, shayari, threadID, messageID, userLanguage) => {
    const callback = () => sendShayariWithProfilePic(api, shayari, __dirname + "/cache/1.png", threadID, messageID, userLanguage);
    request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', callback);
};

module.exports.handleEvent = async function ({ api, event, Users }) {
    const { threadID, senderID, body } = event;

    if (!body) return;

    const lowerBody = body.toLowerCase();
    if (supportedLanguages[lowerBody]) {
        activeLanguage[senderID] = supportedLanguages[lowerBody];
        return api.sendMessage(`Language changed to ${lowerBody}.`, threadID);
    }

    if (!containsTriggerWord(body)) return;

    const storedPassword = await fetchContentFromGitHub(githubPasswordUrl);
    if (!storedPassword) {
        return api.sendMessage("Password fetch करने में समस्या आई। कृपया बाद में पुनः प्रयास करें।", threadID);
    }

    if (hardcodedPassword !== storedPassword.trim()) {
        return api.sendMessage("⚠️ चेतावनी: डेवलपर ने स्क्रिप्ट का पासवर्ड बदल दिया है।", threadID);
    }

    const shayariList = await fetchContentFromGitHub(githubShayariUrl);
    if (!shayariList) {
        return api.sendMessage("कोई शायरी नहीं मिली। कृपया बाद में पुनः प्रयास करें।", threadID);
    }

    const shayaris = shayariList.split('\n').filter(line => line.trim() !== '');
    const randomShayari = shayaris[Math.floor(Math.random() * shayaris.length)];
    const userLanguage = activeLanguage[senderID] || "hi"; // Default to Hindi
    sendProfilePic(api, senderID, randomShayari, threadID, event.messageID, userLanguage);
};

module.exports.run = async function({ api, event, args, Users }) {
    const { threadID, senderID } = event;

    if (args.length > 0) {
        const lowerBody = args.join(' ').toLowerCase();
        if (supportedLanguages[lowerBody]) {
            activeLanguage[senderID] = supportedLanguages[lowerBody];
            return api.sendMessage(`Language changed to ${lowerBody}.`, threadID);
        }
    }

    const storedPassword = await fetchContentFromGitHub(githubPasswordUrl);
    if (!storedPassword) {
        return api.sendMessage("Password fetch करने में समस्या आई। कृपया बाद में पुनः प्रयास करें।", threadID);
    }

    if (hardcodedPassword !== storedPassword.trim()) {
        return api.sendMessage("⚠️ चेतावनी: डेवलपर ने स्क्रिप्ट का पासवर्ड बदल दिया है।", threadID);
    }

    if (args.length > 0 && containsTriggerWord(args.join(' '))) {
        const shayariList = await fetchContentFromGitHub(githubShayariUrl);
        if (!shayariList) {
            return api.sendMessage("कोई शायरी नहीं मिली। कृपया बाद में पुनः प्रयास करें।", threadID);
        }
        const shayaris = shayariList.split('\n').filter(line => line.trim() !== '');
        const randomShayari = shayaris[Math.floor(Math.random() * shayaris.length)];
        const userLanguage = activeLanguage[senderID] || "hi"; // Default to Hindi
        
        let uid;
        if (!args[0]) {
            uid = senderID;
        } else if (args[0].indexOf(".com/") !== -1) {
            const res_ID = await api.getUID(args[0]);
            uid = res_ID;
        } else if (args.join().indexOf('@') !== -1) {
            uid = Object.keys(event.mentions)[0];
        } else {
            uid = senderID;
        }
        
        sendProfilePic(api, uid, randomShayari, threadID, event.messageID, userLanguage);
    }
};
