//배열내장함수 알아보기
// 1. find
// findIndex와 비슷하지만 findIndex는 찾아낸 값이 몇번째에 있는지 알아내는 반면,
// find는 찾아낸 값 자체를 반환한다.

const todos = [
    {
        id: 1,
        text: '자바스크립트 반복문 공부',
        done: true
    },
    {
        id: 2,
        text: '자바스크립트 함수 공부',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 공부',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const todo = todos.find(todo => todo.id === 2);
console.log(todo);
// 결과값 {id: 2, text: '자바스크립트 함수 공부', done: true}

// 2. filter
// 배열에서 특정 조건을 만족하는 값들만 따로 추출해서 새로운 배열 생성

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);
// 결과값 [{ id: 4, text: '배열 내장함수 배우기', done: false }];
//todo => todo.done === false 는 todo => !todo.done 으로도 작성 가능


// 3. splice
// 배열에서 특정 항목을 제거할 때 사용

const numbers = [1, 3, 5, 7, 9];
const index = numbers.indexOf(5);
numbers.splice(index, 1);
// 결과값 [1,3,7,9]

// 4. slice
// 배열을 잘라낼때 사용하는데 기존의 배열은 건드리지 않는다는 것이 중요
// 첫번째 파라미터는 어디서부터 자를지, 두번째 파라미터는 어디까지 자를지를 의미
const sliced = numbers.slice(0, 2);
console.log(sliced);
// 결과값 [1,3]

// 5. shipt와 pop
// shipt는 배열에서 첫번째 요소를 제거, 제거된 요소를 반환한다.
// 배열의 길이를 변하게 한다.
const numbers2 = [10, 20, 30, 40, 50];
const firstElement = numbers2.shift();
console.log(numbers2)
// 결과값 [20,30,40,50]

console.log(firstElement);
// 결과값 10


// pop은 배열에서 마지막 요소를 제거, 그 값을 반환한다.

const number3 = [20, 30, 40, 50];
const finalElement = number3.pop();

console.log(number3);
// 결과값 [20, 30, 40]

console.log(finalElement);
// 결과값 50


// 6. unshift
// 배열의 시작점에 주어진 값을 삽입.
// 새로운 요소를 배열의 맨 앞쪽에 추가

const number4 = [10, 20, 30, 40];
const unshiftNumber = number4.unshift(90);

console.log(number4);
// 결과값 [90, 10, 20, 30, 40]

// shift는 배열 맨 앞의 값 삭제하는 것.

number4.shift();

console.log(number4);
// 결과값 [10, 20, 30, 40]



// 7. concat
// 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
// 기존배열 변경 x, 추가된 새로운 배열을 반환한다.


const array1 = number3.concat(number4);

console.log(array1);

//결과값은 number3+number4인
// [20, 30, 40, 10, 20, 30, 40] 이다.