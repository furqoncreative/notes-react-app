import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import NotesList from "../components/NotesList.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getArchivedNotes,
  getNotes,
  unarchiveNote,
} from "../utils/api.js";

function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  async function updateNotes() {
    const [notesResponse, archivedNotesResponse] = await Promise.all([
      getNotes(),
      getArchivedNotes(),
    ]);

    setNotes(notesResponse.data);
    setArchivedNotes(archivedNotesResponse.data);
  }

  useEffect(() => {
    updateNotes().catch(() => {
      console.log("Error fetching notes");
    });
  }, []);

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);

    await updateNotes();
  }

  async function onArchiveNoteHandler(id) {
    await archiveNote(id);

    await updateNotes();
  }

  async function onUnarchiveNoteHandler(id) {
    await unarchiveNote(id);

    await updateNotes();
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

  const filteredArchivedNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="notes-section">
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList
        notes={filteredNotes}
        archivedNotes={filteredArchivedNotes}
        onDelete={onDeleteNoteHandler}
        onArchive={onArchiveNoteHandler}
        onUnarchive={onUnarchiveNoteHandler}
        showDetail={onShowDetailHandler}
      />
    </section>
  );
}

export default HomePage;
