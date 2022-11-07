// 두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가해야 합니다.

function extend(obj1, obj2) {
  // 리턴문 작성 금지
  // 두번째 객체의 객체를 첫번째 객체에 추가
  // 키가 중복될 경우 기존값 그대로 두기
  // 두번째 객체 수정 금지

  for (let i in obj2) {
    if (i in obj1 === false) {
      obj1[i] = obj2[i];
    }
  }
}

// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소가 제거된 새로운 배열을 리턴해야 합니다.

function getAllButLastElementOfProperty(obj, key) {
  // 키에 해당하는 값이 배열일 경우
  // 마지막 요소 제거된 새로운 배열 리턴 : slice 이용
  let arr = [];

  if (Array.isArray(obj[key]) === true) {
    arr = obj[key].slice(0, -1);
  }
  return arr;
}

// 배열과 수를 입력받아 수가 가리키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴해야 합니다.

function getValueOfNthElement(arr, num) {
  // 첫번째 매개변수 arr는 [{name: jiwoo}, {age: 18}] 이런 형태
  // 수가 가리키는 인덱스에 해당하는 객체의 'name'값에 접근 : arr[num]['name'] 또는 arr[num].name
  // 배열의 범위를 벗어나는 인덱스일 경우 : arr.length <= num
  // 마지막 객체의 'name' 속성값 : arr[arr.length - 1]['name']
  // arr.length < num === arr[arr.length-1]['name']

  if (arr.length === 0) {
    return "no name";
  }
  if (arr.length <= num) {
    return arr[arr.length - 1]["name"];
  } else {
    return arr[num]["name"];
  }
}
