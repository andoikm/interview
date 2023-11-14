function longestUniqueSubstring(s) {
  let start = 0;
  let maxLength = 0;
  let currentSubstring = "";

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[end];
    const charIndex = currentSubstring.indexOf(currentChar);

    if (charIndex !== -1) {
      // If the current character is repeated, move the start pointer
      start = start + charIndex + 1;
    }

    // Update the current substring
    currentSubstring = s.substring(start, i + 1);

    // Update the maximum length if needed
    maxLength = maxLength >= currentSubstring.length ? maxLength : currentSubstring.length;
  }

  return maxLength;
}
