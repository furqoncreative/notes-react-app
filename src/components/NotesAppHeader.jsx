import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlinePlusCircle } from "react-icons/hi2";
import PropTypes from "prop-types";
import { HiOutlineLogout } from "react-icons/hi";

function NotesAppHeader({ authedUser }) {
  return (
    <header className="header-container">
      <h1 className="header-title">
        <Link className="header-title" to="/">
          Notes App
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
              <Link className="nav-item" to="/add-note">
                <HiOutlinePlusCircle />
              </Link>
            </li>
            <li>
              <div className="logout-nav-item">
                <span className="nav-item">{authedUser.name}</span>
                <Link className="nav-item" to="/add-note">
                  <HiOutlineLogout />
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

NotesAppHeader.propTypes = {
  authedUser: PropTypes.object,
};

export default NotesAppHeader;
