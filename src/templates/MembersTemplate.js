import React from 'react';
import '../styles/index.css';
import {graphql, navigate} from 'gatsby';
import StyledPage from "../styles/StyledPage";
import StyledReturnBtn from "../styles/utils/StyledReturnButton";
import StyledMember from "../styles/StyledMember";
import Layout from "../components/Layout";
import BHK from '../images/Initiatives/BHK_transparent.png';
import SVB from '../images/Initiatives/SVB_transparent.png';
import TP from '../images/Initiatives/TP_transparent.png';

export const query = graphql`
  query ($slug: String!) {
    initiativesCsv( slug: { eq: $slug } ) {
        name
        slug
        initials
        biography
    }
  }
  `;

/**
 * Template for individual members pages.
 */
const MembersTemplate = ({ data }) => {
    const item = data.initiativesCsv;
    let photo = ''
    switch (item.initials) {
        case ('BHK'):
            photo = BHK;
            break;
        case('SVB'):
            photo = SVB;
            break;
        case ('TP') :
            photo = TP;
            break
        default:
            break;
    }

    return (
        <Layout page="MembersTemplate">
            <StyledPage>
                <h1>Working Group</h1>
                <div className="container">
                    <StyledMember>
                        <img height='335px' src ={photo}></img>
                        <div className="text">
                            <div className = "name">{item.name}</div>
                            {item.biography}<br/>
                            <StyledReturnBtn onClick={() => navigate('../')}>Back</StyledReturnBtn>
                        </div>
                    </StyledMember>
                </div>
            </StyledPage>
        </Layout>

    );
};

export default MembersTemplate;
