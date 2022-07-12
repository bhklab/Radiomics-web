import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo/R3-white.png';
import pmhLogoWhite from '../images/logo/PM-white.png';
import RPMLogoWhite from '../images/logo/RMP Logo - White.png';
import UTDROLogoWhite from '../images/logo/UTDRO Logo - White.png';


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
  
  a {
    color: white;
    text-decoration: none;
  }
  .divider {
    margin: 0px 10px;
    color: white;
  }
  .logo-sm {
    img {
      width: 100%;
    }
    margin-right: 20px;
  }
  
  link {
    margin: 10px;
  }

  .logo {
    float: left;

    & img {
      margin: 30px;
      height: 45px;
      margin-right: 10px;
    }
  }


  .links {
    margin-left: 10vw;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
    <>
        <StyledFooter>
            <span className='link'><Link href='/'>Home</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link href='/research'>Research</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link href='/news'>News</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link href='/publications'>Publications</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link href="/source">Resources</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link href="/group">Group</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link href="/contact">Contact</Link></span>
            {/*<div className="contact">*/}
            {/*    <Link to="/contact"><h2>Contact</h2></Link>*/}
            {/*    Radiation Medicine Program Group, Toronto, Ontario*/}
            {/*</div>*/}
        </StyledFooter>
        <StyledFooter>
            <div className="logo"><Link to="/"><img alt="logo" src={logo} /></Link></div>
            <div className="logo"><a href="https://www.uhn.ca/" target="_blank"><img alt="logo" src={pmhLogoWhite} /></a></div>
            <div className="logo"><a href="https://www.uhn.ca/PrincessMargaret/Health_Professionals/Programs_Departments/RMP/Pages/about_us.aspx" target="_blank"><img alt="logo" src={RPMLogoWhite} /></a></div>
            <div className="logo"><a href="https://radonc.utoronto.ca/" target="_blank"><img height="150px" alt="logo" src={UTDROLogoWhite} /></a></div>
        </StyledFooter>
    </>
);


export default Footer;
