import React from 'react';
import styled from "styled-components";

const StyledSection = styled.div`
  background: #f7f7f7;
  padding: 30px 150px 50px 150px;
  min-height: 45vh;
  :nth-child(even) {
    background: white;
  }
  
  
  .about {
    margin: 0px 10%;
    font-family: 'Br-cobane-font', 'Lato', sans-serif;
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

const About = () => (
    <StyledSection>
        <div className="about">
            Radiomics is an emerging, translational field of research which leverages computational techniques to
            extract information from routinely-acquired medical images. The Radiomics for Radiotherapy Research (R3)
            Initiative within Princess Margaret Cancer Centre’s Radiation Medicine Program (RMP) was established to
            explore and establish the clinical utility of Radiomics for precision radiation medicine. We envision that
            retrospective image datasets combined with the development of innovative analysis methods will yield novel
            imaging markers and therapeutic approaches that can be tested in prospective clinical trials. The R3
            Initiative aims to accelerate progress toward achieving these goals through coordination of resources and
            sharing of expertise.
        </div>
    </StyledSection>
);

export default About;
