import React from 'react';
import '../styles/index.css';
import styled from 'styled-components';
import Layout from '../components/Layout';
import bg from '../images/background/dark_background.png';
import { HiOutlineMail } from 'react-icons/hi';
import colors from "../styles/colors";

const StyledContact = styled.div`
  width: 100%;
  background: url(${bg}) center center fixed;
  font-family: 'Br-cobane-font';
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  color: #2A2A2AFF;
  h1 {
    font-size: calc(1.0vw + 0.7em);
    color: ${colors.light_gray};
  }

  .container {
    width: 75%;
    font-size: calc(0.3vw + 0.8em);
    line-height: calc(1.0vw + 1.0em);
    display: flex;
    flex-direction: column;
    padding: 30px 0 80px 0;
  }

  .contact-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
  }

  .email-container {
    width: 40%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: ${colors.light_gray};
        border-bottom-color: white;
        text-decoration: none;
      }
    }
  }

  span {
    color: ${colors.light_gray};
    b {
      color: ${colors.light_gray};
      margin: 20px 0px 20px 0px;
      color: white;
    }
    
  }

  .addr-container {
    width: 50%;
    color: white;

    iframe {
      width: 100%;
      margin: 10px 0px 60px 0px;
      height: 380px;
      border: none;
    }
  }

`;

const StyledEmail = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    white-space: nowrap;
    border-radius: 3.5px;
    color: white;
    margin-bottom: 10%;
      &:hover {
      color: ${colors.light_gray};
      }
    .email {
      padding: 3px;
      margin: 2px;
      height: 24px;
      border-radius: 3.5px;
      display: inline-block;
      vertical-align: middle;
      line-height: normal;
      .text {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: white;
        font-size: clamp(2px, calc(1vw + 2px), 14px);
      }
    }
`;

const Member = ( props) => {
    const {name, id, email} = props.member;
    return (
        <span className="members" key={id}>
            <b>{name}</b>
                <a href={`mailto:${email}`} onClick={() => {navigator.clipboard.writeText(email)}}>
                    <StyledEmail>
                        <HiOutlineMail size={25} /><div className="email">{email}</div>
                    </StyledEmail>
                </a>
        </span>
    )
}

const INITIATIVES = [
    { id: "1", name: "Scott Bratman", email: "scott.bratman@rmp.uhn.ca", initials: "SVB"},
    { id: "2", name: "Benjamin Haibe-Kains", email: "benjamin.haibe-kains@uhnresearch.ca", initials: "BHK"},
    { id: "3", name: "Tom Purdie", email: "Tom.Purdie@rmp.uhn.ca", initials: "TP"},
]

const Contact = () => (
    <Layout page="contact">
        <StyledContact>
            <div className="container">
                <h1>Contact</h1>
                <div className="contact-cont">
                    <div className="email-container">
                        <div>
                            { INITIATIVES.map( item => <Member key = {item.id} member = {item} />) }
                         </div>
                        {/*<div>*/}
                        {/*    If you’re interested in joining our team, please visit <a href="./Resources/opportunity">opportunities</a>.*/}
                        {/*</div>*/}
                    </div>
                    <div className="addr-container">
                        <iframe title="map" style= {{filter: "invert(90%)"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.43444669756!2d-79.39085344846093!3d43.65993365990993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b632b77689%3A0x901c210dff19e5a4!2s101%20College%20St%2C%20Toronto%2C%20ON%20M5G%201L7!5e0!3m2!1sen!2sca!4v1581544280286!5m2!1sen!2sca" />
                    </div>
                </div>
            </div>
        </StyledContact>
    </Layout>

);

export default Contact;
