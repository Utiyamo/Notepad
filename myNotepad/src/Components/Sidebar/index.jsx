import { useCallback, useState } from "react";

function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote, }) {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return(
        <div className="app-sidebar">
            <div className="app-sidebar-header">
              <h1>Notes {notes.length}</h1>
              <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map(({ id, title, body, lastModified}, i) => {
                    <div className={`app-sidebar-note ${id === activeNote && "active"}`} onClick={() => setActiveNote(id)}>
                        <div className='sidebar-note-title'>
                            <strong>{title}</strong>
                            <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                        </div>
                        <p>{body && body.substr(0, 100) + `...`}</p>
                        <smal className="note-meta">
                            Last Modified{` `}
                            {new Date(lastModified).toLocaleDateString(`pt-BR`, {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </smal>
                    </div>
                })}

            </div>
      </div>
    )
}

export default Sidebar;