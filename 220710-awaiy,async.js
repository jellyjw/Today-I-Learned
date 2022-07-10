// 예제
const PlusAfter3Seconds = (a, b) => {
  return new Promise((resolve, reject) => {
    if (!a || !b) reject(new Error("a 또는 b 가 없습니다."));

    setTimeout(() => {
      resolve(a + b);
    }, 3000);
  });
};

const Main = async () => {
  PlusAfter3Seconds(5, 10).then((result) => console.log(result));

  console.log(await PlusAfter3Seconds(5, 10));

  // 13줄과 15줄이 같은 동작을 한다.
};

Main();

// async은 function앞에 위치
// 해당 함수는 항상 promise를 반환
