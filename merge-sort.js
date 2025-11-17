function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2); // floor is just for clarity, slice can handle floats
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // append leftover items
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([])); // []
console.log(mergeSort([73])); // [73]
console.log(mergeSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
