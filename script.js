const userTabBtn = document.getElementById("user-tab-btn");
const notUserTabBtn = document.getElementById("not-user-tab-btn");
const loginForm = document.getElementById("login-form");

const numberRegExp = /[^0-9]/g;
const emoRegExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input-phone").addEventListener("keyup", () => {
    const a = document.querySelector("#input-phone").value;
    const res = a.replace(numberRegExp, "");

    document.querySelector("#input-phone").value = res;
  });

  userTabBtn.addEventListener("click", () => {
    userTabBtn.classList.add("active");
    notUserTabBtn.classList.remove("active");
    document.querySelector("#member").style.display = "flex";
    document.querySelector("#none-member").style.display = "none";
    document.querySelector("#not-user-tab-btn").style.backgroundColor =
      "#e3e3e3";
    document.querySelector("#user-tab-btn").style.backgroundColor = "#ffffff";
  });

  notUserTabBtn.addEventListener("click", () => {
    userTabBtn.classList.remove("active");
    notUserTabBtn.classList.add("active");
    document.querySelector("#member").style.display = "none";
    document.querySelector("#none-member").style.display = "flex";
    document.querySelector("#user-tab-btn").style.backgroundColor = "#e3e3e3";
    document.querySelector("#not-user-tab-btn").style.backgroundColor =
      "#ffffff";
  });
});
