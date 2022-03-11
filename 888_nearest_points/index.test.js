const points = require('./points');
const assert = require('assert');

describe("NearestPointsTests", () => {
  describe("NearestPointsTest1", () => {
    it("should return [[0, 0], [3, 1]] when passed [ [0, 0], [5, 4], [3, 1] ], [1, 2], and 2", () => {
      const pointsList = [ [0, 0], [5, 4], [3, 1] ];
      const expectedList = [ [0, 0], [3, 1] ];
      assert.deepEqual(points.nearestPoints(pointsList, [1, 2], 2), expectedList);
    } );
  } );
} );
