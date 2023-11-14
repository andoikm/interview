function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Already sorted if the array has one element or none
  }

  const pivot = arr[Math.floor(arr.length / 2)]; // Choose a pivot element
  const left = arr.filter(element => element < pivot); // Elements smaller than the pivot
  const middle = arr.filter(element => element === pivot); // Elements equal to the pivot
  const right = arr.filter(element => element > pivot); // Elements greater than the pivot

  return quickSort(left).concat(middle, quickSort(right)); // Recursively sort left and right parts
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = quickSort(unsortedArray);
