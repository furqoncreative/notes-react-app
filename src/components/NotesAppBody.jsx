import React from "react";
import NoteInput from "./NoteInput.jsx";
import NotesSearch from "./NotesSearch.jsx";
import NotesList from "./NotesList.jsx";
import {getInitialData} from "../utils/index.js";

class NotesAppBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            orginalNotes: getInitialData(),
        };

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes, allNotes: notes});
    }

    onArchiveNoteHandler(id) {
        this.setState((prevState) => {
            const notes = prevState.notes.map(note =>
                note.id === id ? {...note, archived: !note.archived} : note
            );
            return {notes, allNotes: notes};
        });
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

    onSearchNotesHandler({keyword}) {
        this.setState((prevState) => {
            if (keyword.trim() === '') {
                return {notes: prevState.allNotes};
            } else {
                const notes = prevState.allNotes.filter((note) =>
                    note.title.toLowerCase().includes(keyword.toLowerCase())
                );
                return {notes};
            }
        });
    }

    render() {
        return (
            <main>
                <NoteInput addNote={this.onAddNoteHandler}/>
                <section className="notes-section">
                    <NotesSearch searchNotes={this.onSearchNotesHandler}/>
                    <NotesList notes={this.state.notes} onDelete={this.onDeleteNoteHandler}
                               onArchive={this.onArchiveNoteHandler}/>
                </section>
            </main>
        )
    }
}

export default NotesAppBody;