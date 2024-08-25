import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlinePlusCircle } from "react-icons/hi2";
import PropTypes from "prop-types";
import { HiOutlineLogout } from "react-icons/hi";
import ToggleTheme from "./ToggleTheme.jsx";
import ToggleLocale from "./ToggleLocale.jsx";

function NotesAppHeader({ authedUser, logout }) {
  return (
    <header className="header-container">
      <h1 className="header-title">
        <Link className="header-title" to="/">
          ReactNote
        </Link>
      </h1>
      {authedUser != null && (
        <nav className="navigation">
          <ul>
            <li>
              <Link className="nav-item" to="/">
                <HiOutlineHome />
              </Link>
            </li>
            <li>
              <Link className="nav-item" to={"/add-note"}>
                <HiOutlinePlusCircle />
              </Link>
            </li>
            <li>
              <ToggleLocale />
            </li>
            <li>
              <ToggleTheme />
            </li>
            <li>
              <button className="nav-item" onClick={logout}>
                {authedUser.name} <HiOutlineLogout />
              </button>
            </li>
          </ul>
        </nav>
      )}
      {authedUser == null && (
        <nav className="navigation">
          <ul>
            <li>
              <ToggleLocale />
            </li>
            <li>
              <ToggleTheme />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

NotesAppHeader.propTypes = {
  authedUser: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default NotesAppHeader;
