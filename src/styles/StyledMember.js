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
    background-color: rgba(123, 123, 123, 0.51)
  }
`;

const StyledMember = styled.div`
  display: flex;
  flex-direction: row;
  .text {
    color: white;
    margin-top: 70px;
    flex-direction: column;
    max-width: 45vw;
    
    .name {
      min-height: 40px;
      color: white;
      font-weight: 60;
      font-size: 25px;
      display: flex;
      justify-content: left;
    }
  }
  .img {
    height: 500px;
  }
`;

export {
    StyledMember,
    StyledReturnBtn
};
