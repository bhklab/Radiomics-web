import React from 'react';
import '../styles/index.css';
import Layout from '../components/Layout';
import StyledPage from "../styles/StyledPage";

const Topic = () => (
    <Layout page="contact">
        <StyledPage>
            <div className="container">
                <h1>Research Topic</h1>
                <h2>Project I</h2>
                <h2>Project II</h2>
                <h2></h2>
                <div className="contact-cont">
                </div>
            </div>
        </StyledPage>
    </Layout>

);

export default Topic;
