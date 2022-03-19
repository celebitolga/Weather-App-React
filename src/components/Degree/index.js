import { memo } from "react";

import { useTheme } from "../../context/ThemeContext";
import { useWeather } from "../../context/WeatherContext";

import './index.scss';

function Degree() {
  const { theme } = useTheme();
  const { degree, setDegree } = useWeather();

  const handleClick = () => {
    /*
      Derece seçimine tıklandığı zaman ilgili dereyi güncelliyoruz
    */
    setDegree(degree === "celsius" ? "kelvin" : "celsius");
  };

  return (
    <div className="degree">
      <button className={`degree__button -${theme}`} onClick={handleClick}>
        <span className={`${degree === 'celsius' ? '-celsius' : '-kelvin'}`}>
          {degree === 'celsius' ? '℃' : 'K'}
        </span>
      </button>
    </div>
  );
}

export default memo(Degree);
