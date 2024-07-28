import {showFormattedDate} from "../utils/data.js";

function NoteItemBody({title, createdAt, body}) {
    return (
        <>
            <h3>{title}</h3>
            <p>{showFormattedDate(createdAt)}</p>
            <p>{body}</p>
        </>
    )
}

export default NoteItemBody;
