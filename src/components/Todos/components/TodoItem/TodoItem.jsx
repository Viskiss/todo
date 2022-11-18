import TodoItemStyles from "./TodoItem.styles";

import Button from "../../../Button/Button";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../../../redux/todos/todoSlice";

const TodoItem = (props) => {
  const {
    todo: { id, value, completed },
  } = props;

  const [todoValue, setTodoValue] = useState(value);

  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const completedTodo = () => {
    dispatch(editTodo({ id: id, value: value, completed: !completed }));
  };

  const changeTodo = () => {
    if (!todoValue) {
      dispatch(deleteTodo({ id: id }));
    } else {
      dispatch(editTodo({ id: id, value: todoValue }));
    }
  };

  return (
    <TodoItemStyles todoCompleted={completed}>
      <input
        className="todo-item_input"
        type="text"
        id={id}
        value={todoValue}
        onBlur={changeTodo}
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <div className="todo-item_buttons">
        <Button onClick={() => removeTodo(id)}>Delete</Button>
        <Button onClick={() => completedTodo(id)}>Completed</Button>
      </div>
    </TodoItemStyles>
  );
};

export default TodoItem;
