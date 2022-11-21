import { createSlice, createSelector } from "@reduxjs/toolkit";

export const filterTodosSelector = createSelector(
  (store) => store.todoData.todos,
  (store) => store.todoData.filter,
  (todos, filter) => {
    const todoList = todos.filter((todo) => {
      switch (filter) {
        case "ALL":
          return todos;
        case "ACTIVE":
          return !todo.completed;
        case "COMPLETED":
          return todo.completed;
      }
    });
    return todoList;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    filter: "ALL",
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        value: action.payload.todo,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos.splice(index, 1);
    },

    completeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
    },

    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos[index].value = action.payload.value;
    },

    filterTodo: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, editTodo, filterTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
