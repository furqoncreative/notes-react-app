import { showFormattedDate } from "../utils/data.js";
import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";

function NoteItemBody({ title, createdAt, body }) {
  const { locale } = useContext(LocaleContext);
  const localeDate = locale === "id" ? "id-ID" : "en-US";

  return (
    <>
      <h3>{title}</h3>
      <p>{showFormattedDate(createdAt, localeDate)}</p>
      <p>{body}</p>
    </>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
