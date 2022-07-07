// 7. concat
// 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
// 기존배열 변경 x, 추가된 새로운 배열을 반환한다.

const array1 = number3.concat(number4);

console.log(array1);

//결과값은 number3+number4인
// [20, 30, 40, 10, 20, 30, 40] 이다.

// 8. join
// 배열의 모든 요소를 연결해 하나의 문자열로 만듬
const a = ["사랑", "질투", "이기심"];

const myConst1 = a.join();
// 사랑, 질투, 이기심
const myConst2 = a.join(",");
// 사랑, 질투, 이기심
const myConst3 = a.join("+");
// 사랑+질투+이기심
const myConst4 = a.join("");
// 사랑질투이기심

// 9. reduce
// 배열의 각 요소에 주어진 리듀서 함수를 실행하고, 하나의 결과값 반환
// 매개변수 callback : totalValue(반환값), currentValue(배열 내 처리되는 요소), currentIndex(현재 배열내 처리되고 있는 요소의 인덱스), array(reduce 호출에 사용되는 원 배열)
// 디폴트 값 : intialValue
// 보통 모든 요소를 합할때 쓰임

let arr = [10, 20, 30, 40];
let sum = arr.reduce((total, val, idx, arr) => total + val, 0);

console.log(sum);
// 결과값 100
