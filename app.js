const age = prompt("how old are you?");

console.log(isNaN(age));
//스트링인지 아닌지를 파악해주는 함수

// ture || true === true
// false || true === true
// true || false === true
// false || false === false
// true && true === true
// false && true === false
// true && false === false



if (isNaN(age) || age < 0) {
    console.log("please write a real positive number");
} else if (age < 18) {
    console.log("you are too young");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if ((age > 80)) {
    console.log("you can do whatever you want.");
} else {
    console.log("you can't drink");
}

// 모든 값이 false일 때 else값이 실행된다.

// &&은 and, ||은 or


<span></span>
// 보통 글자를 묶을때 사용

<div></div>
// 무언가를 묶을때 사용, 한줄 전체 사용