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

class ParseTree {
	constructor(regexp) {
	  this.regexp = regexp;
		this.hasPeriod = false;
		this.hasAsterisk = false;
		this.prefixArr = [];
		this.suffixArr = [];
	}

  addSuffix(c) {
	  this.suffixArr.push(c);
	}

  addPrefix(c) {
	  this.prefixArr.push(c);
	}

	onlyHasPeriod() {
		return (this.hasPeriod) && !(this.hasAsterisk);
	}

	onlyHasAsterisk() {
		return !(this.hasPeriod) && (this.hasAsterisk);
	}

	hasSuffix() {
	  return ( this.suffixArr.length > 0 );
	}

	getSuffix() {
		return this.suffixArr.join('');
	}

	hasPrefix() {
	  return ( this.prefixArr.length > 0 );
	}

	getPrefix() {
		return this.prefixArr.join('');
	}
}

let buildParser = function(regexp) {

	let parser = new ParseTree(regexp);

	// Loop through the characters.
  for ( let c of regexp ) {
		if ( c === '.' ) {
			parser.hasPeriod = true;
		} else if ( c === '*' ) {
			parser.hasAsterisk = true;
		} else {
			if ( parser.hasPeriod || parser.hasAsterisk ) {
				parser.addSuffix( c );
			} else {
				parser.addPrefix( c );
			}
		}
	}

	// console.log( 'parser: ', parser );

	return parser;
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

		console.log( inputString );
		let parser = getParser(regexp);

		// Case A: regex has only a period
		// Case B: regex has only an asterisk
		// Case C: regex has both patterns

		// console.log( 'hasOnlyPeriod: ' + parser.onlyHasPeriod() + ', hasOnlyAsterisk: ' + parser.onlyHasAsterisk() );
		// console.log( 'hasSuffix: ' + parser.hasSuffix() + ', hasPrefix: ' + parser.hasPrefix() );

		// 1. xyz.  
		// 2. .zyx  
		// 3. xy.z
		const prefixStr = parser.getPrefix();
		const suffixStr = parser.getSuffix();

		if ( parser.onlyHasPeriod() ) {
			if ( parser.hasPrefix() ) {
				if ( ! parser.hasSuffix() ) {
					// Case A.1
					console.log( 'Case A.1' );
					if ( inputString.indexOf( prefixStr ) === 0 ) {
						if ( ( prefixStr.length + 1 ) === inputString.length ) {
							return true;
						}
					}
				} else {
					// Case A.3
					console.log( 'Case A.3' );
					if ( inputString.indexOf( prefixStr ) === 0 ) {
						if ( inputString.indexOf( suffixStr ) === ( prefixStr.length + 1 ) ) {
							if ( ( prefixStr.length + suffixStr.length + 1 ) === inputString.length ) { 
								return true;
							}
						}
					}
				}
			} else {
				// Case A.2
				console.log ( 'Case A.2' );
				if ( inputString.indexOf( suffixStr ) === 1 ) {
					if ( (suffixStr.length + 1 ) === inputString.length ) {
						return true;
					}
				}
			}
		}

		return false;
	}
};

