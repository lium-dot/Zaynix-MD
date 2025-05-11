const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Convert string to actual boolean
function convertToBool(text, fault = 'true') {
    return text?.toLowerCase() === fault.toLowerCase();
}

module.exports = {
  // --- Required Core Configurations ---
  SESSION_ID: process.env.SESSION_ID || "Zaynix-MD=QlZWkaLa#1RZLIgLL9gyrIMDopsv9FrrO9Lt16l7mdxps1xZdqMU", // Your session ID
  MONGODB: process.env.MONGODB || "mongodb+srv://oyysreejan8:r9f3q8OpBE9UdFEv@cluster0.h3mzhuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // Your MongoDB URL

  // --- Optional APIs ---
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // For movie/series search (OMDb API)

  // --- Bot Identity ---
  BOT_NAME: process.env.BOT_NAME || "Zaynix-MDt", // Bot name shown in menus 

  
  // --- Feature Toggles (Boolean) ---
  AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN),
  AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY),
  AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT),
  AUTO_REACT: convertToBool(process.env.AUTO_REACT),
  AUTO_REPLY: convertToBool(process.env.AUTO_REPLY),
  READ_MESSAGE: convertToBool(process.env.READ_MESSAGE),
  DELETE_LINKS: convertToBool(process.env.DELETE_LINKS),
  CUSTOM_REACT: convertToBool(process.env.CUSTOM_REACT),
  PUBLIC_MODE: convertToBool(process.env.PUBLIC_MODE),
  ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE),
  AUTO_TYPING: convertToBool(process.env.AUTO_TYPING),
  AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING),
  AUTO_VOICE: convertToBool(process.env.AUTO_VOICE),
  AUTO_STICKER: convertToBool(process.env.AUTO_STICKER),
  ANTI_LINK: convertToBool(process.env.ANTI_LINK),
  ANTI_LINK_KICK: convertToBool(process.env.ANTI_LINK_KICK),
  ANTI_BAD: convertToBool(process.env.ANTI_BAD),
  ANTI_VV: convertToBool(process.env.ANTI_VV),

  // --- Emojis & Reactions ---
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",

  // --- General Settings ---
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254758443111", // Your WhatsApp number
  PREFIX: process.env.PREFIX || ",", // Command prefix
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // Resend deleted messages to 'log' or 'same'
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Ꭿℒℒℰℕ ℐЅ ᏇᎯTℂℋℐℕᎶ👀ℐℕ ᎶℋᎾЅT ℳᎾⅅℰ👻*", // Auto-reply text for status
  MODE: process.env.MODE || "private" // public | private | group
};
