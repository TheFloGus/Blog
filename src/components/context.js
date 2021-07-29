import React, { useState } from "react";

export const themeContext = React.createContext("");

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState({ theme: "" });

  const toggleTheme = () => {
    if (theme.theme === "") {
      setTheme({ theme: "black" });
    } else {
      setTheme({ theme: "" });
    }
  };

  return (
    <themeContext.Provider value={{ theme: theme.theme, toggle: toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
