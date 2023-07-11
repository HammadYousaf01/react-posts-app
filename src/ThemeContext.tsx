import React, { useState, useContext } from "react";

export const ThemeContext = React.createContext("dark");
export const ThemeToggleContext =
  React.createContext<React.MouseEventHandler | null>(null!);

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const defaultTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(defaultTheme);

  const handleOnClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggleContext.Provider value={handleOnClick}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
