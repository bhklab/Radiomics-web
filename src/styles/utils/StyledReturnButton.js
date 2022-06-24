import styled from "styled-components";

const StyledReturnBtn = styled.button`
  margin-top: 50px;
  font-family: 'Br-cobane-font', sans-serif;
  background: none;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  width: 60px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: var(--link-hov);
  }
`

export default StyledReturnBtn;
