const arr: number[] = [2, 1, 5, 1, 3, 2],
  k: number = 3;

type returnType = string | number[];

function minimumSubarray(arr: number[], k: number): returnType {
  if (arr.length === 0) return "Array is empty";
  let left = 0,
    windowSum = 0,
    minSum = Infinity,
    start = 0;
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];
    if (right - left + 1 === k) {
      const currentSum = Math.min(minSum, windowSum);
      if (minSum > currentSum) {
        minSum = currentSum;
        start = left;
      }
      windowSum -= arr[left];
      left++;
    }
  }
  return arr.slice(start, start + k);
}

const result: returnType = minimumSubarray(arr, k);
console.log(result);
export {};
