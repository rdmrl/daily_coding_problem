/**
 * =====
 You are given an array of arrays of integers, where each array corresponds to 
 a row in a triangle of numbers. For example, [[1], [2, 3], [1, 5, 1]] 
 represents the triangle:

   1
  2 3
 1 5 1

 We define a path in the triangle to start at the top and go down one row at 
 a time to an adjacent value, eventually ending with an entry on the bottom row. 
 For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

 Write a program that returns the weight of the maximum weight path.

 * =====
 */

module.exports = {
  getMaximumWeightPath: function( triangle ) {

    let paths = [];

    const rootValue = triangle[0][0];
    console.log( 'root:', rootValue );

    // Loop through the rows.
    for ( let index1 = 1; index1 < triangle.length; index1++ ) {
      const row = triangle[index1];

      let pathPrefix = [];
      if ( index1 === 1 ) {
        pathPrefix = [ rootValue ];
      }

      console.log('--------');
      // Process each element in a row.
      for ( let index2 = 0; index2 < row.length; index2++ ) {
        console.log( row[index2] );

        // Create new paths.
        // paths.push

        const curPath = rootElement + ' -> ' + row[index2];
        

      }
    }
  }
};
