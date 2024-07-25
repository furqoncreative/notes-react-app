import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";

function NotesAppMain() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </main>
    )
}

export default NotesAppMain;