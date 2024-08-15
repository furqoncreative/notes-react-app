import NoteInput from "../components/NoteInput.jsx";
import { useNavigate } from "react-router-dom";
import { addNotes } from "../utils/api.js";

function AddNotePage() {
  const navigate = useNavigate();

  function onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    addNotes(newNote).then(() => navigate("/"));
  }

  return <NoteInput addNote={onAddNoteHandler} />;
}

export default AddNotePage;
