import React from 'react';
import Papers from '../../images/Resources/papers.png';
import checklist from "../../images/Resources/checklist.png";
import dataset from "../../images/Resources/dataset.png";
import meeting from "../../images/Resources/meeting.png";
import opportunity from "../../images/Resources/opportunity.png";
import styled from "styled-components";

const StyledSection = styled.div`
  background: #f7f7f7;
  padding: 30px 150px 50px 150px;
  min-height: 45vh;
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
    font-family: 'Br-cobane-font', 'Lato', sans-serif;
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
    min-height: 120px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);
    line-height: 120%;
    color: #404040;

    .title {
      font-weight: bold;
      font-size: 16px;
      height: 35px;
      color: rgba(0, 0, 0, 0.95);
    }

    .description {
      height: 50px;
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
      font-size: 14px;
      font-weight: normal;
      color: #575757;
    }

    & a:hover {
      color: #d5d5d5;
    }
  }
  
  .about {
    margin: 0px 10%;
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
const Resources = () => {
    return(
        <StyledSection>
            <h1>Resources</h1>
            <div className="container">
                <div className="box">
                    <a href='https://docs.google.com/document/d/1qEzNVlJRAhQPmYhg5Gck_rvGTW8oar8LhvawsfuLvnM/edit' target='_blank'>
                        <img src = {checklist}></img>
                        <span className="title">Radiomics Checklist</span>
                    </a>
                </div>
                <div className="box">
                    <a href='https://bit.ly/2IAU3GW' target='_blank'>
                        <img src = {dataset}></img>
                        <span className="title">Data Sharing</span>
                    </a>
                </div>
                <div className="box">
                    <a href="/publications">
                        <img src = {Papers}></img>
                        <span className="title">Publications</span>
                    </a>
                </div>
                <div className="box">
                    <a href="/">
                        <img src = {meeting}></img>
                        <span className="title">Meetings</span>
                    </a>
                </div>
                <div className="box">
                    <a href="/projects">
                        <img src = {opportunity}></img>
                        <span className="title">Opportunities</span>
                    </a>
                </div>
            </div>
        </StyledSection>
    );
}

export default Resources;
