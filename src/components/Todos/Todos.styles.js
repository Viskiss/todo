import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 20px 10px;
  }
  .form-todos_input {
    padding: 5px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    background-color: #efefef;
  }
  .todos-list {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
  }
  .todos-list_block {
    display: flex;
  }
`;