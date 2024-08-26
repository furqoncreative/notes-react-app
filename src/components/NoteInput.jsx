import { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext.js";
import useInput from "../hooks/useInput.js";
import LoadingIndicator from "./LoadingIndicator.jsx";

function NoteInput({ addNote, isLoading }) {
  const { locale } = useContext(LocaleContext);
  const [title, onTitleChangeEventHandler] = useInput("");
  const [body, onBodyChangeEventHandler] = useInput("");

  function onSubmitEventHandler(event) {
    event.preventDefault();
    addNote({ title, body });
  }

  return (
    <section className="input-note-section">
      <h2>{locale === "id" ? "Tambah Catatan Baru" : "Add New Note"}</h2>
      <form onSubmit={onSubmitEventHandler}>
        <div className="input">
          <label htmlFor="input-note-title">
            {locale === "id" ? "Judul " : "Title"}
          </label>
          <input
            id="input-note-title"
            type="text"
            placeholder={"Type your title here..."}
            onChange={onTitleChangeEventHandler}
            value={title}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="input-note-content">
            {locale === "id" ? "Catatan" : "Note"}
          </label>
          <textarea
            id="input-note-content"
            placeholder={
              locale === "id"
                ? "Tulis catatanmu di sini..."
                : "Type your note here..."
            }
            onChange={onBodyChangeEventHandler}
            value={body}
            required
          />
        </div>
        {isLoading ? (
          <LoadingIndicator isLoading={isLoading} size={25} />
        ) : (
          <button id="noteSubmit" type="submit">
            {locale === "id" ? "Tambah Catatan" : "Add Note"}
          </button>
        )}
      </form>
    </section>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default NoteInput;
