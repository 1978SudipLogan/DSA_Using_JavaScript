const str = "abciiidef";
const k = 3;

type returnType = string | number[] | number;

function maximumVowels(str: string, k: number): returnType {
  if (str.length === 0) return "String is empty";
  let left = 0,
    count = 0,
    maxV = 0;

  for (let right = 0; right < str.length; right++) {
    if ("aeiou".includes(str[right])) {
      count++;
    }
    if (right - left + 1 === k) {
      maxV = Math.max(maxV, count);
      if ("aeiou".includes(str[left])) count--;
      left++;
    }
  }

  return maxV;
}

const result: returnType = maximumVowels(str, k);
console.log(result);
export {};
