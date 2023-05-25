import React from 'react'
import { useDispatch } from 'react-redux'
import { changeSearch } from '../redux/todos/todosSlice';

function Search() {
  const dispatch = useDispatch();
  const handleSearch = (e) =>{
    dispatch(changeSearch({search: e.target.value}))
  }
  return (
    <div>
        <input type="text" placeholder='Search..' className='search' onChange={(e) => handleSearch(e)}/>
        
    </div>
  )
}

export default Search