import { useEffect, useState } from 'react'

import './App.scss';

import Home from './page/Home';

import SelectTheme from './components/SelectTheme';

import { useTheme } from "./context/ThemeContext";
import { useWeather } from "./context/WeatherContext";

import Autumn from './assets/images/autumn.png'
import Spring from './assets/images/spring.png'
import Summer from './assets/images/summer.png'
import Winter from './assets/images/winter.png'

const initialBackground = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0,0.5))`
}

function App() {
  const { theme } = useTheme();
  const { weathers } = useWeather();

  const [backGroundImg, setBackGroundImg] = useState(initialBackground);

  const defileBackgroundImage = (img) => {
    if (theme === 'light') {
      return {
        backgroundImage: `url("${img}"`
      }
    }

    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0,0.5)), url("${img}")`
    }
  }

  const calculateBackgroundImage = (temp) => {
    let img = '';

    if (temp > 20) {
      img = defileBackgroundImage(Summer)
    } else if (temp > 15 && temp <= 20) {
      img = defileBackgroundImage(Spring)
    } else if (temp > 5 && temp <= 15) {
      img = defileBackgroundImage(Autumn)
    } else {
      img = defileBackgroundImage(Winter)
    }

    setBackGroundImg(img);
  }

  useEffect(() => {
    if (weathers.length > 0) {
      calculateBackgroundImage(Math.round(weathers[0].main.temp));
    }
  }, [weathers, theme])

  return (
    <div className={`app -${theme}`} style={backGroundImg}>
      <Home />
      <SelectTheme />
    </div>
  );
}

export default App;
