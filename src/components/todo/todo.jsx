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
      _id: Date.now(),
    }
    setNotes((prevNotesState) => [...prevNotesState, newNote]);
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
      <h1 className='toDo-head'>Работает без сервера. Если вы хотите увидеть реализацию серверной части на стеке React + NodeJS + MongoDB, то следуйте <a href="https://github.com/hantl1ve/app-for-presentation/blob/master/README.md" target='_blank' rel="noreferrer">инструкции</a></h1>
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
