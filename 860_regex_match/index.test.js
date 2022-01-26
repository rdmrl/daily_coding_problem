let matcher = require('./regex_match');

let assert = require('assert');
describe('RegexMatch', function () {
	describe('RegexMatchPeriod1Pass', function () {
		it("should return true when passed 'ra.' and 'ray'", function () {
			assert.equal( matcher.match('ra.', 'ray' ), true );
		} );
	} );

	describe('RegexMatchPeriod2Fail', function () {
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

	describe('RegexMatchPeriod6Pass', function () {
		it("should return true when passed 'mid.ay' and 'midday'", function () {
			assert.equal( matcher.match('mid.ay', 'midday' ), true );
		} );
	} );

	describe('RegexMatchPeriod7Fail', function () {
		it("should return false when passed 'mid.ay' and 'middays'", function () {
			assert.equal( matcher.match('mid.ay', 'middays' ), false );
		} );
	} );

	describe('RegexMatchAsterisk1Pass', function () {
		it("should return true when passed '.*at' and 'chat'", function () {
			assert.equal( matcher.match('.*at', 'chat' ), true );
		} );
	} );

	describe('RegexMatchAsterisk1Fail', function () {
		it("should return false when passed '.*at' and 'chats'", function () {
			assert.equal( matcher.match('.*at', 'chats' ), false );
		} );
	} );

	describe('RegexMatchAsterisk2Pass', function () {
		it("should return true when passed 'at.*' and 'attempt'", function () {
			assert.equal( matcher.match('at.*', 'attempt' ), true );
		} );
	} );

	describe('RegexMatchAsterisk2Fail', function () {
		it("should return false when passed 'at.*' and 'later'", function () {
			assert.equal( matcher.match('at.*', 'later' ), false );
		} );
	} );

	describe('RegexMatchAsterisk3Pass', function () {
		it("should return true when passed 'at.*er' and 'atelier'", function () {
			assert.equal( matcher.match('at.*er', 'atelier' ), true );
		} );
	} );

	describe('RegexMatchAsterisk3Fail', function () {
		it("should return false when passed 'at.*er' and 'ateliers'", function () {
			assert.equal( matcher.match('at.*er', 'ateliers' ), false );
		} );
	} );


} );
