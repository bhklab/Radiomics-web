import React from 'react';
import Layout from '../components/Layout';
import About from '../components/Home/About';
import Principles from '../components/Home/Principles';
import ResearchTopics from '../components/Home/ResearchTopics';
import Resources from '../components/Home/Resources';
import styled from "styled-components";
import bg from "../images/background/background.png";

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 55vh;
  color: white;
  background: black url(${bg}) no-repeat center center fixed ;
  background-size: 300px 5px;
  -webkit-background-size: cover;
  -moz-background-size: contain;
  -o-background-size: cover;
  background-size: cover;
  overflow-x: hidden;
  min-height: 15%;
  
  .banner {
    max-width: 90%;
    margin-top: 10vh;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100vw;
    font-size: calc(1.7vw + 1.7em);
    letter-spacing: 1px;
    line-height: calc(2vw + 1.4em);
    padding-bottom: 25px;
    color: white;
    .firstFont {
      font-family: 'Br-cobane-font', Gill Sans,Gill Sans MT,Calibri,sans-serif;
      font-size: calc(0.4vw + 0.6em);
      font-weight: bold;
    }
    .secondFont {
      font-family: 'Br-cobane-font', Gill Sans,Gill Sans MT,Calibri,sans-serif;
      font-size: calc(0.4vw + 0.5em);
      font-weight: 30;
    }
    .thirdFont {
      font-family: Tomatoes-font;
      font-size: calc(0.3vw + 0.7em);
      font-weight: 80;
    }
  }
`;

const IndexPage = () => (
    <Layout>
      <StyledBanner>
          <div className="container">
            <div className="banner">
                <span>
                    <span className="firstFont">IMAGING RESEARCH</span>
                    <span className="secondFont"> meets </span>
                    <span className="thirdFont">innovation</span>
                </span>
            </div>
          </div>
      </StyledBanner>
        <About/>
        <Principles/>
        <ResearchTopics/>
        <Resources />
    </Layout>

);

export default IndexPage;
