// // Z가 나오면 바로 전에 더했던 숫자를 빼야 함
// function solution(s) {
//   let a = s.split(" ").filter((el) => el !== "Z").map((x) => Number(x))
//   return a.reduce((acc, cur) => acc + cur);
// }

function solution(s) {
  let a = s.split(" ");
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== "Z" && a[i + 1] !== "Z") {
      result += Number(a[i]);
    }
  }
  return result;
}

// function solution(s) {
//   let arr = s.split(" ");
//   let a = arr.indexOf("Z") - 1; // Z 이전 인덱스
//   if (arr.includes("Z")) {
//     arr.splice(arr.indexOf("Z"), 1);
//     arr.splice(a, 1);
//     return arr.map((x) => Number(x)).reduce((acc, cur) => acc + cur);
//   } else {
//     // Z가 아예 포함되어있지 않은 경우
//     return arr.map((x) => Number(x)).reduce((acc, cur) => acc + cur);
//   }
// }

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
