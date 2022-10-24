// 특정 달(month)을 입력받아 각 달에 몇 일이 있는지 리턴해야 합니다.
// 예외처리를 이용할 것.

function daysInMonth(month) {
  // TODO: 여기에 코드를 작성합니다.
  if (1 <= month && 12 >= month) {
    if (month === 2) {
      return 28;
    } else if (month === 4 && month === 6 && month === 9 && month === 11) {
      return 30;
    } else {
      return 31;
    }
  }
}

// 점수를 입력받아 점수에 해당하는 등급을 리턴..

function plusOrMinus(score) {
  const extra = score % 10;
  if (extra <= 2) {
    return "-";
  } else if (extra >= 8) {
    return "+";
  } else {
    return "";
  }
}

function convertScoreToGradeWithPlusAndMinus(score) {
  let grade;
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }
  if (score === 100) {
    return "A+";
  }
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else if (score >= 0) {
    grade = "F";
  }

  if (grade !== "F") {
    grade = grade + plusOrMinus(score);
  }
  return grade;
}
