// addEventListener(type, listener);

// type : 수신할 이벤트 유형을 나타내는 대소문자 구분 문자열
// listener : 지정한 이벤를 수신할 객체

let modifyText = () => {
  let t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
};

//표에 이벤트 수신기 추가

const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
