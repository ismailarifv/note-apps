import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { destroy,getFilteredNotes } from '../redux/todos/todosSlice';


function Note() {
  const notes = useSelector(getFilteredNotes);
  const dispatch = useDispatch()
  
  return (
    <ul className='noteList'>
    { notes.length > 0 ? (notes.map((item)=>(
      <li key={item.id} style={{ background: item.color }}  title={item.title} id={item.id} className='note'>
        <span >{item.title}</span>
      <span className='deleteIcon' onClick={() => dispatch(destroy(item.id))}>
        x
      </span>
      
    </li>
    ))): (<li className='note'>There is no Note</li>)}
    </ul>
  )
}

export default Note
