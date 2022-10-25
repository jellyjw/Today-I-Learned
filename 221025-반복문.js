//수를 입력받아 1을 포함한 num개의 홀수로 구성된 문자열 리턴
function makeOddDigits(num) {
  let n = 0;
  let result = "";
  let i = 1;

  while (n < num) {
    result = result + String(i);
    i = i + 2;
    n++;
  }
  return result;
}

// 수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열 리턴
function makeMultiples(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      result += i;
    }
  }
  return result;
}

// 두 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴
// 반복문 사용, num1이 num2보다 작지 않을 수 있다.
// 0은 2의 배수가 아니라고 가정
function makeMultiples2(num1, num2) {
  let count = 0;
  let start = num1;
  let end = num2;

  if (num1 > num2) {
    start = num2;
    end = num1;
  }

  if (start === 0) {
    start = 1;
  }

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      count += 1;
    }
  }

  return count;
}

//
