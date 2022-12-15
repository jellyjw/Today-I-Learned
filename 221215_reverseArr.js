// 재귀함수 이용하여 순서가 뒤집힌 배열 리턴
function reverseArr(arr) {
  if (arr.length === 0) {
    return [];
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  return reverseArr(tail).concat(head);
}
