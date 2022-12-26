import { useEffect, useState } from 'react'
import './App.css'
import uuid from 'react-uuid';


import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main />
    </div>
  )
}

export default App
