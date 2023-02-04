import { useRef, useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const characterLimit = 200
    const [note, setNote] = useState('')
    const noteRef = useRef()

    const handleChange = e => {
        if (characterLimit >= e.target.value.length) {
            setNote(e.target.value)
        }
    }
    const handleSubmit = () => {
        if (note.trim().length > 0) {
            handleAddNote(note);
            setNote('')
            noteRef.current.focus()
        }
    }
    return (
        <div className="note__item new">
            <textarea
                value={note}
                className="note__input"
                placeholder="Enter your note"
                rows='10'
                cols='40'
                onChange={handleChange}
                ref={noteRef}
            >
            </textarea>
            <div className="note__info">
                <span>{characterLimit - note.trim().length} Remaining</span>
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;