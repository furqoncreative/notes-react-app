import NoteItemBody from "./NoteItemBody.jsx";
import NoteItemAction from "./NoteItemAction.jsx";
import PropTypes from "prop-types";

function ArchivedNoteItem({
  id,
  title,
  body,
  isArchived,
  createdAt,
  onDelete,
  onUnarchive,
  showDetail,
}) {
  return (
    <article className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <NoteItemAction
        id={id}
        onUnarchive={onUnarchive}
        onDelete={onDelete}
        isArchived={isArchived}
        showDetail={showDetail}
      />
    </article>
  );
}

ArchivedNoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default ArchivedNoteItem;
