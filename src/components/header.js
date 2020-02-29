import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const HeaderContainer = styled(Grid)`
  background-color: #003300;
  height: 4rem;
  padding: 0 4rem;
`;
const HeaderLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: Roboto;
`;

const Header = () => (
  <HeaderContainer
    container
    alignItems="space-between"
    backgroundColor="#003300"
  >
    <Grid container xs={2} alignItems="center" justify="center">
      <HeaderLink to="/projects">Projects</HeaderLink>
    </Grid>
    <Grid container xs={2} alignItems="center" justify="center">
      <HeaderLink to="/tools">Tools</HeaderLink>
    </Grid>
    <Grid container xs={4} alignItems="center" justify="center">
      <HeaderLink to="/">
        <span style={{ fontSize: "1.8rem" }}>KH</span>
      </HeaderLink>
    </Grid>
    <Grid container xs={2} alignItems="center" justify="center">
      <HeaderLink to="/roadmap">Roadmap</HeaderLink>
    </Grid>
    <Grid container xs={2} alignItems="center" justify="center">
      <HeaderLink to="/contact">Contact</HeaderLink>
    </Grid>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
