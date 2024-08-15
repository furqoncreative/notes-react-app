import React from "react";
import LocaleContext from "../contexts/LocaleContext.js";
import { HiLanguage } from "react-icons/hi2";

function ToggleTheme() {
  const { toggleLocale } = React.useContext(LocaleContext);

  return (
    <button
      className="nav-item toggle-theme"
      type="button"
      onClick={toggleLocale}
    >
      {<HiLanguage />}
    </button>
  );
}

export default ToggleTheme;
