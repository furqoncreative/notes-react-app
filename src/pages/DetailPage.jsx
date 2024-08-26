import { showFormattedDate } from "../utils/data.js";
import { useParams } from "react-router-dom";
import NotFound404Page from "./NotFound404Page.jsx";
import { getNote } from "../utils/api.js";
import { useContext, useEffect, useState } from "react";
import LocaleContext from "../contexts/LocaleContext.js";
import LoadingIndicator from "../components/LoadingIndicator.jsx";

function DetailPage() {
  const { locale } = useContext(LocaleContext);
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
    const localeDate = locale === "id" ? "id-ID" : "en-US";

    if (isLoading) {
      return <LoadingIndicator isLoading={isLoading} size={35} />;
    }

    return (
      <div className="note-detail">
        <h1>{data.title}</h1>
        <p>{showFormattedDate(data.createdAt, localeDate)}</p>
        <p>{data.body}</p>
      </div>
    );
  } catch (error) {
    return <NotFound404Page />;
  }
}

export default DetailPage;
