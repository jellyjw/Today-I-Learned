// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.
function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열로 쪼갠뒤 [4,5,4,7,9,3]
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (Number(str[i]) % 2 === 1 && Number(str[i + 1] % 2 === 1)) {
      result += "-";
    }
  }
  return result;
}
