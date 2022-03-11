const codec = require('./codec');

const inputString = 'AAAABBBCCDAA';
const encodedString = codec.encode(inputString);

console.log('encoded:', encodedString);

const decodedString = codec.decode(encodedString);

console.log('decoded:', decodedString);
