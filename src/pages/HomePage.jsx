import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import NotesList from "../components/NotesList.jsx";
import { useNavigate } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getArchivedNotes,
  getNotes,
  unarchiveNote,
} from "../utils/api.js";
import { ClipLoader } from "react-spinners";
import useSearch from "../hooks/useSearch.js";

function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [keyword, onKeywordChangeHandler] = useSearch("keyword");

  async function updateNotes() {
    await Promise.all([getNotes().then(), getArchivedNotes()]).then(
      ([notesResponse, archivedNotesResponse]) => {
        setNotes(notesResponse.data);
        setArchivedNotes(archivedNotesResponse.data);
        setLoading(false);
      },
    );
  }

  useEffect(() => {
    setLoading(true);
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
      {isLoading ? (
        <ClipLoader loading={isLoading} size={50} />
      ) : (
        <NotesList
          notes={filteredNotes}
          archivedNotes={filteredArchivedNotes}
          onDelete={onDeleteNoteHandler}
          onArchive={onArchiveNoteHandler}
          onUnarchive={onUnarchiveNoteHandler}
          showDetail={onShowDetailHandler}
        />
      )}
    </section>
  );
}

export default HomePage;
