const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "VISPER-MD&y5R0UTqR#tvqC-uORv1KeA91JD6udYheLhkXaYutaFu0HeVf9JT8",
ALIVE_IMG: process.env.ALIVE_IMG || " ( IMAGE URL ) ",
ALIVE_MSG: process.env.ALIVE_MSG || "TESTING ALIVE MESSAGE. . .",
AUTOREAD_STATUS: process.env.AUTOREAD_STATUS,
};
