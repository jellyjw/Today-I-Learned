fetch("https://jsonplaceholder.typicode.com/posts", { method: "get" })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const postLists = document.getElementById("postLists");
    const html2 = data
      .map(
        (item) =>
          `<li>userid : ${item.userId} | id : ${item.id}번 | title : ${item.title}, | body : ${item.body}</li>`
      )
      .join("");
    postLists.innerHTML = html2;
  });
