function findFibonacciIndex(targetNumber) {
  let fibonacci = [0, 1];
  let index = 2;

  while (fibonacci[fibonacci.length - 1] < targetNumber) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
    index++;
  }

  if (fibonacci[fibonacci.length - 1] === targetNumber) {
    return index - 1; // Subtract 1 to get the zero-based index
  } else {
    return -1; // The target number is not in the Fibonacci sequence
  }
}
