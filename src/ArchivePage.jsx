/* eslint-disable no-unused-vars */
import React from "react";
import { getData } from "./data";
import ArchivedNote from "./ArchivedNote";

class ArchivePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes })
    }

    onStatusChangeHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) => {
                if (note.id === id) {
                    return { ...note, archived: !note.archived };
                }
                return note;
            });
            return { notes: updatedNotes };
        });
    }

    onAddNoteHandler({id, title, body, archived, createdAt}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toLocaleString(),
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="notes-app">
                <h1>NotesApp</h1>
                <h2>Archived Notes</h2>
                <ArchivedNote notes={this.state.notes} onDelete={this.onDeleteHandler} onStatusChange={this.onStatusChangeHandler} />
            </div>
        );
    }
}

export default ArchivePage;