import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface useThemeRusult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme(): useThemeRusult {
    const { theme, setThem } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setThem(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    };


    return {theme, toggleTheme}
}