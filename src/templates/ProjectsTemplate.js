import React from 'react';
import '../styles/index.css';
import {graphql, navigate} from 'gatsby';
import StyledPage from "../styles/StyledPage";
import Layout from "../components/Layout";
import styled from "styled-components";

const StyledReturnBtn = styled.button`
  margin-top: 50px;
  font-family: 'Br-cobane-font', sans-serif;
  background: none;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  width: 60px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #7A7A7A82
  }
`;

const StyledTopic= styled.div`
  width: 80%;
  .title {
    color: gray;
    display: flex;
    align-items: center;
    height: 35px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
  }
  .content {
    margin-top: 20px;
    font-size: 14px;
    font-weight: normal;
    color: white;
    white-space: pre-line;
  }
`;

export const query = graphql`
  query ($slug: String!) {
    topicsJson( slug: { eq: $slug }) {
        topic
        description
        projects {
                name
                description
            }
        slug
    }
  }
`;

// /**
//  * Template for individual research topics pages.
//  */
const ProjectsTemplate = ({ data }) => {
    const item = data.topicsJson;

    const customizedContent = (item, i) => {
        {
            if(item.length === 1)
            return(
                <>
                    <StyledTopic key= {i}>
                        <div className='title'>{item[0].name}</div>
                        <div className='content'>{item[0].description}</div>
                    </StyledTopic>
                    <StyledReturnBtn onClick={() => navigate('../')}>Back</StyledReturnBtn>
                </>
            )
            else if (item.length ===2 )
                return (
                <>
                    <StyledTopic key= {i}>
                        <div className='title'>{item[0].name}</div>
                        <div className='content'>{item[0].description}</div>
                    </StyledTopic>
                    <StyledTopic key= {i}>
                        <div className='title'>{item[1].name}</div>
                        <div className='content'>{item[1].description}</div>
                    </StyledTopic>
                    <StyledReturnBtn onClick={() => navigate('../')}>Back</StyledReturnBtn>
                </>

                )
        }
    }

    return (
        <Layout page="projectsTemplate">
            <StyledPage>
                <h1>{item.topic}</h1>
                <div className="container">
                    <StyledTopic>
                        {
                            customizedContent(item.projects)
                        }
                    </StyledTopic>
                </div>
            </StyledPage>
        </Layout>
    );
};

export default ProjectsTemplate;
