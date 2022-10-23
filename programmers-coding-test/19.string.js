// string 타입을 리턴해야 합니다.
// 이름이 Adrian이고, 나이가 21살 이상이면, Welcome, Adrian! 을 리턴해야 합니다
// 이름이 John이고, 만일 21살보다 적으면, Go home, John!을 리턴해야 합니다.

function checkAge(name, age) {
  if (name === "Adrian" && age >= 21) {
    return "Welcome, Adrian!";
  } else if (name === "John" && age < 21) {
    return "Go home, John!";
  }
}

checkAge("Adrian", 22); //  "Welcome, Adrian!"
checkAge("John", 18); //  "Go home, John!"

// 단어를 입력받아 단어의 길이를 리턴해야 합니다.
// string 타입의 문자열
// word.length는 10 이하
// number 타입을 리턴해야 합니다.

function getLength(word) {
  if (typeof word === "string" && word.length <= 10) {
    return word.length;
  }
}
