const menuItems = [
  { id: 1, name: "돌체라떼", price: 9000 },
  { id: 2, name: "돌체콜드브루", price: 8800 },
  { id: 3, name: "딸기요거트", price: 8000 },
  { id: 4, name: "아메리카노", price: 5300 },
  { id: 5, name: "에스프레소", price: 6000 },
  { id: 6, name: "자몽티", price: 7000 },
  { id: 7, name: "자바칩", price: 9900 },
  { id: 8, name: "카라멜마키야또", price: 9800 },
  { id: 9, name: "카페라떼", price: 8000 },
  { id: 10, name: "에스프레소", price: 6000 },
  { id: 11, name: "자몽티", price: 7000 },
  { id: 12, name: "자바칩", price: 9900 },
  { id: 13, name: "카라멜마키야또", price: 9800 },
  { id: 14, name: "카페라떼", price: 8000 },
  { id: 15, name: "카페라떼", price: 8000 },
];

const product = document.querySelector("#product");

menuItems.map((item) => {
  const div = document.createElement("div");
  div.setAttribute("class", "product-items");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", `./assets/menu/${item.name}.jpg`);
  productImg.setAttribute("alt", "product-image");
  productImg.setAttribute("class", "product-image");

  const productInfo = document.createElement("div");
  productInfo.textContent = `${item.name} ${item.price}원`;

  const productQuantity = document.createElement("select");
  productQuantity.setAttribute("id", `menu-${item.id}`);

  div.appendChild(productImg);
  div.appendChild(productInfo);
  div.appendChild(productQuantity);

  for (let i = 0; i <= 20; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", `${i}`);
    option.textContent = i;
    productQuantity.appendChild(option);
  }
  product.appendChild(div);
});

// 주문 로직
let orderCartList = []; // 주문하기 전 장바구니
let orderList = []; // 주문내역

function renderOrderList() {
  const tableBody = document.getElementById("table-body");
  orderList.map((el) => {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.textContent = el.name;
    const quantityTd = document.createElement("td");
    quantityTd.textContent = el.quantity;
    const totalPriceTd = document.createElement("td");
    totalPriceTd.textContent = el.price * el.quantity;
    const deleteTd = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.onclick = () => {
      orderList = orderList.filter((item) => item.id !== el.id);
      clearOrderList();
      renderOrderList();
      setTotalPrice();
    };
    deleteTd.append(deleteButton);

    tr.append(nameTd, quantityTd, totalPriceTd, deleteTd);
    tableBody.appendChild(tr);
  });
}
function setTotalPrice() {
  const totalPrice = document.getElementById("total-price");
  const price = orderList.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);
  totalPrice.setAttribute("value", price);
}

const handleOrderClick = () => {
  menuItems.map((el) => {
    const select = document.getElementById(`menu-${el.id}`);
    if (select.value > 0) {
      orderCartList.push({
        ...el,
        quantity: Number(select.value),
      });
    }
  });

  orderCartList.map((el) => {
    const exist = orderList.find((x) => x.id === el.id); // 이미 담겨있는 상품
    if (!exist) {
      orderList.push({ ...el });
    } else {
      exist.quantity += el.quantity;
    }
  });

  clearSelects(); // 모든 select value를 0으로
  orderCartList = [];

  setTotalPrice();
  clearOrderList();
  renderOrderList();
};

function clearOrderList() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
}

function clearSelects() {
  menuItems.map((el) => {
    const select = document.getElementById(`menu-${el.id}`);
    select.selectedIndex = 0;
  });
}

function clearTotalPrice() {
  const totalPrice = document.getElementById("total-price");
  totalPrice.value = 0;
}

function handleCancelClick() {
  allClear();
}

function allClear() {
  clearSelects();
  clearTotalPrice();
  clearOrderList();
  orderCartList = [];
  orderList = [];
}

function handleOrderCompleteClick() {
  alert("주문이 완료되었습니다.");
  allClear();
}
