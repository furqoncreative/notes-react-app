import NotesAppHeader from "./NotesAppHeader.jsx";
import NotesAppMain from "./NotesAppMain.jsx";
import { useEffect, useState } from "react";
import { getUserLogged, putAccessToken } from "../utils/api.js";
import { useNavigate } from "react-router-dom";

function NotesApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const navigate = useNavigate();

  async function fetchAndSetAuthedUser() {
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  useEffect(() => {
    fetchAndSetAuthedUser().catch(() => {
      console.log("Error fetching user");
    });
  }, [authedUser]);

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
    <div className="notes-app">
      <NotesAppHeader authedUser={authedUser} logout={onLogout} />
      <NotesAppMain
        authedUser={authedUser}
        onLoginSuccess={onLoginSuccess}
        onRegisterSuccess={onRegisterSuccess}
      />
    </div>
  );
}

export default NotesApp;
