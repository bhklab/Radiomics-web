import React from 'react';
import '../styles/index.css';
import {graphql, navigate} from 'gatsby';
import StyledPage from "../styles/StyledPage";
import StyledReturnBtn from "../styles/utils/StyledReturnButton";
import StyledTopic from "../styles/StyledTopic"
import Layout from "../components/Layout";

export const query = graphql`
  query ($slug: String!) {
    topicsJson( slug: { eq: $slug }) {
        topic
        description
        short_description
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
    const project = (item, i) => {
        return (
            <StyledTopic key= {i}>
                <div className='title'>{item[0].name}</div>
                <div className='content'>{item[0].description}</div>
            </StyledTopic>
        )
    }
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
                        <div className='content'>
                            {
                                item.description || ''
                            }
                        </div>
                    </StyledTopic>
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
