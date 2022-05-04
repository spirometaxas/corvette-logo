#!/usr/bin/env node
const corvette = require('./index.js');

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    if (params[0] === '--icon') {
        console.log(corvette.icon);
    } else if (params[0] === '--text') {
        console.log(corvette.text);
    } else if (params[0] === '--help') {
        console.log('\nUsage:\n' + '  $ corvette-logo\n' + '  $ corvette-logo --icon\n' + '  $ corvette-logo --text\n');
    } else {
        console.log(corvette.logo);
    }
} else {
    console.log(corvette.logo);
}