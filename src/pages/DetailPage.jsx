import { showFormattedDate } from "../utils/data.js";
import { useParams } from "react-router-dom";
import NotFound404Page from "./NotFound404Page.jsx";
import { getNote } from "../utils/api.js";
import { useEffect, useState } from "react";

function DetailPage() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setData(data);
    });
  }, [id]);

  try {
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
