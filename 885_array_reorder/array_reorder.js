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

    // ES6 version
    const occurrences = inputArray.reduce(function (accum, cur) {
      return accum[cur] ? ++accum[cur] : accum[cur] = 1, accum
    }, {});

    console.log(occurrences);
  }
};
