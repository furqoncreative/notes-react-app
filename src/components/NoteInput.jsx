import { useContext, useState } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext.js";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleLimit, setTitleLimit] = useState(50);
  const { locale } = useContext(LocaleContext);

  function onTitleChangeEventHandler(event) {
    setTitle(event.target.value);
    setTitleLimit(50 - event.target.value.length);
  }

  function onBodyChangeEventHandler(event) {
    setBody(event.target.value);
  }

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
            {locale === "id" ? "Judul (Batas" : "Title (Limit"}: {titleLimit})
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
        <button id="noteSubmit" type="submit">
          {locale === "id" ? "Tambah Catatan" : "Add Note"}
        </button>
      </form>
    </section>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
