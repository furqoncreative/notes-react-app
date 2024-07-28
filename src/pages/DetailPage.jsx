import { findNote, showFormattedDate } from "../utils/data.js";
import { useParams } from "react-router-dom";
import NotFound404Page from "./NotFound404Page.jsx";

function DetailPage() {
  const { id } = useParams();

  try {
    const data = findNote(Number(id));

    if (!data) {
      return <NotFound404Page />;
    }

    return (
      <div className="note-detail">
        <h1>{data.title}</h1>
        <p>{showFormattedDate(data.createdAt)}</p>
        <p>{data.body}</p>
      </div>
    );
  } catch (error) {
    return <NotFound404Page />;
  }
}

export default DetailPage;
