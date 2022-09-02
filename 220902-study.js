//1. for문으로 버튼 100개 생성후, div컨테이너로 감싸기(only js)

const div = document.createElement("div");
document.body.appendChild(div);
const container = document.querySelector("div");

let i = 0;
while (i < 100) {
  const newBtn = document.createElement("button");
  newBtn.innerText = "Hey!";
  container.appendChild(newBtn);
  i++;
}

//2. addEventListener 사용해서 console.log 출력
const btn1 = document.querySelector("#hello");
const btn2 = document.querySelector("#goodbye");

btn1.addEventListener("click", () => {
  console.log("hello");
});

btn2.addEventListener("click", () => {
  console.log("goodbye");
});
