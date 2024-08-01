import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import NotesList from "../components/NotesList.jsx";
import { archiveNote, deleteNote, getNotes } from "../utils/data.js";
import { useNavigate, useSearchParams } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  function onDeleteNoteHandler(id) {
    deleteNote(id);
    setNotes(getNotes);
  }

  function onArchiveNoteHandler(id) {
    archiveNote(id);
    setNotes(getNotes);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  function onShowDetailHandler(id) {
    navigate(`/notes/${id}`);
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="notes-section">
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList
        notes={filteredNotes}
        onDelete={onDeleteNoteHandler}
        onArchive={onArchiveNoteHandler}
        showDetail={onShowDetailHandler}
      />
    </section>
  );
}

export default HomePage;
