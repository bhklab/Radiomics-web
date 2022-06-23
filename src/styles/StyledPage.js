import styled from 'styled-components';

const StyledPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #232323;
  flex-direction: column;
  margin-top: 80px;
  font-family: 'Br-cobane-font', Arial;
  //padding: 30px 0px 80px 0px;

  h1 {
    padding-top: 2%;
    padding-left: 12%;
    font-size: calc(1.0vw + 0.9em);
    font-family: 'Br-cobane-font', 'Rubik', sans-serif;
    color: #d5d5d5;
  }

  span {
    font-family: 'Br-cobane-font', Arial;
    background: #2A2A2AFF;
    color: white;
    font-size: calc(0.5vw + 0.5em);
    padding: 10px 12px;
    border-radius: 50%;
    margin-left: 10px;
  }

  .container {
    width: 70%;
    font-family: 'Br-cobane-font', Arial;
    flex-direction: column;
    align-self: center;
    display: flex;
    padding: 30px 40px;

    h3 {
      color: #848484;
      text-align: left;
      display: flex;
    }
  }
  a {
    color: #2A2A2AFF;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    font-family: 'Br-cobane-font', Arial;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px 5px;
  }

  a:hover {
    transition: 0.3s;
  }
  
`;


export default StyledPage;
