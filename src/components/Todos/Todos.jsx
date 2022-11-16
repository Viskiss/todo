import StyleTodos from "./Todos.styles";

import { useState } from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import FormAddTodo from "./components/FormAddTodo/FormAddTodo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("ALL");

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

  const filterTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }

    if (filter === "ACTIVE" && !todo.completed) {
      return true;
    }

    if (filter === "COMPLETED" && todo.completed) {
      return true;
    }

    return false;
  });

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

  const redactedTodo = (value, id) => {
    if (!value) {
      handleDeleteTodo(id);
    } else {
      const newArrTodo = [...todos];
      const newTodo = newArrTodo.find((todo) => todo.id === id);

      newTodo.value = value;
    }
  };

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo
          createTodo={createTodo}
        />
        <FilterButtons 
          todos={todos} 
          filter={filter} 
          setFilter={setFilter}
        />
          <ul className="todos-list">
            {filterTodos.map((todo) => (
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
    </StyleTodos>
  );
};

export default Todos;
