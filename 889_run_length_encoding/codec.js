/**
 * =====
 Run-length encoding is a fast and simple method of encoding strings. The 
 basic idea is to represent repeated successive characters as a single 
 count and character. For example, the string "AAAABBBCCDAA" would be 
 encoded as "4A3B2C1D2A".

 Implement run-length encoding and decoding. You can assume the string 
 to be encoded have no digits and consists solely of alphabetic characters. 
 You can assume the string to be decoded is valid.
 * =====
 */
module.exports = {
  encode: function(inputString) {
  
    console.log('inp:', inputString, 'len:', inputString.length);
    let encodedChars = [];

    let curChar = '';
    let curCharCount = 0;

    console.log('------------------------------------');
    for(let ix = 0; ix < inputString.length; ix++) {
      console.log('ix:', ix, 'at.ix:', inputString[ix], 'at.ix.1:', inputString[ix + 1]);
      if((ix+1) < inputString.length && inputString[ix] === inputString[ix + 1]) {
        // The following character is the same as the current character.
        curChar = inputString[ix];
        curCharCount++;
      } else {
          console.log('diff.outer: curChar:', curChar, 'curCharCount:', curCharCount);
        // The next character is different.
        if(curCharCount >= 1) {
          // Include the current char too.
          if(ix < inputString.length - 1) {
            curCharCount++;
          }
          console.log('diff > 1: curChar:', curChar, 'curCharCount:', curCharCount);

          // There have been repeats, save them.
          encodedChars.push(curCharCount);
          encodedChars.push(curChar);

          // Reset the counter.
          curCharCount = 0;
          curChar = '';
        } else {
          // No repeats, retain this character.
          encodedChars.push(1);
          encodedChars.push(inputString[ix]);
          curChar = inputString[ix];
          curCharCount = 1;
        }
      }
    console.log('------------------------------------');
    }

    return encodedChars.join('');
  },
  decode: function(encodedString) {
    let decodedString = null;

    return decodedString;
  }
};
