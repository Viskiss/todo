import StylesForm from "./FormAddTodo.styles";

import Button from "../../../Button/Button";
import { useState } from "react";

const FormAddTodo = (props) => {
  const [value, setValue] = useState("");

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const result = value.trim();

    if (result !== "") {
      props.createTodo(value);
    }

    setValue("");
  };

  return (
    <StylesForm onSubmit={submitHandler}>
      <input
        value={value}
        onChange={handleChangeInput}
        className="form-todos_input"
      />
      <Button type="submit">Add</Button>
    </StylesForm>
  );
};

export default FormAddTodo;
