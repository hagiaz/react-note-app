/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
 
function NoteItemBody({ id, title, body, archived, createdAt }) {
    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__username">{body}</p>
            <p className="note-item__username">{createdAt}</p>
        </div>
    );
}
 
export default NoteItemBody;