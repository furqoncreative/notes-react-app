import NotesAppHeader from "./NotesAppHeader.jsx";
import NotesAppMain from "./NotesAppMain.jsx";
import { useEffect, useState } from "react";
import { getUserLogged, putAccessToken } from "../utils/api.js";

function NotesApp() {
  const [authedUser, setAuthedUser] = useState(null);

  async function fetchAndSetAuthedUser() {
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  useEffect(() => {
    fetchAndSetAuthedUser();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    await fetchAndSetAuthedUser(); // Update authedUser after login
  }

  return (
    <div className="notes-app">
      <NotesAppHeader authedUser={authedUser} />
      <NotesAppMain authedUser={authedUser} onLoginSuccess={onLoginSuccess} />
    </div>
  );
}

export default NotesApp;
