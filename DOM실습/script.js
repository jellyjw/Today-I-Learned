// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

const elInputUsername = document.querySelector("#username");
const elSuccessMessage = document.querySelector(".success-message");
const elFailureMessage = document.querySelector(".failure-message");
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-retype");
const elMissmatchMessage = document.querySelector(".mismatch-message");
const clickMessage = document.querySelector(".clickBtn");
const mainDiv = document.querySelector(".main-div");

function isMoreThan4Length(value) {
  return value.length < 4;
}

function isMatch(password1, password2) {
  return password1 === password2 ? true : false;
}

elInputUsername.onkeyup = () => {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
  } else {
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  }
};

password2.onkeyup = () => {
  console.log(password2.value);
  if (!isMatch(password1.value, password2.value)) {
    elMissmatchMessage.classList.remove("hide");
  } else {
    elMissmatchMessage.classList.add("hide");
  }
};

let isCliked = false;

clickMessage.addEventListener("click", () => {
  isCliked = !isCliked;
  if (isCliked) {
    mainDiv.style.display = "flex";
    clickMessage.classList.remove("animation");
  } else {
    mainDiv.style.display = "none";
    clickMessage.classList.add("animation");
  }
});
