import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Theme.css';

const ThemeSet = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    window.alert("We are Logging out..!\nHave a nice day😊");
    navigate("/");
  };

  return (
    <>
      {/* Logout Button - Top Left */}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>

      {/* Theme Switcher - Top Right */}
      <div className="theme">
        <b>Theme:</b> 
        <button className="light-btn" onClick={() => setTheme("light")}>Light</button> 
        <b>/</b>
        <button className="dark-btn" onClick={() => setTheme("dark")}>Dark</button>
      </div>
    </>
  );
};

export default ThemeSet;
