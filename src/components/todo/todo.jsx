import { useEffect } from 'react'
import { useState } from 'react'
import './todo.css'
import ToDoItem from './toDoItem'

export default function ToDoMain() {

  const [notes, setNotes] = useState([])
  const [input, setInput] = useState('')
  const [disabled, setDisabled] = useState(true)

  function deleteNote(id) {
    setNotes(notes.filter((item) => {
      return item._id !== id;
    }))
  } 

  function changeNote(id, text) {
    setNotes(notes.map((item) => {
      if (item._id === id) {
        item.text = text;
      }
      return item
    }))
  }

  useEffect(() => {
    fetch('http://localhost:3333/notes',
    {
      method: 'GET',
    }).then(res => res.json()).then(notes => {
      setNotes(notes)
    })
  }, [])

    const isDisabled = () => {
    if (input.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  useEffect(isDisabled, [input])

  function addNote() {
    const newNote = {
      text: input,
    }
    fetch('http://localhost:3333/notes', {
      headers: {
      'Content-Type': 'application/json'
    },
      method: "POST",
      body: JSON.stringify(newNote),
    }).then((res) => {
      res.json().then((data) => {
        newNote._id = data.insertedId
        if (res.status === 200) {
          setNotes((prevNotesState) => [...prevNotesState, newNote]);
        }
      })
    })
    setInput('')
  }

  const handleKeyPress = (event) => {
    if (!input.length) {
      return
    }
    if(event.key === 'Enter'){
      addNote();
    };
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='toDo-main'>
      <div className='inputWrapper'>
        <input type="text" className='input' autoFocus value={input} onChange={handleChange} onKeyDown={handleKeyPress}/>
        <button className='inputButton' onClick={addNote} disabled={disabled}>Add note</button>
      </div>
      <div className="notesItem-wrapper">
        {notes.map((item) => {
          return <ToDoItem text={item.text} key={item._id} id={item._id} onDelete={deleteNote} onChange={changeNote}/>
        })}
      </div>
    </div>
  )
};
