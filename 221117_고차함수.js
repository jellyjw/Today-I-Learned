// 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.
// 남학생들의 정보는 리턴하는 배열에서 제외합니다.
// 'grades' 속성값은 평균값(number 타입)으로 바꿉니다.

function studentReports(students) {
  // 남학생 제외, 'grades' 속성값은 평균값
  // 남학생 제외 filter
  // map 안에 reduce
  const onlyFemale = students.filter((ele) => ele.gender === "female");
  return onlyFemale.map(function (ele) {
    let avr =
      ele.grades.reduce(function (acc, cur) {
        return acc + cur;
      }) / ele.grades.length;
    ele.grades = avr;
    return ele;
  });
}
