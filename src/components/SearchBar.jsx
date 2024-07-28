import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="note-search-form-container">
      <h2>Search Notes</h2>
      <input
        className="search-note"
        type="text"
        placeholder="Search note by title"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
