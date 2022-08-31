//1. some/every 사용해서 모두 짝수인 배열만 true 출력
const allEvens = (array) => {
  return array.every((num) => {
    return num % 2 === 0;
  });
};
allEvens([2, 4, 6, 8]); // true
allEvens([1, 4, 6, 8]); // false
allEvens([1, 2, 3]); // false

//2. 전개 구문 사용해보기

const nums = [1, 2, 3, 5, 3234, 22, 131];

console.log(math.min(...nums)); // ...세개를 붙이면 배열의 각 인수들이 통과되어 최소값을 찾아준다.

const cats = ["coshot", "ruble"];
const pets = [...cats]; // cats 배멸을 복사한다.

const hello = ["hello"];
const hello2 = { ...hello }; // "h", "e", "l", "l", "o" 처럼 각각의 배열 요소로 전개해준다.

//3. REST 매개 변수

const number = (...nums) => {
  return nums.reduce((total, ele) => {
    return total + ele;
  });
};

console.log(number(2, 3, 4, 5, 314, 13, 4312)); // 파라미터의 nums 앞에 ... 세개를 붙이면 매개변수의 갯수에 상관없이 입력이 가능하다.

//4. 배열 분해

const scores = [1313, 4124, 12332, 554, 2111];

const [gold, silver] = scores; // scores배열의 순서대로 gold, silver의 값을 가지게 된다.

const [gold, silver, ...scores] = scores; // ...scores는 gold, sliver의 값을 제외한 나머지 모든 값을 포함한다.

//5. 객체 분해

const user1 = {
  name: "Jangjiwoo",
  age: 23,
  firstName: "jang",
  LastName: "jiwoo",
};

const { name, age, firstName } = user1;
