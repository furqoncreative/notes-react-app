import NoteItemBody from "./NoteItemBody.jsx";
import NoteItemAction from "./NoteItemAction.jsx";
import PropTypes from "prop-types";

function NoteItem({id, title, body, isArchived, createdAt, onDelete, onArchive, showDetail}) {
    return (
        <article className="note-item">
            <NoteItemBody title={title} createdAt={createdAt} body={body}/>
            <NoteItemAction id={id} onArchive={onArchive} onDelete={onDelete} isArchived={isArchived}
                            showDetail={showDetail}/>
        </article>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isArchived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    showDetail: PropTypes.func.isRequired,
};

export default NoteItem;