import React from 'react';
import DATA_PROCESSING from "../../images/Research/dataProcessing.png";
import BIOMARKER from "../../images/Research/biomarker.png";
import ANALYSIS_METHODS from "../../images/Research/analysisMethods.png";
import SEGMENTATION from "../../images/Research/segmentation_brain.png";
import ASSESSMENT from "../../images/Research/clinicalWorkflow.png";
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
      font-family: 'Br-cobane-font', 'Lato', sans-serif;
      color: rgba(0, 0, 0, 0.95);
    }

    .description {
      font-family: 'Br-cobane-font', 'Lato', sans-serif;
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

const ResearchTopics = () => {
    return (
        <StyledSection>
            <h1>Research Topics</h1>
            <div className="container">
                <div className="box">
                    <a href="/research/data-processing">
                        <img alt="teamwork" src={DATA_PROCESSING}/>
                        <span className="title">Data Processing</span>
                        <span className="description">
                        Achieving goals through coordination of resources and sharing of expertise
                    </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/research/analysis-methods">
                        <img alt="transparency" src={ANALYSIS_METHODS}/>
                        <span className="title">Analysis Methods</span>
                        <span className="description">
                    Open research through data and model sharing
                </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/research/biomarker-discovery">
                        <img alt="transition" src={BIOMARKER}/>
                        <span className="title">Biomarker Discovery</span>
                        <span className="description">
                        Exploring and establishing clinical utility through innovative methodology
                    </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/research/segmentation">
                        <img alt="transition" src={SEGMENTATION}/>
                        <span className="title">Segmentation</span>
                        <span className="description">
                        AI assisted annotation of medical images
                    </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/research/clinical-deployment-and-assessment">
                        <img alt="transition" src={ASSESSMENT}/>
                        <span className="title">Clinical Deployment and Assessment</span>
                        <span className="description">
                        Improve and monitor clinical workflow using AI models
                    </span>
                    </a>
                </div>
            </div>
        </StyledSection>
    )
}


export default ResearchTopics;
