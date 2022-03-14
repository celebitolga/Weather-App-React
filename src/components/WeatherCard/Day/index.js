import { memo } from "react";

function Day({
  loading,
  weather,
  showingWeatherOption,
  setShowingWeatherOption,
  calculateTemp,
}) {
  
  const getDateTime = (date) => {
    return new Date(date).toLocaleTimeString("tr", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="weather-day__skeleton">
        <div className="weather-day__skeleton-time"></div>
        <div className="weather-day__skeleton-img"></div>
        <div className="weather-day__skeleton-temp"></div>
      </div>
    );
  }

  return (
    <div
      className={`weather-day ${
        weather.dt_txt === showingWeatherOption.dt_txt ? "-selected" : ""
      }`}
      onClick={() => setShowingWeatherOption(weather)}
    >
      <h4>{getDateTime(weather.dt_txt)}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
      />
      <h4>{calculateTemp(Math.round(weather.main.temp))}</h4>
    </div>
  );
}

export default memo(Day);
