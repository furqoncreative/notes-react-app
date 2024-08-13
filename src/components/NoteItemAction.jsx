import PropTypes from "prop-types";

function NoteItemAction({
  id,
  onDelete,
  onArchive,
  onUnarchive,
  isArchived,
  showDetail,
}) {
  return (
    <div className="action">
      <button className="action-detail" onClick={() => showDetail(id)}>
        Detail
      </button>
      <button
        className="action-archive"
        onClick={() => (isArchived ? onUnarchive(id) : onArchive(id))}
      >
        {isArchived ? "Restore" : "Archive"}
      </button>
      <button className="action-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  isArchived: PropTypes.bool.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default NoteItemAction;
