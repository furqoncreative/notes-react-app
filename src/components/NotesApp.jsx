import NotesAppHeader from "./NotesAppHeader.jsx";
import NotesAppBody from "./NotesAppBody.jsx";

function NotesApp() {
    return (
        <div className="notes-app">
            <NotesAppHeader/>
            <NotesAppBody/>
        </div>
    )
}

export default NotesApp;