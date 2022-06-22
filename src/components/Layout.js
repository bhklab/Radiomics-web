import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {createGlobalStyle} from "styled-components";
import Header from './Header';
import Footer from './Footer';
import BurgerMenu from './BurgerMenu';
import favicon from '../images/logo/R3-gray.png';

/**
 * Layout component to include on every page as a wrapper.
 */
const Layout = ({ children, page }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <title>Radiomics for Radiotherapy Research</title>
    </Helmet>
    <BurgerMenu />
    {page === 'home' ? (
      <Header page="home" />
    ) : (
      <Header />
    )}
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
