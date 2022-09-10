//async, await 비동기 처리 패턴

function logname() {
  let user = fetchUser("naver.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}

//async, await 적용

async function logname() {
  let user = await fetchUser("naver.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}
