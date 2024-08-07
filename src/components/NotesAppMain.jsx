import { Route, Routes } from "react-router-dom";
import AddNotePage from "../pages/AddNotePage.jsx";
import HomePage from "../pages/HomePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import NotFound404Page from "../pages/NotFound404Page.jsx";
import PropTypes from "prop-types";

function NotesAppMain({ authedUser }) {
  if (authedUser == null) {
    return (
      <main>
        <Routes>
          <Route path="/*" element={<p>Halaman Login</p>} />
          <Route path="/register" element={<p>Halaman Register</p>} />
        </Routes>
      </main>
    );
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-note" element={<AddNotePage />} />
        <Route path="/notes/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </main>
  );
}

NotesAppMain.propTypes = {
  authedUser: PropTypes.object,
};

export default NotesAppMain;
