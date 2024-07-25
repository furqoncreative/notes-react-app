import NoteInput from "../components/NoteInput.jsx";
import React from "react";

class AddNotePage extends React.Component{
    constructor(props) {
        super(props);


        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            const newNote = {
                id: +new Date(),
                title,
                body,
                createdAt: new Date().toISOString(),
                archived: false,
            };
            const updatedNotes = [...prevState.notes, newNote];
            return {
                notes: updatedNotes,
                allNotes: updatedNotes,
            };
        });
    }

    render() {
        return (
            <NoteInput addNote={this.onAddNoteHandler}/>
        )
    }
}

export default AddNotePage;