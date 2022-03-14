import { memo } from "react";
import WeatherCard from "../../components/WeatherCard";

import './index.scss';

function Home() {
  return (
    <div className="home">
      <WeatherCard />
    </div>
  );
}

export default memo(Home);
