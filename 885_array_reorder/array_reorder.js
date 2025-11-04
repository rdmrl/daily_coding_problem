/**
 * =====
 Given an array of strictly the characters 'R', 'G', and 'B', segregate the 
 values of the array so that all the Rs come first, the Gs come second, 
 and the Bs come last. You can only swap elements of the array.

 Do this in linear time and in-place.

 For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
 * =====
 */
module.exports = {
  reorderArray: function(inputArray) {
    // First get the occurrence counts of each character.
    /*
    const countMap = {};
    for(let ix = 0; ix < inputArray.length; ix++) {
      const el = inputArray[ix];
      if(countMap[el]) {
        countMap[el]++;
      } else {
        countMap[el] = 1;
      }
    }

    console.log(countMap);
    */

    // ES6 version
    const occurrences = inputArray.reduce(function (accum, cur) {
      return accum[cur] ? ++accum[cur] : accum[cur] = 1, accum
    }, {});

    console.log('occ:', occurrences);

    const indexMap = { 'R': 0, 'G': occurrences['R'], 'B': occurrences['R'] + occurrences['G'] };

    console.log('pre.index.map:', indexMap);

    console.log('---------------------------');

    for(let ix = 0; ix < inputArray.length; ix++) {
      console.log('Processing:', ix, 'val:', inputArray[ix], 'inp:', inputArray);
      switch(inputArray[ix]) {
        case 'R':
          if(ix < indexMap['G']) {
            // The 'R' is already in the correct location.
            // Move the index pointer ahead.
          } else {
            // Swap it out.
            console.log('Swapping R:', ix, ' and:', indexMap['R']);
            [ inputArray[ix], inputArray[indexMap['R']] ] = [ inputArray[indexMap['R']], inputArray[ix] ];
            indexMap['R']++;
          }
          break;
        case 'G':
          if(ix >= indexMap['G'] && ix < indexMap['B']) {
            // Do nothing.
            console.log('G is already in range.');
          } else {
            // Find the index to swap this G to.
            // 1. If this G is in the 'R' range, find an R that is outside the 'R' range and swap it.

            // Find the letter at the next 'G' position.
            if(indexMap['G'] === 'R' && ix < occurrences['R']) {
              [ inputArray[ix], inputArray[indexMap['G']] ] = [ inputArray[indexMap['G']], inputArray[ix] ];
            } else if(indexMap['G'] === 'B' && ix > occurrences['B']) {
              // [ inputArray[ix], inputArray[indexMap['G']] ] = [ inputArray[indexMap['G']], inputArray[ix] ];
            }

            // 1. Should be within the range of indexMap['G'] and indexMap['B']
            console.log('Swapping G:', ix, ' and:', indexMap['G']);
            // [ inputArray[ix], inputArray[indexMap['G']] ] = [ inputArray[indexMap['G']], inputArray[ix] ];
            indexMap['G']++;
          }
          break;
        case 'B':
          if(ix >= indexMap['B']) {
          } else {
            // [ inputArray[ix], inputArray[indexMap['B']] ] = [ inputArray[indexMap['B']], inputArray[ix] ];
            // indexMap['B']++;
          }
          break;
      }
    } // for
    console.log('---------------------------');

    console.log('post.index.map:', indexMap);
  }
};
