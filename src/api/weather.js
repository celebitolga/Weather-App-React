import axios from "axios";

// https://api.openweathermap.org/data/2.5/forecast?q=karabuk&cnt=7&units=metric&appid=acf40df44174463c5f86e6bbed71b023&lang=tr

export const getWeather = async (city) => {
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