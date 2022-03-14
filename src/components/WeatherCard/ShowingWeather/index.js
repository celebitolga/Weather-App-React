import { useState, useEffect, memo } from "react";

function ShowingWeather({ loading, data, calculateTemp }) {
  const [weatherImage, setWeatherImage] = useState("");

  useEffect(() => {
    if (data && Object.keys(data).length !== 0) {
      setWeatherImage(
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
    }
  }, [data]);

  if (loading) {
    return (
      <div className="showing-weather__skeleton">
        <div className="showing-weather__skeleton-img"></div>
        <div className="showing-weather__skeleton-description"></div>
        <div className="showing-weather__skeleton-temp"></div>
        <div className="showing-weather__skeleton-feels"></div>
      </div>
    )
  }

  return (
    <div className="showing-weather">
      <img src={weatherImage} className="showing-weather__img" />
      <h3 className="showing-weather__description">{data.weather[0].description}</h3>
      <div className="showing-weather__temp">
        {calculateTemp(Math.round(data.main.temp))}
      </div>
      <h5 className="showing-weather__feels">
        Hissedilen: {calculateTemp(Math.round(data.main.feels_like))}
      </h5>
    </div>
  );
}

export default memo(ShowingWeather);
