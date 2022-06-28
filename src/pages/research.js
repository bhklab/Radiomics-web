import React from 'react';
import Layout from '../components/Layout';
import StyledPage from '../styles/StyledPage';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from "gatsby-link";
import topics from '../data/topics.json';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

import segmentation from '../images/segmentation_brain.png';
import biomarker from '../images/biomarker.png';
import dataprocessing from '../images/dataProcessing.png';
import clinical from '../images/clinicalWorkflow.png';
import analysis from '../images/analysisMethods.png';

const StyledLinks = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  float: right;
  margin-right: 15px;
  min-width: 180px;
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
  
  .research {
    min-height: 200px;
    min-width: 200px;
    width: 250px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
`;

const Research = () => {
    const customizedContent = (item, i) => {
        let photo = ''
        switch (item.slug) {
            case ('data-processing'):
                photo = dataprocessing;
                break;
            case('analysis-methods'):
                photo = analysis;
                break;
            case ('biomarker-discovery') :
                photo = biomarker;
                break
            case ('segmentation') :
                photo = segmentation;
                break
            case ('clinical-deployment-and-assessment') :
                photo = clinical;
                break
            default:
                break;
        }

        return (
            <Grid item xs={12} sm={12} key={i} style={{ flexBasis: '33%', flexShrink: '0'}}>
                <StyledLinks >
                    <Link to={`/research/${item.slug}`}>
                        <div className="research">
                            <img style={{ height: '50px', margin: '10px'}} src={photo} alt={item.slug}/>
                            <div style={{ height: '50px', color: 'black', fontWeight: 'bold'}}>{item.topic}</div>
                            <div style={{ height: '90px', color: '#2d2d2d'}}>{item.short_description}</div>
                        </div>
                    </Link>
                </StyledLinks>
            </Grid>
        );
    }

    return(
        <Layout>
            <StyledPage>
                <h1>Research Topics</h1>
                <div className="container">
                    <Grid container spacing={3}>
                        {topics.map((item, i) => customizedContent(item,i))}
                    </Grid>
                </div>
            </StyledPage>
        </Layout>
    )
}

export default Research;
