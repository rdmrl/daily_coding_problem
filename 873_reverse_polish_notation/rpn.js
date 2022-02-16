/**
 * =====
 Given an arithmetic expression in Reverse Polish Notation, write a 
 program to evaluate it.

 The expression is given as a list of numbers and operands. 
 For example: [5, 3, '+'] should return 5 + 3 = 8.

 For example, [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'] 
 should return 5, since it is equivalent to ((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1)) = 5.

 You can assume the given expression is always valid.
 * =====
 */

let performOperation = function( o1, o2, oper ) {
  let result = 0;
  switch ( oper ) {
    case '+':
      result = o2 + o1;
      break;

    case '-':
      result = o2 - o1;
      break;

    case '*':
      result = o2 * o1;
      break;

    case '/':
      result = o2 / o1;
      break;
  }

  return result;
};

module.exports = {
  evaluate: function( inputArr ) {

    // The list of the supported operators.
    const operatorsArr = [ '+', '-', '/', '*' ];

    // Store the operands as the input array is processed.
    let operands = [];

    for ( let ix = 0; ix < inputArr.length; ix++ ) {
      let elem = inputArr[ ix ];

      // Check if this element is an operator...
      if ( operatorsArr.includes( elem ) ) {
        // Get the last two operands from the stack.
        let lastOperand = operands.pop();
        let secondLastOperand = operands.pop();

        // Perform the operation to obtain the result and...
        let result = performOperation( lastOperand, secondLastOperand, elem );

        // ...add it to the operands stack for use with the next operation.
        operands.push( result );
      } else {
        // ...or an operand.
        // If an operand, add it to the operands list.
        operands.push( elem );
      }
    } // for

    // At the end, there should be only one operand remaining in the stack.
    // Return it as the result of the entire expression.
    return operands.pop();
  }
};
