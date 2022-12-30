function solution(denum1, num1, denum2, num2) {
  //   분자와 분모의 공약수중에 가장 큰걸로 나눈다.
  const denum = denum2 * num1 + denum1 * num2; // 결과분자
  const num = num1 * num2;
  let result = 1;
  for (let i = 2; i <= Math.min(denum, num); i++) {
    if (denum % i === 0 && num % i === 0) {
      result = i;
    }
  }
  return [denum / result, num / result];
}

console.log(solution(1, 2, 3, 4));
