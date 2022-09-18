// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

const solution = (arr) => {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
};

solution(1, 2, 3, 4);
solution([5, 5]);

// 다른 답안(reduce)

const average = (arr) => {
  return arr.reduce((a, b) => a + b) / arr.length;
};

average([1, 2, 3, 4]);
average([5, 5]);
