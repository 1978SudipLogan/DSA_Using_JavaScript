const arr: number[] = [2, 3, 1, 2, 4, 3],
  k: number = 7;

type returnType = number[] | string;

function minimumSubarrayLength(arr: number[], k: number): returnType {
  let left = 0,
    sum = 0,
    start = 0;
  let minLen = Infinity;
  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];
    while (sum >= k) {
      let currentLen = r - left + 1;
      if (minLen > currentLen) {
        minLen = currentLen;
        start = left;
      }
      sum -= arr[left];
      left++;
    }
  }
  return arr.slice(start, start + minLen);
}

const result: returnType = minimumSubarrayLength(arr, k);
console.log(result);

export {};
