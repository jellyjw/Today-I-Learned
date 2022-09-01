//1. querySelector로 레인보우 문자열 출력
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const h1 = document.querySelectorAll("span");

h1.forEach((ele, i) => {
  ele.style.color = colors[i];
});

//2. classList toggle을 이용한 <li> highlight 클래스 변경

const li = document.querySelectorAll("li");

for (let i of li) {
  i.classList.toggle("highlight");
}
