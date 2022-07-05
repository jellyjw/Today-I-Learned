//1. 1부터 100까지의 숫자 합을 for문 이용해서 구해보기

function sum(num) {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
        result = result + i;
    }
    return result;
}

console.log(sum(1));

// 결과값 5050


// 2. 1에서 100까지 숫자중 짝수의 합을 for문 이용해서 구해보기

function sum(num) {
    let resultNum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            resultNum = resultNum + i;
        };
    };
    return resultNum;
}

console.log(sum(1));

//결과값 2550