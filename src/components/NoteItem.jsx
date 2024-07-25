import NoteItemBody from "./NoteItemBody.jsx";
import NoteItemAction from "./NoteItemAction.jsx";

function NoteItem({id, title, body, isArchived, createdAt, onDelete, onArchive}) {
    return (
        <article className="note-item">
            <NoteItemBody title={title} createdAt={createdAt} body={body}/>
            <NoteItemAction id={id} onArchive={onArchive} onDelete={onDelete} isArchived={isArchived}/>
        </article>
    )
}

export default NoteItem;