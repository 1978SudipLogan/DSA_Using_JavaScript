const arr: number[] = [2, 1, 5, 1, 3, 2],
  k: number = 3;

type returnType = string | number[];

function maxmimumSubarray(arr: number[], k: number): returnType {
  if (arr.length === 0) return "Array is empty";
  let left = 0,
    windowSum = 0,
    maxSum = -Infinity,
    start = 0;
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];
    if (right - left + 1 === k) {
      const currentSum = Math.max(maxSum, windowSum);
      if (maxSum < currentSum) {
        maxSum = currentSum;
        start = left;
      }
      windowSum -= arr[left];
      left++;
    }
  }
  return arr.slice(start, start + k);
}

const result: returnType = maxmimumSubarray(arr, k);
console.log(result);
export {};
