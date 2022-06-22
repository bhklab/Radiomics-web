import styled from "styled-components";

const StyledTopic= styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 3.5px;
  .text {
    color: black;
    margin-top: 70px;
    flex-direction: column;
    .name {
      min-height: 40px;
      color: black;
      font-weight: 60;
      font-size: 25px;
      display: flex;
      justify-content: left;
    }
  }
  img {
    height: 50px;
  }
`;

export default StyledTopic;
