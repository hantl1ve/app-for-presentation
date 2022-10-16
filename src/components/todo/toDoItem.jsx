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
    props.onDelete(props.id);
  };

  function changeNote() {
    setIsSaveStatusShow(true)
    setTimeout(() => {
      setIsSaveStatusShow(false)
    }, 2000)
    props.onChange(props.id, textbody);
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
