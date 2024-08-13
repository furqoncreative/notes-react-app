import NoteItem from "./NoteItem.jsx";
import PropTypes from "prop-types";
import ArchivedNoteItem from "./ArchivedNoteItem.jsx";

function NotesList({
  notes,
  archivedNotes,
  onDelete,
  onArchive,
  onUnarchive,
  showDetail,
}) {
  return (
    <div className="notes-container">
      <div className="notes active-notes-list">
        <h2>Active Notes</h2>
        <div className="note-list">
          {notes.length === 0 ? (
            <p>Tidak ada catatan</p>
          ) : (
            notes.map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                isArchived={note.archived}
                onDelete={onDelete}
                onArchive={onArchive}
                showDetail={showDetail}
              />
            ))
          )}
        </div>
      </div>
      <div className="notes archived-notes-list">
        <h2>Archived Notes</h2>
        <div className="note-list">
          {archivedNotes.length === 0 ? (
            <p>Tidak ada catatan</p>
          ) : (
            archivedNotes.map((note) => (
              <ArchivedNoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                isArchived={note.archived}
                onDelete={onDelete}
                onUnarchive={onUnarchive}
                showDetail={showDetail}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  archivedNotes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default NotesList;
