// 1. 수를 입력받아 0부터 해당 수까지의 합을 리턴

function sum(num) {
    let userInput = 0;
    for (let i = 0; i <= num; i++) {
        userInput = userInput + i;
    }
    return userInput;
}
let result = sum(4);
console.log(result);
//결과값 10


//2. 밑(base)과 지수(exponent)를 입력받아 밑의 거듭제곱 리턴

function computePower(base, exponent) {
    let result = 0;
    for (let i = base; i <= exponent; i++) {
        result = base ** exponent;
    }
    return result;
}

computePower(2, 3);
//결과값 8


// 3. 1~25까지 출력하는데 5의 배수마다 줄간격
for (let i = 1; i < 26; i++) {
    if (i % 5 === 0 + 1) {
        document.write('<br>');
    };
    document.write(i + ' ');
};

//결과값 1 2 3 4 5 ~ 21 22 23 24 25 (5 배수마다 줄간격)


//4. 25~1까지 출력
for (let i = 25; i > 0; i--) {
    if (i % 5 === 0) {
        document.write('<br>');
    };
    document.write(i + ' ');
}
// 결과값 25 24 23 22 21 ~ 5 4 3 2 1

