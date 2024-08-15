import NotesAppHeader from "./components/NotesAppHeader.jsx";
import NotesAppMain from "./components/NotesAppMain.jsx";
import { useEffect, useMemo, useState } from "react";
import { getUserLogged, putAccessToken } from "./utils/api.js";
import { useNavigate } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext.js";
import LocaleContext from "./contexts/LocaleContext.js";

function NotesApp() {
  const navigate = useNavigate();

  const [authedUser, setAuthedUser] = useState(null);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );
  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") || "id",
  );

  async function fetchAndSetAuthedUser() {
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  useEffect(() => {
    fetchAndSetAuthedUser().catch(() => {
      console.log("Error fetching user");
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  const localeContextValue = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale],
  );

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    await fetchAndSetAuthedUser();
  }

  async function onRegisterSuccess() {
    navigate("/login");
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className={`notes-app ${theme}`}>
          <NotesAppHeader authedUser={authedUser} logout={onLogout} />
          <NotesAppMain
            authedUser={authedUser}
            onLoginSuccess={onLoginSuccess}
            onRegisterSuccess={onRegisterSuccess}
          />
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default NotesApp;
