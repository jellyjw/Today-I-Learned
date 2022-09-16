// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

const solution = (n) => {
  let answer = 0;
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i]);
  }
  return answer;
};

solution(123); // 6
solution(987); // 24
