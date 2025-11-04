const codec = require('./codec');
const assert = require('assert');

describe('RunLengthEncodingTests', () => {
  /*
  describe('RunLengthEncodingTest1', () => {
    it("should return '4A3B2C1D2A' when passed 'AAAABBBCCDAA'", () => {
      assert.equal(codec.encode('AAAABBBCCDAA'), '4A3B2C1D2A');
    } );
  } );
  */
  describe('RunLengthEncodingTest2', () => {
    it("should return '4w3a1d1e6x' when passed 'wwwwaaadexxxxxx'", () => {
      assert.equal(codec.encode('wwwwaaadexxxxxx'), '4w3a1d1e6x');
    } );
  } );
} );
