import { useEffect, useState, useContext, createContext } from "react";

import { localStorageGetItem, localStorageSetItem } from "../localStorage";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(
    JSON.parse(localStorageGetItem("selectedCity")) || {
      label: "Adana",
      value: "adana",
    }
  );

  const [degree, setDegree] = useState(
    localStorageGetItem("degree") || "celsius"
  );

  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    localStorageSetItem("degree", degree);
  }, [degree]);

  useEffect(() => {
    localStorageSetItem("selectedCity", JSON.stringify(selectedCity));
  }, [selectedCity]);

  const values = {
    selectedCity,
    setSelectedCity,
    degree,
    setDegree,
    weathers,
    setWeathers,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
