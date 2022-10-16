import './todo.css'
import { useState, useEffect } from 'react'

export default function ToDoItem(props) {

  const [textbody, setTextboxy] = useState(props.text)
  const [isSaveStatusShow, setIsSaveStatusShow] = useState(false)
  const [isShow, setIsShow] = useState(false)
 
  useEffect(() => {
    if (props.text !== textbody) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }, [textbody, props.text])

  function deleteNote() {
    fetch('http://localhost:3333/notes', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      body: JSON.stringify({id: props.id}),
    }).then(res => {
      if (res.status === 200) {
        props.onDelete(props.id)
      };
    });
  };

  function changeNote() {
    fetch('http://localhost:3333/notes', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({id: props.id, text: textbody}),
    }).then(res => {
      if (res.status === 200) {
        setIsSaveStatusShow(true)
        setTimeout(() => {
          setIsSaveStatusShow(false)
        }, 2000)
        props.onChange(props.id, textbody);
      };
    })
  };



  return (
    <div className="noteItem">
      <textarea name="" id="" cols="32" rows="10" value={textbody} onChange={(e) => setTextboxy(e.target.value)}>
      </textarea>
      <div className='removeNote' onClick={deleteNote}><i className="fa fa-times" aria-hidden="true"></i></div>
      <div className='saveNote' onClick={changeNote} style={{display: isShow ? 'block' : 'none'}}><i className="fa fa-check" aria-hidden="true"></i></div>
      <div className='saveNote-status' style={{display: isSaveStatusShow ? 'block' : 'none'}}>Note Saved</div>
    </div>)
};
