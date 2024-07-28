import React from "react";
import SearchBar from "../components/SearchBar.jsx";
import NotesList from "../components/NotesList.jsx";
import {deleteNote, getNotes} from "../utils/data.js";
import {useNavigate, useSearchParams} from "react-router-dom";
import PropTypes from "prop-types";

function HomePageWrapper() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }

    function showDetail(id) {
        navigate(`/notes/${id}`);
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} showDetail={showDetail}/>;
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNotes(),
            keyword: props.defaultKeyword || '',
        };

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onShowDetailHandler = this.onShowDetailHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        deleteNote(id)

        this.setState(() => {
            return {
                notes: getNotes()
            }
        });
    }

    onArchiveNoteHandler(id) {
        this.setState((prevState) => {
            const notes = prevState.notes.map(note =>
                note.id === id ? {...note, archived: !note.archived} : note
            );
            return {notes};
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    onShowDetailHandler(id) {
        this.props.showDetail(id);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <section className="notes-section">
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <NotesList notes={notes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler}
                           showDetail={this.onShowDetailHandler}/>
            </section>
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
    showDetail: PropTypes.func.isRequired,
};

export default HomePageWrapper;