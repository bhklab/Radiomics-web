import styled from "styled-components";

const StyledTopic= styled.div`
  width: 80%;
  font-size: calc(0.5vw + 0.5em);
  .title {
    color: gray;
    display: flex;
    align-items: center;
    height: 35px;
    font-size: calc(0.7vw + 0.5em);
    font-weight: bold;
    margin-top: 30px;
  }
  .content {
    margin-top: 20px;
    font-weight: normal;
    color: white;
    white-space: pre-line;
  }
  .description {
    margin-top: 20px;
    margin-bottom: 40px;
    font-weight: normal;
    color: white;
    white-space: pre-line;
  }
`;


export default StyledTopic;
