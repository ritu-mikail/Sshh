const fs = require('fs');

let settings = {
  lockName: false,
  lockNickname: false,
  lockAvatar: false,
  lockedName: '',
  lockedImage: '',
  lockedNicknames: {},
};

const saveSettings = () => {
  fs.writeFileSync('antichangeinfobox-settings.json', JSON.stringify(settings));
};

const loadSettings = () => {
  if (fs.existsSync('antichangeinfobox-settings.json')) {
    settings = JSON.parse(fs.readFileSync('antichangeinfobox-settings.json'));
  }
};

module.exports.config = {
  name: "antichangeinfobox",
  version: "1.0.0",
  hasPermission: 1, // 0 = Everyone, 1 = Admins, 2 = Bot Owner
  credits: "SHANKAR-PROJECT",
  description: "Locks group name, nickname, and avatar based on commands.",
  commandCategory: "Admin",
  usages: "!antichangeinfobox <name/nickname/avt> <on/off>",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  const subCommand = args[0];
  const action = args[1];

  loadSettings();

  if (!subCommand || !action) {
    return api.sendMessage("Usage: !antichangeinfobox <name/nickname/avt> <on/off>", threadID, messageID);
  }

  if (action !== "on" && action !== "off") {
    return api.sendMessage("Invalid action! Use 'on' or 'off'.", threadID, messageID);
  }

  const newState = action === "on";

  switch (subCommand) {
    case "name":
      settings.lockName = newState;
      if (newState) {
        const threadInfo = await api.getThreadInfo(threadID);
        settings.lockedName = threadInfo.threadName;
        api.sendMessage(`Group name lock is now enabled. Locked name: ${settings.lockedName}`, threadID, messageID);
      } else {
        api.sendMessage("Group name lock is now disabled.", threadID, messageID);
      }
      break;

    case "nickname":
      settings.lockNickname = newState;
      if (newState) {
        const threadInfo = await api.getThreadInfo(threadID);
        threadInfo.nicknames.forEach((nickname, userID) => {
          settings.lockedNicknames[userID] = nickname;
        });
        api.sendMessage("Nickname lock is now enabled.", threadID, messageID);
      } else {
        settings.lockedNicknames = {};
        api.sendMessage("Nickname lock is now disabled.", threadID, messageID);
      }
      break;

    case "avt":
      settings.lockAvatar = newState;
      if (newState) {
        const threadInfo = await api.getThreadInfo(threadID);
        settings.lockedImage = threadInfo.imageSrc;
        api.sendMessage("Avatar lock is now enabled.", threadID, messageID);
      } else {
        api.sendMessage("Avatar lock is now disabled.", threadID, messageID);
      }
      break;

    default:
      return api.sendMessage("Invalid subcommand! Use 'name', 'nickname', or 'avt'.", threadID, messageID);
  }

  saveSettings();
};

module.exports.handleEvent = async ({ api, event }) => {
  const { threadID, logMessageType, logMessageData } = event;

  loadSettings();

  if (settings.lockName && logMessageType === 'log:thread-name') {
    api.setTitle(settings.lockedName, threadID, (err) => {
      if (err) console.error('Failed to reset group name:', err);
      else console.log('Group name reset to locked name.');
    });
  }

  if (settings.lockAvatar && logMessageType === 'log:thread-icon') {
    const imageStream = settings.lockedImage;
    api.changeGroupImage(imageStream, threadID, (err) => {
      if (err) console.error('Failed to reset group image:', err);
      else console.log('Group image reset to locked image.');
    });
  }

  if (settings.lockNickname && logMessageType === 'log:user-nickname') {
    const userID = logMessageData.participant_id;
    const lockedNickname = settings.lockedNicknames[userID];
    if (lockedNickname) {
      api.changeNickname(lockedNickname, threadID, userID, (err) => {
        if (err) console.error('Failed to reset nickname:', err);
        else console.log('Nickname reset to locked nickname.');
      });
    }
  }
};
