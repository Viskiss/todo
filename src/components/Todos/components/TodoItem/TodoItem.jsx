import TodoItemStyles from "./TodoItem.styles";

import Button from "../../../Button/Button";
import { useState } from "react";

const TodoItem = (props) => {
  const {
    todo: { id, value, completed },
    handleDeleteTodo,
    EditTodo,
  } = props;

  const [todoValue, setTodoValue] = useState(value);

  const changeInputTodo = (event) => {
    setTodoValue(event.target.value);
  };

  const handleCompletedTodo = () => {
    EditTodo(id, value, !completed);
  };

  const handleBlur = () => {
    EditTodo(id, todoValue, completed);
  };

  return (
    <TodoItemStyles todoCompleted={completed}>
      <input
        className="todo-item_input"
        type="text"
        id={id}
        value={todoValue}
        onBlur={handleBlur}
        onChange={changeInputTodo}
      />
      <div className="todo-item_buttons">
        <Button onClick={() => handleDeleteTodo(id)}>Delete</Button>

        <Button onClick={() => handleCompletedTodo(id)}>Completed</Button>
      </div>
    </TodoItemStyles>
  );
};

export default TodoItem;
