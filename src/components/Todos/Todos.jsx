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

  const memoizedTodoData = useMemo(
    () => ({
      ALL: todos,
      ACTIVE: todos.filter((todo) => !todo.completed),
      COMPLETED: todos.filter((todo) => todo.completed),
    }),
    [todos, filter]
  );

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
    if (!value) {
      return handleDeleteTodo(id);
    }

    const changeableTodo = todos.findIndex((todo) => todo.id === id);
    const newTodo = {
      value: value,
      id: id,
      completed: completed,
    };
    const newArr = [
      ...todos.slice(0, changeableTodo, newTodo),
      ...todos.slice(changeableTodo + 1),
    ];
    newArr.push(newTodo);
    setTodos(newArr);

    console.log(newTodo);
  };

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo createTodo={createTodo} />
        <FilterButtons
          count={memoizedTodoData.ALL.length}
          countActive={memoizedTodoData.ACTIVE.length}
          countCompleted={memoizedTodoData.COMPLETED.length}
          todos={todos}
          filter={filter}
          setFilter={setFilter}
        />
        <ul className="todos-list">
          {memoizedTodoData[filter].map((todo) => (
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
