import React from 'react';
import TEAMWORK from '../../images/Principles/TEAMWORK.png'
import TRANSLATION from '../../images/Principles/translation.png'
import TRANSPARENCY from '../../images/Principles/transparency.png'
import styled from "styled-components";

const StyledPrinciple = styled.div`
  background: #f7f7f7;
  padding: 30px 120px 30px 120px;
  h1 {
    font-size: calc(1.0vw + 0.5em);
    font-family: 'Br-cobane-font', 'Rubik', sans-serif;
    font-weight: bold;
    color: #000000;
    text-align: center;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .box {
    flex-basis: 26%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5px;
    margin: 20px;
    min-height: 260px;
    min-width: 115px;
    line-height: 120%;
    border-radius: 5px;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.24);
    background-color: white;
    
    .title {
      font-family: 'Br-cobane-font', 'Lato', sans-serif;
      font-weight: bold;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.95);
    }

    .description {
      font-family: 'Br-cobane-font', 'Lato', sans-serif;
      min-height: 50px;
    }

    & img {
      height: 40px;
      max-height: 40px;
      min-height: 40px;
    }

    & span {
      margin-top: 15px;
      margin-right: 15px;
      margin-left: 15px;
      text-align: center;
      font-size: 16px;
      font-weight: normal;
      color: #575757;
    }
  }
`;

const Principles = () => (
    <StyledPrinciple>
        <h1>Principles</h1>
        <div className="container">
            <div className="box">
                <img alt="teamwork" src={TEAMWORK}/>
                <span className="title">TEAMWORK</span>
                <span className="description">
                    Achieving goals through coordination of resources and sharing of expertise
                </span>
            </div>
            <div className="box">
                <img alt="transparency" src={TRANSPARENCY}/>
                <span className="title">TRANSPARENCY</span>
                <span className="description">
                    Open research through data and model sharing
                </span>
            </div>
            <div className="box">
                <img alt="transition" src={TRANSLATION}/>
                <span className="title">TRANSLATION</span>
                <span className="description">
                    Exploring and establishing clinical utility through innovative methodology
                </span>
            </div>
        </div>
    </StyledPrinciple>
);

export default Principles;
