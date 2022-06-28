import styled from "styled-components";

const StyledMember = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .text {
    color: white;
    margin-top: 60px;
    flex-direction: column;
    max-width: 45vw;
    line-height: 22px;
    
    .name {
      min-height: 40px;
      color: white;
      font-weight: 60;
      font-size: calc(0.7vw + 0.8em);
      display: flex;
      justify-content: left;
    }
  }
  .img {
    height: 550px;
  }
`;

export default StyledMember;
