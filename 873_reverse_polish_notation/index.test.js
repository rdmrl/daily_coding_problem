let assert = require( 'assert' );
let rpn = require( './rpn' );

describe( 'RPNTests', function() {
  describe( 'RPNTestSum', function() {
    it( "should return 8 when passed [ 5, 3, '+' ]", function() {
      assert.equal( rpn.evaluate( [ 5, 3, '+' ] ), 8 );
    } );
  } );

  describe( 'RPNTestDifference', function() {
    it( "should return 8 when passed [ 5, 3, '-' ]", function() {
      assert.equal( rpn.evaluate( [ 5, 3, '-' ] ), 2 );
    } );
  } );

  describe( 'RPNTest3', function() {
    it( "should return 5 when passed [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']", function() {
      assert.equal( rpn.evaluate( [ 15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-' ] ), 5 );
    } );
  } );

} );