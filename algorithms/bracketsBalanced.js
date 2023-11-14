function areBracketsBalanced(str) {
  const stack = [];
  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (bracketPairs[char]) {
      // If the character is an opening bracket, push it onto the stack
      stack.push(char);
    } else {
      // If the character is a closing bracket
      const lastBracket = stack.pop();

      // Check if the corresponding opening bracket is on top of the stack
      if (bracketPairs[lastBracket] !== char) {
        return false; // Brackets are not balanced
      }
    }
  }

  // Check if there are any remaining brackets in the stack
  return stack.length === 0;
}

// Example usage:
// const testString = "{[()]}";
// const result = areBracketsBalanced(testString);
