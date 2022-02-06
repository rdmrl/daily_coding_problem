let boatCalc = require('./smallest_num_boats');
let assert = require('assert');

describe('BoatCountTests', function () {
  describe('BoatCountTest1', function () {
    it("should return 3 when passed [100, 200, 150, 80] and 200", function () {
      assert.equal( boatCalc.smallestNumberOfBoats( [100, 200, 150, 80], 200 ), 3 );
    } );
  } );
  describe('BoatCountTest2', function () {
    it("should return 4 when passed [100, 70, 120, 200, 150, 80] and 200", function () {
      assert.equal( boatCalc.smallestNumberOfBoats( [100, 70, 120, 200, 150, 80], 200 ), 4 );
    } );
  } );
  describe('BoatCountTest3', function () {
    it("should return 2 when passed [100, 80, 200] and 200", function () {
      assert.equal( boatCalc.smallestNumberOfBoats( [100, 80, 200], 200 ), 2 );
    } );
  } );
  describe('BoatCountTest4', function () {
    it("should return 1 when passed [200] and 200", function () {
      assert.equal( boatCalc.smallestNumberOfBoats( [200], 200 ), 1 );
    } );
  } );
  describe('BoatCountTest5', function () {
    it("should return 3 when passed [80, 90, 100, 110, 200] and 200", function () {
      assert.equal( boatCalc.smallestNumberOfBoats( [80, 90, 100, 110, 200], 200 ), 3 );
    } );
  } );
});
