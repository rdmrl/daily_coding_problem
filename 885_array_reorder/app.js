const reorder = require('./array_reorder');

const inputArray = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
console.log('pre:', inputArray);
reorder.reorderArray(inputArray);
console.log('post:', inputArray);
