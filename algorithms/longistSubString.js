function longestUniqueSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    let currentChar = str[end];

    if (charIndexMap[currentChar] !== undefined) {
      // If the character is already in the substring, update the start index
      start = Math.max(charIndexMap[currentChar] + 1, start);
    }

    // Update the index of the current character
    charIndexMap[currentChar] = end;

    // Update the maximum length if needed
    maxLength = Math.max(maxLength, end - start + 1);
  }

  // Extract the longest unique substring
  const longestSubstring = str.slice(start, start + maxLength);

  return longestSubstring;
}
