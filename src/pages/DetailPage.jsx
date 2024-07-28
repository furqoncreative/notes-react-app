import {findNote, showFormattedDate} from "../utils/data.js";
import {useParams} from "react-router-dom";

function DetailPage() {
    const { id } = useParams();
    const {title, createdAt, body} = findNote(Number(id));

    return (
        <div className="note-detail">
            <h1>{title}</h1>
            <p>{showFormattedDate(createdAt)}</p>
            <p>{body}</p>
        </div>
    )
}

export default DetailPage;