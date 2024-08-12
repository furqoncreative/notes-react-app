import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      const titleLimit = 50 - event.target.value.length;

      return titleLimit < 0
        ? null
        : {
            title: event.target.value,
            titleLimit: titleLimit,
          };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="input-note-section">
        <h2>Add New Note</h2>
        <form className="universal-form" onSubmit={this.onSubmitEventHandler}>
          <div className="input">
            <label htmlFor="input-note-title">
              Title (Limit: {this.state.titleLimit})
            </label>
            <input
              id="input-note-title"
              type="text"
              placeholder={"Type your title here..."}
              onChange={this.onTitleChangeEventHandler}
              value={this.state.title}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="input-note-content">Note</label>
            <textarea
              id="input-note-content"
              placeholder={"Type your note here..."}
              onChange={this.onBodyChangeEventHandler}
              value={this.state.body}
              required
            />
          </div>
          <button id="noteSubmit" type="submit">
            Add Note
          </button>
        </form>
      </section>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
