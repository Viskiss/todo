import StyleTodos from "./Todos.styles";

import { useMemo, useState } from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import FormAddTodo from "./components/FormAddTodo/FormAddTodo";
import { useSelector } from "react-redux";
import { filterTodosSelector } from "../../redux/todos/todoSlice";


const Todos = () => {
  const [filter, setFilter] = useState("ALL");

  const todos = useSelector(filterTodosSelector);

console.log(todos)

  // const memoizedTodoData = useMemo(
  //   () => ({
  //     ALL: todos,
  //     ACTIVE: todos.filter((todo) => !todo.completed),
  //     COMPLETED: todos.filter((todo) => todo.completed),
  //   }),
  //   [todos, filter]
  // );

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo />
        <FilterButtons
          // count={memoizedTodoData.ALL.length}
          // countActive={memoizedTodoData.ACTIVE.length}
          // countCompleted={memoizedTodoData.COMPLETED.length}
          todos={todos}
          filter={filter}
          setFilter={setFilter}
        />
        <ul className="todos-list">
          {todos.map((todo) => (
            <TodoItem
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
