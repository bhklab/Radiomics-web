import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo/R3-white.png';

const StyledHeader = styled.div`
  position: ${(props) => (props.page === 'home' ? 'fixed' : 'absolute')};
  width: 100%;
  top: 0px;
  background: ${(props) => (props.page === 'home' ? '#2d2d2d' : '#2d2d2d')};
  padding: 10px 0px;
  z-index: 999;
  a {
    color: white;
    text-decoration: none;
  }

  @media only screen and (max-width: 1081px) {
    background: ${(props) => (props.page === 'home' ? 'rgb(2,87,123,0.2)' : '#2d2d2d')};
  }

  .active {
    color: #d5d5d5;
    border-bottom: 2px solid #d5d5d5;
  }
`;

const StyledLogo = styled.div`
  margin-left: 30px;
  float:left;
  font-family: 'Br-cobane-font', Arial;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: calc(0.2vw + 0.65em);
  font-weight: bold;
  & img {
    width: 65px;
    margin-right:10px;
  }
  .text {
    padding-top: 5px;
  }
`;

const StyledLinks = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  float: right;
  margin-right: 15px;

  & a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: calc(0.2vw + 0.7em);
    margin: 0px 30px;
    letter-spacing: 1px;
    font-family: 'Br-cobane-font', 'Lato', sans-serif;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
  }

  & a:hover {
    border-bottom: 2px solid #d5d5d5;
  }

  Link {
    margin: 5px;
  }
`;


const Header = ({ page }) => {
    return(
        <StyledHeader page={page} className="header">
            <StyledLogo>
                <Link to="/"><img alt="logo" src={logo} /></Link>
                <Link to="/">
                    <div className="text">
                        Radiomics for
                    </div>
                    <div>
                        Radiotherapy
                    </div>
                    <div>
                        Research
                    </div>
                </Link>
            </StyledLogo>
            <StyledLinks className="header-links">
                <Link activeClassName="active" to="/research">RESEARCH</Link>
                <Link activeClassName="active" to="/news">NEWS</Link>
                <Link activeClassName="active" to="/publications">PUBLICATIONS</Link>
                <Link activeClassName="active" to="/source">RESOURCES</Link>
                <Link activeClassName="active" to="/group">GROUP</Link>
                <Link activeClassName="active" to="/contact">CONTACT</Link>
            </StyledLinks>
        </StyledHeader>
    )
}

export default Header;
