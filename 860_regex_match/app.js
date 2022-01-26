let matcher = require('./regex_match');

console.log( "-------------------------------\n" );
const matchVal = matcher.match('ra.', 'ray');
console.log( 'ra. => ray : ', matchVal );

console.log( "-------------------------------\n" );
const matchVal2 = matcher.match('ra.', 'raymond');
console.log( 'ra. => raymond : ', matchVal2 );

/*
console.log( "-------------------------------\n" );
const matchVal3 = matcher.match('.*at', 'chat');
console.log( '.*at => chat : ', matchVal3 );
*/
