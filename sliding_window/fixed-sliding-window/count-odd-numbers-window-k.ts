const arr: number[] = [2, 3, 4, 5, 6, 7, 8],
  k = 3;
type returnType = string | number[];

function oddNumbers(arr: number[], k: number): returnType {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let left = 0,
    result: number[] = [],
    count = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] % 2 !== 0) count++;
    if (right - left + 1 === k) {
      result.push(count);
      if (arr[left] % 2 !== 0) count--;
      left++;
    }
  }

  return result;
}

const result: returnType = oddNumbers(arr, k);
console.log(result);

export {};
