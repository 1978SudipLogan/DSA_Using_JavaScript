/**
 * ============================================================
 * Problem: Maximum Average Subarray of Size K
 * ============================================================
 *
 * Given an array of integers and an integer k, find the
 * maximum average value among all contiguous subarrays
 * of size k.
 *
 * Example:
 *
 * Input:
 * arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
 * k = 5
 *
 * Output:
 * 4.0
 *
 * Explanation:
 *
 * Window 1: [1, 3, 2, 6, -1]
 * Sum = 11
 * Average = 11 / 5 = 2.2
 *
 * Window 2: [3, 2, 6, -1, 4]
 * Sum = 14
 * Average = 14 / 5 = 2.8
 *
 * Window 3: [2, 6, -1, 4, 1]
 * Sum = 12
 * Average = 12 / 5 = 2.4
 *
 * Window 4: [6, -1, 4, 1, 8]
 * Sum = 18
 * Average = 18 / 5 = 3.6
 *
 * Window 5: [-1, 4, 1, 8, 2]
 * Sum = 14
 * Average = 14 / 5 = 2.8
 *
 * Maximum Average = 3.6
 *
 * ============================================================
 * Pattern: Fixed Sliding Window
 * ============================================================
 *
 * Approach:
 *
 * 1. Calculate the sum of the first window of size k.
 * 2. Calculate its average.
 * 3. Move the window one position at a time.
 * 4. Remove the element leaving the window.
 * 5. Add the new element entering the window.
 * 6. Calculate the new average.
 * 7. Keep track of the maximum average.
 *
 * Instead of recalculating the sum for every window,
 * we reuse the previous window's sum.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * ============================================================
 */

const arr: number[] = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k: number = 5;

type ReturnType = number | string;

function maximumAverage(arr: number[], k: number): ReturnType {
    if (arr.length === 0)
        return "Array is empty";

    let windowSum = 0;

    // Calculate the sum of the first window of size k
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    // Calculate the average of the first window
    let maxSum = windowSum / k;

    // Start sliding the window
    for (let x = k; x < arr.length; x++) {

        // Remove the element going out of the window
        // and add the new element entering the window
        windowSum = windowSum - arr[x - k] + arr[x];

        // Calculate the average of the current window
        // and update the maximum average
        maxSum = Math.max(maxSum, windowSum / k);
    }

    return maxSum;
}

const result: ReturnType = maximumAverage(arr, k);

console.log(result);

export {};