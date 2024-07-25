import React from "react";

class NotesSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        }

        this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);
    }

    onKeywordChangeEventHandler(event) {
        this.setState(() => {
            return {
                keyword: event.target.value,
            }
        });

        this.props.searchNotes({keyword: event.target.value});
    }

    render() {
        return (
            <div className="note-search-form-container">
                <h2>Search Notes</h2>
                <form className="search-note-form">
                    <label htmlFor="search-note-title"></label>
                    <input id="search-note-title" placeholder="search by note title ..." type="text"
                           value={this.state.keyword} onChange={this.onKeywordChangeEventHandler}/>
                </form>
            </div>
        );
    }
}

export default NotesSearch;