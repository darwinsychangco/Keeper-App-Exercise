import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "",
      content: ""
    }
  ]);

  function addNote(newNote) {
    setNotes((prev) => [...prev, newNote]);
  }

  function deleteNote(noteId) {
    setNotes((prev) => prev.filter((note, index) => index !== noteId));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(
        (note, index) =>
          index > 0 && (
            <Note
              key={index}
              id={index}
              onDelete={deleteNote}
              title={note.title}
              content={note.content}
            />
          )
      )}
      <Footer />
    </div>
  );
}

export default App;
