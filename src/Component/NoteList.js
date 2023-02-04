import Note from './Note'
import AddNote from './AddNote'
const NoteList = ({ notes, handleAddNote, handleDelNote }) => {
    return (
        <div className="note__list">
            {notes.map(note =>
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDelNote={handleDelNote}
                />
            )}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NoteList