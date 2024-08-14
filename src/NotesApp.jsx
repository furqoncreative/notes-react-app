import NotesAppHeader from "./components/NotesAppHeader.jsx";
import NotesAppMain from "./components/NotesAppMain.jsx";
import { useEffect, useMemo, useState } from "react";
import { getUserLogged, putAccessToken } from "./utils/api.js";
import { useNavigate } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext.js";

function NotesApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  const navigate = useNavigate();

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

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
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
      <div className={`notes-app ${theme}`}>
        <NotesAppHeader authedUser={authedUser} logout={onLogout} />
        <NotesAppMain
          authedUser={authedUser}
          onLoginSuccess={onLoginSuccess}
          onRegisterSuccess={onRegisterSuccess}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default NotesApp;
