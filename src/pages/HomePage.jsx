import React from "react";
import NotesSearch from "../components/NotesSearch.jsx";
import NotesList from "../components/NotesList.jsx";
import {getInitialData} from "../utils/index.js";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            originalNotes: getInitialData(),
        };

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes, originalNotes: notes});
    }

    onArchiveNoteHandler(id) {
        this.setState((prevState) => {
            const notes = prevState.notes.map(note =>
                note.id === id ? {...note, archived: !note.archived} : note
            );
            return {notes, originalNotes: notes};
        });
    }

    onSearchNotesHandler({keyword}) {
        this.setState((prevState) => {
            if (keyword.trim() === '') {
                return {notes: prevState.originalNotes};
            } else {
                const notes = prevState.originalNotes.filter((note) =>
                    note.title.toLowerCase().includes(keyword.toLowerCase())
                );
                return {notes};
            }
        });
    }

    render() {
        return (
            <>
                <section className="notes-section">
                    <NotesSearch searchNotes={this.onSearchNotesHandler}/>
                    <NotesList notes={this.state.notes} onDelete={this.onDeleteNoteHandler}
                               onArchive={this.onArchiveNoteHandler}/>
                </section>
            </>
        )
    }
}

export default HomePage;