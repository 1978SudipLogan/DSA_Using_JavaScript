/*
============================================================
Problem: Longest Subarray With Sum Less Than or Equal to K
============================================================

Given an array of positive integers and an integer K,
find the longest contiguous subarray whose sum is
less than or equal to K.

Example:

Input:
arr = [2, 1, 3,  2, 4, 5, 3]
k = 8

Output:
[2,1,3,2]

Explanation:
The sum of the longest valid subarray is <= 8.

Approach:
Dynamic / Variable Size Sliding Window

1. Expand the window using the right pointer.
2. Add the current element to the window sum.
3. If the sum becomes greater than K, shrink the window
   from the left.
4. Keep track of the maximum window length.
5. Return the longest valid subarray.

Time Complexity: O(n)
Space Complexity: O(1)

Note:
This sum-based sliding window approach works when the
array contains non-negative numbers.
============================================================
*/

const arr: number[] = [2, 1, 3, 1, 1, 1, 1, 1, 1, 2, 4, 5, 3];
const k: number = 8;

type returnType = number[] | string;

function longestSum(arr: number[], k: number): returnType {
  if (arr.length === 0) {
    return "Array doesn't exist";
  }

  let left = 0;
  let maxLen = 0;
  let start = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    // Expand the window
    sum += arr[right];

    // Shrink the window if sum becomes greater than k
    while (sum > k) {
      // Current valid window length

      sum -= arr[left];
      left++;
    }
    const currentLen = right - left + 1;

    // Update longest window
    if (currentLen > maxLen) {
      maxLen = currentLen;
      start = left;
    }
  }

  return arr.slice(start, start + maxLen);
}

const result: returnType = longestSum(arr, k);

console.log(result);

export{};