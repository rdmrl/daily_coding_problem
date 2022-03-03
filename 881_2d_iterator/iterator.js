/**
 * =====
 Implement a 2D iterator class. It will be initialized with an array of 
 arrays, and should implement the following methods:

 next(): returns the next element in the array of arrays. If there are 
 no more elements, raise an exception.

 has_next(): returns whether or not the iterator still has elements left.

 For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

 Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.
 * =====
 */
class Iterator2d {
  constructor( inputArray ) {
    this.inputArray = inputArray;

    // Points to the current element.
    this.curIndex = 0;

    // Points to the current row being iterated.
    this.curRowIx = 0;

    // Points to the current column in the current row being iterated.
    this.curColIx = 0;

    this.rowLengths = [];
    this.totalElementCount = 0;
    for ( let rowIx = 0; rowIx < this.inputArray.length; rowIx++ ) {
      const rowLength = this.inputArray[ rowIx ].length;
      this.rowLengths[ rowIx ] = rowLength;
      this.totalElementCount += rowLength;
    }
  }

  has_next() {
    if ( this.curIndex < this.totalElementCount ) {
      return true;
    }
    return false;
  }

  next() {
    if ( this.curIndex >= this.totalElementCount ) {
      throw 'No more elements in the array';
    }

    if ( this.curColIx + 1 > this.rowLengths[ this.curRowIx ] ) {
      // Reached the end of the current row. Go to the next.
      do {
        this.curRowIx++;
        // Skip any empty rows.
      } while ( this.rowLengths[ this.curRowIx ] === 0 );

      // Reset to the first element in the new row.
      this.curColIx = 0;
    }

    // Find the current row.
    const curEl = this.inputArray[ this.curRowIx ][ this.curColIx ];
    // console.log( 'rowIx:', this.curRowIx, 'colIx:', this.curColIx, 'cur.ix:', this.curIndex, 'el:', curEl );

    this.curIndex++;
    this.curColIx++;

    return curEl;
  }
}

exports.Iterator2d = Iterator2d;
