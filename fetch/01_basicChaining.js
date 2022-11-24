const newsURL = "http://localhost:4999/data/latestNews";
const weatherURL = "http://localhost:4999/data/weather";

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  return fetch(newsURL)
    .then((res) => res.json())
    .then((news1) => {
      return fetch(weatherURL)
        .then((res) => res.json())
        .then((weather1) => {
          return {
            news: news1.data,
            weather: weather1,
          };
        });
      ``;
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeather,
  };
}

// const news = new Promise((resolve, reject) => {
//   resolve(
//     fetch(newsURL)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err))
//   );
// });

// const weather = new Promise((resolve, reject) => {
//   resolve(
//     fetch(weatherURL)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err))
//   );
// });

// return JSON.parse`{${news}, ${weather}}`;
