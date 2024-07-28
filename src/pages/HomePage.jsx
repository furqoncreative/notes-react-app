import React from "react";
import SearchBar from "../components/SearchBar.jsx";
import NotesList from "../components/NotesList.jsx";
import {deleteNote, getNotes} from "../utils/data.js";
import {useSearchParams} from "react-router-dom";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>;
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

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <section className="notes-section">
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <NotesList notes={notes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler}/>
            </section>
        )
    }
}

export default HomePageWrapper;