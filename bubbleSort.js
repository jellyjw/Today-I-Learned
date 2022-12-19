// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴
// 1. 첫 번째 요소가 두 번째 요소보다 크면 두 요소의 위치를 바꾼다.(swap)
// 1. 두 번째 요소가 세 번째 요소보다 크면 두 요소의 위치를 바꾼다.(swap)
// 3. 1,2를 마지막까지 반복(마지막에서 두번째 요소와 마지막 요소를 비교
// 4. 1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려난다.
// 5. 1~3의 과정을 첫 요소부터 다시 반복
// 6. 5를 통해 두번째로 큰 요소가 배열의 마지막 바로 두번째로 밀려난다.
// 7. 1~3의 과정을 총 n번(배열의 크기) 반복한다.

const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 몇번 비교를 할 것인가를 정하는 for문(i)
    let count = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 교체하는 for문(j)
      // 이미 비교한 횟수는 제외해야하니까, length - 1 - i 를 해줘야 한다.
      // i에 따라서 반복 횟수가 정해진다. (i-1)만큼 반복되어야 한다.
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        count++;
      }
    }
    if (count === 0) {
      break;
    }
  }
  return arr;
};

//   let temp = 0;
//   if (arr[i] > arr[i + 1]) {
//     temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//     // [arr[i], arr[i+1]] = [arr[i+1], arr[i]] << 14~16번째 줄을 이 한줄로 쓸 수 있다.(구조분해할당)

let output = bubbleSort([2, 1, 3]);
console.log(output); // --> [1, 2, 3]
