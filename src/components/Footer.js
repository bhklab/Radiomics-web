import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo/R3-white.png';

const StyledFooter = styled.div`
  width: 100%;
  bottom: 0px;
  right: 0px;
  padding: 10px 0;
  white-space: nowrap;
  background-color: rgb(42, 42, 42);
  font-size: calc(0.8em + 0.2vw);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    float: left;

    & img {
      width: 60px;
      margin-right: 10px;
    }
  }


  .links {
    margin-left: 10vw;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    * {
      flex-basis: 33%;
      color: white;
      text-decoration: none;
      font-size: calc(0.2vw + 0.8em);
      margin: 5px 0px;
      letter-spacing: 0px;
      font-family: 'Br-cobane-font', sans-serif;
    }
  }

    .links a:hover {
        color: #d5d5d5;
    }

  .link-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .contact {
    font-family: 'Br-cobane-font', Arial;
    & h2 {
      margin: 0px 0px 5px 0px;
      font-size: calc(0.2vw + 1em);
      font-family: 'Br-cobane-font', sans-serif;
      border-bottom: 1px solid white;
      padding-bottom: 3px;
      color: white;
    }

    text-align: center;
    color: white;
    font-size: calc(0.2vw + 0.6em);
    margin-left: 5vw;
    line-height: calc(0.2vw + 1.2em);
  }

`;

const Footer = () => (
  <StyledFooter>
    <div className="logo">
      <Link to="/"><img alt="logo" src={logo} /></Link>
    </div>
    <div className="links">
       <div className="link-container">
           <Link to="/#intro">About</Link>
           <Link to="/research">Research</Link>

       </div>

      <div className="link-container">
        {/*<Link to="/datasets">Datasets</Link>*/}
        <Link to="/news">News</Link>
        <Link to="/publications">Publications</Link>

      </div>

      <div className="link-container">

        <Link to="/source">Resources</Link>
        <Link to="/group">Group</Link>
        {/*<Link to="/opportunity">Opportunities</Link>*/}
      </div>
    </div>
    <div className="contact">
        <Link to="/contact"><h2>Contact</h2></Link>

      Radiation Medicine Program Group,
      {' '}
      <br />
      Toronto, Ontario
    </div>
  </StyledFooter>
);


export default Footer;
