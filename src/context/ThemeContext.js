import { useEffect, useState, useContext, createContext } from "react";

import { localStorageGetItem, localStorageSetItem } from "../localStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorageGetItem("theme") || "light");

  useEffect(() => {
    localStorageSetItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
