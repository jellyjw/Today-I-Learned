//for 반복문 연습

const friends = ["jiwoo", "minji", "sara", "sera", "hyebeen"];

//for문 이용해서 전부 출력해보기 , 전무 대문자로 변환해서 출력

for (let i = 0; i <= friends.length; i++) {
  console.log(friends[i].toUpperCase());
}

//while 반복문 연습
let password = "jangjiwoo";
let guess = prompt("암호를 입력해주세요");

while (guess !== password) {
  guess = prompt("암호를 입력해주세요");
}
console.log("암호를 맞추셨습니다!");

//출력 : 암호를 맞추기 전까지 prompt 반복
