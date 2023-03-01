import { useState, useMemo, FC } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";



interface ThemeProviderProps {
  initialTheme?: Theme;
}

// Если Локал Стореж пустой то по дефоулту он будет брать LIGTH
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const  ThemeProvider:FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme
  }  = props
  const [theme, setThem] = useState<Theme>(initialTheme || defaultTheme);

 

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
