import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlinePlusCircle } from "react-icons/hi2";

function NotesAppHeader() {
  return (
    <header className="header-container">
      <h1 className="header-title">
        <Link className="header-title" to="/">
          Notes App
        </Link>
      </h1>
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
        </ul>
      </nav>
    </header>
  );
}

export default NotesAppHeader;
