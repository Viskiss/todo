import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoSlice";

const store = configureStore({
  reducer: {
    todoData: todoReducer,
  },
  devTools: true,
});

export default store;
