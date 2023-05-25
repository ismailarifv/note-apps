import { useState } from "react";
import ContentFooter from "./ContentFooter";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

function Content() {
  const [title, setTitle] = useState("");
  const dispatch= useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addNote({id:nanoid(),title}))
    }
    
    
    setTitle('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="content">
        <textarea
          type="text"
          placeholder="Enter your note here..."
          className="noteHere"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ContentFooter />
      </div>
    </form>
  );
}

export default Content;
