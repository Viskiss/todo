import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  
  &.active {
    background-color: thistle;
  }
`;

export default Button;