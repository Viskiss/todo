import styled from "styled-components";

export default styled.li`
  display: flex;
  border-radius: 10px;
  background-color: #efefef;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:not(:nth-child(0)) {
    margin-bottom: 10px;
  }
  .todo-item_input {
    text-decoration: ${(props) =>
      !props.todoCompleted || "line-through 2px red"};
  }
  .todo-item_input {
    width: 35%;
    border: none;
    background-color: inherit;
    padding: 5px 10px;
    font-weight: bold;
  }
`;