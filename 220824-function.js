//1. 배열 값 모두 더하기
const sumArray = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

sumArray([1, 2, 3]); // 6
sumArray([2, 2, 2, 2]); // 8
sumArray([50, 50, 1]); // 101

//2. string 앞글자만 대문자로 출력하기
const capitalize = (str) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

capitalize("eggplant"); // Eggplant
capitalize("pamplemousse"); // Pamplemoussse
capitalize("squid"); // Squid

//3. 배멸의 마지막 인덱스만 출력하기
const lastElement = (array) => {
  if (array.length !== 0) {
    return array[array.length - 1];
  } else {
    return null;
  }
};

lastElement([3, 5, 7]); // 7
lastElement([1]); // 1
lastElement([]); // null
