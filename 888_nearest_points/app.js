const points = require('./points');

const pointsList = [ [0, 0], [5, 4], [3, 1] ];
const nearestKList = points.nearestPoints(pointsList, [1, 2], 2);
console.log(nearestKList);
