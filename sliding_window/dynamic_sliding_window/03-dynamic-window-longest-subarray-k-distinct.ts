const arr: number[] = [1, 2, 1, 2, 3];
const k: number = 2;

type ReturnType = number[] | string;

function longestDistinctSubarray(arr: number[], k: number): ReturnType {
  if (arr.length === 0) {
    return "Array doesn't exist";
  }

  // Stores each element and its frequency in the current window
  const map = new Map<number, number>();

  let left = 0;
  let start = 0;
  let maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    // Expand the window by adding the current element
    map.set(arr[right], (map.get(arr[right]) ?? 0) + 1);

    // Shrink the window if distinct elements exceed k
    while (map.size > k) {
      const leftElement = arr[left];

      // Decrease the frequency of the left element
      map.set(leftElement, map.get(leftElement)! - 1);

      // Remove the element if its frequency becomes 0
      if (map.get(leftElement) === 0) {
        map.delete(leftElement);
      }

      left++;
    }

    // Calculate the current valid window length
    const currentLen = right - left + 1;

    // Update the longest window found so far
    if (currentLen > maxLen) {
      maxLen = currentLen;
      start = left;
    }
  }

  // Return the longest valid subarray
  return arr.slice(start, start + maxLen);
}

const result: ReturnType = longestDistinctSubarray(arr, k);

console.log(result);

export {};
