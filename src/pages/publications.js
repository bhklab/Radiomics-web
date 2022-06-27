import React from 'react';
import '../styles/index.css';
import styled from 'styled-components';
import Layout from '../components/Layout';
import StyledPage from '../styles/StyledPage';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import publications from "../data/publications.json";

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
    min-height: 200px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
`;

const Publications = () => {
    const customizedContent = (item, i) => {
        return (
            <Grid item xs={6} sm={4} key={i}>
                <StyledLinks>
                    <a href={item.link || (item.doi && `https://www.doi.org/${item.doi}`)} target="_blank" rel="noreferrer">
                        <div className="publication">
                            <div style={{ minHeight: '20px', maxHeight: '30px', color: 'black', fontSize: '12px', marginBottom: "10px"}}>{item.publisher}</div>
                            <div style={{ minHeight: '130px', maxHeight: '150px', color: '#2d2d2d'}}>{item.title}</div>
                            <div style={{ minHeight: '20px', maxHeight: '20px', color: 'gray'}}>{item.year}</div>
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
                        <Grid container spacing={3}>
                            {
                                publications.sort((a,b)=> (b.year - a.year)).filter(item => item.type !=="preprint").map((item,i) => (customizedContent(item,i)))
                            }
                        </Grid>
                        <h3>Preprints</h3>
                        <Grid container spacing={3}>
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
