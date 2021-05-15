
const fs = require('fs');
const secret = JSON.parse(fs.readFileSync('keys/user.json').toString());
const utils = require('../utils');
const settings = utils.getOrDefault(secret, "settings", {});
delete secret["settings"];

const baseDir = utils.Optional.of(process.env.SAVE_DIRECTIRON).or(settings.dir).orElse('./');
const publicKey = baseDir + utils.Optional.of(process.env.PUBLIC_KEY_LOC).orElse('keys/key.pub');
const privateKey = baseDir + utils.Optional.of(process.env.PRIVATE_KEY_LOC).orElse('keys/key.pri');

console.log('base dir = ', baseDir);
console.log('pub key  = ', publicKey);
console.log('pri key  = ', privateKey);


const priKey = fs.readFileSync('keys/key.pri');
const pubKey = fs.readFileSync('keys/key.pub');


secret.publicKey = pubKey.toString();
secret.privateKey = priKey.toString();
secret.pubkeyLoc = publicKey;
secret.prikeyLoc = privateKey;

const secretJson = JSON.stringify(secret);
fs.writeFileSync('keys/secret.json', secretJson);
