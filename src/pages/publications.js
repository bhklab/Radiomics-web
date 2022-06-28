import React from 'react';
import '../styles/index.css';
import styled from 'styled-components';
import Layout from '../components/Layout';
import StyledPage from '../styles/StyledPage';
import Grid from '@material-ui/core/Grid';
import publications from "../data/publications.json";
import { StaticImage } from "gatsby-plugin-image"

import cancer from '../images/Publications/cancers-logo.png';
import compBioMed from '../images/Publications/Computers-in-Biology-and-Medicine.png';
import pmlr from '../images/Publications/pmlr-logo.png';
import phiro from '../images/Publications/phiro-logo.png';
import nature from '../images/Publications/nature-logo.png';
import physMedBiol from '../images/Publications/physicsMedBio-logo.png';
import radiotherapyOncology from '../images/Publications/radiotherapyOncology-logo.png';
import radOncoBioPhys from '../images/Publications/Radiation-Oncology-Biology-Physics-logo.png';
import arxiv from '../images/Publications/arxiv-logo.png';
import medRxiv from '../images/Publications/medrxive-logo.png';

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
  
  .publication {
    min-height: 70px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    
  }
`;

const Publications = () => {
    const customizedContent = (item, i) => {
        let photo = '';
        switch (item.publisher_img){
            case 'cancer':
                photo = cancer;
                break;
            case 'Computers-in-Biology-and-Medicine':
                photo = compBioMed;
                break;
            case 'pmlr':
                photo = pmlr;
                break;
            case 'phiro':
                photo = phiro;
                break;
            case 'nature':
                photo = nature;
                break;
            case 'physMedBiol':
                photo = physMedBiol;
                break;
            case 'radiotherapyOncology':
                photo = radiotherapyOncology;
                break;
            case 'radOncoBioPhys':
                photo = radOncoBioPhys;
                break;
            case 'arxiv':
                photo = arxiv;
                break;
            case 'medRxiv':
                photo = medRxiv;
                break;
            default: break;
        }
        return (
            <Grid item lg={6}  md={6} xs={12} sm={12} key={i} style={{ flexBasis: '50%', flexShrink: '0'}}>
                <StyledLinks>
                    <a href={item.link || (item.doi && `https://www.doi.org/${item.doi}`)} target="_blank" rel="noreferrer">
                        <div className="publication">
                            <div style={{ minWidth: '40px', width: '8%', height: '8%', marginBottom: '10px' }}>
                                <img style={{ width: '100%'}} src={photo} alt={item.publisher}/>
                            </div>
                            <div style={{ width: '100%', textAlign: 'left', padding: '3px 20px', height: '95px'}}>
                                <div style={{ textAlign: 'left', height: '50px', minWidth: '240px', color: '#2d2d2d'}}>{item.title}
                                    <div style={{ height: '20px', fontSize: '12px', marginBottom: "10px", color: 'gray'}}>{item.publisher} ({item.year})</div>
                                </div>

                            </div>
                        </div>
                    </a>
                </StyledLinks>
            </Grid>
        );
    }

    return (
        <Layout page="Publications">
            <>
                <StyledPage>
                    <h1>Publications</h1>
                    <div className="container">
                        <h3>Key Publications</h3>
                        <Grid container spacing={12}>
                            {
                                publications.sort((a,b)=> (b.year - a.year)).filter(item => item.type !=="preprint").map((item,i) => (customizedContent(item,i)))
                            }
                        </Grid>
                        <h3>Preprints</h3>
                        <Grid container spacing={12} >
                            {
                                publications.sort((a,b)=> (b.year - a.year)).filter(item => item.type ==="preprint").map((item,i) => (customizedContent(item,i)))
                            }
                        </Grid>
                    </div>
                </StyledPage>
            </>
        </Layout>
    );
}

export default Publications;
