import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
const StyledContainer = styled(Container)`
  background-image: url("https://kevinsworkshop.s3.amazonaws.com/reclaimed.jpg");
  background-repeat: repeat-x;
  min-height: 12rem;
`;

const ProjectsPage = () => (
  <Layout>
    <Helmet></Helmet>
    <SEO title="Home" />
    <StyledContainer>
      <h1 style={{ textAlign: "center", color: "#ffffff" }}>
        Kevin's Workshop
      </h1>
    </StyledContainer>
    <Box mt={4}>
      <Grid container>
        <Grid container s={12} md={8} alignItems="flex-start">
          <Grid s={12} md={9}>
            <Box px={2}>
              <p style={{ display: "inline-block" }}>Projects</p>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </Layout>
);

export default ProjectsPage;
