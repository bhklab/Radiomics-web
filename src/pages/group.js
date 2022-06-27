import React from 'react';
import Layout from '../components/Layout';
import StyledPage from '../styles/StyledPage';
import BHK from '../images/Initiatives/BHK_transparent.png';
import SVB from '../images/Initiatives/SVB_transparent.png';
import TP from '../images/Initiatives/TP_transparent.png';
import styled from "styled-components";
import { StaticQuery, graphql, Link } from 'gatsby';

const MembersQuery = graphql`
    {
        allInitiativesCsv (
            sort: {
                fields: [name]
                order: ASC
            }
        ){
            edges {
                node {
                    name
                    slug
                    biography
                    initials
                } 
            }
        }
    }
`;

const StyledCard= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  .card {
    display: flex;
    flex-direction: row;
    .name {
      min-height: 40px;
      color: white;
      font-weight: 60;
      font-size: calc(0.6vw + 0.5em);
      display: flex;
      justify-content: center;
    }
    img {
      height: 20vw;
      min-height: 300px;
      max-height: 400px;
    }
  }
  
`;

const Group = () => {
    return (
        <Layout>
          <StyledPage>
              <h1>Working Group</h1>
              <div className="container">
                  <StyledCard>
                      <div className="card">
                          <Link to='/group/scott-bratman'>
                              <img src = {SVB}/>
                              <div className="name">Scott Bratman</div>
                          </Link>
                      </div>
                      <div className="card">
                          <Link to='/group/benjamin-haibe-kains'>
                              <img src = {BHK}></img>
                              <div className="name">Benjamin Haibe-Kains</div>
                          </Link>
                      </div>
                      <div className="card">
                          <Link to='/group/tom-purdie'>
                              <img src = {TP}></img>
                              <div className="name">Tom Purdie</div>
                          </Link>
                      </div>
                  </StyledCard>
              </div>
          </StyledPage>
        </Layout>
    )
};

export default Group;
