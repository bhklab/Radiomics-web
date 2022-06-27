import styled from "styled-components";

const StyledTopic= styled.div`
  width: 75%;
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
    line-height: 22px;
  }

  .description {
    margin-top: 20px;
    margin-bottom: 40px;
    font-weight: normal;
    line-height: 22px;
    color: #e5e5e5;
    white-space: pre-line;
  }
`;


export default StyledTopic;
