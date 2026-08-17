const arr = [1, 3, -1, -3, 5, 6, 1],
  k = 3;

type returnType = string | number[];

function findMax(arr: number[], start: number, end: number) {
  let max = 0;
  for (let i = start; i < end; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

function maximumElementSubarray(arr: number[], k: number): returnType {
  if (arr.length === 0) return "Array is empty";
  let left = 0,
    newArr: number[] = [],
    maxSum = -Infinity;
  for (let right = 0; right < arr.length - k + 1; right++) {
    const op = findMax(arr, right, right + k);
    newArr.push(op);
  }
  return newArr;
}

const result: returnType = maximumElementSubarray(arr, k);
console.log(result);
export {};
