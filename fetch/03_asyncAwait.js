async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  const news1 = await fetch(newsURL).then((les) => les.json());
  const weather1 = await fetch(weatherURL).then((les) => les.json());
  return { news: news1.data, weather: weather1 };
}
if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}

axios.get(newsURL);
