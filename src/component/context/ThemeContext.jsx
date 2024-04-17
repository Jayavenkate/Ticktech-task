// ThemeContext.js
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const theme = {
        isDarkMode,
        toggleTheme,
        colors: {
            dark: '#222',
            light: '#fff',
        },
    };

    const appStyle = {
        backgroundColor: isDarkMode ? theme.colors.dark : theme.colors.light,
        color: isDarkMode ? '#fff' : '#000',
        minHeight: '100vh',
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div style={appStyle}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const UseTheme = () => {
    return useContext(ThemeContext);
};

export default ThemeContext;
