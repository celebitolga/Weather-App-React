import { useEffect, useState } from "react";

import "./App.scss";

import Home from "./page/Home";

import { useTheme } from "./context/ThemeContext";
import { useWeather } from "./context/WeatherContext";

import Autumn from "./assets/images/autumn.png";
import Spring from "./assets/images/spring.png";
import Summer from "./assets/images/summer.png";
import Winter from "./assets/images/winter.png";

const initialBackground = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0,0.5))`,
};

function App() {
  const { theme } = useTheme();
  const { weathers } = useWeather();

  const [backGroundImg, setBackGroundImg] = useState(initialBackground);

  const defileBackgroundImage = (img) => {
    /*
      style içerisine backgroundImage koyulacak içeriği belirliyoruz
      Eğer theme light değilse (dark ise), arka planı hafif karartıyoruz
    */
    
    if (theme === "light") {
      return `url("${img}"`;
    }

    return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0,0.5)), url("${img}")`
  };

  const calculateBackgroundImage = (temp) => {
    /*
      Fonksiyona gelen temp (Celcius) derecesine göre arka plan fotoğrafını belirliyoruz
    */
    let img = "";

    if (temp > 20) {
      img = defileBackgroundImage(Summer);
    } else if (temp > 15 && temp <= 20) {
      img = defileBackgroundImage(Spring);
    } else if (temp > 5 && temp <= 15) {
      img = defileBackgroundImage(Autumn);
    } else {
      img = defileBackgroundImage(Winter);
    }

    setBackGroundImg(img);
  };

  useEffect(() => {
    /*
      Apiye istek atılıp weathers değiştiği anda veya theme değiştiği anda 
      background fotoğrafını belirliyoruz
    */
    if (weathers.length > 0) {
      calculateBackgroundImage(Math.round(weathers[0].main.temp));
    }
  }, [weathers, theme]);

  return (
    <div className={`app -${theme}`} style={{ backgroundImage: backGroundImg }}>
      <Home />
    </div>
  );
}

export default App;
