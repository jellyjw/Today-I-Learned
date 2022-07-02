// 중첩 for문 이용한 구구단
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         document.write(`${i} X ${j} = ${i * j}`);
//         document.write('<br>');
//     }
// }

// while 이용해서 구구단 출력
let i = 2
while (i < 10) {
    let j = 1
    while (j < 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j = j + 1;
    }
    i = i + 1;
}

// for~of 배열의 모든 요소를 출력하는것
const fruits = ['apple', 'banana', 'mango'];

for (const i of fruits) {
    console.log(i);
}

// for~in 객체 안에 key들을 순회하는 반복문
const dog = {
    name: '상구',
    age: 5,
    color: 'orange'
};

for (const j in dog) {
    console.log(dog[j]);
};


// continue
// for (let i = 2; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     for (let j = 1; j < 10; j++) {
//         document.write(`${i} X ${j} = ${i * j}`);
//         document.write('<br>');
//     }
// }

//break 이용해서 x5까지만 출력
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        if (j === 6) {
            break;
        }
        document.write(`${i} X ${j} = ${i * j}`);
        document.write('<br>');
    }
}