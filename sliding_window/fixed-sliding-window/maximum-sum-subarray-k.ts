const arr: number[] = [2, 1, 5, 1, 3, 2],
  k: number = 3;

type returnType = string | number[] | number;

function maxmimumSubarray(arr: number[], k: number): returnType {
  if (arr.length === 0) return "array is empty";
  let left = 0,
    maxSum = -Infinity,
    windowSum = 0;
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];
    let windowSize = right - left + 1;

    if (windowSize === k) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[left];
      left++;
    }
  }
  return maxSum;
}

const result: returnType = maxmimumSubarray(arr, k);
console.log(result);
export {};
