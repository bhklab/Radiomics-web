import React from 'react';
import Layout from '../components/Layout';
import StyledPage from '../styles/StyledPage';
import dataset from '../images/Resources/dataset.png';
import checklist from '../images/Resources/checklist.png';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Link from "gatsby-link";
import resouces from '../data/resources.json';

const StyledLinks = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  float: right;
  margin-right: 15px;
  a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: calc(0.2vw + 0.7em);
    letter-spacing: 1px;
    font-family: 'Br-cobane-font', Arial;
    border-bottom: 2px solid transparent;
  }
  a:hover {
    text-decoration: none;
  }
  
  .resource {
    min-height: 180px;
    width: 280px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  .card {
    color: black;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    .title {
      height: 50px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: row;
      img {
        max-width: 40px;
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
    const customizedContent = (item, i) => {
        let photo = ''
        switch (item.img) {
            case ('checklist'):
                photo = checklist;
                break;
            case('dataset'):
                photo = dataset;
                break;
            default:
                break;
        }

        return (
            <Grid item xs={12} sm={12} key={i} style={{ flexBasis: '33%', flexShrink: '0'}}>
                <StyledLinks >
                    <Link to={item.link}>
                        <div className="resource">
                            <img style={{ height: '50px', margin: '10px'}} src={photo} alt={item.img}/>
                            <div style={{ height: '50px', color: 'black', fontWeight: 'bold'}}>{item.title}</div>
                            <div style={{ height: '270px', color: '#2d2d2d'}}>{item.description}</div>
                        </div>
                    </Link>
                </StyledLinks>
            </Grid>
        );
    }

    return(
        <Layout>
            <StyledPage>
                <h1>Resources</h1>
                <div className="container">
                    {/*<StyledCard>*/}
                    {/*    <div className="card">*/}
                    {/*        <a href='https://bit.ly/37Ig0gP' target='_blank'>*/}
                    {/*            <div className="title">*/}
                    {/*                <img src = {checklist}></img>*/}
                    {/*                <div className="name">Radiomics Checklist</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="description">As the research field matures, it is important to ensure that radiomics studies within the RMP Radiomics Program follow the best practices for developing models and reporting results. In consultation with the participants of the RMP Radiomics Working Group, we have developed a checklist that can be used on a volunteer basis</div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className="card">*/}
                    {/*        <a href='https://bit.ly/2IAU3GW' target='_blank'>*/}
                    {/*            <div className="title">*/}
                    {/*                <img src = {dataset}></img><div className="name">Data Sharing</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="description">Sharing more data holds the potential to substantially improve the productivity and quality of the scientific projects within RMP in many areas, including radiomics. As a group, we have developed a framework to facilitate collaborations within the RMP Radiomics Research Program. It is important to note that these policies are to be followed only on a volunteer basis.</div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</StyledCard>*/}
                    <Grid container spacing={3}>
                        {resouces.map((item, i) => customizedContent(item,i))}
                    </Grid>
                </div>
            </StyledPage>
        </Layout>
    )
}

export default Source;






