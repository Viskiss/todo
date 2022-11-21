import StyleTodos from "./Todos.styles";

import { useEffect, useState } from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import FormAddTodo from "./components/FormAddTodo/FormAddTodo";
import { useSelector } from "react-redux";
import { filterTodosSelector } from "../../redux/todos/todoSlice";

const Todos = () => {
  const [filter, setFilter] = useState("ALL");

  const todos = useSelector(filterTodosSelector);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo />
        <FilterButtons
          count={filter === "ALL" ? `${todos.length}` : null}
          countActive={filter === "ACTIVE" ? `${todos.length}` : null}
          countCompleted={filter === "COMPLETED" ? `${todos.length}` : null}
          todos={todos}
          filter={filter}
          setFilter={setFilter}
        />
        <ul className="todos-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </StyleTodos>
  );
};

export default Todos;
