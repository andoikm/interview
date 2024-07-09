//https://www.youtube.com/watch?v=kzPUYPfzT9A
const longestSubString = (string) => {
  let left = 0;
  let right = 0;
  let answer = 0;
  
  const set = new Set();
  
  while (right < string.length) {
    const char = string[right];
    
    if (!set.has(char)) {
      set.add(char);
      answer = Math.max(answer, right - left + 1);
      right++;
    } else {
      while (set.has(char)) {
        set.delete(string[left]);
        left++;
      }
    }
  }
  
  return answer;
};

//longestSubString("abcda")
