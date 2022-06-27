import styled from 'styled-components';

const StyledSection = styled.div`
  background: #f7f7f7;
  padding: 30px 150px 50px 150px;
  min-height: 280px;
  :nth-child(even) {
    background: white;
  }

  h1 {
    font-size: calc(1.0vw + 0.5em);
    font-family: 'Br-cobane-font', 'Rubik', sans-serif;
    font-weight: bold;
    margin-bottom: 30px;
    color: #000000;
    text-align: center;
  }

  .container {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .box {
    background-color: white;
    flex-basis: 16%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px 5px 10px 5px;
    margin: 20px 10px 40px 10px;
    min-height: 140px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);
    line-height: 120%;
    color: #404040;

    .title {
      font-weight: bold;
      font-size: calc(0.6vw + 0.5em);
      height: 40px;
      font-family: 'Br-cobane-font', Arial;
      color: rgba(0, 0, 0, 0.95);
    }

    .description {
      font-family: 'Br-cobane-font', Arial;
      height: 80px;
    }

    a {
      color: #2A2A2AFF;
      text-decoration: none;
      transition: 0.3s;
      font-weight: 400;
      cursor: pointer;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px 5px;
    }

    a:hover {
      transition: 0.3s;
    }
    
    & img {
      height: 45px;
      max-width: 60px;
    }

    & span {
      margin-top: 20px;
      font-size: calc(0.5vw + 0.5em);
      font-weight: normal;
      color: #575757;
    }

    & a:hover {
      color: #d5d5d5;
    }
  }
  .about {
    margin: 0px 10%;
    font-family: 'Br-cobane-font', Arial;
    width: 80%;
    display: flex;
    height: 40vh;
    align-items: center;
    text-align: center;
    color: #000000;
    font-size: calc(0.3vw + 0.7em);
    font-weight: normal;
    line-height: calc(0.8vw + 1.3em);
    letter-spacing: 1px;
  }
`;

export default StyledSection;
