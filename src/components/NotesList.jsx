import NoteItem from "./NoteItem.jsx";

function NotesList({notes, onDelete, onArchive}) {
    const activeNotes = notes.filter((note) => note.archived === false)
    const archivedNotes = notes.filter((note) => note.archived === true)

    return (
        <div className="notes-container">
            <div className="notes active-notes-list">
                <h2>Active Notes</h2>
                <div className="note-list">
                    {activeNotes.length === 0
                        ? <p>Tidak ada catatan</p>
                        : activeNotes.map((note) => (
                            <NoteItem
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                body={note.body}
                                createdAt={note.createdAt}
                                isArchived={note.archived}
                                onDelete={onDelete}
                                onArchive={onArchive}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="notes archived-notes-list">
                <h2>Archived Notes</h2>
                <div className="note-list">
                    {archivedNotes.length === 0
                        ? <p>Tidak ada catatan</p>
                        : archivedNotes.map((note) => (
                            <NoteItem
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                body={note.body}
                                createdAt={note.createdAt}
                                isArchived={note.archived}
                                onDelete={onDelete}
                                onArchive={onArchive}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NotesList;