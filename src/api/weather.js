import axios from "axios";

export const getWeather = async (city) => {
  /*
    Gelen şehir bilgisine göre backende istek atıyoruz
  */
  const { data } = await axios.get("forecast", {
    params: {
      q: city || "istanbul",
      cnt: 7,
      units: "metric",
      lang: "tr",
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });

  return data;
};