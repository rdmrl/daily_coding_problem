let matcher = require('./regex_match');

const matchVal = matcher.match('ra.', 'ray');
console.log( 'ra. => ray : ', matchVal );

const matchVal2 = matcher.match('ra.', 'raymond');
console.log( 'ra. => raymond : ', matchVal2 );

const matchVal3 = matcher.match('.*at', 'chat');
console.log( '.*at => chat : ', matchVal3 );
