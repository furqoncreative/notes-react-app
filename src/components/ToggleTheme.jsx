import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function ToggleTheme() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button
      className="nav-item toggle-theme"
      type="button"
      onClick={toggleTheme}
    >
      {theme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  );
}

export default ToggleTheme;
