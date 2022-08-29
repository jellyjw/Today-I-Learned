// forEach

const number = [1, 2, 3, 4, 5, 6, 7, 8];

number.forEach((element) => console.log(element)); // 1~8까지 출력

// for...of

const string = ["a", "b", "c", "d", "e", "f", "g"];

for (let ele of string) {
  console.log(ele); // a부터 g까지 출력
}

//요즘은 for...of를 더 많이 사용.
