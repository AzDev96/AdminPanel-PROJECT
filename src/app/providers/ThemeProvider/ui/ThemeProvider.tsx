import { useState, useMemo, FC } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

// Если Локал Стореж пустой то по дефоулту он будет брать LIGTH
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const  ThemeProvider:FC = ({children}) => {
  const [theme, setThem] = useState<Theme>(defaultTheme);

 

  const defaultProps = useMemo(() => ({
    theme: theme,
    setThem: setThem,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
