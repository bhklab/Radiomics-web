import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import React from 'react';


const BurgerMenu = () => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '25px',
    },
    bmBurgerBars: {
      background: 'white',
      opacity: 0.8,
    },
    bmBurgerBarsHover: {
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
    },
    bmMenu: {
      textDecoration: 'none',
      background: '#2A2A2AFF',
      padding: '2.5em 1.5em 0',
      fontFamily: 'Br-cobane-font',
      fontSize: '1.15em',
      color: 'white',
    },
    bmItemList: {
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
    },
    bmItem: {
      color: 'white',
      display: 'inline-block',
      margin: '10px 0',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <Menu className="burger-menu" styles={styles} noOverlay right disableAutoFocus isOpen={false}>
      <Link activeClassName="active" to="/research">RESEARCH</Link>
      <Link activeClassName="active" to="/source">RESOURCES</Link>
      <Link activeClassName="active" to="/publications">PUBLICATIONS</Link>
      <Link activeClassName="active" to="/news">NEWS</Link>
      <Link activeClassName="active" to="/group">GROUP</Link>
      <Link activeClassName="active" to="/contact">CONTACT</Link>
    </Menu>
  );
};

export default BurgerMenu;
