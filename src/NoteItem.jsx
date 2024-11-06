/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ id, title, body, archived, createdAt, onDelete, onStatusChange }) {
    return (
        <div className="note-item">
            <NoteItemBody id={id} title={title} body={body} archived={archived} createdAt={createdAt} />
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onStatusChange={onStatusChange} isArchived={archived} />
        </div>
    );
}

export default NoteItem;