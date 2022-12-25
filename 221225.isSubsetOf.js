// 두개의 배열을 입력받아 sample이 base의 부분집합인지 여부를 리턴

const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 0; i < base.length; i++) {
    if (base.includes(sample[i])) {
      return true;
    }
    return false;
  }
};
