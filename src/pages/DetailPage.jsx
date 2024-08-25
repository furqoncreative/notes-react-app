import { showFormattedDate } from "../utils/data.js";
import { useParams } from "react-router-dom";
import NotFound404Page from "./NotFound404Page.jsx";
import { getNote } from "../utils/api.js";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function DetailPage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getNote(id)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id]);

  try {
    if (isLoading) {
      return (
        <ClipLoader
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      );
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
