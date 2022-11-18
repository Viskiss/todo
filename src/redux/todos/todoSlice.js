import { createSlice, createSelector } from "@reduxjs/toolkit";


export const filterTodosSelector = createSelector(
  (todos) => todos.todos, 
  (filter) => filter.filter,(todos, filter)=>{
  console.log(filter, todos)
  switch (filter) {
    case "ALL":
      return todos;
    case "COMPLETED":
      return todos.filter((todo) => todo.completed);
    case "ACTIVE":
      return todos.filter((todo) => !todo.completed);
  }
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filter: "ALL"
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        value: action.payload.todo,
        completed: false,
      };
      console.log(action.payload);
      state.push(todo);
    },

    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    editTodo: (state, action) => {
      const changeableTodo = state.find(
        (todo) => todo.id === action.payload.id
      );
      changeableTodo.value = action.payload.value;
      changeableTodo.completed = action.payload.completed;
      console.log(changeableTodo);
    },

    filterTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
