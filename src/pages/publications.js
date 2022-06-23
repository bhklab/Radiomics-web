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

                {/*<StyledPage>*/}
                {/*    <h1>Key Publications</h1>*/}
                {/*    <StyledPublications>*/}
                {/*        <div className="container">*/}

                {/*            <h2>Journals</h2>*/}
                {/*            <ul>*/}
                {/*                <li>*/}
                {/*                    <a href="https://doi.org/10.1038/s41586-020-2766-y" target="_blank"><span className="title">Transparency and reproducibility in artificial intelligence.</span><br/>*/}
                {/*                        <span className="authors"> Haibe-Kains B, Adam GA, Hosny A, Khodakarami F; Massive Analysis Quality Control (MAQC) Society Board of Directors, Waldron L, Wang B, McIntosh C, Goldenberg A, Kundaje A, Greene CS, Broderick T, Hoffman MM, Leek JT, Korthauer K, Huber W, Brazma A, Pineau J, Tibshirani R, Hastie T, Ioannidis JPA, Quackenbush J, Aerts HJWL. Nature. 2020</span><span className="doi"></span></a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a href="https://pubmed.ncbi.nlm.nih.gov/31683260/" target="_blank"><span className="title">Automatic classification of dental artifact status for efficient image veracity checks: effects of image resolution and convolutional neural network depth.</span> <br/><span className="authors">Welch ML, McIntosh C, Purdie TG, Wee L, Traverso A, Dekker A, Haibe-Kains B, Jaffray DA. Phys Med Biol. 2019 Nov 4</span><span className="doi"></span></a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a href="https://pubmed.ncbi.nlm.nih.gov/30416044/" target="_blank"><span className="title">Vulnerabilities of radiomic signature development: The need for safeguards.</span><br/> <span className="authors">Welch ML, McIntosh C, Haibe-Kains B, Milosevic MF, Wee L, Dekker A, Huang SH, Purdie TG, O'Sullivan B, Aerts HJWL, Jaffray DA. Radiother Oncol. 2019 Jan;130:2-9. doi:</span><br/>*/}
                {/*                        <span className="doi"> 10.1016/j.radonc.2018.10.027</span><span></span></a>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*            <h2>Preprints</h2>*/}
                {/*            <ul>*/}
                {/*                <li>*/}
                {/*                    <a href="https://arxiv.org/abs/2101.11935" target="_blank">*/}
                {/*                        <span className="title">A Machine Learning Challenge for Prognostic Modelling in Head and Neck Cancer Using Multi-modal Data.</span> <br/>*/}
                {/*                        <span className="authors">Michal Kazmierski, Mattea Welch, Sejin Kim, Chris McIntosh, Princess Margaret Head, Neck Cancer Group, Katrina Rey-McIntyre, Shao Hui Huang, Tirth Patel, Tony Tadic, Michael Milosevic, Fei-Fei Liu, Andrew Hope, Scott Bratman, Benjamin Haibe-Kains. arXiv 2020; doi:</span><br/>*/}
                {/*                        <span className="doi"> arxiv.org/abs/2101.11935</span>*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                    {/*</StyledPublications>*/}
                {/*</StyledPage>*/}

            </>
        </Layout>
    );
}

export default Publications;
