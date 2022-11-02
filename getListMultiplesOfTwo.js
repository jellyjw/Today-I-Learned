const { range } = require("range"); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  let result = [];
  for (let i = 2; i <= upTo; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

module.exports = getListMultiplesOfTwo;
