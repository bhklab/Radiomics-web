import React from 'react';
import Layout from '../components/Layout';
import StyledPage from '../styles/StyledPage';
import dataset from '../images/Resources/dataset.png';
import checklist from '../images/Resources/checklist.png';
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  .card {
    color: black;
    margin-top: 30px;
    display: flex;
    width:35%;
    flex-direction: row;
    background-color: white;
    padding: 25px;
    border-radius: 3.5px;
    .title {
      display: flex;
      flex-direction: row;
      img {
        height: 40px;
      }
      .name {
        margin: 15px;
        min-height: 20px;
        font-weight: 60;
        display: flex;
        justify-content: left;
      }
    }
    .description {
      text-align: left;
    }
  }
`;

const Source  = () => {
    return(
        <Layout>
            <StyledPage>
                <h1>Resources</h1>
                <div className="container">
                    <StyledCard>
                        <div className="card">
                            <a href='https://bit.ly/37Ig0gP' target='_blank'>
                                <div className="title">
                                    <img src = {checklist}></img>
                                    <div className="name">Radiomics Checklist</div>
                                </div>
                                <div className="description">As the research field matures, it is important to ensure that radiomics studies within the RMP Radiomics Program follow the best practices for developing models and reporting results. In consultation with the participants of the RMP Radiomics Working Group, we have developed a checklist that can be used on a volunteer basis</div>
                            </a>
                        </div>
                        <div className="card">
                            <a href='https://bit.ly/2IAU3GW' target='_blank'>
                                <div className="title">
                                    <img src = {dataset}></img><div className="name">Data Sharing</div>
                                </div>
                                <div className="description">Sharing more data holds the potential to substantially improve the productivity and quality of the scientific projects within RMP in many areas, including radiomics. As a group, we have developed a framework to facilitate collaborations within the RMP Radiomics Research Program. It is important to note that these policies are to be followed only on a volunteer basis.</div>
                            </a>
                        </div>
                    </StyledCard>
                </div>
            </StyledPage>
        </Layout>
    )
}

export default Source;






