import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "./layout.css";
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Kevin's Workshop</title>
      </Helmet>
      <Header />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
