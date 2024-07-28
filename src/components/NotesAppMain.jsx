import {Route, Routes} from "react-router-dom";
import AddNotePage from "../pages/AddNotePage.jsx";
import HomePageWrapper from "../pages/HomePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";

function NotesAppMain() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePageWrapper/>}/>
                <Route path="/add-note" element={<AddNotePage/>}/>
                <Route path="/notes/:id" element={<DetailPage/>}/>
            </Routes>
        </main>
    )
}

export default NotesAppMain;