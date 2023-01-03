function solution(s) {
  let result = s;
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  arr.forEach((element, index) => {
    if (result.includes(element)) {
      result = result.replaceAll(element, index);
    }
  });
  return parseInt(+result);
}
