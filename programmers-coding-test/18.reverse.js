function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((x) => parseInt(x));
}

//n을 입력받아 문자열로 변환후 배열로 만들고 뒤집어서 정수로 만듬.
