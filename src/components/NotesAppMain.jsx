import { Route, Routes } from "react-router-dom";
import AddNotePage from "../pages/AddNotePage.jsx";
import HomePage from "../pages/HomePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import NotFound404Page from "../pages/NotFound404Page.jsx";
import PropTypes from "prop-types";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

function NotesAppMain({ authedUser, onLoginSuccess, onRegisterSuccess }) {
  if (authedUser == null) {
    return (
      <main>
        <Routes>
          <Route
            path="/*"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
          <Route
            path="/register"
            element={<RegisterPage onRegisterSuccess={onRegisterSuccess} />}
          />
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
  onLoginSuccess: PropTypes.func.isRequired,
  onRegisterSuccess: PropTypes.func.isRequired,
};

export default NotesAppMain;
