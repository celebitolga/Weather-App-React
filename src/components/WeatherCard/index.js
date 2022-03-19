import { memo, useEffect, useState } from "react";

import { useTheme } from "../../context/ThemeContext";
import { useWeather } from "../../context/WeatherContext";

import { getWeather } from "../../api/weather";

import { uid } from '../../uid';

import "./index.scss";

import SelectBox from "../SelectBox";
import ShowingWeather from "./ShowingWeather";
import Degree from "../Degree";
import Day from "./Day";


const cities = [
  {
    label: "Paris",
    value: "paris",
  },
  {
    label: "Mexico City",
    value: "mexico",
  },
  {
    label: "Adana",
    value: "adana",
  },
  {
    label: "Adıyaman",
    value: "adiyaman",
  },
  {
    label: "Afyon",
    value: "afyon",
  },
  {
    label: "Ağrı",
    value: "agri",
  },
  {
    label: "Amasya",
    value: "amasya",
  },
  {
    label: "Ankara",
    value: "ankara",
  },
  {
    label: "Antalya",
    value: "antalya",
  },
  {
    label: "Artvin",
    value: "artvin",
  },
  {
    label: "Karabük",
    value: "karabuk",
  },
];

function WeatherCard() {
  const { theme } = useTheme();
  const { selectedCity, setSelectedCity, degree, weathers, setWeathers } = useWeather();

  const [showingWeatherOption, setShowingWeatherOption] = useState(null);
  const [loading, setLoading] = useState(true);

  const calculateTemp = (temp) => {
    /*
      Sıcaklık birimine göre gösterilen sıcaklık bilgini ayarlıyoruz
    */
    if (degree === "celsius") {
      return `${temp} ℃`;
    }

    return `${temp + 273} K`;
  };

  const getWeatherFromAPI = async () => {
    /*
      Seçilmiş şehir için apiye istek atıyoruz,
      Gelen veriyi statelere vs. işliyoruz
    */
    const data = await getWeather(selectedCity.value);

    setWeathers(data.list);
    setShowingWeatherOption(data.list[0]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getWeatherFromAPI();
  }, [selectedCity]);

  return (
    <div className="weather-card">
      <div className={`weather-card__container -${theme}`}>
        <Degree />

        <div className="weather-card__cities">
          <SelectBox
            selected={selectedCity}
            setSelected={setSelectedCity}
            options={cities}
            placeHolder="Select a City"
          />
        </div>

        <div className="weather-card__showing-weather">
          <ShowingWeather
            loading={loading}
            data={showingWeatherOption}
            calculateTemp={calculateTemp}
          />
        </div>

        <div className="weather-card__days-holder">
          {weathers.map((weather) => (
            <Day
              loading={loading}
              weather={weather}
              showingWeatherOption={showingWeatherOption}
              setShowingWeatherOption={setShowingWeatherOption}
              calculateTemp={calculateTemp}
              key={uid()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(WeatherCard);
