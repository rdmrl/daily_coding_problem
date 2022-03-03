const iter2d = require('./iterator');

// const test1 = new iter2d.Iterator2d([[1, 2], [3], [], [4, 5, 6]]);

const test1 = new iter2d.Iterator2d([[1, 2, 3], [], [], [4, 5, 6], [7, 8], [9], [10]]);

while( test1.has_next() ) {
  const el = test1.next();
  console.log( el );
}
