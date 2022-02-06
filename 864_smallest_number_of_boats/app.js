let boatCalc = require('./smallest_num_boats');

const numBoats = boatCalc.smallestNumberOfBoats( [100, 200, 150, 80], 200 );
console.log('[100, 200, 150, 80], numBoats:', numBoats);

const numBoats2 = boatCalc.smallestNumberOfBoats( [100, 70, 120, 200, 150, 80], 200 );
console.log('[100, 70, 120, 200, 150, 80], numBoats:', numBoats2);
