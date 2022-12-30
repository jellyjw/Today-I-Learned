function solution(common) {
  if (common[2] - common[1] === common[1] - common[0]) {
    return common[1] - common[0] + common[common.length - 1];
  } else {
    return (common[1] / common[0]) * common[common.length - 1];
  }
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
console.log(solution([4, 5, 6, 7])); // 16
