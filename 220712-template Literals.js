//템플릿 리터럴
let product = "coke";
let price = 5000;
let qty = 5;

//템플릿 리터럴 (백틱 ``)을 사용하면, +로 문자열을 이어주지 않고도 출력이 가능하다.

console.log(`hello, you bought 5 ${qty} ${product}. total is ${price * qty}`);

//백틱은 작은 따옴표랑 다르다는 것을 명심
// 계산, 메서드 호출 모두 가능하다.
