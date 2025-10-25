const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'yUFFjBgQ#D9fWt-AUfJ3Qw9UuQZJKiz3tI8nXi_O0dJdiNSdEN_w'
};
