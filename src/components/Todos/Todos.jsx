import StyleTodos from "./Todos.styles";

import Button from "../Button/Button";
import { useState } from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import FilterButtons from "./components/FilterButtons/FilterButtons";

const Todos = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleDeleteTodo = (id) => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };

  const handleCompletedTodo = (id) => {
    const completedTodo = [...todos];
    const newTodo = completedTodo.find((todo) => todo.id === id);

    if (newTodo.completed === false) {
      newTodo.completed = true;
    } else {
      newTodo.completed = false;
    }

    setTodos(completedTodo);
  };

  const createTodo = (value) => {
    const todo = {
      value,
      id: Date.now(),
      completed: false,
    };

    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  };

  // const deleteTodo = (id) => {
  //   const deletedTodo = todos.filter((todo) => todo.id !== id);
  //   setTodos(deletedTodo);
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const result = value.trim();

    if (result !== "") {
      createTodo(value);
    }

    setValue("");
  };

  const redactedTodo = (value, id, completed) => {
    if (!value) {
      handleDeleteTodo(id);
    } else {
      return {
        todos: [
          ...todos,
          {
            id: id,
            value: value,
            completed: completed,
          },
        ],
      };
    }
  }
 

  return (
    <StyleTodos>
      <div className="container">
        <form onSubmit={submitHandler} className="form-todos">
          <input
            value={value}
            onChange={handleChangeInput}
            className="form-todos_input"
            type="text"
          />
          <Button>Add</Button>
        </form>
        <div>
          <FilterButtons />
        </div>
        <div>
          <ul className="todos-list">
            {todos.map((todo) => (
              <TodoItem
                handleCompletedTodo={handleCompletedTodo}
                handleDeleteTodo={handleDeleteTodo}
                redactedTodo={redactedTodo}
                key={todo.id}
                todo={todo}
              />
            ))}
          </ul>
        </div>
      </div>
    </StyleTodos>
  );
};

export default Todos;
