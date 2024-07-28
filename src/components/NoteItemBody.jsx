import { showFormattedDate } from "../utils/data.js";
import PropTypes from "prop-types";

function NoteItemBody({ title, createdAt, body }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{showFormattedDate(createdAt)}</p>
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
