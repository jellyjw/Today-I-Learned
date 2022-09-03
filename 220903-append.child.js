// appendchild
function appendNode() {
  const parent = document.getElementById("list"); // 아이디가 "list"인 요소를 선택함.
  const newItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택함.
  parent.appendChild(newItem); // 해당 요소의 맨 마지막 자식 노드로 추가함.
}
