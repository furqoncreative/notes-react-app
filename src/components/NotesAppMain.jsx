import {Route, Routes} from "react-router-dom";
import AddNotePage from "../pages/AddNotePage.jsx";
import HomePageWrapper from "../pages/HomePage.jsx";

function NotesAppMain() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePageWrapper/>}/>
                <Route path="/add-note" element={<AddNotePage/>}/>
            </Routes>
        </main>
    )
}

export default NotesAppMain;