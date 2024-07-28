import NoteInput from "../components/NoteInput.jsx";
import {useNavigate} from "react-router-dom";
import {addNote} from "../utils/data.js";

function AddNotePage() {
    const navigate = useNavigate();

    function onAddNoteHandler({title, body}) {
        const newNote = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
        };
        addNote(newNote)
        navigate('/');
    }

    return (
        <NoteInput addNote={onAddNoteHandler}/>
    )
}

export default AddNotePage;