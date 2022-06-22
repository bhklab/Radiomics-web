import React from 'react';
import Layout from '../components/Layout';
import StyledPage from '../styles/StyledPage';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from "gatsby-link";


const useStyles = makeStyles(Theme =>
    createStyles({
        paper: {
            padding: Theme.spacing(2),
            textAlign: 'center',
            color: Theme.palette.primary.dark,
        },
        root: {
            flexGrow: 1,
        },
    }),
);

const Research = () => {
    const classes = useStyles();
    return(
        <Layout>
            <StyledPage>
                <h1>Research Topics</h1>
                <div className="container">
                    <Grid container spacing={4} style={{margin:'10px'}}>
                        <Grid item xs={6} sm={4}>
                            <Link to={'/research/data-processing'}>
                            <Paper className={classes.paper}  style={{ minHeight: '120px'}}>
                                <div style={{ minHeight: '50px', color: 'black', fontWeight: 'bold'}}>Data Processing</div>
                                <div style={{ minHeight: '100px', color: '#2d2d2d'}}>Creation of open-source platforms to facilitate large scale image analysis</div>
                            </Paper>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Link to={'/research/analysis-methods'}>
                                <Paper className={classes.paper}  style={{ minHeight: '120px'}}>
                                    <div style={{ minHeight: '50px', color: 'black', fontWeight: 'bold'}}>Analysis Methods</div>
                                    <div style={{ minHeight: '100px', color: '#2d2d2d'}}>Transparent for medical image analysis</div>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Link to={'/research/biomarker-discovery'}>
                                <Paper className={classes.paper} style={{ minHeight: '120px'}}>
                                    <div style={{ minHeight: '50px', color: 'black', fontWeight: 'bold'}}>Biomarker Discovery</div>
                                    <div style={{ minHeight: '100px', color: '#2d2d2d'}}>Exploring and establishing clinical utility through innovative methodology</div>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Link to={'/research/segmentation'}>
                                <Paper className={classes.paper} style={{ minHeight: '120px'}}>
                                    <div style={{ minHeight: '50px', color: 'black', fontWeight: 'bold'}}>Segmentation</div>
                                    <div style={{ minHeight: '100px', color: '#2d2d2d'}}>AI assisted annotation of medical images</div>
                                </Paper>
                            </Link>

                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Link to={"/research/clinical-deployment-and-assessment"}>
                                <Paper className={classes.paper} style={{ minHeight: '120px'}}>
                                    <div style={{ minHeight: '50px', color: 'black', fontWeight: 'bold'}}>Clinical Deployment and Assessment</div>
                                    <div style={{ minHeight: '100px', color: '#2d2d2d'}}>Improve and monitor clinical workflow using AI models</div>
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </StyledPage>
        </Layout>
    )
}

export default Research;
