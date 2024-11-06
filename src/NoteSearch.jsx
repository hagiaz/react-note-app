/* eslint-disable react/prop-types */
import React from "react";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title : '',
        }

        this.onTitleSearchEventHandler = this.onTitleSearchEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleSearchEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSearchEventHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <button type="submit">Cari</button>
            </form>
        )
    }
}

export default NoteSearch;