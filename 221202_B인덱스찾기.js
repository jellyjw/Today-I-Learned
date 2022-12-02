function findBugInApples(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("B")) {
      newArr.push(i);
    }
  }
  newArr.push(arr[newArr[0]].indexOf("B"));
  return newArr;
}

output = findBugInApples([
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
]);
console.log(output); //[1, 1]
