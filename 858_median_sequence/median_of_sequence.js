/**
 * ==============
 
 Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

 Recall that the median of an even-numbered list is the average of the two middle numbers.

 For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

  2
  1.5
  2
  3.5
  2
  2
  2

 * ==============
 */

module.exports = {
  getMedian: function(inputSequence) {

    let median = 0;

    // 1. Read the input sequence array as a stream - one by one.
    // 2. Sort them in ascending order.
    // 3. Identify the middle numbers.
    // 4. Compute the median value.

    for (let index = 0; index < inputSequence.length; index++) {
      if (index == 0) {
        median = inputSequence[index];
      } else {
        // Get a slice of the array upto this index.
        // Slice creates a shallow copy and does not alter the original array.
        const sliceLength = index + 1;
        const curSlice = inputSequence.slice(0, sliceLength);

        // Sort the sliced array in place using a compare method for numbers.
        curSlice.sort((a, b) => a - b);

        // Find the middle number.
        let middleIndex = Math.floor(sliceLength / 2);

        if ((sliceLength % 2) == 0) {
          // There are even number of elements in the sequence.
          median = (curSlice[middleIndex] + curSlice[middleIndex - 1]) / 2;
        } else {
          // There are odd number of elements in the sequence.
          median = curSlice[middleIndex];
        }
      }

      console.log(median);
    } // for
  }
};

