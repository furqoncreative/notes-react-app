import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AddNotePage from "../pages/AddNotePage.jsx";

function NotesAppMain() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/add-note" element={<AddNotePage/>}/>
            </Routes>
        </main>
    )
}

export default NotesAppMain;