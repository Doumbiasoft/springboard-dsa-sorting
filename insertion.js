function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      // Store the current element to be compared
      let currentElement = arr[i];
      let j = i - 1;
  
      // Compare the current element with elements to its left
      // and move them to the right if they are greater than the current element
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the current element in its correct position
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }

module.exports = insertionSort;