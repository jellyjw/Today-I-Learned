function solution(arr) {
  let obj = {};
  for (let el of arr) {
    if (obj[el] === undefined) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }
  let sortedArr = Object.entries(obj)
    .map((el) => el[1])
    .sort((a, b) => b - a);
  if (sortedArr[0] === sortedArr[1]) return -1;
  else {
    return +Object.keys(obj).find((key) => obj[key] === sortedArr[0]);
  }
}

console.log(solution([1, 2, 3, 3, 3, 4]));
