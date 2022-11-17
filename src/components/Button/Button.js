import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  margin: 8px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  background-color: ${({ isActive }) => (isActive ? "thistle" : "#efefef")};
`;

export default Button;
