const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "VISPER-MD&z8AQCKyY#y6A4J-x7Lm9bm3CDtlzAGPQAckWcxHeeS4MUb4kSWwk",
ALIVE_IMG: process.env.ALIVE_IMG || " ( IMAGE URL ) ",
ALIVE_MSG: process.env.ALIVE_MSG || "TESTING ALIVE MESSAGE. . .",
AUTOREAD_STATUS: process.env.AUTOREAD_STATUS,
};
