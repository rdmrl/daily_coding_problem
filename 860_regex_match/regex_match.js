/**
 * ======

 Implement regular expression matching with the following special characters:

  . (period) which matches any single character
  * (asterisk) which matches zero or more of the preceding element

 That is, implement a function that takes in a string and a valid regular 
 expression and returns whether or not the string matches the regular expression.

 For example, given the regular expression "ra." and the string "ray", your 
 function should return true. The same regular expression on the string "raymond" 
 should return false.

 Given the regular expression ".*at" and the string "chat", your function should 
 return true. The same regular expression on the string "chats" should return false.

 * ======
 */

let buildParser = function(regexp) {

	let prefix = [];
	let suffix = [];

	let foundPeriod = false;
	let foundAsterisk = false;

	// Loop through the characters.
  for ( let c of regexp ) {
		if ( c === '.' ) {
			foundPeriod = true;
		} else if ( c === '*' ) {
			foundAsterisk = true;
		} else {
			if ( foundPeriod || foundAsterisk ) {
				suffix.push( c );
			} else {
				prefix.push( c );
			}
		}
	}

	console.log( [prefix, suffix, foundPeriod, foundAsterisk] );

	return [prefix, suffix, foundPeriod, foundAsterisk];
};

let parsers = [];

let getParser = function(regexp) {

	if (!parsers[regexp]) {
		parsers[regexp] = buildParser(regexp);
	}
		
	return parsers[regexp];
};

module.exports = {
  match: function(regexp, inputString) {

		let parser = getParser(regexp);

		return false;
	}
};

