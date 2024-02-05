function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Already sorted if the array has one element or none
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Merge the sorted halves
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays and merge them
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left and right arrays
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = mergeSort(unsortedArray);
