import NotesAppHeader from "./NotesAppHeader.jsx";
import NotesAppMain from "./NotesAppMain.jsx";

function NotesApp() {
    return (
        <div className="notes-app">
            <NotesAppHeader/>
            <NotesAppMain/>
        </div>
    )
}

export default NotesApp;