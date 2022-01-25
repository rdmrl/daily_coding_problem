let matcher = require('./regex_match');

let assert = require('assert');
describe('RegexMatch', function () {
	describe('RegexMatchPeriod1', function () {
		it("should return true when passed 'ra.' and 'ray'", function () {
			assert.equal( matcher.match('ra.', 'ray' ), true );
		} );
	} );

	describe('RegexMatchPeriod2', function () {
		it("should return false when passed 'ra.' and 'raymond'", function () {
			assert.equal( matcher.match('ra.', 'raymond' ), false );
		} );
	} );

} );
