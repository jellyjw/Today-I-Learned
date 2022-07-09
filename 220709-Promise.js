//1. promise

//비동기 작업을 편하게 할 수 있도록 도입된 기능
//콜백함수를 대체하여 코드의 깊이가 깊어지는 현상 방지

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

myPromise.then((n) => {
  console.log(n);
});

// resolve 호출할때 특정 값을 파라미터로 넣어주면, 이 값을 작업이 끝나고 나서 사용할 수 있다.

//작업 후 또 다른 작업을 해야 할 때에는 Promise 뒤에 .then을 붙이면 된다.
