import { memo } from "react";
import SelectTheme from "../../components/SelectTheme";
import WeatherCard from "../../components/WeatherCard";

import './index.scss';

function Home() {
  return (
    <div className="home">
      <WeatherCard />
      <SelectTheme />
    </div>
  );
}

export default memo(Home);
