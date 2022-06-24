import styled from "styled-components";

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

export default StyledMember;
