import NotesAppHeader from "./NotesAppHeader.jsx";
import NotesAppMain from "./NotesAppMain.jsx";
import { useEffect, useState } from "react";
import { getUserLogged } from "../utils/api.js";

function NotesApp() {
  const [authedUser, setAuthedUser] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    })();
  }, []);

  return (
    <div className="notes-app">
      <NotesAppHeader authedUser={authedUser} />
      <NotesAppMain authedUser={authedUser} />
    </div>
  );
}

export default NotesApp;
