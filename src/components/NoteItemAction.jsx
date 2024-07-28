function NoteItemAction({id, onDelete, onArchive, isArchived, showDetail}) {
    return (
        <div className="action">
            <button className="action-detail" onClick={() => showDetail(id)}>Detail</button>
            <button className=" action-archive" onClick={() => onArchive(id)}>
                {isArchived
                    ? 'Restore'
                    : 'Archive'
                }
            </button>
            <button className="action-delete" onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default NoteItemAction;