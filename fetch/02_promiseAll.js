// const newsURL = "http://localhost:4999/data/latestNews";
// const weatherURL = "http://localhost:4999/data/weather";

function getNewsAndWeatherAll() {
  let fetchData = [fetch(newsURL), fetch(weatherURL)];
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all(fetchData)
    .then((les) => {
      const jsonParse = les.map((el) => el.json()); //[json, json]
      return Promise.all(jsonParse);
    })
    .then((jsonParse) => {
      // const news = jsonParse[0].data;
      // const weather = jsonParse[1];
      return { news: jsonParse[0].data, weather: jsonParse[1] };
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}

// var newsURL = "http://localhost:5000/data/latestNews";
// var weatherURL = "http://localhost:5000/data/weather";

// function getNewsAndWeatherAll() {
//   return Promise.all([fetch(newsURL), fetch(weatherURL)])
//     .then(([newsResponse, weatherResponse]) => {
//       return Promise.all([newsResponse.json(), weatherResponse.json()]);
//     })
//     .then(([news, weather]) => {
//       return {
//         news: news.data,
//         weather: weather,
//       };
//     });
// }

// getNewsAndWeatherAll();

// if (typeof window === "undefined") {
//   module.exports = {
//     getNewsAndWeatherAll,
//   };
// }
