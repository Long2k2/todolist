import { useState, useEffect } from "react";
import NoteList from "./Component/NoteList"
import Search from "./Component/Search";
import { v4 as uuid } from 'uuid';
function App() {

  const [notes, setNotes] = useState(() => {
    const storageIdol = JSON.parse(localStorage.getItem('notes'))
    return storageIdol || []
  })
  const [search, setSearch] = useState('')


  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: uuid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)

  }

  useEffect(() => {
    const jsonNotes = JSON.stringify(notes)
    localStorage.setItem('notes', jsonNotes)
  }, [notes])

  const delNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)

  }

  return (
    <div className="container">
      <Search handleSearch={setSearch} />
      <NoteList
        notes={notes.filter(note =>
          note
            .text
            .toLowerCase()
            .includes(search.toLowerCase()
            ))}
        handleAddNote={addNote}
        handleDelNote={delNote} />
    </div>
  );
}

export default App;
