import { createSlice, nanoid } from "@reduxjs/toolkit";
const colors = [
  {
    id: nanoid(),
    background: "",
    isReset: true,
    isActive: true,
  },
  {
    id: nanoid(),
    background: "#3F0071",
    isActive: false,
  },
  {
    id: nanoid(),
    background: "#FB2576",
    isActive: false,
  },
  {
    id: nanoid(),
    background: "#332FD0",
    isActive: false,
  },
  {
    id: nanoid(),
    background: "#0002A1",
    isActive: false,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    colors,
    activeColor: "",
    search: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push({
        id: nanoid(),
        title: action.payload.title,
        color: state.activeColor || "#3F0071",
      });
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeSearch: (state, action) => {
      state.search = action.payload.search;
    },
    changeActiveColor: (state, action) => {
      state.colors.forEach((color) => (color.isActive = false));
      const current = state.colors.find(
        (color) => color.id === action.payload.id
      );
      current.isActive = true;
      state.activeColor = current.background;
    },
  },
});
export const getFilteredNotes = (state) => {
    if (state.todos.activeColor !== "" && state.todos.search !== "") {
        return state.todos.items.filter(
          (note) =>
            note.color === state.todos.activeColor &&
            note.title
              .toLowerCase()
              .includes(state.todos.search.toLowerCase())
        );
      } else if (state.todos.activeColor !== "") {
        return state.todos.items.filter(
          (note) => note.color === state.todos.activeColor
        );
      } else if (state.todos.search !== "") {
        return state.todos.items.filter((note) =>
          note.title.toLowerCase().includes(state.todos.search.toLowerCase())
        );
      } else {  
        return state.todos.items;
      }
    };

export const { addNote, destroy, changeSearch, changeActiveColor } =
  todosSlice.actions;
export default todosSlice.reducer;
