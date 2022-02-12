/**
 * =====

 Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle containing only 1's and return its area.

 For example, given the following matrix:

 [[1, 0, 0, 0],
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [0, 1, 0, 0]]
 Return 4.

 * =====
 */

module.exports = {
  largestRectangleInMatrix: function( inputMatrix ) {
    let area = 0;
    const rows = inputMatrix.length;
    const columns = inputMatrix[0].length;

    // console.log( 'rows:', rows, 'columns:', columns );

    // X ---> columns
    let startX = -1;
    let endX = -1;

    // Y | rows
    //   v
    let startY = -1;
    let endY = -1;

    for ( let rowIx = 0; rowIx < rows; rowIx++ ) {

      for ( let colIx = 0; colIx < columns; colIx++ ) {
        // console.log( 'rowIx:', rowIx, 'colIx:', colIx, 'val:', inputMatrix[ rowIx ][ colIx ] );
        if ( inputMatrix[ rowIx ][ colIx ] === 1 ) {
          if ( startX < 0 ) {
            startX = colIx;
            endX = colIx;
          } else {
            endX = colIx;
          }
        } else {
          if ( startX >= 0 ) {
            startX = -1;
          }

          // Set the previous column index to the end of the area row.
          if ( endX < 0 ) {
            if ( startX < 0 ) {
              endX = -1;
            } else {
              endX = Math.max( startX, ( colIx - 1 ) );
            }
          } else {
            if ( startX < 0 ) {
              endX = -1;
            }
          }
        }
        console.log( 'startX:', startX, 'endX:', endX );
      }

      console.log('------------');

    }


    return area;
  }
};
