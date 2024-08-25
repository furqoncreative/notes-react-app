import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext.js";
import { useContext } from "react";

function SearchBar({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="note-search-form-container">
      <h2>{locale === "id" ? "Cari Catatan" : "Search Notes"}</h2>
      <input
        className="search-note"
        type="text"
        placeholder={
          locale === "id"
            ? "Cari catatan berdasarkan judul"
            : "Search note by title"
        }
        value={keyword}
        onChange={keywordChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
