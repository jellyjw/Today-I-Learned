function solution(numlist, n) {
  // 요소 - n 을 절대값으로 바꿈
  //   let newArr = [...numlist].map((el) => Math.abs(el - n));
  return numlist.sort((a, b) => {
    if (0 > Math.abs(a - n) - Math.abs(b - n)) return -1;
    else if (0 < Math.abs(a - n) - Math.abs(b - n)) return 1;
    else return b - a;
    // b - a 의 결과 => 더 큰수가 있을시엔 바꾸지 않는다
  });
}

// sort의 리턴값이 양수일때는 a와 b 위치 변경
// sort의 리턴값이 음수일때는 그대로

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
