// 최소값, 최대값을 받아 random Number를 추출하는 함수
const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min + 1) + min);
};

const getInputValue = () => {
  return document.querySelector("#num").value;
};

function addBox(n = Number(getInputValue())) {
  // 숫자가 아닐 경우
  if (isNaN(n)) {
    alert("숫자만 입력해주세요.");
    return;
  }

  const number = n;
  const boxHeight = [];
  const horizon = 5;
  const element = document.querySelector("#wrap");

  // 숫자 재입력시 기존 element들을 제거하고 다시 그림
  if (element.hasChildNodes()) {
    for (let i = 1; i <= horizon; i++) {
      element.removeChild(document.querySelector(`#wrap-${i}`));
    }
  }

  // 랜덤의 height 생성
  for (let i = 0; i < number; i++) {
    const height = `${randomNumber(100, 300)}px`;
    boxHeight.push(height);
  }

  // 5개의 섹션 생성
  for (let i = 0; i < horizon; i++) {
    const section = document.createElement("section");
    section.setAttribute("id", `wrap-${i + 1}`);
    element.appendChild(section);
  }

  boxHeight
    .map((height, index) => {
      const horizonIndex = (index % horizon) + 1;
      const container = document.querySelector(`#wrap-${horizonIndex}`);
      const element = document.createElement("div");
      element.setAttribute("class", "item");
      element.setAttribute("style", `height:${height}`);
      element.textContent = `${index + 1}`;
      container.appendChild(element);
    })
    .join("");
}
