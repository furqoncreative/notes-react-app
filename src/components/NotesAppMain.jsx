import { Route, Routes } from "react-router-dom";
import AddNotePage from "../pages/AddNotePage.jsx";
import HomePageWrapper from "../pages/HomePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import NotFound404Page from "../pages/NotFound404Page.jsx";

function NotesAppMain() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/add-note" element={<AddNotePage />} />
        <Route path="/notes/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </main>
  );
}

export default NotesAppMain;
