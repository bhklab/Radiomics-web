import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo/R3-white.png';
import pmhLogoWhite from '../images/logo/PM-white.png';
import RPMLogoWhite from '../images/logo/RMP Logo - White.png';
import UTDROLogoWhite from '../images/logo/UTDRO Logo - White.png';

const StyledLogo = styled.div`
  margin-left: 30px;
  float:left;
  font-family: 'Br-cobane-font', Arial;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: calc(0.2vw + 0.5em);
  font-weight: 50;
  & img {
    height: 40px;
    margin-right:10px;
  }
  .text {
    padding-top: 5px;
  }
`;

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
      height: 40px;
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
            <span className='link'><Link to='/'>Home</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link to='/research'>Research</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link to='/news'>News</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link to='/publications'>Publications</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link to="/source">Resources</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link to="/group">Group</Link></span>
            <span className='divider'>|</span>
            <span className='link'><Link to="/contact">Contact</Link></span>
        </StyledFooter>
        <StyledFooter>
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
            <div className="logo"><a href="https://www.uhn.ca/" target="_blank" rel="noreferrer"><img alt="logo" src={pmhLogoWhite} /></a></div>
            <div className="logo"><a href="https://www.uhn.ca/PrincessMargaret/Health_Professionals/Programs_Departments/RMP/Pages/about_us.aspx" target="_blank" rel="noreferrer"><img alt="logo" src={RPMLogoWhite} /></a></div>
            <div className="logo"><a href="https://radonc.utoronto.ca/" target="_blank" rel="noreferrer"><img style={{height:'65px'}} alt="logo" src={UTDROLogoWhite} /></a></div>
        </StyledFooter>
    </>
);


export default Footer;
