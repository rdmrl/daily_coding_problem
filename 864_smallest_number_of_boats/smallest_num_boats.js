/**
 * =====

 An imminent hurricane threatens the coastal town of Codeville. 
 If at most two people can fit in a rescue boat, and the maximum 
 weight limit for a given boat is k, determine how many boats 
 will be needed to save everyone.

 For example, given a population with weights [100, 200, 150, 80] 
 and a boat limit of 200, the smallest number of boats required 
 will be three.

 * =====
 */

module.exports = {
  smallestNumberOfBoats: function( inputWeights, weightLimit ) {
    let processedList = [];

    // Initialize the array with zero values.
    let numberOfWeights = inputWeights.length;
    while ( numberOfWeights-- ) {
      processedList[ numberOfWeights ] = 0;
    }

    // The number of boats needed.
    let boatCount = 0;

    let bucketIndices = [];
    let bucketWeight = 0;

    for ( let index = 0; index < inputWeights.length; index++ ) {
      // The simplest case...
      // ...the weight of this person matches the limit exactly.
      if ( inputWeights[ index ] == weightLimit && processedList[ index ] === 0 ) {
        // Dedicate a boat to this person. 
        boatCount++;

        // Set this weight as processed.
        processedList[ index ] = 1;
      } else {

        // Add this weight to the temporary bucket, only if it is empty.
        // If not empty, process the following weights.
        if ( bucketWeight === 0 && processedList[ index ] === 0 ) {
          bucketWeight += inputWeights[ index ];
          bucketIndices.push( index );
        }

        let bestFits = []

        // Check the rest of the weights in the list.
        for ( let ix2 = index + 1; ix2 < inputWeights.length; ix2++ ) {

          // Skip the weights that have already been processed.
          if ( processedList[ ix2 ] === 1 ) {
            continue;
          }

          const bucketPlusWeight = bucketWeight + inputWeights[ ix2 ];
          if ( bucketPlusWeight > weightLimit ) {
            // Won't fit in the boat, skip this person.
          } else {
            const leftOverWeight = weightLimit - bucketPlusWeight;
            bestFits.push( {
              leftOverWeight: leftOverWeight,
              ix2: ix2
            } );
          }
        }

        if ( bestFits.length > 0 ) {
          if ( bestFits.length > 1 ) {
            // Sort the bestFits by the smallest left over weight.
            bestFits.sort( function( a, b ) {
              return a.leftOverWeight - b.leftOverWeight;
            } );
          }

          const bestFit = bestFits[ 0 ];
          bucketWeight += inputWeights[ bestFit.ix2 ];
          bucketIndices.push( bestFit.ix2 );
        }

        if ( bucketWeight > 0 ) {
          boatCount++;

          bucketWeight = 0;
          while ( bucketIndices.length ) {
            let bucketIndex = bucketIndices.shift();
            processedList[ bucketIndex ] = 1;
          }
        }
      }
    }

    return boatCount;
  }
};
