import NoteInput from "../components/NoteInput.jsx";
import { useNavigate } from "react-router-dom";
import { addNotes } from "../utils/api.js";
import { useState } from "react";

function AddNotePage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  function onAddNoteHandler({ title, body }) {
    setLoading(true);
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    addNotes(newNote)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding note:", error);
        setLoading(false);
      });
  }

  return <NoteInput addNote={onAddNoteHandler} isLoading={isLoading} />;
}

export default AddNotePage;
