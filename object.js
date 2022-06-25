//과일 객체 만들기
const Fruits = {
    red: 'apple',
    yellow: 'banana',
    green: 'watermelon',
    print: function print() {
        console.log(this.red, this.yellow, this.green);
    }
}

//비구조화 할당
//객체의 값을 꺼낼때 사용
const { red, yellow, green } = Fruits;

console.log(red, yellow, green);



// 이름, 나이, 직업을 입력받아서 자기소개하는 함수 만들기
function introduceMySelf(name, age, job) {
    console.log(`내 이름은 ${name}이고 나이는 ${age}살입니다. 직업은 ${job}입니다.`);
}

introduceMySelf('jangjiwoo', 26, '취준생');


//함수 파라미터 name, age, job을 객체로 입력받아보기.
function introduceMySelf2({ name, age, job }) {
    console.log(`내 이름은 ${name}이고 나이는 ${age}살입니다. 직업은 ${job}입니다.`);
}

const Me = { name: 'jangjiwoo', age: 26, job: '취준생' }

introduceMySelf2(Me);

//화살표 함수 만들어보기
const introduceMySelf3 = ({ name, age, job }) => {
    console.log(`내 이름은 ${name}이고 나이는 ${age}살입니다. 직업은 ${job}입니다.`);
}

const Me = { name: 'jangjiwoo', age: 26, job: '취준생' }
introduceMySelf3(Me);


