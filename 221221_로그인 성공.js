// 아이디와 비밀번호 모두 일치하면 login
// 아이디가 일치하는 회원이 없으면 fail
// 아이디만 일치하고 비밀번호는 일치하지 않으면 wrong pw

// function solution(id_pw, db) {
//   for (let i = 0; i < db.length; i++) {
//     if (db[i] === id_pw) {
//       return "login";
//     } else if (db[i][0] === id_pw[0] && db[i][1] !== id_pw[1]) {
//       return "wrong pw";
//     } else {
//       return "fail";
//     }
//   }
// }

function solution(id_pw, db) {
  let filterId = db.filter((x) => id_pw[0] === x[0]);
  if (filterId.length === 0) return "fail";
  for (let el of filterId) {
    if (el[1] === id_pw[1]) return "login";
    else {
      return "wrong pw";
    }
  }
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
