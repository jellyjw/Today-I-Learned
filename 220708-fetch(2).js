fetch("https://jsonplaceholder.typicode.com/posts", { method: "get" })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const postLists = document.getElementById("postLists");
    const html2 = data
      .map(
        (item) =>
          `<li>${item.userId}, ${item.id}번, ${item.title},| 완료 여부 : ${body} </li>`
      )
      .join("");
    postLists.innerHTML = html2;
  });
