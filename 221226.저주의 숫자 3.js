function solution(n) {
  let result = [];
  for (let i = 1; ; i++) {
    if (String(i).includes("3") || i % 3 === 0) {
      continue;
    } else {
      result.push(i);
    }
    if (result.length === n) break;
  }
  return result[result.length - 1];
}

console.log(solution(15));
console.log(solution(40));
