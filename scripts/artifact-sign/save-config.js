const fs = require('fs');
const path = require('path');
const utils = require('../utils');

const secret = JSON.parse(utils.orElse(
    process.env.SECRET_DATA,
    () => { return fs.readFileSync('keys/secret.json').toString() }
));

try {
    fs.mkdirSync(path.dirname(secret.pubkeyLoc), { recursive: true });
} catch (ignore) { }
try {
    fs.mkdirSync(path.dirname(secret.prikeyLoc), { recursive: true });
} catch (ignore) { }

fs.writeFileSync(secret.pubkeyLoc, secret.publicKey);
fs.writeFileSync(secret.prikeyLoc, secret.privateKey);
const add_properties = '\n\n' +
    'sonatype.user=' + secret.user
    + '\n' +
    'sonatype.key=' + secret.key
    + '\n\n';

if (fs.existsSync('gradle.properties')) {
    fs.writeFileSync('gradle.properties', fs.readFileSync('gradle.properties') + add_properties);
} else {
    fs.writeFileSync('gradle.properties', add_properties);
}
