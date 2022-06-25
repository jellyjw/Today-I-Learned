//과일 목록 배열 만들어서 두번째꺼 출력해보기

const fruits = ['apple', 'banana', 'watermelon'];

console.log(fruits[1]);


//fruits 배열에 push 사용해서 과일 추가해보기

fruits.push('strawberry');

console.log(fruits);


//배열의 개수 출력

console.log(fruits.length);


//for문 이용해서 하나하나 출력해보기

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// for문 별찍기

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
        document.write('*');
    }
    document.write('<br>');
}


//배열에 5개 과목의 점수를 넣고 for문을 이용해서 점수의 합 구하기

const score = [20, 50, 30, 35, 40];
const sum = 0;

for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}

//시험점수 평균 구하기
const avg = sum / score.length;

console.log(avg);


