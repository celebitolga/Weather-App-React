import { memo } from "react";

import "./index.scss";

import LightSvg from "../../assets/icons/light.svg";
import DarkSvg from "../../assets/icons/dark.svg";

import { useTheme } from "../../context/ThemeContext";

function SelectTheme() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleClick} className="select-theme">
      {theme === "light" ? (
        <img src={DarkSvg} alt="dark" />
      ) : (
        <img src={LightSvg} alt="light" />
      )}
    </button>
  );
}

export default memo(SelectTheme);
