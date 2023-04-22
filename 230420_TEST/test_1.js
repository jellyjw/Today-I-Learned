/**
 * 1번부터 n까지의 숫자 배열이 있다.
 * 두개의 연속된 숫자는 항상 같이 이동해야 하고, 랜덤하게 재배열을 해야한다.
 * n이 홀수인 경우 마지막 숫자는 연속된 숫자를 방해하지 않으면서 랜덤한 위치를 가진다.
 */

// arr를 랜덤으로 정렬해주는 함수
function randomArr(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function solution(n) {
  let arr = [];
  let result = [];

  // 1부터 n까지의 배열 생성
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  // 2개씩 잘라서 배열에 push
  for (let j = 0; j < arr.length; j += 2) {
    result.push(arr.slice(j, j + 2));
  }

  const resultArr = [].concat(...randomArr(result));
  return resultArr;
}

console.log(solution(8)); // [3,4,7,8,5,6,1,2]
console.log(solution(9)); // [5,6,7,8,3,4,9,1,2]
console.log(solution(9)); // [3,4,9,7,8,5,6,1,2]
console.log(solution(10)); // [3,4,9,7,8,5,6,1,2]
console.log(solution(11)); // [3,4,9,7,8,5,6,1,2]
console.log(solution(13)); // [3,4,9,7,8,5,6,1,2]
