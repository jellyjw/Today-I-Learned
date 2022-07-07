fetch("https://jsonplaceholder.typicode.com/todos", { method: "GET" })
  .then(
    // fetch 함수를 실행시킨 결과가 result에 들어감
    // result 말고 다른 이름이어도 됨
    (result) => {
      return result.json();
    }
  )
  // 위에서 return 된 결과가 data에 들어감
  // data 말고 다른 이름이어도 됨
  .then((data) => {
    // id를 기준으로 내림차순 정렬
    data.sort((a, b) => b.id - a.id);
    // 데이터를 20개만 남김
    data.splice(20);
    const todoList = document.getElementById("todoList");
    // map과 join을 써서 html로 된 목록을 만들어 준다.
    const html = data
      .map(
        (item) =>
          `<li>${item.id}번. ${item.title} | 완료 여부: ${
            item.completed === true ? "O" : "X"
          }</li>`
      )
      .join("");
    // 만든 html을 리스트에 넣어준다
    todoList.innerHTML = html;
  });

// API 목록
// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/photos
