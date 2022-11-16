import TodoItemStyles from "./TodoItem.styles";

import Button from "../../../Button/Button";
import { useState } from "react";

const TodoItem = (props) => {
  const {
    todo: { id, value, completed },
    handleDeleteTodo,
    handleCompletedTodo,
    redactedTodo,
  } = props;

  const [todoValue, setTodoValue] = useState(value);

  const changeInputTodo = (event) => {
    setTodoValue(event.target.value);
  };

  const onSubmit = (e) => {
    redactedTodo(todoValue, id, completed);
  };

  return (
    <TodoItemStyles todoCompleted={completed}>
      <input
        className="todo-item_input"
        type="text"
        id={id}
        value={todoValue}
        onBlur={onSubmit}
        onChange={changeInputTodo}
      />
      <div className="todo-item_buttons">
        <Button onClick={handleDeleteTodo.bind(null, id)}>Delete</Button>
        <Button onClick={handleCompletedTodo.bind(null, id)}>Completed</Button>
      </div>
    </TodoItemStyles>
  );
};

export default TodoItem;
