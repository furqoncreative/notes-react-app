import {Link} from "react-router-dom";

function NotesAppHeader() {
    return (
        <header className="header-container">
            <h1 className="header-title">Notes App</h1>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add-note">Add Note</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NotesAppHeader;