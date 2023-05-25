import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveColor } from "../redux/todos/todosSlice";

function ContentFooter() {
  const colors = useSelector((state) => state.todos.colors);
  const dispatch = useDispatch();

  const handleChangeColor = (id) => {
    dispatch(changeActiveColor({ id }));
  };
  return (
    <div className="contentFooterContainer">
      <ul className="colors">
        {colors.map((color) => (
          <li
            key={color.id}
            style={{ background: color?.background }}
            onClick={() => handleChangeColor(color.id)}
          ></li>
        ))}
      </ul>
      <div className="btn">
        <button>Add</button>
      </div>
    </div>
  );
}

export default ContentFooter;
