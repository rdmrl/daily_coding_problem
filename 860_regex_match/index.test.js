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

	describe('RegexMatchPeriod3Pass', function () {
		it("should return true when passed '.ay' and 'day'", function () {
			assert.equal( matcher.match('.ay', 'day' ), true );
		} );
	} );

	describe('RegexMatchPeriod4Fail', function () {
		it("should return false when passed '.ay' and 'days'", function () {
			assert.equal( matcher.match('.ay', 'days' ), false );
		} );
	} );

	describe('RegexMatchPeriod5Pass', function () {
		it("should return true when passed 'to.ay' and 'today'", function () {
			assert.equal( matcher.match('to.ay', 'today' ), true );
		} );
	} );

	describe('RegexMatchPeriod5Pass', function () {
		it("should return true when passed 'mid.ay' and 'midday'", function () {
			assert.equal( matcher.match('mid.ay', 'midday' ), true );
		} );
	} );

	describe('RegexMatchPeriod6Fail', function () {
		it("should return false when passed 'mid.ay' and 'middays'", function () {
			assert.equal( matcher.match('mid.ay', 'middays' ), false );
		} );
	} );

} );
