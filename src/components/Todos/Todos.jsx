import StyleTodos from "./Todos.styles";

import { useMemo, useState } from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import FormAddTodo from "./components/FormAddTodo/FormAddTodo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const handleDeleteTodo = (id) => {
    const deletedTodo = todos.findIndex((todo) => todo.id === id);
    const newArr = [
      ...todos.slice(0, deletedTodo),
      ...todos.slice(deletedTodo + 1),
    ];
    setTodos(newArr);
  };

  const memoizedValue = useMemo(
    () => ({
      ALL: todos,
      ACTIVE: todos.filter((todo) => !todo.completed),
      COMPLETED: todos.filter((todo) => todo.completed),
    }),
    [todos, filter]
  );

  const filterTodo = (filter) => {
    if (filter === "ALL") {
      return memoizedValue.ALL;
    }
    if (filter === "ACTIVE") {
      return memoizedValue.ACTIVE;
    }
    if (filter === "COMPLETED") {
      return memoizedValue.COMPLETED;
    }
  };
  filterTodo(filter)

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

  const EditTodo = (id, value, completed) => {
    console.log(value);
    if (!value) {
      return handleDeleteTodo(id);
    }
    // Copy object
    const newArr = [...todos];
    const newTodo = newArr.find((todo) => todo.id === id);

    newTodo.completed = !newTodo.completed;
    newTodo.value = value;
  };

  const keyFilter = ["ALL", "COMPLETED", "ACTIVE"]

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo createTodo={createTodo} />
        <FilterButtons
          count={memoizedValue.ALL.length}
          countActive={memoizedValue.ACTIVE.length}
          countCompleted={memoizedValue.COMPLETED.length}
          todos={todos}
          filter={filter}
          setFilter={setFilter}
        />
        <ul className="todos-list">
          {Object.keys(memoizedValue).filter(key => keyFilter.includes(filter)).map((todo) => (
            <TodoItem
              handleDeleteTodo={handleDeleteTodo}
              EditTodo={EditTodo}
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
