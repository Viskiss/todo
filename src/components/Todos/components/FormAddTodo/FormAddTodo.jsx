import StylesForm from "./FormAddTodo.styles";

import Button from "../../../Button/Button";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../redux/todos/todoSlice";

const FormAddTodo = (props) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const result = value.trim();

    if (result !== "") {
      dispatch(addTodo({ todo: value }));
    }

    setValue("");
  };

  return (
    <StylesForm onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="form-todos_input"
      />
      <Button type="submit">Add</Button>
    </StylesForm>
  );
};

export default FormAddTodo;
