import React from 'react';
import DATA_PROCESSING from "../../images/Research/dataProcessing.png";
import BIOMARKER from "../../images/Research/biomarker.png";
import ANALYSIS_METHODS from "../../images/Research/analysisMethods.png";
import SEGMENTATION from "../../images/Research/segmentation_brain.png";
import ASSESSMENT from "../../images/Research/clinicalWorkflow.png";
import StyledSection from "../../styles/StyledSection";


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
