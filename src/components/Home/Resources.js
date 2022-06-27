import React from 'react';
import Papers from '../../images/Resources/papers.png';
import checklist from "../../images/Resources/checklist.png";
import dataset from "../../images/Resources/dataset.png";
import meeting from "../../images/Resources/meeting.png";
import opportunity from "../../images/Resources/opportunity.png";
import StyledSection from "../../styles/StyledSection";

const Resources = () => {
    return(
        <StyledSection>
            <h1>Resources</h1>
            <div className="container">
                <div className="box">
                    <a href='https://docs.google.com/document/d/1qEzNVlJRAhQPmYhg5Gck_rvGTW8oar8LhvawsfuLvnM/edit' target='_blank' rel="noreferrer">
                        <img src = {checklist}></img>
                        <span className="title">Radiomics Checklist</span>
                    </a>
                </div>
                <div className="box">
                    <a href='https://bit.ly/2IAU3GW' target='_blank' rel="noreferrer">
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
                <div className="box disabled">
                        <img src = {meeting}></img>
                        <span className="title">Meetings</span>
                </div>
                <div className="box disabled" >
                        <img src = {opportunity}></img>
                        <span className="title">Opportunities</span>
                </div>
            </div>
        </StyledSection>
    );
}

export default Resources;
